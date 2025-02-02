import { Box, Paper, TextField, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import './Data.css';

function Data() {
  const navigate = useNavigate();

  return (
    <Box id="data">
      {/* CONTENEDOR IZQUIERDO (Datos del Pasajero) */}
      <Paper id="left-container">
        <Typography variant="h5" className="section-title">
          Passenger Information
        </Typography>

        <TextField
          label="First Name"
          variant="outlined"
          className="input-field"
        />
        <TextField
          label="Last Name"
          variant="outlined"
          className="input-field"
        />
        <TextField
          label="ID / Passport Number"
          variant="outlined"
          className="input-field"
        />
      </Paper>

      {/* CONTENEDOR DERECHO (Datos de Contacto) */}
      <Paper id="right-container">
        <Typography variant="h5" className="section-title">
          Contact Information
        </Typography>

        <TextField label="Email" variant="outlined" className="input-field" />
        <TextField
          label="Confirm Email"
          variant="outlined"
          className="input-field"
        />

        <Button
          variant="contained"
          className="continue-button"
          onClick={() => navigate('/Payment')}
        >
          Continue
        </Button>
      </Paper>

      {/* CONTENEDOR DE IMAGEN */}
    </Box>
  );
}

export default Data;
