import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import useStyles from './styles';
import Nav from '../nav/Nav';


function Header() {
  const classes = useStyles();

  const auth = localStorage.getItem('user')

  const logout = () => {
    localStorage.clear();
  }


  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Your Website
          </Typography>
          <div className={classes.navButtons}>
            <Button color="inherit">Home</Button>
            <Button color="inherit">About</Button>
            <Button color="inherit">Services</Button>
            <Button color="inherit">Contact</Button>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Header;