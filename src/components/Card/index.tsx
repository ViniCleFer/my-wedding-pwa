import { Box } from '@mui/material';

import Flower from '../../assets/flower.svg';

import './styles.css';

interface InfoProps {
  title: string;
  subtitle: string;
  description?: string;
}

export const Card = ({ title, subtitle, description }: InfoProps) => {
  return (
    <Box className='boxCardContainer'>
      <strong className='title'>{title}</strong>
      <span className='subtitle'>{subtitle}</span>

      <img src={Flower} alt='flower' />

      {description && <p className='description'>{description}</p>}
    </Box>
  );
};
