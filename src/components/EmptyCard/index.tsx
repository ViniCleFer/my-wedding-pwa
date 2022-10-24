import { Box } from '@mui/material';

import './styles.css';

export const EmptyCard = () => {
  return (
    <Box className='boxCardContainer'>
      <span className='infoName'>Nenhum Evento encontrado</span>
    </Box>
  );
};
