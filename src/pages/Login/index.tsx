import { useCallback } from 'react';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { Box, FormControl } from '@mui/material';

import logo from '../../assets/logo.png';

import { Button } from '../../components/Button';
import { Input } from '../../components/Input';

import './styles.css';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Login = () => {
  const navigate = useNavigate();

  const formValidation = useCallback((): any => {
    return Yup.object().shape({
      email: Yup.string()
        .email('Digite um e-mail válido')
        .required('O campo E-mail é obrigatório.'),
      password: Yup.string()
        .min(6, 'A senha deve ter no mínimo 6 dígitos')
        .required('A Senha é obrigatória.'),
    });
  }, []);

  const { control, handleSubmit } = useForm({
    resolver: yupResolver(formValidation()),
  });

  const handleLogin = useCallback(
    async (formData: any) => {
      // const { email, password } = formData;
      // const res = await signIn({ email, password });
      // console.log({ res });

      if (formData.email.includes('@ten.com.br')) {
        navigate('/dashboard');
      } else {
        toast.warning('Entre com seu e-mail da TEN');
      }
    },
    [navigate]
  );

  return (
    <Box className='boxContainer-login'>
      <img src={logo} alt='logo' />

      <FormControl className='form-login'>
        <span className='title-login'>Login</span>

        <Input
          label='E-mail'
          placeholder='E-mail'
          name='email'
          control={control}
          required
        />

        <Input
          label='Senha'
          placeholder='Senha'
          name='password'
          control={control}
          required
        />

        <Button
          className='button-login'
          type='button'
          variant='contained'
          onClick={handleSubmit(handleLogin)}
        >
          Entrar
        </Button>
      </FormControl>
    </Box>
  );
};

export default Login;
