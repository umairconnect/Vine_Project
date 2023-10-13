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
    aboutContainer: {
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        padding: '30px 30px 0px 30px',
    },
    commonBtn: {
        padding: '10px 24px 10px 24px !important',
        fontSize: '16px !important',
        backgroundColor: '#981B46 !important',
        textTransform: 'capitalize !important',
        fontWeight: '600 !important',
        '&:hover': {
            backgroundColor: '#7B1B3E !important'
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
        boxShadow: '0px 4px 40px 0px #00000026',
        borderRadius: '4px',
        minWidth: '350px',
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
            fontSize: '21px',
            padding: '6px',
            lineHeight: '33px'
        }
    },
    fourthSectionItems: {
    
        display: 'flex !important',
        flexDirection: 'column !important',
        padding: '30px',
    },
    cardItem: {
        flexDirection: 'column',
        border: '1px hidden aqua',
        borderRadius: '4px',
        boxShadow: '0px 4px 40px 0px #00000026',
        minHeight: '300px',
        margin: '30px',
        padding: '30px',
    },

    container: {
        padding: '60px',
    },

    fourthSectionlower: {

        textAlign: 'left',

        '& p': {
            padding: '10px',
            margin: '10px'
        }
    },

    fifthSection: {
        background: 'linear-gradient(to top, #6A1836 0%, #94214A 100%) !important',
        display: 'flex',
        margin: '50px 0',
        flexDirection: 'row !important'
    },
    fifthSectionContent: {
        textAlign: 'left',
        width: '500px',
        padding: '85px 200px 0px 40px',
        '& p': {
            color: 'white',
            padding: '6px',
            fontSize: '21px',
            lineHeight: '33px',
        },
        '& h1': {
            fontSize: '40px',
            color:'white',
            lineHeight: '33px',
        }
        
    },
    fifthSectionForm: {
        padding: '20px',
        backgroundColor: '#631732',
        border: '1px hidden #631732',
        borderRadius: '4px',
        margin: '40px !important',
        '& h3': {
            color: 'white'
        },
        '& button': {
            width: '100%',
            border: 'none',
            backgroundColor: '#D9D9D9',
            color: '#530722',
            fontWeight: '600',
            textTransform: 'capitalize',
            padding: '12px',
        },
        '& button:hover': {
            backgroundColor: '#CCCCCC'
        },
        '& input, textarea': {
            color: 'white',
            padding: '12px',
        },

    },
    contactInput: {
        width: '100%',
        "& .MuiInputBase-root": {
            padding: 0,
            "& textarea": {
                padding: '8px 11px',
            }
        },
        "& input": {
            background: '#AB2B58',
            color: 'white',
            marginBottom: '18px',
            borderRadius: '5px'
        },
        "& fieldset": {
            border: 0,
        },
        '& textarea': {
            background: '#AB2B58',
            color: 'white',
            marginBottom: '18px',
            borderRadius: '5px'
        }
    }


}));

export default useStyles;