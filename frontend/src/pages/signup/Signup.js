import React, { useState, useEffect } from "react";
import { Grid, Button } from '@mui/material';

import useStyles from './styles';

import { InputTextField, SelectField, BigButton, SignUpFacebook, SignUpGoogle } from "../../components/common/formfields/Forms";
import { useNavigate } from "react-router-dom";
import LogoDark from '../../images/common/logoDark.svg';
import { Link } from 'react-router-dom';
import { GoogleLogin } from 'react-google-login';


function Signup() {
    const classes = useStyles();
    const [state, setState] = useState([]);

    const [error, setError] = useState({})

    const auth = localStorage.getItem('user')
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setState((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    }

    useEffect(() => {
        if (auth) {
            navigate('/')
        }
    })
    const responseGoogle = (response) => {
        const idToken = response.tokenId;
        debugger
        console.log(idToken)
        // Send the `idToken` to your Node.js server for registration
        fetch('/auth/google-signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ idToken }),
        })
            .then((response) => response.json())
            .then((data) => {
                // Handle the response from the server, e.g., set user session, redirect, etc.
            })
            .catch((error) => {
                // Handle authentication error
                console.error(error);
            });
    };



    const Validate = (errorList) => {

        if (!state.fName) {
            setError(prevState => ({
                ...prevState,
                fNameError: true
            }));
            errorList.push(true);
        }
        else {
            setError(prevState => ({
                ...prevState,
                fNameError: false
            }));
        }

        if (!state.lName) {
            setError(prevState => ({
                ...prevState,
                lNameError: true
            }));
            errorList.push(true);
        }
        else {
            setError(prevState => ({
                ...prevState,
                lNameError: false
            }));
        }

        if (!state.email) {
            setError(prevState => ({
                ...prevState,
                emailEmpty: true
            }));
            errorList.push(true);
        }
        else {
            setError(prevState => ({
                ...prevState,
                emailEmpty: false
            }));
        }

    }
    const handleSubmit = async () => {

        let errorList = [];
        Validate(errorList);

        if (errorList.length < 1) {
            const result = await fetch('http://localhost:5000/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(state)
            });

            if (result.status === 200) {
                const data = await result.json();
                localStorage.setItem('user', JSON.stringify(data));
                navigate('/')
                setError({ ...error, emailError: false });
            } else if (result.status === 400) {
                setError({ ...error, emailError: true });
            } else {
                console.error('HTTP Error:', result.status);
            }
        }

    };




    const selectGoal = [
        {
            value: "",
            label: "Experience"
        },
        {
            value: "Invester",
            label: "Invester"
        },
        {
            value: "Invester2",
            label: "Invester2"
        }
    ]

    const experienceOptions = [
        {
            value: "",
            label: "Experience"
        },
        {
            value: "Invester",
            label: "Invester"
        },
        {
            value: "Invester2",
            label: "Invester2"
        }
    ]
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
                            <h2>SIGN UP</h2>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>
                        </div>

                    </Grid>
                </Grid>

                <div className={classes.formContainer}>
                    <Grid row>
                        <Grid container spacing={2}>
                            <Grid item md={6} lg={6} sm={6}>
                                <InputTextField
                                    type="text"
                                    id="fName"
                                    name="fName"
                                    value={state.fName}
                                    onChange={handleChange}
                                    placeholder={"First name"}
                                />
                                {error.fNameError ?
                                    <span className="error_msg">Please write first name..</span>
                                    : ''}

                            </Grid>
                            <Grid item md={6} lg={6} sm={6}>
                                <InputTextField
                                    type="text"
                                    id="lName"
                                    name="lName"
                                    onChange={handleChange}
                                    value={state.lName}
                                    placeholder={"Last name"}
                                />
                                {error.lNameError ?
                                    <span className="error_msg">Please write last name..</span>
                                    : ''}
                            </Grid>
                        </Grid>
                    </Grid>

                    <Grid row>
                        <Grid container spacing={2}>

                            <Grid item md={12} lg={12} sm={12}>
                                <InputTextField
                                    type="email"
                                    id="email"
                                    name="email"
                                    label={"Email"}
                                    value={state.email}
                                    onChange={handleChange}
                                    placeholder={"Email"}
                                />

                                {error.emailError ?
                                    <span className="error_msg">Email is already exist...</span> :
                                    error.emailEmpty ?
                                        <span className="error_msg">Please write your email...</span> :
                                        ''}

                            </Grid>
                        </Grid>
                    </Grid>

                    <Grid row>
                        <Grid container>
                            <Grid item md={12} lg={12} sm={12}>
                                <InputTextField
                                    type="password"
                                    id="password"
                                    label={"Password"}
                                    name="password"
                                    value={state.password}
                                    onChange={handleChange}
                                    placeholder={"Password"}
                                />
                            </Grid>
                        </Grid>
                    </Grid>

                    <Grid row>
                        <Grid container>
                            <Grid item md={12} lg={12} sm={12}>
                                <SelectField
                                    options={experienceOptions}
                                    name="experience"
                                    id="experience"
                                    value={state.experience}
                                    onChange={handleChange}
                                    defualtValue={"Experience"}
                                />
                            </Grid>
                        </Grid>
                    </Grid>

                    <Grid row>
                        <Grid container>
                            <Grid item md={12} lg={12} sm={12}>
                                <SelectField
                                    options={selectGoal}
                                    value={state.business}
                                    id="business"
                                    onChange={handleChange}
                                    placeholder={"Select business"}
                                />
                            </Grid>
                        </Grid>
                    </Grid>

                    <Grid row>
                        <BigButton
                            onClick={handleSubmit}
                            value={"Sign Up"}
                        />


                    </Grid>


                    <Grid row>
                     

                        <GoogleLogin
                            clientId="587694116558-vrfp6qen3jjrfma0euk7072cfcbht8br.apps.googleusercontent.com"
                            buttonText="Sign Up with Google"
                            onSuccess={responseGoogle}
                            onFailure={responseGoogle}
                            cookiePolicy={'single_host_origin'}
                            className={classes.SignUpGoogle}
                        />
                    </Grid>


                    <Grid row>
                        <SignUpFacebook
                            onClick={handleSubmit}
                            value={"Sign via Facebook"} />
                    </Grid>


                    <Grid row>
                        <p className={classes.accountMsg}>Already have an Account? <Link to="/login">Login</Link></p>
                    </Grid>
                </div>
            </Grid>

        </>

    )
}
export default Signup;