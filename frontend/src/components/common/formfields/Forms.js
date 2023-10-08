import { TextField, Input, OutlinedInput, Select, MenuItem, Button } from '@mui/material';
import { Link } from 'react-router-dom';

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
        <Select className={classes.selectField} id={id} name={name} onChange={onChange} value={value} >
            {/* {placeholder ?
                <MenuItem disabled>
                    <em>{placeholder}</em>
                </MenuItem> : ""} */}

            {options.map((item, i) => {
                return (
                    <MenuItem value={item.value}>
                        {item.value}
                    </MenuItem>
                )
            })}

        </Select>
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

export { InputTextField, SelectField, BigButton, BigButtonLink, WhiteButton, WhiteButtonLink };