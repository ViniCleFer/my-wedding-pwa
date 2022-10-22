import { useCallback } from 'react';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { Box, FormControl } from '@mui/material';

import bg from '../../assets/bg.png';
import logo from '../../assets/logo.png';

import { Button } from '../../components/Button';
import { Input } from '../../components/Input';

import './styles.css';

const NewPassword = () => {
  const formValidation = useCallback((): any => {
    return Yup.object().shape({
      password: Yup.string()
        .min(8, 'Mínimo 8 Dígitos')
        .required('Digite a nova senha')
        .matches(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
          'A senha deve conter 1 maiúscula, 1 número e 1 caractere especial (como !, @, #, etc.)'
        ),
      confirmPassword: Yup.string()
        .min(8, 'Mínimo 8 Dígitos')
        .oneOf([Yup.ref('password'), null], 'Digite a mesma senha')
        .required('As senhas não coincidem'),
    });
  }, []);

  const { control, handleSubmit } = useForm({
    resolver: yupResolver(formValidation()),
  });

  const handleLogin = useCallback((formData: any) => {
    console.log({ formData });
  }, []);

  return (
    <Box className='boxContainer'>
      <img className='bgImage' src={bg} alt='bg' />

      <img src={logo} alt='logo' />

      <FormControl className='form'>
        <span className='title'>Nova Senha</span>

        <Input
          label='Senha'
          placeholder='Senha'
          name='password'
          control={control}
          required
        />

        <Input
          label='Corfirme a Senha'
          placeholder='Corfirme a Senha'
          name='confirmPassword'
          control={control}
          required
        />

        <Button
          className='button'
          type='submit'
          variant='contained'
          onClick={handleSubmit(handleLogin)}
        >
          Enviar
        </Button>
      </FormControl>
    </Box>
  );
};

export default NewPassword;
