import {
  Box,
  Card,
  CardContent,
  Typography,
  Button,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { flightInfoToBack } from '../../services/auth';
import './CardRes.css';

function CardRes({
  selectedId,
  priceOngoing,
  priceReturn,
  buttonClicked,
  setbuttonClicked,
}) {
  const location = useLocation();
  const { Origen, Destino, idaDate, vueltaDate } = location.state;
  const [flightsOutGoing, setFlightsOutGoing] = useState([]);
  const [flightsReturn, setFlightsReturn] = useState([]);
  const [flightsReturnPrice, setFlightsReturnPrice] = useState(0);
  const [flightsOngoingPrice, setFlightsOngoingPrice] = useState(0);
  const navigate = useNavigate();

  const seterPriceMoreThanCero = () => {
    setbuttonClicked(false);
    if (priceOngoing > 0) setFlightsOngoingPrice(priceOngoing);
    if (priceReturn > 0) setFlightsReturnPrice(priceReturn);
  };

  useEffect(() => {
    seterPriceMoreThanCero();
  }, [buttonClicked]);

  const bringFlight = async () => {
    try {
      const flightsArr = await flightInfoToBack(
        Origen,
        Destino,
        idaDate,
        vueltaDate
      );
      if (flightsArr.outgoingFlights?.length > 0)
        setFlightsOutGoing(flightsArr.outgoingFlights);
      if (flightsArr.returnFlights?.length > 0)
        setFlightsReturn(flightsArr.returnFlights);
    } catch (error) {
      console.error('Error fetching flights:', error);
      setFlightsOutGoing([]);
      setFlightsReturn([]);
    }
  };

  useEffect(() => {
    bringFlight();
  }, []);

  return (
    flightsOutGoing.length > 0 && (
      <Card id="Resumen">
        <CardContent>
          <Typography variant="h5" className="summary-title">
            Booking Summary
          </Typography>

          <Box id="Locations">
            <Typography variant="body1" className="airport-text">
              {flightsOutGoing[0].departureAirport.name}
            </Typography>
            <Typography className="arrow">✈</Typography>
            <Typography variant="body1" className="airport-text">
              {flightsOutGoing[0].arrivalAirport.name}
            </Typography>
          </Box>

          <Grid container spacing={2} id="Suma">
            <Grid item xs={12} className="price-info">
              <Typography variant="body1">
                Outbound Price:{' '}
                <span className="price-value">{flightsOngoingPrice} €</span>
              </Typography>
              <Typography variant="body1">
                Return Price:{' '}
                <span className="price-value">{flightsReturnPrice} €</span>
              </Typography>
              <Typography variant="h6" className="total-price">
                Total: {flightsReturnPrice + flightsOngoingPrice} €
              </Typography>
            </Grid>
          </Grid>

          {/* Lista de Beneficios */}
          <List className="benefits-list">
            {[
              'Priority Boarding',
              'Extra Baggage Allowance',
              'Flexible Cancellation',
            ].map((text, index) => (
              <ListItem key={index}>
                <ListItemIcon>
                  <CheckCircleIcon sx={{ color: '#0074E4' }} />
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>

          <Button
            variant="contained"
            className="flight-button"
            onClick={() => navigate('/data')}
          >
            Take Flight
          </Button>
        </CardContent>
      </Card>
    )
  );
}

export default CardRes;
