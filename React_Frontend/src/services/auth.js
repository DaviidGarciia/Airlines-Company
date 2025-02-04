import api from '.';

export const login = async (username, password) => {
  console.log('soy front');
  console.log(username, password);
  try {
    const { data } = await api.post('/auth/login', { username, password });
    return data.token;
  } catch (error) {
    console.log(error);
  }
};

export const signup = async (name, surname, username, dni, email, password) => {
  console.log('soy front - signup');
  console.log(name, surname, username, dni, email, password);
  try {
    const { data } = await api.post('/auth/signup', {
      name,
      surname,
      username,
      dni,
      email,
      password,
    });
    return data.token;
  } catch (error) {
    console.log(error);
  }
};

export const insertFly = async (
  code,
  departure_time,
  arrival_time,
  status,
  capacity,
  occupiedPlaces,
  price,
  departureAirportId,
  arrivalAirportId
  
) => {
  try {
    const { data } = await api.post('/Flights', {
      code,
      departure_time,
      arrival_time,
      status,
      capacity,
      occupiedPlaces,
      price,
      departureAirportId,
      arrivalAirportId
    });
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

export const flightInfoToBack = async (
  origin,
  destination,
  date,
  returnDate
) => {
  try {
    const { data } = await api.post('/Flights/search', {
      origin,
      destination,
      date,
      returnDate,
    });
    return data;
  } catch (error) {
    console.log(error);
  }
};
