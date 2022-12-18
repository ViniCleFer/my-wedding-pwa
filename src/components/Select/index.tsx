import { Control, Controller } from 'react-hook-form';
import { MenuItem, StandardTextFieldProps } from '@mui/material';

import { Container, SelectComponent } from './styles';

export interface SelectControlledProps extends StandardTextFieldProps {
  control: Control;
  name: string;
  options: {
    label: string;
    value: string;
  }[];
}

export const Select = ({
  name,
  control,
  sx,
  options,
  ...rest
}: SelectControlledProps) => {
  return (
    <Container sx={sx}>
      <Controller
        name={name}
        control={control}
        render={({
          field: { value, onChange, onBlur, ref },
          fieldState: { error },
        }) => (
          <SelectComponent
            value={value}
            select
            ref={ref}
            onBlur={onBlur}
            onChange={onChange}
            error={!!error}
            helperText={error ? error.message : null}
            style={{ width: '100%', marginBottom: 20 }}
            {...rest}
          >
            {options.map((o) => (
              <MenuItem value={o.value}>{o.label}</MenuItem>
            ))}
          </SelectComponent>
        )}
      />
    </Container>
  );
};
