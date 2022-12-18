import { Box, styled, Typography } from '@mui/material';

export const Container = styled(Box)`
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 80px;

  // Modelo Contador na Vertical
  /* @media (max-width: 600px) {
    height: 100%;
    flex-direction: column;
    margin-bottom: 40px;
  } */
`;

export const CardContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  & + div {
    margin-left: 20px;
  }

  // Modelo Contador na Vertical
  /* @media (max-width: 600px) {
    margin-bottom: 20px;
    & + div {
      margin-left: 0;
    }
  } */
`;

export const CardTime = styled(Box)`
  display: flex;
  flex-direction: row;
  padding: 10px 20px;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.palette.primary.main};
  border-radius: 8px;
  max-width: 80px;
  width: 180px;

  @media (max-width: 600px) {
    max-width: 60px;
  }
`;

export const TimeNumbers = styled(Typography)`
  font-family: 'Lustria';
  font-size: 24px;
  color: ${({ theme }) => theme.palette.common.white};
`;

export const TimeText = styled(Typography)`
  margin-top: 4px;
  font-family: 'Raleway';
  font-size: 12px;
  color: ${({ theme }) => theme.palette.grey[700]};
`;
