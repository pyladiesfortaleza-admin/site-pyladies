import './SectionCallAction.scss';
import { Container, Stack, Chip } from "@mui/material";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const SectionCallAction = () => {
  return (
    <div id='CallAction'>
      <Container>
        <Stack className="stackWhatssap" direction="row" spacing={1}>
          <Chip className="whatssap" icon={<WhatsAppIcon className='whatssapIcon'/>} label="Participe da Comunidade" component="a" href='https://chat.whatsapp.com/GfljKNs53022TbLjBYS201' target="_blank" clickable/>
        </Stack>
      </Container>
    </div>
  );
};

export default SectionCallAction;
