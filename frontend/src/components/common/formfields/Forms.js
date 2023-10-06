import { TextField, Select, MenuItem } from '@mui/material';

import useStyles from './styles';
import { useEffect } from 'react';

function InputTextField({ type, id, name, onChange, value, label, ...props }) {
    const classes = useStyles();
    return (
        <TextField
            id="outlined-basic"
            type={type}
            label={label}
            value={value}
            name={name}
            className={classes.inputText}
            onChange={onChange}>

        </TextField>
    )
}

function SelectField({ options, placeholder, ...props }) {
    const classes = useStyles();
    useEffect(() => {
       
        console.log(options)
    })
    return (
        <Select className={classes.inputText}>
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

export { InputTextField, SelectField };