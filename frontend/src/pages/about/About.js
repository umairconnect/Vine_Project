import React from "react";
import { Grid, Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import useStyles from "./styles";
import drinkImage from "../../images/drinkCanImg.svg";
import GlobeImage from "../../images/topGlobeImg.svg";
import { Link, useNavigate } from 'react-router-dom';
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";

function About() {
    const classes = useStyles();
    const navigate = useNavigate();

    const getStart = () => {
        navigate('/getStarted');
    }
    return (
        <>
            <Header></Header>

            <Grid container className={classes.pageHeader}>
                <h1>About</h1>

            </Grid>

            <Grid container justifyContent="center" className={classes.commonContent}>
                <Grid lg={8} md={8} sm={8}>
                    <h2>Who we are</h2>
                    <p>
                        Cellar is a fintech company focused on alternative investments. We provide users with access to the world of alternative and physical investments through the online platform, making the investing process smooth and convenient.
                    </p>

                    <h2>Our goal</h2>
                    <p>
                        Our goal is to democratize alternative investing by providing access to investment means that were previously reserved for a very niche class of Aristocrats and ultra-wealthy.
                    </p>

                    <h2>Our Values</h2>
                    <p>
                        <b> Security </b>- The security of our users’ investments is the number 1 priority for us as a company. We make sure everyone is the actual owner of their assets and there is nothing stopping them from getting those assets to wherever they are.
                    </p>
                    <p>
                        <b> Transparency  </b>We are very open on the commissions and fees that we charge, clearly outlining each and every % point with a justified reason for charging these. The main goal of our users is to preserve and grow wealth and we aim to make it as easy and convenient as possible
                    </p>
                    <p>
                        <b> Accessibility  </b>We provide a “few clicks” access to the world of alternative investments that are being sourced in cooperation with industry experts, ensuring every instrument is investment-worthy and will yield strong returns to the investor.
                    </p>
                </Grid>
            </Grid>


            <Footer></Footer>

        </>
    )
}
export default About;