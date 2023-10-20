import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
    headerContainer: {
        padding: '20px 40px'
    },
    container: {
        padding: '40px 0',
        justifyContent: 'center',
    },
    pageHeader: {
        textAlign: 'center',
        justifyContent: 'center',
        padding: '25px',
        flexFlow: 'column !important',
        alignItems: 'center',
        boxShadow: '0px 4px 20px 0px #00000033',

        "& h1": {
            fontFamily: 'Lato',
            fontSize: '44px',
            fontWeight: 700,
            lineHeight: '48px',
            letterSpacing: '0em',
            textAlign: 'left',
            color: '#94214A',
            margin: 0,
        },
        "& p": {
            fontFamily: 'Lato',
            fontSize: '18px',
            fontWeight: 400,
            lineHeight: '27px',
            letterSpacing: '0em',
            textAlign: 'center',
            color: '#94214A',
            margin: 0,
        }
    },
    userList: {
        width: '100%',
        padding: '20px 0',
        borderBottom: '1px solid #e4e4e4',
    },
    userDetails: {
        display: 'flex',
        textAlign: 'left',
        alignItems: 'center',
        "& .userInfo": {
            padding: '0 12px',
        },
        "& h3": {
            margin: 0,
        },
        "& p": {
            margin: 0,
            fontFamily: 'Lato',
            fontSize: '16px',
            fontWeight: 400,
            lineHeight: '20px',
            letterSpacing: '0em',
            textAlign: 'left',
        }
    },
    chatcontainer: {
        width: '100%',
        borderTop: '1px solid #e4e4e4',
        paddingBottom: '25px',
    },
    chatBtn: {
        backgroundColor: '#981B46 !important',
        boxShadow: '0px 4px 20px 0px #00000026',
        color: 'white !important',
        minWidth: '150px !important',
        textTransform: 'capitalize !important',
        fontWeight: 'bold !important',
    },
    backBtn: {
        color: 'white !important',
        backgroundColor: '#94214a !important',
    },
    chatSender: {
        backgroundColor: '#891E44',
        boxShadow: '0px 4px 20px 0px #00000033',
    },
    chatField: {
        display: 'flex',
        justifyContent: 'center',
        background: '#60102d',
        margin: '14px auto',
        borderRadius: '60px',
        width: '70%',
        "& .actionIcon": {
            background: '#D9D9D9',
            textAlign: 'center',
            borderRadius: '50%',
            width: '35px',
            height: '35px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#94214A',
            margin: 'auto',
            cursor: 'pointer',
        }
    },
    chatInputField: {
        background: '#60102D',
        width: '100%',
        "& fieldset": {
            border: 0,
            color:'white',
        },
        "& input": {
            padding: '14px',
            color:'white',
        },
       
    },
    chatResult: {
        minHeight: '270px',
        maxHeight: '270px',
        overflow: 'auto',
        padding: '20px 0px',
    },
    sender: {
        display: 'flex',
        alignItems: 'center',
    },
    senderMessage: {
        background: '#981B46',
        color: 'white',
        padding: '6px 15px',
        margin: '0 10px',
        borderRadius: '10px 10px 10px 0px',
    },
    reciever: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'right',
    },
    recieverMessage: {
        background: '#981B46',
        color: 'white',
        padding: '6px 15px',
        margin: '0 10px',
        borderRadius: '10px 10px 10px 0px',
    },
 
}));

export default useStyles;
