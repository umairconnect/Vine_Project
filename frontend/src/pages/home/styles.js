import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
    firstSection1: {
        textAlign: 'left',
        margin: '100px',
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
       textAlign: 'right'
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
        gap: '50px',
        '& :nth-child(4)': {
            height: '500px',

           '& img': {
              padding: '90px 70px 0px 70px'
           }

        }
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
    },
    thirdSection: {
        backgroundColor: '#F4F0F1',
        backgroundImage: 'url("../../images/thirdSectionVector.svg")',
    },
    thirdSectionImages: {
        width: '500px',
        padding: '60px'
    },
    thirdSectionContent: {
        textAlign: 'left',
        padding: '60px',

        '& h1': {
            fontSize: '40px',
            padding: '6px'
        },
        '& p': {
            fontSize: '18px',
            padding: '6px'
        }
    },
    fourthSectionItems: {
        display: 'flex',
        flexDirection: 'row',
        gap: '50px'
    },
    cardItem: {
        flexDirection: 'column',
        border: '1px hidden aqua',
        borderRadius: '4px',
        boxShadow: '0px 0px 10px aqua'
    }
    
}));

export default useStyles;
