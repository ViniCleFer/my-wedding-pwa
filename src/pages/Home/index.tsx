import { useCallback, useEffect, useRef, useState } from 'react';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { Box, Typography } from '@mui/material';
import { Menu, ArrowUpwardOutlined } from '@mui/icons-material';

import './styles.css';
import {
  Container,
  HomeContainer,
  CountdownContainer,
  CountdownTitle,
  FooterContainer,
  FooterText,
  PartyTitle,
  PartyContainer,
  MessageContainer,
  ThanksContainer,
  ThanksTitle,
  MapContainer,
  ButtonBackToTop,
} from './styles';

import {
  Card,
  Input,
  CellphoneInput,
  RadioInputGroup,
  Countdown,
  Button,
  Select,
  ConfirmationModal,
} from '../../components';

import PixImage from '../../assets/pix.png';

import { getNumbersGuests, getAcceptanceTypes } from '../../helpers/guests';

import { sendConfirmationRequest } from '../../services/requests';

const Home = () => {
  const [isScrolling, setIsScrolling] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [totalInvited, setTotalInvited] = useState('');

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [amount, setAmount] = useState('');
  const [accept, setAccept] = useState('Sim');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const formRef = useRef<any>();

  const formValidation = useCallback((): any => {
    return Yup.object().shape({
      name: Yup.string().required('Preencha esse campo'),
      accept: Yup.string(),
      amount: Yup.string().required('Preencha esse campo'),
      email: Yup.string()
        .email('Digite um e-mail válido')
        .required('Preencha esse campo'),
      phone: Yup.string()
        .required('Preencha esse campo')
        .min(15, 'Digite um telefone válido'),
      message: Yup.string().nullable(),
    });
  }, []);

  const { control, handleSubmit, reset, setValue } = useForm({
    resolver: yupResolver(formValidation()),
  });

  useEffect(() => {
    if (totalInvited) {
      setValue('amount', totalInvited);
      setAmount(totalInvited);
    }
  }, [totalInvited, setValue]);

  const handleConfirmationSend = useCallback(async () => {
    setLoading(true);
    try {
      const response = await sendConfirmationRequest(formRef.current);

      if (response?.status === 200) {
        reset();
        setTotalInvited('');
        setOpenModal(true);
      }
    } catch (error) {
      console.error('Error handleConfirmationSend', error);
    } finally {
      setLoading(false);
    }
  }, [reset]);

  useEffect(() => {
    window.onscroll = function (e) {
      const targetPixels = window.scrollY;
      if (targetPixels > 82.5) {
        setIsScrolling(true);
      } else {
        setIsScrolling(false);
      }
    };
  }, []);

  const toggleMenu = useCallback(() => {
    setIsMenuOpen(false);
  }, []);

  const handleCloseModal = useCallback(() => {
    setOpenModal(false);
  }, []);

  return (
    <Container>
      <HomeContainer className='firstContainer' id='home'>
        <nav
          className='navbar'
          style={{
            backgroundColor: isScrolling ? '#fff' : 'transparent',
            borderBottomWidth: isScrolling ? 1 : 0,
            borderBottomStyle: isScrolling ? 'solid' : 'none',
            borderBottomColor: isScrolling
              ? 'rgba(51, 51, 51, 0.2)'
              : 'transparent',
          }}
          id='nav'
        >
          <div className='left'>
            <span>V & A</span>
          </div>
          <div className='right'>
            <input
              type='checkbox'
              id='check'
              checked={isMenuOpen}
              onChange={(t) => setIsMenuOpen(t.target.checked)}
            />
            <label htmlFor='check' className='checkBtn'>
              <Menu />
            </label>

            <ul className='list'>
              <li>
                <a id='link' onClick={toggleMenu} href='#home'>
                  Home
                </a>
              </li>
              <li>
                <a id='link' onClick={toggleMenu} href='#contagem'>
                  Contagem Regressiva
                </a>
              </li>
              <li>
                <a id='link' onClick={toggleMenu} href='#local'>
                  Cerimônia e Festa
                </a>
              </li>
              <li>
                <a id='link' onClick={toggleMenu} href='#thanks'>
                  Presentes
                </a>
              </li>
              <li>
                <a id='link' onClick={toggleMenu} href='#message'>
                  Confirmar Presença
                </a>
              </li>
            </ul>
          </div>
        </nav>
        <span className='main-names'>Alissan e Vinicius</span>
        <span className='text-date'>08 . 04 . 2023</span>
      </HomeContainer>
      <CountdownContainer id='contagem'>
        <CountdownTitle>Contagem regressiva para o grande dia</CountdownTitle>
        <Countdown />

        <Card
          title='Queridos familiares e amigos!'
          subtitle='Agradecemos muito ter vocês em nossas vidas'
          description='Começou a contagem regressiva para nosso grande dia, estamos felizes demais em poder passar esse momento com cada um de vocês. Parece que foi ontem que decidimos confirmar nosso amor, o tempo passou rápido demais e finalmente podemos dizer que está próximo nossa afirmação, contamos com a presença de cada um de vocês para fazer esse dia inesquecível.'
        />
      </CountdownContainer>

      <PartyContainer id='local'>
        <Card
          title='Local'
          subtitle='Contamos com você para ser ainda mais especial!'
        />

        <MapContainer>
          <Box mb={4}>
            <PartyTitle>Cerimônia & Festa</PartyTitle>

            <FooterText marginBottom={3}>
              08 de abril de 2023 às 16:00
            </FooterText>
            <FooterText>
              Contamos com vocês para o dia mais feliz de nossas vidas! A festa
              será no mesmo local, então aguenta mais um pouquinho que depois da
              cerimônia iremos dançar horrores 💜
            </FooterText>
          </Box>

          <iframe
            title='MyLocal'
            style={{
              width: '100%',
              height: '450px',
              border: 0,
            }}
            loading='lazy'
            allowFullScreen
            referrerPolicy='no-referrer-when-downgrade'
            src={`https://www.google.com/maps/embed/v1/place?key=${process.env.REACT_APP_GOOGLE_API_KEY}&q=Space+Needle,Fazenda+Paraizo+Itu`}
          />
        </MapContainer>
      </PartyContainer>

      <ThanksContainer id='thanks'>
        <Card
          title='Quer nos presentear?'
          subtitle='Faça um pix de qualquer valor através do QR Code abaixo'
        />

        <img className='pix' src={PixImage} alt='pix-vinicius' />

        <ThanksTitle>
          Muito obrigado <p>☺</p>
        </ThanksTitle>
      </ThanksContainer>

      <MessageContainer id='message'>
        <Card
          title='Confirmação de presença'
          subtitle='Faça parte da nossa história de amor, confirme sua presença.'
        />

        <form
          ref={formRef}
          className='messageFormContainer'
          onSubmit={handleSubmit(handleConfirmationSend)}
        >
          <Input
            name='name'
            control={control}
            label='Nome Completo'
            required
            onChange={(t) => {
              setName(t.target.value);
              setValue('name', t.target.value);
            }}
          />
          <Select
            label='Total de adultos'
            name='amount'
            control={control}
            required
            options={getNumbersGuests}
            value={totalInvited}
            onChange={(t) => {
              setTotalInvited(t.target.value);
              setValue('amount', t.target.value);
            }}
          />
          <Input
            label='E-mail'
            className='input'
            name='email'
            control={control}
            required
            onChange={(t) => {
              setEmail(t.target.value);
              setValue('email', t.target.value);
            }}
          />
          <Input
            label='Celular'
            name='phone'
            control={control}
            InputProps={{
              inputComponent: CellphoneInput as any,
            }}
            onChange={(t) => {
              setPhone(t.target.value);
              setValue('phone', t.target.value);
            }}
            required
          />
          <RadioInputGroup
            name='accept'
            label='Você irá ao evento?'
            control={control}
            onChange={(t) => {
              setValue('accept', t.target.value);
              setAccept(t.target.value);
            }}
            row
            options={getAcceptanceTypes}
          />
          <Input
            label='Mensagem aos Noivos'
            name='message'
            control={control}
            multiline
            onChange={(t) => {
              setValue('message', t.target.value);
              setMessage(t.target.value);
            }}
          />
          <Button title='Responder' isLoading={loading} type='submit'>
            <Typography>Responder</Typography>
          </Button>

          <input value={name} name='from_name' className='invisible' />
          <input value={email} name='from_email' className='invisible' />
          <input value={amount} name='from_amount' className='invisible' />
          <input value={accept} name='from_accept' className='invisible' />
          <input value={phone} name='from_phone' className='invisible' />
          <input value={message} name='from_message' className='invisible' />
        </form>
      </MessageContainer>

      <ButtonBackToTop
        type='button'
        variant='text'
        href='#home'
        endIcon={<ArrowUpwardOutlined />}
      >
        Voltar ao Topo
      </ButtonBackToTop>

      <FooterContainer id='footer'>
        <FooterText>Todos os direitos reservados - VF Code 2022 ©</FooterText>
      </FooterContainer>

      <ConfirmationModal onClose={handleCloseModal} open={openModal} />
    </Container>
  );
};

export default Home;
