import React, { useEffect, useState } from "react";
import "./Profile.css";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";
import { Box, Card, CardContent, Typography } from "@mui/material";

function Profile() {
  // Estado para almacenar los datos del usuario
  const [userData, setUserData] = useState({
    username: "",
    name: "",
    surname: "",
    email: "",
    phone: "",
  });
  console.log(userData);
  const navigate = useNavigate();
  // Obtener el username del localStorage
  const getUsernameFromLocalStorage = () => {
    const userLS = localStorage.getItem("username");
    if (!userLS) {
      console.log("No se encontró el username en localStorage.");
      return null;
    }
    return userLS;
  };

  // Hacer la petición a la API
  const fetchUserData = async () => {
    const username = getUsernameFromLocalStorage();
    if (!username) {
      console.log("No se puede hacer la petición, ya que no hay username.");
      return;
    }

    try {
      const response = await fetch(`http://localhost:3000/Api/Users/${username}`); // Asegúrate de que la URL esté correcta
      if (response.ok) {
        const userData = await response.json();
        console.log(userData); // Aquí tendrás todos los datos del usuario
        setUserData(userData); // Guardamos los datos en el estado
      } else {
        console.log("No se encontró al usuario o hubo un error en la petición.");
      }
    } catch (error) {
      console.error("Error al hacer la petición:", error);
    }
  };

  // Usamos useEffect para hacer la petición cuando el componente se monta
  useEffect(() => {
    fetchUserData();
  }, []); // El array vacío asegura que solo se ejecute una vez cuando el componente se monta

  return (
    <div id="profile-view">
      <section id="Profile">
        <div id="titleProfile">
          <h2 className="title">Profile</h2>
        </div>
        <div id="name">
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {userData.name || "Nombre"}
            </Typography>
          </CardContent>
        </div>

        <div id="surname">
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {userData.surname || "Apellido"}
            </Typography>
          </CardContent>
        </div>
        <div id="username">
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {userData.username || "Username"}
            </Typography>
          </CardContent>
        </div>
        <div id="email">
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {userData.email || "Email"}
            </Typography>
          </CardContent>
        </div>
        <div id="phone">
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {userData.phone || "Phone"}
            </Typography>
          </CardContent>
        </div>
        <div id="password">
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              ******
            </Typography>
          </CardContent>
        </div>
        <div id="buttonSave">
          <Button size="small" text="Save" />
        </div>
      </section>

      <section id="Flights">
        <h2 id="titleFlights" className="title">
          Flights
        </h2>
        {/* Flight cards */}
        <div id=" Oferta1" className="Oferta">
          <h2>Outbound Flights</h2>
          <Card sx={{ maxwidth: '100vw', display: 'flex' }}>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Gran Canaria Apt. (LPA)
              </Typography>
            </CardContent>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Fuerteventura Apt. (FUE)
              </Typography>
            </CardContent>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                08:00:00
              </Typography>
            </CardContent>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                70 €
              </Typography>
            </CardContent>
          </Card>
        </div>

        <div id=" Oferta2 " className="Oferta">
          <h2>Return Flights</h2>
          <Card sx={{ maxWidth: '100vw', marginTop: '10px', display: 'flex' }}>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Fuerteventura Apt. (FUE)
              </Typography>
            </CardContent>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Gran Canaria Apt. (LPA)
              </Typography>
            </CardContent>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                08:00:00
              </Typography>
            </CardContent>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                70 €
              </Typography>
            </CardContent>
          </Card>
        </div>

        <div id="button">
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '50px',
              marginTop: '50px',
              gap: '25px',
            }}
          >
            <Button
              size="small"
              text="Back to home"
              onClick={() => {
                navigate('/');
              }}
            />
          </Box>
        </div>
      </section>
    </div>
  );
}

export default Profile;
