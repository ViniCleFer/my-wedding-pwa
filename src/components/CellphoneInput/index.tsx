import React, { CSSProperties } from 'react';
import { InputContainer } from './styles';

interface CellphoneInputProps {
  onChange: (event: { target: { name: string; value: string } }) => void;
  name: string;
  style: CSSProperties;
}

export const CellphoneInput = React.forwardRef<
  HTMLElement,
  CellphoneInputProps
>((props) => {
  const { onChange, style, ...other } = props;
  return (
    <InputContainer
      {...other}
      mask='(##) 00000-0000'
      definitions={{
        '#': /[1-9]/,
      }}
      onAccept={(value: any) =>
        onChange({ target: { name: props.name, value } })
      }
      sx={{
        width: '100%',
        display: 'flex',
        ...style,
      }}
      overwrite
    />
  );
});
