import { useCallback, useEffect, useState } from 'react';
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
} from '../../components';

// import { sendConfirmationRequest } from '../../services/requests';
import { Guest } from '../../services/types';
import { getNumbersGuests, getAcceptanceTypes } from '../../helpers/guests';

import PixImage from '../../assets/pix.png';
import { ConfirmationModal } from '../../components/ConfirmationModal';

const Home = () => {
  const [isScrolling, setIsScrolling] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [totalInvited, setTotalInvited] = useState('');

  const formValidation = useCallback((): any => {
    return Yup.object().shape({
      name: Yup.string().required('Preencha esse campo'),
      accept: Yup.boolean(),
      peopleTotal: Yup.string().required('Preencha esse campo'),
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

  const handleConfirmationSend = useCallback(
    (formData: Partial<Guest>) => {
      // async (formData: Partial<Guest>) => {
      // const response = await sendConfirmationRequest({
      //   name: formData.name,
      //   email: formData.email,
      //   phone: formData.phone,
      //   message: formData.message,
      //   accept: formData.accept,
      // });

      // if (response?.status === 200) {
      //   alert('show', JSON.stringify(formData));
      //   // reset();
      // } else {
      //   alert('errou');
      // }
      reset();
      setTotalInvited('');
      setOpenModal(true);

      return console.log({ formData });
    },
    [reset]
  );

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
                <a id='link' onClick={toggleMenu} href='#message'>
                  Confirmar Presença
                </a>
              </li>
              <li>
                <a id='link' onClick={toggleMenu} href='#thanks'>
                  Presentes
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

      <MessageContainer id='message'>
        <Card
          title='Confirmação de presença'
          subtitle='Faça parte da nossa história de amor, confirme sua presença.'
        />

        <form
          className='messageFormContainer'
          onSubmit={handleSubmit(handleConfirmationSend)}
        >
          <Input name='name' control={control} label='Nome Completo' required />

          <Select
            label='Total de adultos'
            name='peopleTotal'
            control={control}
            required
            options={getNumbersGuests}
            value={totalInvited}
            onChange={(t) => {
              setTotalInvited(t.target.value);
              setValue('peopleTotal', t.target.value);
            }}
          />

          <Input
            label='E-mail'
            className='input'
            name='email'
            control={control}
            required
          />

          <Input
            label='Celular'
            name='phone'
            control={control}
            InputProps={{
              inputComponent: CellphoneInput as any,
            }}
            required
          />

          <RadioInputGroup
            name='accept'
            label='Você irá ao evento?'
            control={control}
            onChange={(t) => {
              setValue('accept', t.target.value);
            }}
            row
            options={getAcceptanceTypes}
          />

          <Input
            label='Mensagem aos Noivos'
            name='message'
            control={control}
            multiline
          />

          <Button
            title='Responder'
            onClick={handleSubmit(handleConfirmationSend)}
          >
            <Typography>Responder</Typography>
          </Button>
        </form>
      </MessageContainer>

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
