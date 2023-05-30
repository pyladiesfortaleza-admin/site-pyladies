import './Footer.css'
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
          
          <Grid item>
              <FontAwesomeIcon className='socialMediaIcon' icon={faGithub} />
              <FontAwesomeIcon className='socialMediaIcon' icon={faInstagram} />
              <FontAwesomeIcon className='socialMediaIcon' icon={faYoutube} />
              <FontAwesomeIcon className='socialMediaIcon' icon={faLinkedinIn} />
          </Grid>
          <Grid item>
            <p>Entre em contato</p>
            <p>Email</p>
            <ThemeProvider theme={theme}>
              <TextField className="sendEmail" id="standard-basic" variant="standard" color="primary" focused></TextField>
            </ThemeProvider>
            <br/><br/>
            <Stack direction="row" spacing={1}>
              <Chip className="sigaNos" label="Siga-nos" component="a" href='#' clickable/>
            </Stack>
          </Grid>
        </Grid>

      </Container>
    </footer>
  );
};

export default Footer;
