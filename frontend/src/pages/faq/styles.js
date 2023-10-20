import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({

      pageHeader: {
            textAlign: 'center',
            justifyContent: 'center',
            padding: '55px',
            flexFlow: 'column !important',
            alignItems: 'center',
            boxShadow: '0px 4px 20px 0px #00000033',
            marginBottom: '20px',
        "& h1": {
            fontFamily: 'Lato',
            fontSize: '44px',
            fontWeight: 700,
            letterSpacing: '0em',
            textAlign: 'left',
            color: '#94214A',
               
        },
        "& p": {
            maxWidth: '60%',
            fontFamily: 'Lato',
            fontSize: '18px',
            fontWeight: 400,
            lineHeight: '27px',
            letterSpacing: '0em',
            textAlign: 'center',
            color: '#94214A',
        }
      },
      commonAccordion: {
        padding: '60px 0',
        "& .MuiAccordion-root": {
            boxShadow: '0px 4px 20px 0px #00000026',
            border: 0,
            padding: '10px',
            marginBottom: '12px',
            color: '#8C2046',
        },
        "& .MuiSvgIcon-root": {
            background: '#94214A',
            color: 'white',
            borderRadius: '50%',
            padding: '8px',
        },
        "& .MuiCollapse-root": {
            textAlign: 'left',
        },
        "& h2": {
            marginTop: 0,
        }
      }
}));

export default useStyles;
