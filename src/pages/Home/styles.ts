import { Box, styled, Button as Btn, css, Typography } from '@mui/material';

export const Container = styled(Box)`
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: white;
`;

export const HomeContainer = styled(Box)`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 97vh;
  padding: 40px;
  padding-top: 80px;
`;

export const CountdownContainer = styled(Box)`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: white;
  max-width: 1110px;
  padding-top: 80px;
`;

export const CountdownTitle = styled(Typography)`
  font-family: 'Lustria';
  color: ${({ theme }) => theme.palette.grey[700]};

  font-weight: 400;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.5;
  margin-bottom: 40px;
  text-transform: uppercase;
  text-align: center;
  font-size: 14px;
  letter-spacing: 2px;
`;

export const FooterContainer = styled(Box)`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;

  padding: 20px;
  border-top: 1px solid rgba(51, 51, 51, 0.2);
`;

export const FooterText = styled(Typography)`
  font-family: 'Raleway';
  font-size: 14px;
  color: ${({ theme }) => theme.palette.grey[700]};
`;
