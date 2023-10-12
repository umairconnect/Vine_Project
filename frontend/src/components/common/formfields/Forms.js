import {
    TextField, Input, OutlinedInput,
    Select, MenuItem, Button, FormControl
} from '@mui/material';
import { Link } from 'react-router-dom';
import GoogleIcon from './../../../images/icons/googleIcon.svg';
import FaceBookIcon from './../../../images/icons/facebookIcon.svg';


import useStyles from './styles';
import { useEffect } from 'react';

function InputTextField({ type, id, name, onChange, value, placeholder, label, ...props }) {
    const classes = useStyles();
    return (
        <OutlinedInput
            id="outlined-basic"
            type={type}
            value={value}
            name={name}
            className={classes.inputField}
            onChange={onChange}
            placeholder={placeholder}>
        </OutlinedInput>
    )
}

function SelectField({ id, name, onChange, value, options, placeholder, ...props }) {
    const classes = useStyles();
    return (

        <Select
            className={classes.selectField}
            id={id}
            name={name}
            onChange={onChange}
            value={value}
            defaultEmpty
        >
 
            {options.map((item, i) => {
                return (
                    <MenuItem value={item.value}>
                        {item.label}
                    </MenuItem>
                )
            })}
        </Select>
    )
}

function SignUpGoogle({ onClick, value, ...props }) {
    const classes = useStyles();
    return (
        <Button
            onClick={() => onClick()}
            className={classes.SignUpGoogle}>
            <img src={GoogleIcon} /> {value}
        </Button>
    )
}

function SignUpFacebook({ onClick, value, ...props }) {
    const classes = useStyles();
    return (
        <Button
            onClick={() => onClick()}
            className={classes.SignUpFacebook}>
            <img src={FaceBookIcon} /> {value}
        </Button>
    )
}


function BigButton({ onClick, value, ...props }) {
    const classes = useStyles();
    return (
        <Button
            onClick={() => onClick()}
            className={classes.bigButton}>
            {value}
        </Button>
    )
}

function BigButtonLink({ value, link, ...props }) {
    const classes = useStyles();
    return (


        <Link
            to={link}
            className={classes.bigButtonLink}>
            {value}
        </ Link>

    )
}

function WhiteButton({ onClick, value, ...props }) {
    const classes = useStyles();
    return (
        <Button
            onClick={() => onClick()}
            className={classes.whiteLinkButton}>
            {value}
        </Button>
    )
}
function WhiteButtonLink({ link, value, ...props }) {
    const classes = useStyles();
    return (
        <Link
            to={link}
            className={classes.whiteLinkButton}>
            {value}
        </Link>
    )
}

export {
    InputTextField, SelectField, BigButton, BigButtonLink,
    WhiteButton, WhiteButtonLink, SignUpGoogle, SignUpFacebook
};