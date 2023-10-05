import React from "react";
import { Grid, Button } from '@mui/material';

import useStyles from './styles';

import { InputTextField } from "../../components/common/formfields/Forms";

function Signup() {
    const classes = useStyles();
    return (
        <>
            <Grid className={classes.container} >
                <Grid row>
                    <Grid container spacing={2}>
                        <Grid item md={6} lg={6} sm={6}>
                            <InputTextField type="text" id="FName" label={"First Name"}></InputTextField>
                        </Grid>
                        <Grid item md={6} lg={6} sm={6}>
                            <InputTextField type="text" id="LName" label={"Last name"}></InputTextField>
                        </Grid>
                    </Grid>
                </Grid>

                <Grid row>
                    <Grid container spacing={2}>
                        <Grid item md={12} lg={12} sm={12}>
                            <InputTextField type="email" id="email" label={"Email"}></InputTextField>
                        </Grid>
                    </Grid>
                </Grid>

                 <Grid row>
                    <Grid container>
                        <Grid item md={12} lg={12} sm={12}>
                            <InputTextField type="email" id="email" label={"Email"}></InputTextField>
                        </Grid>
                    </Grid>
                </Grid>

                <Grid row>
                    <Button>Login</Button>
                </Grid>
                <Grid row>
                    <Button>Login via facebook</Button>
                </Grid>
                <Grid row>
                    <Button>Login via google</Button>
                </Grid>
            </Grid>

        </>

    )
}
export default Signup;