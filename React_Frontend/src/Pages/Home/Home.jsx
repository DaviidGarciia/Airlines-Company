import './Home.css';
import {
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  TextField,
} from '@mui/material';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';
import { flightInfoToBack } from '../../services/auth';
import { useState, useEffect } from 'react';
import { getAirports } from '../../services/airports';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();
  useEffect(() => {
    const fetchAirports = async () => {
      try {
        const data = await getAirports();
        setAirports(data);
      } catch (error) {
        console.log(error.message);
        console.log(error.message);
      }
    };
    fetchAirports();
  }, []);
  const [airports, setAirports] = useState([]);
  const airport = async () => {
    await getAirports();
  };
  const [selectedDepartureDate, setSelectedDepartureDate] = useState();
  const [selectedReturnDate, setSelectedReturnDate] = useState();
  const handleDateDepartureChange = (event) => {
    setSelectedDepartureDate(event.target.value);
  };
  const handleDateReturnChange = (event) => {
    setSelectedReturnDate(event.target.value);
  };
  const handleSubmit = async (event) => {
    /*setSelectedDepartureDate(event.target.value)
    setSelectedReturnDate(event.target.value)*/
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const Origen = data.get('Origen');
    const Destino = data.get('Destino');
    const Ida = { selectedDepartureDate };
    const idaDate = Ida.selectedDepartureDate;
    const Vuelta = { selectedReturnDate };
    const vueltaDate = Vuelta.selectedReturnDate;
    console.log(Origen);
    console.log(idaDate);
    console.log(vueltaDate);
    try {
      const result = await flightInfoToBack(
        Origen,
        Destino,
        idaDate,
        vueltaDate
      );
      navigate('/price', { state: { Origen, Destino, idaDate, vueltaDate } });
    } catch (error) {
      console.log(error);
    }
    /* try {
      const result = await flightInfoToBack(Origen,Destino,Ida,Vuelta)
      console.log(result)
      //navigate("/Price")
    } catch (error) {
      console.log(error);
    }*/
  };
  return (
    <>
      <div id="ContenidoPagina">
        <Box id="BarraBuscar" component="form" onSubmit={handleSubmit}>
          <section id="BarraBuscar2">
            <div id="BarraBuscar3">
              <FormControl
                variant="outlined"
                sx={{ minWidth: 190, bgcolor: 'white', borderRadius: 2 }}
              >
                <InputLabel sx={{ color: '#003366', fontWeight: 'bold' }}>
                  Origin
                </InputLabel>
                <Select name="Origen" id="Origen" label="Origin">
                  {airports.map((airport) => (
                    <MenuItem key={airport.code} value={airport.id}>
                      {airport.name} ({airport.code})
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>

              {/* DESTINATION (Mismo estilo que ORIGIN) */}
              <FormControl
                variant="outlined"
                sx={{ minWidth: 190, bgcolor: 'white', borderRadius: 2 }}
              >
                <InputLabel sx={{ color: '#003366', fontWeight: 'bold' }}>
                  Destination
                </InputLabel>
                <Select name="Destino" id="Destino" label="Destination">
                  {airports.map((airport) => (
                    <MenuItem key={airport.code} value={airport.id}>
                      {airport.name} ({airport.code})
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>

              <FormControl
                variant="standard"
                sx={{
                  minWidth: 190,
                  bgcolor: 'white',
                  boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
                }}
              >
                <TextField
                  id="Ida"
                  type={selectedDepartureDate ? 'date' : 'text'}
                  value={selectedDepartureDate || ''}
                  onFocus={(e) => (e.target.type = 'date')}
                  onBlur={(e) => !e.target.value && (e.target.type = 'text')}
                  placeholder="Departure Date"
                  InputLabelProps={{ shrink: true }}
                  inputProps={{
                    style: {
                      color: '#003366',
                      fontWeight: 900,
                      textAlign: 'center',
                    },
                  }}
                  sx={{
                    bgcolor: 'white',
                    '& input::placeholder': {
                      color: '#003366',
                      fontWeight: 900,
                      opacity: 1,
                    },
                  }}
                  onChange={handleDateDepartureChange}
                />
              </FormControl>

              <FormControl
                variant="standard"
                sx={{
                  minWidth: 190,
                  bgcolor: 'transparent',

                  boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
                }}
              >
                <TextField
                  id="Vuelta"
                  type={selectedReturnDate ? 'date' : 'text'}
                  value={selectedReturnDate || ''}
                  onFocus={(e) => (e.target.type = 'date')}
                  onBlur={(e) => !e.target.value && (e.target.type = 'text')}
                  placeholder="Return Date"
                  InputLabelProps={{ shrink: true }}
                  inputProps={{
                    style: {
                      color: '#003366',
                      fontWeight: 'bold',
                      textAlign: 'center',
                    },
                  }}
                  sx={{
                    bgcolor: 'white',

                    '& input::placeholder': {
                      color: '#003366',
                      fontWeight: 'bold',
                      opacity: 1,
                      border: 'none',
                    },
                  }}
                  onChange={handleDateReturnChange}
                />
              </FormControl>
              {/* PASSENGERS (igual que todos los demás) */}
              <FormControl
                variant="outlined"
                sx={{ minWidth: 190, bgcolor: 'white', borderRadius: 2 }}
              >
                <InputLabel sx={{ color: '#003366', fontWeight: 'bold' }}>
                  Passengers
                </InputLabel>
                <Select name="Pasajeros" id="Pasajeros" label="Passengers">
                  <MenuItem value="1">1 Passenger</MenuItem>
                  <MenuItem value="2">2 Passengers</MenuItem>
                  <MenuItem value="3">3 Passengers</MenuItem>
                  <MenuItem value="4">4 Passengers</MenuItem>
                </Select>
              </FormControl>
              <button id="Lupa" type="submit">
                Search
              </button>
            </div>
          </section>
        </Box>
        <section id="Content">
          {[
            {
              title: 'Madrid',
              image:
                'https://www.spain.info/.content/imagenes/cabeceras-grandes/madrid/calle-gran-via-madrid-s333961043.jpg',
              description:
                'Madrid is a cosmopolitan city, faithful to its customs, culture, and its art, but at the same time, it is a modern place. It houses first-class cultural, economic, and political centers in Europe.',
            },
            {
              title: 'París',
              image:
                'https://imagenes.20minutos.es/files/image_1920_1080/uploads/imagenes/2022/10/20/torre-eiffel-y-el-rio-sena-en-paris.jpeg',
              description:
                'Explore Paris, the charming City of Light. Enjoy the Eiffel Tower, the Louvre, romantic walks along the Seine, and delicious French cuisine. Book your flight and live an unforgettable experience in the capital of France.',
            },
            {
              title: 'Barcelona',
              image:
                'https://www.berlinsbi.com/uploads/sites/2/2023/06/web-banner-barcelona.jpg?w=1854&h=1043&crop=1',
              description:
                "Discover Barcelona, a vibrant Mediterranean city. Admire Gaudí's architecture, relax on its beaches, enjoy delicious Catalan food, and explore Las Ramblas. Reserve your Fly and experience the magic of Barcelona.",
            },
            {
              title: 'Sevilla',
              image:
                'https://eu-central-1.linodeobjects.com/tecnohotelnews/2022/12/shutterstock_649614043.jpg',
              description:
                'Discover Seville, heart of Andalusia. Marvel at the Giralda, the majestic Cathedral, and the Alcázar. Enjoy tapas, flamenco, and walks through the Santa Cruz neighborhood. Book your flight and experience its unique charm.',
            },
            {
              title: 'Lanzarote',
              image: 'img/lanzarote.jpg',
              description:
                'Explore Lanzarote, a volcanic island in the Canary Islands. Enjoy your beaches, unique landscapes of Timanfaya, and wine cellars. Relax at Jameos del Agua and César Manrique. Book your flight and live an unforgettable experience.',
            },
            {
              title: 'Cádiz',
              image:
                'https://tourscanner.com/blog/wp-content/uploads/2023/11/que-ver-y-hacer-en-Cadiz.jpeg',
              description:
                'Discover Cádiz, an Andalusian coastal city. Relax in your golden beaches, explore the old town, and taste fresh fish. Enjoy the carnival and the rich history of Cádiz. Book your flight and experience Cádiz to the fullest.',
            },
          ].map((destination, index) => (
            <Card key={index} className="Oferta">
              <CardMedia
                component="img"
                image={destination.image}
                alt={destination.title}
              />
              <CardContent>
                <Typography className="card-title">
                  {destination.title}
                </Typography>
                <Typography className="card-description">
                  {destination.description}
                </Typography>
              </CardContent>
              <CardActions className="card-buttons">
                <Button className="card-button">Reserve</Button>
                <Button className="card-button learn-more">Learn More</Button>
              </CardActions>
            </Card>
          ))}
        </section>
        <section id="Promociones">
          <div id="infoPromo">
            <h2>No te pierdas nuestras ofertas y novedades</h2>
            <ul>
              <li>Recibe las últimas ofertas de vuelos</li>
              <li>Recibe información sobre nuevas rutas</li>
              <li>Aprovecha nuestras promociones</li>
            </ul>
            <p>Y... ¡mucho más!</p>
          </div>
          <div id="SubPromo">
            <input
              id="inputEmail"
              type="email"
              placeholder="Ingrese su Correo"
            />
            <p>
              Los datos personales facilitados serán tratados por Binter
              Canarias como responsable del tratamiento, para el envío periódico
              de noticias, ofertas de vuelos, información sobre nuevas rutas,
              concursos y otras promociones. Podrás revocar tu consentimiento y
              darte de baja e este servicio mediante el enlace habilitado en
              cada comunicación. Para más información, puedes consultar nuestra{' '}
              <a href="https://policies.google.com/privacy?hl=es">
                Política de privacidad
              </a>
              .
            </p>
            <button id="inputSub">Suscribirme</button>
          </div>
        </section>
      </div>
    </>
  );
}

export default Home;
