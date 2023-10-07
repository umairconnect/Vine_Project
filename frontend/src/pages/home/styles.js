import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
    firstSection1: {
        textAlign: 'left',
        margin: '60px',
        paddingLeft: '35px',
        '& h1': {
          fontWeight: '900',
          fontSize: '48px'
        },
        '& p': {
         fontSize: '28px'
        }
    },
    commonBtn: {
        marginTop: '30px',
        backgroundColor: '#981B46',
        padding: '10px 24px 10px 24px',
        fontSize: '14px',
        '&:hover': {
            backgroundColor: '#7B1B3E'
        }
    },
    firstSection2: {
       justifyContent: 'flex-end'
    },
    secondSection: {
        display: 'flex',
        flexDirection: 'column',
        '& h1': {
            justifyContent: 'center',
            padding: '60px',
           
        },
        '& button': {
            margin: '40px'
        }
    },

    secondSectionItems: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        gap: '50px'
    },

    drinkItem: {
       border: '1px hidden aqua',
       borderRadius: '4px',
       boxShadow: '0px 0px 10px aqua',
    
        '& p': {
          fontWeight: 'bold',
          fontSize: '24px',
          padding: '0px'
      
        },
        '& img': {
            width: '180px',
            padding: '60px 40px 0px 40px'
        }
      }
}));

export default useStyles;
