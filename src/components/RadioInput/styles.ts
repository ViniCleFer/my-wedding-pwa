import { styled } from '@mui/material/styles';
import { FormLabel } from '@mui/material';

export const Label = styled(FormLabel)`
  color: ${({ theme }) => theme.palette.common.black};
  font-family: 'Raleway';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
`;
