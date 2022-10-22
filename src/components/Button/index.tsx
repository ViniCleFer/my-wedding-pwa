import ButtonMUI, { ButtonProps as ButtonPropsMUI } from '@mui/material/Button';

export type ButtonProps = ButtonPropsMUI;

export const Button = ({ ...rest }: ButtonProps) => {
  return (
    <ButtonMUI
      style={{ width: '100%', height: 50, backgroundColor: '#07004d' }}
      {...rest}
    />
  );
};
