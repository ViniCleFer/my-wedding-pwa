import { Control, Controller } from 'react-hook-form';
import {
  FormControl,
  FormControlLabel,
  RadioGroup,
  RadioGroupProps,
  Radio,
} from '@mui/material';
import { Label } from './styles';

export interface RadioInputControlledProps extends RadioGroupProps {
  control: Control;
  name: string;
  label: string;
  options: {
    label: string;
    value: string;
  }[];
}

export const RadioInputGroup = ({
  name,
  label,
  control,
  options,
  ...rest
}: RadioInputControlledProps) => {
  return (
    <Controller
      name={name}
      control={control}
      defaultValue={options[0].value}
      render={({ field: { onChange, value, ref } }) => (
        <FormControl sx={{ marginBottom: 2 }}>
          <Label style={{ color: 'black' }}>{label}</Label>
          <RadioGroup
            aria-labelledby={`${name}-radio-buttons-group-label`}
            defaultValue={options[0].value}
            name='radio-buttons-group'
            value={value}
            onChange={onChange}
            ref={ref}
            {...rest}
          >
            {options.map((op) => (
              <FormControlLabel
                value={op.value}
                control={<Radio />}
                label={op.label}
              />
            ))}
          </RadioGroup>
        </FormControl>
      )}
    />
  );
};
