import React, { useState, useEffect } from "react";
import { Grid, Button } from '@mui/material';

import useStyles from './styles';

import { InputTextField, SelectField, BigButton, SignUpFacebook, SignUpGoogle } from "../../components/common/formfields/Forms";
import { useNavigate } from "react-router-dom";
import LogoDark from '../../images/common/logoDark.svg';
import { Link } from 'react-router-dom';


function Signup() {
    const classes = useStyles();
    const [state, setState] = useState([]);

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

    const handleSubmit = async () => {
        if (state.fName.value == '') {

        }
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

    const experienceOptions = [
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
                                {/* {fNameError || state.fName == '' ?
                                    <span className="error_msg">Please right full name here..</span>
                                 : ''} */}

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
                            </Grid>
                        </Grid>
                    </Grid>

                    <Grid row>
                        <Grid container spacing={2}>
                            {/* <Grid item md={6} lg={6} sm={6}>
                            <InputTextField
                                type="text"
                                id="user"
                                name="user"
                                label={"User Name"}
                                value={state.userName}
                                onChange={handleChange}
                            />
                        </Grid> */}

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
                                />
                            </Grid>
                        </Grid>
                    </Grid>

                    <Grid row>
                        <Grid container>
                            <Grid item md={12} lg={12} sm={12}>
                                <SelectField
                                    options={experienceOptions}
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
                        <p className={classes.accountMsg}>Already have an Account? <Link to="/login">Login</Link></p>
                    </Grid>
                </div>
            </Grid>

        </>

    )
}
export default Signup;