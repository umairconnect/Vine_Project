import React, { useState, useEffect } from "react";
import { Grid, Button } from '@mui/material';

import useStyles from './styles';

import { InputTextField, SelectField } from "../../components/common/formfields/Forms";
import { useNavigate } from "react-router-dom";

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

    useEffect(()=>{
        if (auth) {
            navigate('/')
        }
    })

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
            <Grid className={classes.container} >
                <Grid row>
                    <Grid container spacing={2}>
                        <Grid item md={6} lg={6} sm={6}>
                            <InputTextField
                                type="text"
                                id="fName"
                                name="fName"
                                value={state.fName}
                                onChange={handleChange}
                                label={"First Name"}
                            />
                        </Grid>
                        <Grid item md={6} lg={6} sm={6}>
                            <InputTextField
                                type="text"
                                id="lName"
                                name="lName"
                                label={"Last name"}
                                onChange={handleChange}
                                value={state.lName}
                            />
                        </Grid>
                    </Grid>
                </Grid>

                <Grid row>
                    <Grid container spacing={2}>
                        <Grid item md={6} lg={6} sm={6}>
                            <InputTextField
                                type="text"
                                id="user"
                                name="user"
                                label={"User Name"}
                                value={state.userName}
                                onChange={handleChange}
                            />
                        </Grid>

                        <Grid item md={6} lg={6} sm={6}>
                            <InputTextField
                                type="email"
                                id="email"
                                name="email"
                                label={"Email"}
                                value={state.email}
                                onChange={handleChange}
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
                                placeholder={"Business"}
                                options={experienceOptions}
                                value={state.business}
                                id="business"
                                onChange={handleChange}
                            />
                        </Grid>
                    </Grid>
                </Grid>

                <Grid row>
                    <Button onClick={handleSubmit}>Sign In</Button>
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