import { Box, Button } from '@mui/material';
import { Evento } from '../../types';

import './styles.css';

interface InfoProps {
  info: Evento;
  onClickHandleEvent: (evento: Evento) => void;
}

export const Card = ({ info, onClickHandleEvent }: InfoProps) => {
  return (
    <Box className='boxCardContainer'>
      <strong className='cardTitle'>{info?.cliente}</strong>
      <span className='subtitle'>
        {info?.data} às {info?.hora}
      </span>

      <Box className='infoContainer'>
        <Box className='infoLine'>
          <strong className='infoDescription'>Tocar Evento:</strong>
          <span className='infoName'>{info?.tocarEvento}</span>
        </Box>
        <Box className='infoLine'>
          <strong className='infoDescription'>Capacidade Zoom:</strong>
          <span className='infoName'>{info?.contaZoom} pessoas</span>
        </Box>
        <Box className='infoLine'>
          <strong className='infoDescription'>Gravação:</strong>
          <span className='infoName'>{info?.gravacaoIngles}</span>
        </Box>
        <Box className='infoLine'>
          <strong className='infoDescription'>Proprietário:</strong>
          <span className='infoName'>{info?.proprietario}</span>
        </Box>
      </Box>

      <Button variant='contained' onClick={() => onClickHandleEvent(info)}>
        Link Oficial do Evento
      </Button>
    </Box>
  );
};
