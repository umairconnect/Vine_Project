import React from 'react';
import {
  AppBar, Toolbar, Typography,
  Button, MenuItem, Menu, Grid,
} from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import useStyles from './styles';
import LogoWhite from './../../images/common/logoWhite.png';
import { WhiteButtonLink } from './../../components/common/formfields/Forms';
import UserIcon from './../../images/icons/userIcon.svg';
import NotificationIcon from './../../images/icons/notificationIcon.svg';


function Header() {
  const classes = useStyles();
  const Navigate = useNavigate();
  const auth = localStorage.getItem('user');

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };


  const logout = () => {
    localStorage.clear();
    Navigate('/')
  }


  return (
    <div className={classes.header}>
      <AppBar position="static">
        <Toolbar>

          <Grid container alignItems="center">
            <Grid item md={2} lg={2} sm={2} className='alignLeft'>
              <img src={LogoWhite} />
            </Grid>

            <Grid item md={6} lg={6} sm={6}>
              <div className={classes.navLinks}>
                <Link to="/">Home</Link>
                <Link to="/">Marketplace</Link>
                <Link to="/about">About Us</Link>
                <Link to="/Faq">FAQ</Link>
              </div>
            </Grid>

            <Grid item md={4} lg={4} sm={4} style={{ display: 'flex', justifyContent: 'right' }}>
              {auth ?
                <>
                   <Link to="/" className={classes.logsLink}> <img src={NotificationIcon} /> Notification</Link>
                  <Button
                    id="basic-button"
                    aria-controls={open ? 'basic-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick}
                    className={classes.logsLink}
                  >
                    <img src={UserIcon} /> Account
                  </Button>

                  <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    className={classes.navDropDown}
                    MenuListProps={{
                      'aria-labelledby': 'basic-button',
                    }}
                  >
                    <MenuItem>
                       <Link to="/CustomerSupport"> Customer Support</Link>
                    </MenuItem>
                    <MenuItem onClick={logout}>Logout</MenuItem>
                  </Menu>

              
                </>
                :
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