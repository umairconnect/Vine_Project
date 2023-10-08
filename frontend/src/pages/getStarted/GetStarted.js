import React from "react";
import { Grid, Button } from '@mui/material';
import LogoDark from '../../images/common/logoDark.svg';

import useStyles from './styles';
import { InputTextField, SelectField, BigButtonLink } from "../../components/common/formfields/Forms";

function GetStarted() {
    const classes = useStyles();
 
    return (
        <>
            <Grid container className={classes.whitePaper}>

                <Grid row>
                    <Grid container spacing={2}>

                        <div className={classes.logoArea}>
                            <img src={LogoDark} />
                        </div>

                    </Grid>
                </Grid>

                <Grid row>
                    <Grid container>

                        <div className={classes.getStartedContent}>
                            <h2>GET STARTED</h2>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>
                            <Grid row className={classes.authBtn}>
                                <BigButtonLink link="/login" value="Sign In" />
                            </Grid>
                            <Grid row className={classes.authBtn}>
                                <BigButtonLink link="/signup" value="Sign Up" />
                            </Grid>
                        </div>

                    </Grid>
                </Grid>
            </Grid>

        </>

    )
}
export default GetStarted;