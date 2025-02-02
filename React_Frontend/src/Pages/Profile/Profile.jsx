import './Profile.css';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button/Button';
import { Box, Typography, Card, CardContent } from '@mui/material';

function Profile() {
  const navigate = useNavigate();

  return (
    <div id="profile-view">
      {/* Sección de perfil */}
      <section id="Profile">
        <Typography variant="h4" className="title">
          Profile
        </Typography>

        <Typography id="name">David</Typography>
        <Typography id="surname">García</Typography>
        <Typography id="username">davidG</Typography>
        <Typography id="email">amadorgarciadavid@gmail.com</Typography>
        <Typography id="phone">636666666</Typography>
        <Typography id="password">******</Typography>

        <Box id="buttonSave">
          <Button size="small" text="Save" />
        </Box>
      </section>

      {/* Sección de vuelos */}
      <section id="Flights">
        <Typography variant="h4" className="title">
          Flights
        </Typography>

        <Card id="Oferta1">
          <CardContent>
            <Typography variant="h6">Outbound Flight</Typography>
            <Typography>
              Gran Canaria Apt. (LPA) → Fuerteventura Apt. (FUE)
            </Typography>
            <Typography>08:00:00 - 70€</Typography>
          </CardContent>
        </Card>

        <Card id="Oferta2">
          <CardContent>
            <Typography variant="h6">Return Flight</Typography>
            <Typography>
              Fuerteventura Apt. (FUE) → Gran Canaria Apt. (LPA)
            </Typography>
            <Typography>08:00:00 - 70€</Typography>
          </CardContent>
        </Card>

        <Box id="button">
          <Button
            size="small"
            text="Back to home"
            onClick={() => navigate('/')}
          />
        </Box>
      </section>
    </div>
  );
}

export default Profile;
