import { CircularProgress } from '@mui/material';
import { ButtonProps as ButtonPropsMUI } from '@mui/material/Button';

import { ButtonContainer } from './styles';

export type ButtonProps = ButtonPropsMUI & {
  isLoading: boolean;
};

export const Button = ({ children, isLoading, ...rest }: ButtonProps) => {
  return (
    <ButtonContainer variant='contained' {...rest}>
      {isLoading ? <CircularProgress color='inherit' size='1rem' /> : children}
    </ButtonContainer>
  );
};
