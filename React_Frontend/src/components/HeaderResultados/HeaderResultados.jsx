import { Box, Typography, Grid, Divider } from '@mui/material';
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import FlightLandIcon from '@mui/icons-material/FlightLand';
import './HeaderResultados.css';

function HeaderResultados({ direction, departAirport, arriAirport }) {
  return (
    <Box id="HeaderResultados">
      {/* Título del vuelo */}
      <Typography variant="h6" className="flight-direction">
        {direction}
      </Typography>

      <Divider className="divider" />

      {/* Información de los aeropuertos */}
      <Grid container id="airport-info">
        <Grid item xs={5} className="airport">
          <FlightTakeoffIcon className="flight-icon" />
          <Typography variant="body1">{departAirport}</Typography>
        </Grid>

        <Grid item xs={2} className="separator">
          ✈
        </Grid>

        <Grid item xs={5} className="airport">
          <FlightLandIcon className="flight-icon" />
          <Typography variant="body1">{arriAirport}</Typography>
        </Grid>
      </Grid>
    </Box>
  );
}

export default HeaderResultados;
