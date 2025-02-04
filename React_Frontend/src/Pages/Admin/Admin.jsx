import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { insertFly } from '../../services/auth'; // Asegúrate de que la función insertFly esté bien importada

const defaultTheme = createTheme();

export default function Admin() {
  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    // Obtenemos los valores de cada campo
    const code = data.get('code');
    const departure_time = data.get('departuretime');
    const arrival_time = data.get('arrivaltime');
    const status = data.get('status');
    const capacity = data.get('capacity');
    const occupiedPlaces = parseInt(data.get('occupiedPlaces'));
    const price = data.get('price');
    const departureAirportID = data.get('departureAirportID');
    const arrivalAirportID = data.get('arrivalAirportID');

    // Realizamos el POST a la API utilizando la función insertFly
    try {
      const result = await insertFly(
        code,
        departure_time,
        arrival_time,
        status,
        capacity,
        occupiedPlaces,
        price,
        departureAirportID,
        arrivalAirportID
      );
      console.log(result); // Aquí puedes manejar la respuesta de la API
    } catch (error) {
      console.error("Error al agregar el vuelo:", error.message); // En caso de error
    }
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 15,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: "20px"
          }}
        >
          <Typography component="h1" variant="h3">
            Add Flight
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={1}>
              <Grid item xs={12} sm={6}>
                <TextField
                  name="departuretime"
                  required
                  id="departuretime"
                  label="Departure time"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="arrivaltime"
                  label="Arrival time"
                  name="arrivaltime"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  name="departureAirportID"
                  required
                  id="departureAirportID"
                  label="Departure Airport ID"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="arrivalAirportID"
                  label="Arrival Airport ID"
                  name="arrivalAirportID"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="code"
                  label="Flight Code"
                  id="code"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="status"
                  label="Status"
                  id="status"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="capacity"
                  label="Capacity"
                  name="capacity"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="occupiedPlaces"
                  label="Occupied Places"
                  id="occupiedPlaces"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="price"
                  label="Price"
                  id="price"
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, bgcolor: 'rgb(62, 63, 65)' }}
            >
              Save changes
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
