import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
    firstSection1: {
        textAlign: 'left !important',
        margin: '51px 145px 31px 97px !important',
        paddingLeft: '10px',
        '& h1': {
          fontWeight: '900 !important',
          fontSize: '48px !important'
        },
        '& p': {
         fontSize: '28px !important'
        }
    },

    commonBtn: {
        marginTop: '30px !important',
        backgroundColor: '#981B46 !important',
        padding: '10px 24px 10px 24px !important',
        fontSize: '14px !important',
        '&:hover': {
            backgroundColor: '#7B1B3E !important'
        }
    },

    firstSection2: {
       textAlign: 'right',
       '& img': {
         width: '670px'
       }
    },

    secondSection: {
        display: 'flex',
        flexDirection: 'column !important',
        padding: '20px',
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
        backgroundImage: "url('../images/thirdSectionVector.svg') !important",
    },

    thirdSectionImages: {
        width: '500px',
        padding: '60px'
    },

    thirdSectionContent: {
        textAlign: 'left',
        padding: '60px',

        '& h1': {
            fontSize: '36px',
            padding: '6px'
        },
        '& p': {
            fontSize: '18px',
            padding: '6px'
        }
    },


    cardItem: {
        

        border: '1px hidden aqua',
        borderRadius: '4px',
        boxShadow: '0px 0px 10px aqua'
    },

    fourthSectionLower: {
        
        textAlign: 'left',
         
        '& p': {
           padding: '10px',
           margin: '10px'
        }
    }
    
}));

export default useStyles;
