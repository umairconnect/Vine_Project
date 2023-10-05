import React from "react";
import { Grid, Button } from '@mui/material';
import useStyles from './styles';

import { InputTextField } from "../../components/common/formfields/Forms";

const classes = useStyles();

function Login() {
    return (
        <>
            <Grid row spacing={1}>
                <Grid row>
                    <InputTextField type="text" id="name" label={"User name"}></InputTextField>
                </Grid>
                <Grid row>
                    <InputTextField type="text" id="name" label={"Password"}></InputTextField>
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
export default Login;