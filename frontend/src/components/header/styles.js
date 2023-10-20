import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  inputText: {
    backgroundColor: 'green',
  },
  header: {
    "& header": {
      boxShadow: 'none',
      background: '#94214A',
    }
  },
  navLinks: {
    color: 'white',
    textDecoration: 'none',
    "& a": {
      fontFamily: 'Lato',
      fontSize: '18px',
      fontWeight: 600,
      lineHeight: '24px',
      letterSpacing: '0em',
      textAlign: 'left',
      color: 'white',
      margin: '0 20px',
      textDecoration: 'none',
    }
  },
  logsLink: {
    color: 'white !important',
    display: 'flex !important',
    alignItems: 'center !important',
    justifyContent: 'right !important',
    fontSize: '18px !important',
    fontWeight: '600 !important',
    textDecoration: 'none !important',
    textTransform: 'capitalize !important',
    "& img": {
      margin: '0 10px',
      background: 'linear-gradient(180deg, #53001E 0%, #7E0C35 100%)',
      height: '25px',
      width: '25px',
      padding: '7px',
      borderRadius: '50px',
    },
  
  },
  navDropDown: {
    "& a": {
      textDecoration: 'none',
    }
  }

}));

export default useStyles;
