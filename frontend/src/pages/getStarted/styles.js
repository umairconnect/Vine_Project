import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
    // Define your styles here
    whitePaper: {
        textAlign: 'center',
        display: 'flex !important',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundImage: 'url(./../images/common/whiteBg.svg)',
        flexFlow: 'column !important',
    },
    container: {
        maxWidth: '60%',
        margin: 'auto',
    },
    getStartedContent: {
        maxWidth: '60%',
        margin: 'auto',
        "& h2": {
            fontFamily: 'Lato',
            fontSize: '20px',
            fontWeight: 700,
            lineHeight: '24px',
            letterSpacing: '0em',
            color: '#2A2927',
        },
        "& p": {
            fontFamily: 'Lato',
            fontSize: '16px',
            fontWeight: 400,
            lineHeight: '20px',
            letterSpacing: '0em',
            textAlign: 'center',
            color: '#7A7A7A',
            margin: '25px 0',
        } 
    },
    logoArea: {
        padding: '0px',
        margin: '20px 0 0px 10px',
        "& img": {
            maxWidth: '410px',
            width: '100%',
            margin: '10px 0',
        }
    },
    authBtn: {
        maxWidth: '80%',
        margin: 'auto',
        
    }
}));

export default useStyles;
