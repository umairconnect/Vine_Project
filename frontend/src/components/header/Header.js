import React from 'react';
import {
  AppBar, Toolbar, Typography,
  IconButton, Button, Grid,
} from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import useStyles from './styles';
import LogoWhite from './../../images/common/logoWhite.png';
import { WhiteButtonLink } from './../../components/common/formfields/Forms';
import UserIcon from './../../images/icons/userIcon.svg';

function Header() {
  const classes = useStyles();
  const Navigate = useNavigate();
  const auth = localStorage.getItem('user')

  const logout = () => {
    localStorage.clear();
    Navigate('/')
  }


  return (
    <div className={classes.header}>
      <AppBar position="static">
        <Toolbar>

          <Grid container alignItems="center">
            <Grid item md={3} lg={3} sm={3} className='alignLeft'>
              <img src={LogoWhite} />
            </Grid>

            <Grid item md={6} lg={6} sm={6}>
              <div className={classes.navLinks}>
                <Link to="/">Home</Link>
                <Link to="/products">Add Product</Link>
                <Link to="/about">About Us</Link>
                <Link to="/Faq">FAQ</Link>
              </div>
            </Grid>

            <Grid item md={3} lg={3} sm={3}>
              {auth ?
                <Link to="/" onClick={logout} className={classes.logsLink}> <img src={UserIcon} /> Logout</Link> :
                <WhiteButtonLink
                  value={"Get Started"}
                  link={"/getStarted"}
                />
              }

            </Grid>

          </Grid>

        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Header;