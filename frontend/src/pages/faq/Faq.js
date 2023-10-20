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


function Faq() {
    const classes = useStyles();
    const navigate = useNavigate();

    const getStart = () => {
        navigate('/getStarted');
    }
    return (
        <>
            <Header></Header>

            <Grid container className={classes.pageHeader}>
                <h1>Frequently Asked Questions</h1>
            </Grid>

            <Grid container justifyContent="center" className={classes.commonAccordion}>
                <Grid lg={8} md={8} sm={8}>
                    <h2>Fees</h2>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography>What is the Storage fee and why it is charged? </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                All of the wine pruchased on Cellar is stored in a secured bonded warehouse where specific conditions are maintained for the wine to be safely stored. The warehouse provider charges a fixed Storage fee of 0.88EUR per unit, where unit is a crate, or equivalent to 6 bottles of wine.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>

                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography>What is the management fee? </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                The management fee is Cellar’s commission for our services. The level of fees depend on the client tier and is equivalent to 2.5% for Tier 1 clients and 2.0% for Tier 2 clients.                            </Typography>
                        </AccordionDetails>
                    </Accordion>

                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography>Are there any other fees?</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                There is a small insurance fee that our insurance provider charges. The fee is equivalent to 0.015% of the total value of stored items charged monthly. Therefore, if the total value of your wine stored is $1000 you will pay 0.015% of this value to cover for the insurance.
                            </Typography>
                            <Typography>
                                If you chose to sell your wine through the peer-to-peer marketplace on Cellar, the transaction will be a subject to 1.5% transaction fee.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>

                    <h2>Financial  </h2>

                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography>How do i deposit money?</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                            You can deposit funds with us in multiple ways. You can deposit funds directly using your Credit/Debit card or make a wire to us.
                            </Typography>
                         
                        </AccordionDetails>
                    </Accordion>

                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography>What cards are accepted?</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                            We accept all major card providers such as Visa, Master Card, American Express, Maestro and UnionPay
                            </Typography>
                         
                        </AccordionDetails>
                    </Accordion>
                  
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography>Can i use Apple Pay/Google Pay?</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                            Yes, digital wallets are also supported as a deposit option.                            </Typography>
                         
                        </AccordionDetails>
                    </Accordion>

                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography>Are there commissions for the deposit/withdrawal?</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                            Cellar does not charge any commission for deposits and withdrawals. Any charges that you may incur are subject to your bank's/card provider policy.                         
                            </Typography>
                        </AccordionDetails>
                    </Accordion>

                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography>How do i withdraw funds?</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                            You can withdraw funds to your bank account or card directly.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>

                    
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography>Can i pay in crypto?</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                At the moment Cellar is not accepting Crypto currencies as a payment method.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>

                    <h2>Account  </h2>

                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography>What is the difference between Tier 1 and Tier 2 accounts?</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                            The different Tiers are differentiated based on the total value of the holdings on the account. Tier 1 account is for users who have under $25,000 in assets and Tier 2 account is for anyone with the total holdings above $25,000 in value.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>

                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography>How do i update my account details?</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                 The answer is to be provided in future.

                            </Typography>
                        </AccordionDetails>
                    </Accordion>

                    
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography>Can i have multiple accounts? </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                            No, every user can only have 1 account at a time. 

                            </Typography>
                        </AccordionDetails>
                    </Accordion>

                    
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography>What information is hold on my account?</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                            Every account has a number of information points stored. The unique Account Identifier, the user’s personal info such as name , second name, DOB and residency, transaction data related to deposits/withdrawals/purchases/sales.

                            </Typography>
                        </AccordionDetails>
                    </Accordion>

                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography>Where is my wine stored?</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                            All of our wines are stored in a secured bonded warehouse located in Brussels, Belgium.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>

                   <h2>Transaction details </h2> 

                   <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography>Do i receive proof of ownership once i purchase the wine?</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                            Yes, upon any purchase you will receive an invoice copy and an ownership confirmation document, which are stored under your account information tab on the platform. You can download these at any time in a convenient format (PDF, Excel)

                            </Typography>
                        </AccordionDetails>
                    </Accordion>

                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography> How can i get my wine delivered? </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                            You may chose to get all of your wine delivered to your house, subject to local regulation requirements (UAE does not allow any alcohol import). You can contact us via a designated tab to receive a quote from our delivery partner.

                            </Typography>
                        </AccordionDetails>
                    </Accordion>

                    
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography> Where is the wine sourced from?  </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                            We source our wines from across Europe and other locations too, with most of the wines being sourced from France, Italy and Spain.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>


                   

                    
                </Grid>
            </Grid>

            <Footer></Footer>

        </>
    )
}
export default Faq;