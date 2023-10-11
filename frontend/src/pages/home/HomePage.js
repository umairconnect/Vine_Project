import React from "react";
import { Grid, Button } from '@mui/material';
import useStyles from "./styles";

import drinkImage from "../../images/drinkCanImg.svg";
import GlobeImage from "../../images/topGlobeImg.svg";
import PhoneTabletImg from "../../images/phoneTabletImg.svg";
import LaptopPhoneImg from "../../images/laptopPhoneImg.svg";
import GraphIcon from "../../images/graphImg.svg";
import CoinIcon from "../../images/coinImg.svg";


function HomePage() {
  const classes = useStyles();
  return (
    <>
      <Grid container spacing={0} justify="space-between">
        <Grid item xs={4} className={classes.firstSection1}>
          <h1>New ways to invest in traditional assets</h1>
          <p>At Cellar we provide a fully digital experience of owning traditional physical assets</p>
          <Button variant="contained" className={classes.commonBtn}>Get Started</Button>
        </Grid>
        <Grid item xs={6} className={classes.firstSection2}>
          <img src={GlobeImage}></img>
        </Grid>
      </Grid>

      <Grid container className={classes.secondSection}>
        <Grid item>
          <h1>Trending Drinks</h1>
        </Grid>

        <Grid container className={classes.secondSectionItems}>

          <Grid item className={classes.drinkItem}>
            <img src={drinkImage}></img>
            <p>Lorem ipsum</p>
          </Grid>

          <Grid item className={classes.drinkItem}>
          <img src={drinkImage}></img>
            <p>Lorem ipsum</p>
          </Grid>

          <Grid item className={classes.drinkItem}>
          <img src={drinkImage}></img>
          <p>Lorem ipsum</p>
          </Grid>

        </Grid>

        <Grid item><Button variant="contained" className={classes.commonBtn}>Explore more Drinks</Button></Grid>
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
            <Grid item className={classes.cardItem}>
               <img src={GraphIcon}></img>
               <h2>Lorem ipsum dolor sit</h2>
               <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
            </Grid>
            <Grid item className={classes.cardItem}>
               <img src={CoinIcon}></img>
               <h2>Lorem ipsum dolor sit</h2>
               <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
            </Grid>
         </Grid>

         <Grid container className={classes.fourthSectionlower}>
            <h1>About Us</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
         </Grid>

      </Grid>
     
    </>
  )
}
export default HomePage;