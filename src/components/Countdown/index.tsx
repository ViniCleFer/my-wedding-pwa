import dayjs from 'dayjs';
import { useEffect, useState } from 'react';
import {
  Container,
  CardContainer,
  CardTime,
  TimeText,
  TimeNumbers,
} from './styles';

dayjs().format();

export const Countdown = () => {
  const [totalTimeInSeconds, setTotalTimeInSeconds] = useState(60 * 170097);
  const [days, setDays] = useState(0);

  useEffect(() => {
    if (totalTimeInSeconds === 0) {
      return;
    } else {
      setTimeout(() => {
        setTotalTimeInSeconds(totalTimeInSeconds - 1);
      }, 1000);
    }
  }, [totalTimeInSeconds]);

  useEffect(() => {
    setTimeout(() => {
      const date1 = dayjs('2023-04-08T16:30:00');
      const date2 = dayjs(new Date());

      const qntosDias = date1.diff(date2, 'day');
      setDays(qntosDias);
    }, 1000);
  }, []);

  return (
    <Container>
      <CardContainer>
        <CardTime>
          <TimeNumbers>{days}</TimeNumbers>
        </CardTime>
        <TimeText>Dias</TimeText>
      </CardContainer>
      <CardContainer>
        <CardTime>
          <TimeNumbers>
            {dayjs('2022-10-00')
              .subtract(dayjs(new Date()).hour() + 1, 'hour')
              .format('HH')}
          </TimeNumbers>
        </CardTime>
        <TimeText>Horas</TimeText>
      </CardContainer>
      <CardContainer>
        <CardTime>
          <TimeNumbers>
            {dayjs('2022-10-00T00:00')
              .subtract(dayjs(new Date()).minute() + 1, 'minute')
              .format('mm')}
          </TimeNumbers>
        </CardTime>
        <TimeText>Minutos</TimeText>
      </CardContainer>
      <CardContainer>
        <CardTime>
          <TimeNumbers>
            {dayjs('2022-10-00T00:00')
              .subtract(dayjs(new Date()).second() + 1, 'second')
              .format('ss')}
          </TimeNumbers>
        </CardTime>
        <TimeText>Segundos</TimeText>
      </CardContainer>
    </Container>
  );
};
