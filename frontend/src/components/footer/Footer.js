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

function Footer() {
    const classes = useStyles();
    const Navigate = useNavigate();
    const auth = localStorage.getItem('user')

    const logout = () => {
        localStorage.clear();
        Navigate('/')
    }


    return (
        <div className={classes.footer}>
            <Grid container>
                <Grid item lg={2} md={2} sm={2} style={{ textAlign: 'left' }}>
                    <img src={LogoWhite} />
                </Grid>
                <Grid item lg={6} md={6} sm={6}>
                    <Grid container justifyContent={'space-around'}>
                        <div className={classes.footerLinks}>
                            <h3 className={'linkHeader'}>Company</h3>
                            <Link to="/">Home</Link>
                            <Link to="/products">Add Product</Link>
                            <Link to="/about">About Us</Link>
                            <Link to="/Faq">FAQ</Link>
                        </div>

                        <div className={classes.footerLinks}>
                            <h3 className={'linkHeader'}>Information</h3>
                            <Link to="/">Home</Link>
                            <Link to="/products">Add Product</Link>
                            <Link to="/about">About Us</Link>
                            <Link to="/Faq">FAQ</Link>
                        </div>

                        <div className={classes.footerLinks}>
                            <h3 className={'linkHeader'}>Price Tiers</h3>
                            <Link to="/">Home</Link>
                            <Link to="/products">Add Product</Link>
                            <Link to="/about">About Us</Link>
                            <Link to="/Faq">FAQ</Link>
                        </div>
                    </Grid>

                </Grid>
                <Grid item lg={3} md={3} sm={3}>
                    <Grid row>
                        <div className={classes.footerLinks}>
                            <h3 className={'linkHeader'}>Subscribe to our newsletter</h3>
                           
                        </div>
                    </Grid>

                    <Grid row>
                        <div className={classes.footerLinks}>
                            <h3 className={'linkHeader'}> Follow us</h3>
                        </div>
                    </Grid>

                </Grid>
            </Grid>


        </div>
    );
}

export default Footer;