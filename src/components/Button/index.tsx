import { ButtonProps as ButtonPropsMUI } from '@mui/material/Button';

import { ButtonContainer } from './styles';

export type ButtonProps = ButtonPropsMUI;

export const Button = ({ ...rest }: ButtonProps) => {
  return <ButtonContainer variant='contained' {...rest} />;
};
