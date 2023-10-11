import React from "react";
import { Grid, Button } from '@mui/material';
import useStyles from "./styles";

import drinkImage from "../../images/drinkCanImg.svg";
import GlobeImage from "../../images/topGlobeImg.svg";
import PhoneTabletImg from "../../images/phoneTabletImg.svg";
import LaptopPhoneImg from "../../images/laptopPhoneImg.svg";
import GraphIcon from "../../images/graphImg.svg";
import CoinIcon from "../../images/coinImg.svg";
import Header from "../../components/header/Header";
import Pngwing from "../../images/pngwing.svg";


function HomePage() {
  const classes = useStyles();
  return (
    <>
      <Header></Header>
      <Grid container spacing={0} justify="space-between" alignItems={'center'}>
        <Grid item xs={6} md={6} lg={6} className={classes.firstSection1}>
          <h1>New ways to invest in traditional assets</h1>
          <p>At Cellar we provide a fully digital experience of owning traditional physical assets</p>
          <Button variant="contained" className={classes.commonBtn}>Get Started</Button>
        </Grid>
        <Grid item xs={6} md={6} lg={6} className={classes.firstSection2}>
          <img src={GlobeImage}></img>
        </Grid>
      </Grid>

      <Grid container className={classes.secondSection}>
        <Grid row style={{ margin: 'auto' }}>
          <h1>Trending Drinks</h1>
        </Grid>

        <Grid container className={classes.secondSectionItems}>

          <Grid item className={classes.drinkItem}>
            <img src={drinkImage}></img>
            <p>Lorem ipsum</p>
          </Grid>

          <Grid item className={classes.drinkItem} style={{minHeight: '480px'}}>
            <img src={Pngwing}></img>
            <p>Lorem ipsum dolor sit</p>
          </Grid>

          <Grid item className={classes.drinkItem}>
            <img src={drinkImage}></img>
            <p>Lorem ipsum</p>

          </Grid>
        </Grid>

        <Grid row style={{ margin: 'auto' }}>
          <Button variant="contained" className={classes.commonBtn}>Explore more Drinks</Button>
        </Grid>
      </Grid>

      <Grid container className={classes.thirdSection}>
        <Grid item xs={6} className={classes.thirdSectionImages}>
          <img src={LaptopPhoneImg}></img>
        </Grid>
        <Grid item xs={6} className={classes.thirdSectionContent}>
          <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <Button variant="contained" className={classes.commonBtn}>Explore Marketplace</Button>
        </Grid>
        <Grid item xs={6} className={classes.thirdSectionContent}>
          <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <Button variant="contained" className={classes.commonBtn}>Explore Marketplace</Button>
        </Grid>
        <Grid item xs={6} className={classes.thirdSectionImages}>
          <img src={PhoneTabletImg}></img>
        </Grid>
      </Grid>

      <Grid container className={classes.fourthSection}>

        <Grid container className={classes.fourthSectionItems}>
          <Grid item xl={6} md={6} sm={6} className={classes.cardItem}>
            <img src={GraphIcon}></img>
            <h2>Lorem ipsum dolor sit</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
          </Grid>
          <Grid item xl={6} md={6} sm={6} className={classes.cardItem}>
            <img src={CoinIcon}></img>
            <h2>Lorem ipsum dolor sit</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
          </Grid>
        </Grid>


      </Grid>

      
      <Grid container>
          <h1>About Us</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </Grid>

    </>
  )
}
export default HomePage;