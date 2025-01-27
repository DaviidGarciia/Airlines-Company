import "./Data.css"
import Button from "../../components/Button/Button"
import { useNavigate } from "react-router-dom"
import { TextField, Box, Typography } from "@mui/material"

function Data() {
  const navigate = useNavigate()
  return (
    <>
      <div id="data">
        <div id="left-container">
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center', /* Centra los elementos horizontalmente */
              marginBottom: "50px",
              marginTop: "50px"
            }}
          >
            <Typography component="h1" variant="h5">
              Passenger 1
            </Typography>
            <br />
            <TextField
              label="Name"
              id="filled-size-normal"
              defaultValue=""
              variant="filled"
              sx={{ backgroundColor: "white", width: "100%" }}
            />
            <TextField
              label="Surname"
              id="filled-size-normal"
              defaultValue=""
              variant="filled"
              sx={{ backgroundColor: "white", width: "100%" }}
            />
            <TextField
              label="DNI"
              id="filled-size-normal"
              defaultValue=""
              variant="filled"
              sx={{ backgroundColor: "white", width: "100%" }}
            />
          </Box>
        </div>

        <div id="right-container">
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center', /* Centra los elementos horizontalmente */
            }}
          >
            <Typography component="h1" variant="h5">
              Contact Info
            </Typography>
            <br />
            <TextField
              label="Email"
              id="filled-size-normal"
              defaultValue=""
              variant="filled"
              sx={{ backgroundColor: "white", width: "100%" }}
            />
            <TextField
              label="Confirm Email"
              id="filled-size-normal"
              defaultValue=""
              variant="filled"
              sx={{ backgroundColor: "white", width: "100%" }}
            />
            <Button size="data" text="Continuar" onClick={() => { navigate("/Payment") }} />
          </Box>
        </div>

        {/* Div para la imagen de avión en forma de columna a la derecha */}
        <div id="airplane-column"></div>
      </div>
    </>
  )
}

export default Data
