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
  }

}));

export default useStyles;
