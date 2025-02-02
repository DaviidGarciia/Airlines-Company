import './FlightCard.css';
import {
  Card,
  CardContent,
  Typography,
  Grid,
  Button,
  Box,
} from '@mui/material';

function FlightCard({ array, functionId, vuelo }) {
  const objectFlight = (data) => {
    functionId({
      id: data.id,
      outgoing: vuelo === 'Return' ? 0 : data.price,
      return: vuelo === 'Return' ? data.price : 0,
    });
  };

  return (
    <Box id="FlightCardContainer">
      {array.map((flight) => (
        <Card className="flight-card" key={flight.id}>
          <CardContent>
            <Grid container spacing={2} alignItems="center">
              {/* Código de Vuelo */}
              <Grid item xs={3}>
                <Typography className="flight-code">{flight.code}</Typography>
              </Grid>

              {/* Fecha */}
              <Grid item xs={3}>
                <Typography className="flight-date">
                  {flight.departure_time.substr(0, 10)}
                </Typography>
              </Grid>

              {/* Hora */}
              <Grid item xs={3}>
                <Typography className="flight-time">
                  {flight.departure_time.substr(11, 5)}
                </Typography>
              </Grid>

              {/* Precio */}
              <Grid item xs={2}>
                <Typography className="flight-price">
                  {flight.price} €
                </Typography>
              </Grid>

              {/* Botón */}
              <Grid item xs={1}>
                <Button
                  variant="contained"
                  className="flight-button"
                  onClick={() =>
                    objectFlight({ id: flight.id, price: flight.price })
                  }
                >
                  Take Flight
                </Button>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
}

export default FlightCard;
