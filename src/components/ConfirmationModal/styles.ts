import { Typography, Dialog, Box } from '@mui/material';
import { styled } from '@mui/material/styles';

export const Container = styled(Dialog)`
  align-self: center;
  align-items: center;
  justify-content: center;
  display: flex;

  .css-1t1j96h-MuiPaper-root-MuiDialog-paper {
    width: 70%;
  }
`;

export const ContainerDescription = styled(Box)`
  padding: 20px;
`;

export const Title = styled(Typography)`
  color: ${({ theme }) => theme.palette.grey[900]};
  font-family: 'Raleway';
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  text-align: center;
  margin-bottom: 10px;
`;

export const Description = styled(Typography)`
  color: ${({ theme }) => theme.palette.grey[900]};
  font-family: 'Raleway';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  text-align: center;
`;
