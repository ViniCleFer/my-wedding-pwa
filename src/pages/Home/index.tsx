import { useCallback } from 'react';
import * as Yup from 'yup';
import { Box, FormControl, Typography } from '@mui/material';

import './styles.css';
import { Countdown } from '../../components/Countdown';
import {
  Container,
  HomeContainer,
  CountdownContainer,
  CountdownTitle,
  FooterContainer,
  FooterText,
} from './styles';
import { Card } from '../../components/Card';

const Home = () => {
  return (
    <Container>
      <HomeContainer className='firstContainer' id='home'>
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

      <CountdownContainer height='100%' id='local'>
        <Card
          title='Local'
          subtitle='Contamos com você para ser ainda mais especial!'
        />
      </CountdownContainer>

      <FooterContainer>
        <FooterText>Todos os direitos reservados - VF Code 2002</FooterText>
      </FooterContainer>
    </Container>
  );
};

export default Home;
