import React, { useState } from "react";
import { Grid, Button } from '@mui/material';

import useStyles from './styles';

import { InputTextField, SelectField } from "../../components/common/formfields/Forms";

function Signup() {
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
                debugger
                console.warn(data);
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
                        <Grid item md={12} lg={12} sm={12}>
                            <InputTextField type="email" id="email" label={"Email"}></InputTextField>
                        </Grid>
                    </Grid>
                </Grid>

                <Grid row>
                    <Grid container>
                        <Grid item md={12} lg={12} sm={12}>
                            <InputTextField type="password" id="email" label={"Password"}></InputTextField>
                        </Grid>
                    </Grid>
                </Grid>


                <Grid row>
                    <Grid container>
                        <Grid item md={12} lg={12} sm={12}>
                            <SelectField options={experienceOptions}></SelectField>
                        </Grid>
                    </Grid>
                </Grid>


                <Grid row>
                    <Grid container>
                        <Grid item md={12} lg={12} sm={12}>
                            <SelectField placeholder={"Business"} options={experienceOptions}></SelectField>
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