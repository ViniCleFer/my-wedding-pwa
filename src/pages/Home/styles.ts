import { Box, styled, Typography, Button } from '@mui/material';

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
  height: 100vh;
  padding: 40px;
  padding-top: 80px;

  @media (max-width: 600px) {
    height: 100%;
    padding-top: 0 80px 80px;
  }
`;

export const CountdownContainer = styled(Box)`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 1110px;
  padding: 80px 40px 0;

  svg {
    margin-top: 40px;
    height: 200px;
    width: 200px;
  }
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

  display: flex;

  p {
    font-size: 30px;
    color: ${({ theme }) => theme.palette.primary.main};
  }
`;

export const PartyContainer = styled(Box)`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  background-color: white;
  max-width: 1110px;

  @media (max-width: 600px) {
    text-align: center;
  }
`;

export const PartyTitle = styled(Typography)`
  font-family: 'Lustria';
  color: ${({ theme }) => theme.palette.grey[900]};

  font-weight: 400;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.5;
  margin-bottom: 14px;
  font-size: 24px;
`;

export const MapContainer = styled(Box)`
  background-color: '#FAFAFA';
  padding: 32px 20px;
  margin-top: 32px;
`;

export const MessageContainer = styled(Box)`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  height: 100%;
  max-width: 1110px;
  padding-bottom: 20px 0 80px;
`;

export const ThanksContainer = styled(Box)`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: white;
  max-width: 1110px;
  padding-top: 40px;

  .pix {
    margin-top: 40px;
    height: 200px;
    width: 200px;
  }
`;

export const ThanksTitle = styled(Typography)`
  font-family: 'Lustria';
  color: ${({ theme }) => theme.palette.grey[700]};

  font-weight: 400;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.5;
  text-transform: uppercase;
  text-align: center;
  font-size: 14px;
  letter-spacing: 2px;

  display: flex;
  align-items: center;

  p {
    margin-left: 10px;
    font-size: 30px;
    color: ${({ theme }) => theme.palette.primary.main};
  }
`;

export const ButtonBackToTop = styled(Button)`
  font-family: 'Raleway';
  color: ${({ theme }) => theme.palette.grey[900]};
  font-weight: 400;
  font-stretch: normal;
  font-style: normal;
  font-size: 12px;
  text-transform: uppercase;
  margin-bottom: 20px;
  cursor: pointer;

  svg {
    width: 12px;
    height: 12px;
  }
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
