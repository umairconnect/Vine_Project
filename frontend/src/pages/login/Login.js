import React, { useState } from "react";
import { Grid, Button } from '@mui/material';
import useStyles from './styles';

import { InputTextField } from "../../components/common/formfields/Forms";



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

            <Grid className={classes.container} >
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
                    <Button onClick={handleSubmit}>Log In</Button>
                </Grid>
            </Grid>
        </>

    )
}
export default Login;