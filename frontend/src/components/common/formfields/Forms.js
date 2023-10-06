import { TextField, Select, MenuItem } from '@mui/material';

import useStyles from './styles';
import { useEffect } from 'react';

function InputTextField({ type, id, value, label, ...props }) {
    const classes = useStyles();
    return (
        <TextField
            id="outlined-basic"
            type={type}
            label={label}
            value={value}
            className={classes.inputText}>

        </TextField>
    )
}

function SelectField({ options, placeholder, ...props }) {
    const classes = useStyles();
    useEffect(() => {
        debugger
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