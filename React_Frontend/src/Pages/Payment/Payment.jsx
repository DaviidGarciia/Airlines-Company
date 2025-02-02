import * as React from 'react';
import './Payment.css';
import {
  Box,
  Typography,
  OutlinedInput,
  FormLabel,
  Grid,
  Button,
  Paper,
} from '@mui/material';
import CreditCardRoundedIcon from '@mui/icons-material/CreditCardRounded';
import SimCardRoundedIcon from '@mui/icons-material/SimCardRounded';
import { useNavigate } from 'react-router-dom';

export default function PaymentForm() {
  const navigate = useNavigate();
  const [cardNumber, setCardNumber] = React.useState('');
  const [cvv, setCvv] = React.useState('');
  const [expirationDate, setExpirationDate] = React.useState('');

  const handleCardNumberChange = (event) => {
    const value = event.target.value.replace(/\D/g, '');
    const formattedValue = value.replace(/(\d{4})(?=\d)/g, '$1 ');
    if (value.length <= 16) {
      setCardNumber(formattedValue);
    }
  };

  const handleCvvChange = (event) => {
    const value = event.target.value.replace(/\D/g, '');
    if (value.length <= 3) {
      setCvv(value);
    }
  };

  const handleExpirationDateChange = (event) => {
    const value = event.target.value.replace(/\D/g, '');
    const formattedValue = value.replace(/(\d{2})(?=\d{2})/, '$1/');
    if (value.length <= 4) {
      setExpirationDate(formattedValue);
    }
  };

  return (
    <Box id="payment">
      <Paper className="payment-container">
        <Typography variant="h5" className="payment-title">
          Payment Details
        </Typography>

        <Box className="card-icons">
          <Typography variant="subtitle2">Credit Card</Typography>
          <CreditCardRoundedIcon />
        </Box>
        <SimCardRoundedIcon sx={{ fontSize: 48, transform: 'rotate(90deg)' }} />

        <Grid container spacing={2} marginTop={2}>
          <Grid item xs={8}>
            <FormLabel htmlFor="card-number">Card Number</FormLabel>
            <OutlinedInput
              id="card-number"
              placeholder="0000 0000 0000 0000"
              required
              value={cardNumber}
              onChange={handleCardNumberChange}
            />
          </Grid>
          <Grid item xs={4}>
            <FormLabel htmlFor="cvv">CVV</FormLabel>
            <OutlinedInput
              id="cvv"
              placeholder="928"
              required
              value={cvv}
              onChange={handleCvvChange}
            />
          </Grid>
        </Grid>

        <Grid container spacing={2} marginTop={2}>
          <Grid item xs={6}>
            <FormLabel htmlFor="card-name">Name</FormLabel>
            <OutlinedInput id="card-name" placeholder="John Doe" required />
          </Grid>
          <Grid item xs={6}>
            <FormLabel htmlFor="card-expiration">Expiration Date</FormLabel>
            <OutlinedInput
              id="card-expiration"
              placeholder="MM/YY"
              required
              value={expirationDate}
              onChange={handleExpirationDateChange}
            />
          </Grid>
        </Grid>

        <Button
          className="pay-button"
          onClick={() => navigate('/Confirmation')}
        >
          Pay
        </Button>
      </Paper>
    </Box>
  );
}
