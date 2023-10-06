import { TextField, Select } from '@mui/material';

import useStyles from './styles';

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

function SelectField({ }) {
    const classes = useStyles();
    return (
        <Select className={classes.inputText}>
            <option>
                dsds
            </option>
        </Select>
    )
}

export { InputTextField, SelectField };