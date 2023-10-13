import React from "react";
import { Grid, Button, TextField } from '@mui/material';
import useStyles from "./styles";
import Footer from "../../components/footer/Footer";

import drinkImage from "../../images/drinkCanImg.svg";
import GlobeImage from "../../images/topGlobeImg.svg";
import PhoneTabletImg from "../../images/phoneTabletImg.svg";
import LaptopPhoneImg from "../../images/laptopPhoneImg.svg";
import GraphIcon from "../../images/graphImg.svg";
import CoinIcon from "../../images/coinImg.svg";
import Header from "../../components/header/Header";
import Pngwing from "../../images/pngwing.svg";
import SoftDrink from "../../images/common/softDrink.svg";
import AboutSecBg from "../../images/common/aboutSecBg.png";


function HomePage() {
  const classes = useStyles();
  return (
    <>
      <Header></Header>
      <Grid container spacing={0} justify="space-between" alignItems={'center'}>
        <Grid item xs={12} md={6} lg={6} sm={6} className={classes.firstSection1}>
          <h1>New ways to invest in traditional assets</h1>
          <p>At Cellar we provide a fully digital experience of owning traditional physical assets</p>
          <Button variant="contained" className={classes.commonBtn}>Get Started</Button>
        </Grid>
        <Grid item xs={12} md={6} lg={6} sm={6} className={classes.firstSection2}>
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

          <Grid item className={classes.drinkItem} style={{ minHeight: '480px' }}>
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
        <Grid item xs={12} sm={6} lg={6} className={classes.thirdSectionImages}>
          <img src={LaptopPhoneImg}></img>
        </Grid>
        <Grid item xs={12} sm={6} lg={6} className={classes.thirdSectionContent}>
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

      <Grid container className={classes.container} justifyContent={'center'}>

        <Grid item sx={12} xl={5} md={5} sm={5}>
          <div className={classes.cardItem}>
            <img src={GraphIcon}></img>
            <h2>Lorem ipsum dolor sit</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
          </div>

        </Grid>
        <Grid item sx={12} xl={5} md={5} sm={5}>
          <div className={classes.cardItem}>
            <img src={CoinIcon}></img>
            <h2>Lorem ipsum dolor sit</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
          </div>
        </Grid>

      </Grid>


      <Grid container className={classes.aboutContainer} style={{ backgroundImage: 'url(' + AboutSecBg + ')' }}>
        <Grid row>
          <Grid container alignItems={'center'} className={classes.fifthSectionContent}>

            <Grid item xs={12} xl={6} md={6} sm={6}>
              <h1>About Us</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliquaLorem ipsum dolor sit amet, consectetur adipiscing elit</p>
            </Grid>

            <Grid item xs={12} xl={6} md={6} sm={6}>
              <img src={SoftDrink} />
            </Grid>

          </Grid>
        </Grid>
      </Grid>


      <Grid container className={classes.fifthSection}>
        <Grid item xs={12} sm={7} md={7} lg={7} className={classes.fifthSectionContent}>
          <h1>Contact Us</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliquaLorem ipsum dolor sit amet, consectetur adipiscing elit</p>
        </Grid>

        <Grid container item xs={12} sm={4} md={4} lg={4}  justify="flex-end" direction="column" alignItems="center" className={classes.fifthSectionForm}>
          <h3>Contact Us</h3>
          <Grid container>

            <TextField size="small" placeholder="Name" className={classes.contactInput}></TextField>

            <TextField size="small" placeholder="Email" className={classes.contactInput}></TextField>

            <TextField multiline rows={5} placeholder="Message" className={classes.contactInput}></TextField>

            <Button variant="container">Submit</Button>

          </Grid>

        </Grid>
      </Grid>

      <Footer></Footer>

    </>
  )
}
export default HomePage;