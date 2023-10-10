import React from "react";
import { Grid, Button } from '@mui/material';
import useStyles from "./styles";
import drinkImage from "../../images/drinkCanImg.svg";
import GlobeImage from "../../images/topGlobeImg.svg";
import Header from "../../components/header/Header";
import { useNavigate } from "react-router-dom";

function HomePage() {
  const classes = useStyles();

  const navigate = useNavigate();

  const getStart = () => {
    navigate('/getStarted');
  }

  return (
    <>
     <Header></Header>
      <Grid container spacing={0} justify="space-between">
        <Grid item xs={4} className={classes.firstSection1}>
          <h1>New ways to invest in traditional assets</h1>
          <p>At Cellar we provide a fully digital experience of owning traditional physical assets</p>
          <Button onClick={() => getStart()} variant="contained" className={classes.commonBtn}>Get Started</Button>
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
     
    </>
  )
}
export default HomePage;