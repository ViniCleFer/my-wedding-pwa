import { Control, Controller } from 'react-hook-form';
import TextField, { StandardTextFieldProps } from '@mui/material/TextField';

import { Container } from './styles';

export interface InputControlledProps extends StandardTextFieldProps {
  control: Control;
  name: string;
}

export const Input = ({ name, control, ...rest }: InputControlledProps) => {
  return (
    <Container>
      <Controller
        name={name}
        control={control}
        defaultValue=''
        render={({
          field: { onChange, value, onBlur, ref },
          fieldState: { error },
        }) => (
          <TextField
            value={value}
            onBlur={onBlur}
            onChange={onChange}
            ref={ref}
            error={!!error}
            helperText={error ? error.message : null}
            style={{ width: '100%', marginBottom: 20 }}
            {...rest}
          />
        )}
      />
    </Container>
  );
};
