import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
    // Define your styles here
    inputText: {
        width: '100%',
        padding: '4px 10px',
    },

    inputField: {
        padding: 0,
        minHeight: '46px',
        maxHeight: '46px',
        border: '1px solid #981B46',
        margin: '6px 0',
        width: '100%',
        "& input": {
            maxHeight: '46px',
            minHeight: '46px',
            padding: '0 13px',
        }
    },
    selectField: {
        padding: 0,
        minHeight: '46px',
        maxHeight: '46px',
        border: '1px solid #981B46',
        margin: '6px 0',
        width: '100%',
        "& input": {
            maxHeight: '46px',
            minHeight: '46px',
            padding: '0 13px',
        }
    },

    bigButton: {
        borderRadius: '4px !important',
        border: '1px solid #981B46 !important',
        background: '#FFF !important',
        boxShadow: '0px 0px 20px 0px rgba(0, 0, 0, 0.12) !important',
        color: '#981B46 !important',
        fontFamily: 'Lato !important',
        fontSize: '14px !important',
        fontStyle: 'normal !important',
        fontWeight: '700 !important',
        lineHeight: 'normal !important',
        width: '100% !important',
        minHeight: '46px',
        margin: '6px 0 !important',
        "&:hover": {
            background: '#981B46 !important',
            color: '#FFF !important',
        }
    },
    SignUpGoogle: {
        borderRadius: '4px !important',
        background: '#FFF !important',
        boxShadow: '0px 0px 20px 0px #0000001F',
        fontFamily: 'Lato !important',
        fontSize: '14px !important',
        color: 'black !important',
        fontStyle: 'normal !important',
        fontWeight: '700 !important',
        lineHeight: 'normal !important',
        width: '100% !important',
        minHeight: '46px',
        margin: '6px 0 !important',
        textTransform: 'capitalize !important',
        "& img": {
            margin: '0px 10px',
        },
        "&:hover": {
            background: '#981B46 !important',
            color: '#FFF !important',
        }
    },

    SignUpFacebook: {
        borderRadius: '4px !important',
        background: '#0DA8FF !important',
        boxShadow: '0px 0px 20px 0px #0000001F',
        fontFamily: 'Lato !important',
        fontSize: '14px !important',
        color: 'white !important',
        fontStyle: 'normal !important',
        fontWeight: '700 !important',
        lineHeight: 'normal !important',
        width: '100% !important',
        minHeight: '46px',
        margin: '6px 0 !important',
        textTransform: 'capitalize !important',
        "& img": {
            margin: '0px 10px',
        },
        "&:hover": {
            background: '#0076b8 !important',
            color: '#FFF !important',
        }
    },
    bigButtonLink: {
        borderRadius: '4px !important',
        border: '1px solid #981B46 !important',
        background: '#FFF !important',
        boxShadow: '0px 0px 20px 0px rgba(0, 0, 0, 0.12) !important',
        color: '#981B46 !important',
        fontFamily: 'Lato !important',
        fontSize: '14px !important',
        fontStyle: 'normal !important',
        fontWeight: '700 !important',
        lineHeight: 'normal !important',
        width: '100% !important',
        minHeight: '46px',
        display: 'inline-flex',
        borderRadius: '4px !important',
        justifyContent: 'center',
        alignItems: 'center',
        textTransform: 'uppercase',
        textDecoration: 'none',
        margin: '6px 0 !important',
        "&:hover": {
            background: '#981B46 !important',
            color: '#FFF !important',
        }
    },
    whiteLinkButton: {
        fontFamily: 'Lato',
        fontSize: '18px',
        fontWeight: 600,
        lineHeight: '24px',
        letterSpacing: '0em',
        textAlign: 'center',
        color: '#8D1E46',
        background: '#FFFFFF',
        padding: '10px 24px 10px 24px',
        textDecoration: 'none',
        borderRadius: '5px',
    }
}));

export default useStyles;
