import './Header.css';
import logo from '../../assets/media/logoT.png';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { Box, Grid, Avatar, Button } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

function Header() {
  const [logged, setLogged] = useState(
    !localStorage.getItem('token') ? false : true
  );
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <div id="header">
      <Link to="/">
        <img id="logo" src={logo} alt="Logo" />
      </Link>

      <div id="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <CloseIcon /> : <MenuIcon />}
      </div>

      <nav id="content" className={menuOpen ? 'open' : ''}>
        <Button className="nav-button">Sustainability</Button>
        <Button className="nav-button">About us</Button>
        <Button className="nav-button">Contact</Button>

        {!logged && (
          <Button className="nav-button" onClick={() => navigate('/signup')}>
            Sign up!
          </Button>
        )}

        {!logged ? (
          <Button className="nav-button" onClick={() => navigate('/login')}>
            Sign in
          </Button>
        ) : (
          <div id="icon">
            <Box sx={{ flexGrow: 1 }}>
              <Grid
                xs
                display="flex"
                justifyContent="center"
                alignItems="center"
              >
                <Avatar
                  src={logo}
                  onClick={() => navigate('/Profile')}
                  sx={{ width: 40, height: 40, cursor: 'pointer' }}
                />
              </Grid>
            </Box>
          </div>
        )}
      </nav>
    </div>
  );
}

export default Header;
