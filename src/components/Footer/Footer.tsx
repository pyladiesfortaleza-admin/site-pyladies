import './Footer.css'
import { Container, Grid, Button, TextField} from "@mui/material";
import { faGithub, faInstagram, faLinkedinIn, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = () => {
  return (
    <footer>
      <Container>
        <Grid container direction="row" justifyContent="space-around" alignItems="center">
          
          <Grid item>
            <FontAwesomeIcon icon={faGithub} />
            <FontAwesomeIcon icon={faInstagram} />
            <FontAwesomeIcon icon={faYoutube} />
            <FontAwesomeIcon icon={faLinkedinIn} />
          </Grid>
          <Grid item>
            <p>Entre em contato</p>
            <TextField id="standard-basic" label="Email" variant="standard"></TextField>
            <Button variant="contained">Siga-nos</Button>
          </Grid>
        </Grid>

      </Container>
    </footer>
  );
};

export default Footer;
