import './Confirmation.css';
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActions,
  Button,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

function Confirmation() {
  const navigate = useNavigate();

  return (
    <Box id="confirmation">
      <Card className="confirmation-card">
        <CardMedia
          component="img"
          className="confirmation-icon"
          image="https://cdn-icons-png.flaticon.com/512/190/190411.png" /* Nuevo icono de éxito */
          alt="Success"
        />
        <CardContent>
          <Typography variant="h5" className="confirmation-message">
            Your flight was booked successfully! ✈️
          </Typography>
        </CardContent>
        <CardActions className="confirmation-buttons">
          <Button className="confirmation-button">Download PDF</Button>
          <Button className="confirmation-button" onClick={() => navigate('/')}>
            Back to Home
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
}

export default Confirmation;
