import React, { useState } from "react";
import { Grid, Button } from '@mui/material';
import useStyles from './styles';
import LogoDark from '../../images/common/logoDark.svg';
import { Link, useNavigate } from 'react-router-dom';

import { InputTextField, BigButton, SignUpGoogle, SignUpFacebook } from "../../components/common/formfields/Forms";



function Login() {

    const classes = useStyles();
    const [state, setState] = useState([]);
    const [error, setError] = useState({});
    const navigate = useNavigate();
    const handleChange = (e) => {
        const { name, value } = e.target;
        setState((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    }


    const Validate = (errorList) => {

        if (!state.email) {
            setError(prevState => ({
                ...prevState,
                emailError: true
            }));
            errorList.push(true);
        }
        else {
            setError(prevState => ({
                ...prevState,
                emailError: false
            }));
        }

        if (!state.password) {
            setError(prevState => ({
                ...prevState,
                passwordError: true
            }));
            errorList.push(true);
        }
        else {
            setError(prevState => ({
                ...prevState,
                passwordError: false
            }));
        }
    }


    const handleSubmit = async () => {
        let errorList = [];
        Validate(errorList);

        if (errorList.length < 1) {

            const result = await fetch('http://localhost:5000/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(state)
            });
            debugger
            console.log(result);

            if (result.status === 401) {
                setError({ ...error, notfoundError: true });
            } else if (result.status === 402) {
                setError({ ...error, passNotFoundErr: true, notfoundError: false });

            } else if (result.status === 200) {
                const data = await result.json();
                localStorage.setItem('user', JSON.stringify(data));
                navigate('/')
                setError({
                    ...error,
                    passNotFoundErr: false,
                    notfoundError: false
                });
            } else {
                console.error('HTTP Error:', result.status);
            }

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
                                    type="email"
                                    id="email"
                                    name="email"
                                    label={"User email"}
                                    value={state.email}
                                    onChange={handleChange}
                                    placeholder={"Email"}
                                />
                                {error.emailError && !state.email ?
                                    <span className="error_msg">Please write user email..</span>
                                    : error.notfoundError ?
                                        <span className="error_msg">User not found..</span>
                                        : ''}
                            </Grid>

                            <Grid item md={12} lg={12} sm={12}>
                                <InputTextField
                                    type="password"
                                    id="password"
                                    name="password"
                                    label={"Password"}
                                    value={state.password}
                                    onChange={handleChange}
                                    placeholder={"Password"}
                                />
                                {error.passwordError && !state.password ?
                                    <span className="error_msg">Please write password..</span>
                                    : error.passNotFoundErr ?
                                        <span className="error_msg">Wrong password..</span>
                                        : ''}
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