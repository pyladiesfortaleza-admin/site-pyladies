import './NewFooter.scss'
import { Container, Grid } from "@mui/material";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faInstagram, faLinkedinIn, faYoutube } from '@fortawesome/free-brands-svg-icons';


const NewFooter = () => {
    return (
        <footer>
            <Container>
                <Grid container direction="row" justifyContent="space-around" alignItems="center">
                    <Grid item xs={3} className='gridText'>
                        <p>Nossas Redes</p>
                    </Grid>
                    <Grid item xs={8} className='gridItem'>
                        {/* <div className='socialMedia'> */}
                            <a href='https://github.com/pyladiesfortaleza' target='_blank'><FontAwesomeIcon className='socialMediaIcon' icon={faGithub} /></a>
                        {/* </div> */}
                        {/* <div className='socialMedia'> */}
                            <a href='https://www.instagram.com/pyladiesfortaleza/' target='_blank'><FontAwesomeIcon className='socialMediaIcon' icon={faInstagram} /></a>
                        {/* </div> */}
                        {/* <div className='socialMedia'> */}
                            <a href='https://www.youtube.com/c/PyLadiesFortaleza' target='_blank'><FontAwesomeIcon className='socialMediaIcon' icon={faYoutube} /></a>
                        {/* </div> */}
                        {/* <div className='socialMedia'> */}
                            <a href='https://www.linkedin.com/company/pyladiesfortaleza/' target='_blank'><FontAwesomeIcon className='socialMediaIcon' icon={faLinkedinIn} /></a>
                        {/* </div> */}
                    </Grid>
                </Grid>
            </Container>
        </footer>
    )
}

export default NewFooter;