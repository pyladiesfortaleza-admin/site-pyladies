import './Footer.scss'
import { Container, Grid, TextField, Chip, Stack} from "@mui/material";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { faGithub, faInstagram, faLinkedinIn, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const theme = createTheme({
  palette: {
    primary: {
      main: '#ffffff',
    },
  },
});

const Footer = () => {
  return (
    <footer>
      <Container>
        <Grid container direction="row" justifyContent="space-around" alignItems="center">
          
          <Grid item className='gridItem'>
            <div className='socialMedia'>
              <a href='https://github.com/pyladiesfortaleza'><FontAwesomeIcon className='socialMediaIcon' icon={faGithub} /></a>
            </div>
            <div className='socialMedia'>
              <a href='https://www.instagram.com/pyladiesfortaleza/'><FontAwesomeIcon className='socialMediaIcon' icon={faInstagram} /></a>
            </div>
            <div className='socialMedia'>
              <a href='https://www.youtube.com/c/PyLadiesFortaleza'><FontAwesomeIcon className='socialMediaIcon' icon={faYoutube} /></a>
            </div>
            <div className='socialMedia'>
              <a href='https://www.linkedin.com/company/pyladiesfortaleza/'><FontAwesomeIcon className='socialMediaIcon' icon={faLinkedinIn} /></a>
            </div>
          </Grid>
          <Grid item>
            <p className='title'>Entre em contato</p>
            <p className='email'>Email</p>
            <ThemeProvider theme={theme}>
              <TextField className="sendEmail" id="standard-basic" variant="standard" color="primary" focused></TextField>
            </ThemeProvider>
            <Stack className="stackSigaNos" direction="row" spacing={1}>
              <Chip className="sigaNos" label="Siga-nos" component="a" href='#' clickable/>
            </Stack>
          </Grid>
        </Grid>

      </Container>
    </footer>
  );
};

export default Footer;
