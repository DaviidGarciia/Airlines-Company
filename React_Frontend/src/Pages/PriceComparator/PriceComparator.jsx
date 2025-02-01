import {
  Box,
  Grid,
  Paper,
  Typography,
  Button,
  Container,
  Card,
  CardContent,
  CardActions,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import FlightLandIcon from '@mui/icons-material/FlightLand';
import CardRes from '../../components/CardResumen/CardRes';
import FlightCard from '../../components/FlightCard/FlightCard';
import HeaderResultados from '../../components/HeaderResultados/HeaderResultados';
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { flightInfoToBack } from '../../services/auth';

function PriceComparator() {
  const location = useLocation();
  const { Origen, Destino, idaDate, vueltaDate } = location.state;
  const [flightsOutGoing, setFlightsOutGoing] = useState([]);
  const [flightsReturn, setFlightsReturn] = useState([]);
  const [selectedId, setSelectedId] = useState();
  const [priceOngoing, setPriceOngoing] = useState();
  const [priceReturn, setPriceReturn] = useState();
  const [buttonClicked, setbuttonClicked] = useState(false);

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
    <Container maxWidth="lg" id="comparatorContent">
      <Grid container spacing={4} justifyContent="center">
        {/* SECCIÓN DE VUELOS */}
        <Grid item xs={12} md={8}>
          <Box id="flights">
            {/* Outgoing Flights */}
            {flightsOutGoing.length > 0 && (
              <Paper className="resultados">
                <HeaderResultados
                  direction="Outbound Flight"
                  departAirport={flightsOutGoing[0].departureAirport.name}
                  arriAirport={flightsOutGoing[0].arrivalAirport.name}
                />
                <FlightCard
                  functionId={setSelectedId}
                  array={flightsOutGoing}
                  vuelo="Outgoing"
                />
              </Paper>
            )}

            {/* Return Flights */}
            {flightsReturn.length > 0 && (
              <Paper className="resultados">
                <HeaderResultados
                  direction="Return Flight"
                  departAirport={flightsOutGoing[0].arrivalAirport.name}
                  arriAirport={flightsOutGoing[0].departureAirport.name}
                />
                <FlightCard
                  functionId={setSelectedId}
                  array={flightsReturn}
                  vuelo="Return"
                />
              </Paper>
            )}
          </Box>
        </Grid>

        {/* SECCIÓN DE RESUMEN */}
        {flightsOutGoing.length > 0 && (
          <Grid item xs={12} md={4}>
            <Card id="ResumenContainer">
              <CardContent>
                <Typography
                  variant="h5"
                  align="center"
                  sx={{ fontWeight: 'bold', color: '#003366' }}
                >
                  Your Selected Flight
                </Typography>
                <CardRes
                  selectedId={selectedId}
                  priceOngoing={priceOngoing}
                  priceReturn={priceReturn}
                  buttonClicked={buttonClicked}
                  setbuttonClicked={setbuttonClicked}
                />

                {/* Lista de beneficios */}
                <List>
                  {[
                    'Flexible Booking',
                    '24/7 Customer Support',
                    'Best Price Guarantee',
                  ].map((text, index) => (
                    <ListItem key={index}>
                      <ListItemIcon>
                        <CheckCircleIcon sx={{ color: '#0074E4' }} />
                      </ListItemIcon>
                      <ListItemText primary={text} />
                    </ListItem>
                  ))}
                </List>
              </CardContent>
              <CardActions sx={{ justifyContent: 'center' }}>
                <Button variant="contained" color="primary" size="large">
                  Continue Booking
                </Button>
              </CardActions>
            </Card>
          </Grid>
        )}
      </Grid>
    </Container>
  );
}

export default PriceComparator;
