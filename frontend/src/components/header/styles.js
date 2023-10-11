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
    color: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'right',
    fontSize: '18px',
    fontWeight: 600,
    textDecoration: 'none',
    "& img": {
      margin: '0 10px',
      background: 'linear-gradient(180deg, #53001E 0%, #7E0C35 100%)',
      height: '25px',
      width: '25px',
      padding: '7px',
      borderRadius: '50px',
    }
  }

}));

export default useStyles;
