import React, { useState } from "react";
import { Grid, Button } from '@mui/material';
import useStyles from './styles';
import LogoDark from '../../images/common/logoDark.svg';
import { Link } from 'react-router-dom';

import { InputTextField, BigButton, SignUpGoogle, SignUpFacebook } from "../../components/common/formfields/Forms";



function Login() {

    const classes = useStyles();
    const [state, setState] = useState([]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setState((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    }


    const handleSubmit = async () => {
        const result = await fetch('http://localhost:5000/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(state)
        });

        if (result) {
            const data = await result.json();
            localStorage.setItem('user', JSON.stringify(data));
        } else {
            console.error('HTTP Error:', result.status);
        }
    };

    return (
        <>

            <Grid container className={classes.whitePaper}>

                <Grid row>
                    <Grid container justifyContent={"center"}>

                        <div className={classes.logoArea}>
                            <img src={LogoDark} />
                        </div>

                    </Grid>
                </Grid>

                <Grid row>
                    <Grid container>
                        <div className={classes.getStartedContent}>
                            <h2>SIGN IN</h2>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>
                        </div>

                    </Grid>
                </Grid>

                <div className={classes.formContainer}>

                    <Grid row>
                        <Grid container>
                            <Grid item md={12} lg={12} sm={12}>
                                <InputTextField
                                    type="text"
                                    id="user"
                                    name="user"
                                    label={"User Name"}
                                    value={state.userName}
                                    onChange={handleChange}
                                    placeholder={"Email"}
                                />
                            </Grid>

                            <Grid item md={12} lg={12} sm={12}>
                                <InputTextField
                                    type="email"
                                    id="email"
                                    name="email"
                                    label={"Email"}
                                    value={state.email}
                                    onChange={handleChange}
                                    placeholder={"Password"}
                                />
                            </Grid>
                        </Grid>
                    </Grid>



                    <Grid row>
                        <Grid item md={12} lg={12} sm={12}>
                            <Grid row className={classes.authBtn}>
                                <BigButton
                                    onClick={handleSubmit}
                                    value={"Sign In"}
                                />
                            </Grid>
                        </Grid>
                    </Grid>

                    <Grid row>
                        <SignUpGoogle
                            onClick={handleSubmit}
                            value={"Sign via Google"} />
                    </Grid>


                    <Grid row>
                        <SignUpFacebook
                            onClick={handleSubmit}
                            value={"Sign via Facebook"} />
                    </Grid>

                    <Grid row>
                        <p className={classes.accountMsg}>Don’t have an Account? <Link to="/signup">Signup</Link></p>
                    </Grid>

                </div>


            </Grid>
        </>

    )
}
export default Login;