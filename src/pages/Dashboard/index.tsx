/* eslint-disable react-hooks/exhaustive-deps */
import React, { useCallback, useEffect, useState } from 'react';
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Slide,
  TextField,
} from '@mui/material';
import {
  ContentCopy,
  CheckCircleOutline,
  ArrowForwardOutlined,
  SearchRounded,
} from '@mui/icons-material';
import { TransitionProps } from '@mui/material/transitions';

import dayjs from 'dayjs';
import 'dayjs/locale/pt-br';

import { Card } from '../../components/Card';
import { eventosJson } from '../../services/eventos';

import './styles.css';
import { Evento } from '../../types';
import { EmptyCard } from '../../components/EmptyCard';

dayjs().format();

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction='up' ref={ref} {...props} />;
});

const Dashboard = () => {
  const [eventos, setEventos] = useState(eventosJson);
  const [tocarEvento, setTocarEvento] = useState('');
  const [dataEvento, setDataEvento] = useState('');
  const [eventosFiltrados, setEventosFiltrados] = useState<Evento[]>([
    ...eventosJson,
  ]);
  const [listaDatasEventos, setListaDatasEventos] = useState([]);

  const [linkCopiado, setLinkCopiado] = useState(false);
  const [openInfoEventoModal, setOpenInfoEventoModal] = useState(false);
  const [eventoSelected, setEventoSelected] = useState<Evento>({
    cliente: '',
    data: '',
    hora: '',
    proprietario: '',
    tocarEvento: '',
    contaZoom: '',
    gravacaoIngles: '',
    linkOficialEvento: '',
  } as Evento);

  useEffect(() => {
    if (eventosJson.length > 0) {
      setEventos([...eventosJson]);
    }
  }, [eventosJson]);

  useEffect(() => {
    if (linkCopiado) {
      setTimeout(() => setLinkCopiado(false), 3000);
    }
  }, [linkCopiado]);

  useEffect(() => {
    if (eventosJson.length) {
      const datas = eventosJson.map((d) => d.data);
      const datasFiltradas = datas.reduce(
        (acc: any, curr: any) => (acc.includes(curr) ? acc : [...acc, curr]),
        []
      );

      setListaDatasEventos(datasFiltradas);
    }
  }, []);

  useEffect(() => {
    if (dataEvento !== '' || tocarEvento !== '') {
      let eventosPorData: Evento[] = [];

      if (tocarEvento !== '' && dataEvento === '') {
        eventosPorData = eventos.filter((d) =>
          d.proprietario.includes(tocarEvento)
        );
      }

      if (dataEvento !== '' && tocarEvento === '') {
        eventosPorData = eventos.filter((d) => d.data === dataEvento);
      }

      if (dataEvento !== '' && tocarEvento !== '') {
        eventosPorData = eventos
          .filter((d) => d.data === dataEvento)
          .filter((d) => d.proprietario.includes(tocarEvento));
      }

      setEventosFiltrados([...eventosPorData]);
    } else {
      setEventosFiltrados(eventos);
    }
  }, [dataEvento, tocarEvento]);

  const handleCopyLinkEvento = useCallback((link: string) => {
    setLinkCopiado(true);
    navigator.clipboard.writeText(link);
  }, []);

  const handleNavigateToEvento = useCallback((link: string) => {
    window.open(link, '_blank');
  }, []);

  const handleEvento = useCallback((evento: Evento) => {
    setOpenInfoEventoModal(true);
    setEventoSelected(evento);
  }, []);

  const handleTocarEvento = useCallback((evento: string) => {
    const proprietario = evento.toUpperCase();

    setTocarEvento(proprietario);
  }, []);

  const handleCloseModal = useCallback(() => {
    setOpenInfoEventoModal(false);
    setEventoSelected({
      cliente: '',
      data: '',
      hora: '',
      proprietario: '',
      tocarEvento: '',
      contaZoom: '',
      gravacaoIngles: '',
      linkOficialEvento: '',
    });
  }, []);

  return (
    <Box className={'boxContainer'}>
      <Box>
        <h2 className={'title'}>Eventos</h2>

        <Box className='filter'>
          <TextField
            fullWidth
            id='input-with-icon-adornment'
            placeholder='Filtrar por nome'
            value={tocarEvento}
            onChange={(t) => handleTocarEvento(t.target.value)}
            InputProps={{
              startAdornment: (
                <SearchRounded color='primary' sx={{ marginRight: '5px' }} />
              ),
            }}
            sx={{ marginBottom: '15px' }}
          />

          <FormControl fullWidth>
            <InputLabel id='demo-simple-select-label'>Tocar Evento</InputLabel>
            <Select
              labelId='demo-simple-select-label'
              id='demo-simple-select'
              value={dataEvento}
              label='Tocar Evento'
              onChange={(t) => setDataEvento(t.target.value)}
            >
              <MenuItem value=''>Limpar Seleção</MenuItem>
              {listaDatasEventos?.map((d) => (
                <MenuItem key={d} value={d}>
                  {d}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
      </Box>

      <Box className={'list'}>
        {eventosFiltrados?.length > 0 ? (
          eventosFiltrados?.map((item) => (
            <Card
              key={item?.cliente}
              info={item}
              onClickHandleEvent={handleEvento}
            />
          ))
        ) : (
          <EmptyCard />
        )}
      </Box>

      <Dialog
        open={openInfoEventoModal}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleCloseModal}
        aria-labelledby='alert-dialog-title'
        aria-describedby='alert-dialog-description'
      >
        <DialogTitle
          id='alert-dialog-title'
          display='flex'
          justifyContent='space-between'
          alignItems='center'
        >
          {eventoSelected?.cliente}

          {/* <IconButton onClick={handleCloseModal}>
            <CloseOutlined />
          </IconButton> */}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id='alert-dialog-description'>
            Escolha entre copiar o Link do Evento para enviá-lo para outras
            pessoas ou ir direto para a página do Evento.
          </DialogContentText>
        </DialogContent>
        <DialogActions className='footer' sx={{ paddingBottom: '16px' }}>
          <Button
            variant='outlined'
            className={'borderButtonColor'}
            endIcon={
              linkCopiado ? (
                <CheckCircleOutline color='success' />
              ) : (
                <ContentCopy />
              )
            }
            onClick={() =>
              handleCopyLinkEvento(eventoSelected.linkOficialEvento)
            }
          >
            {linkCopiado ? 'Link Copiado' : 'Copie o Link'}
          </Button>
          <Button
            variant='contained'
            autoCapitalize='none'
            className={'backgroundButtonColor'}
            onClick={() =>
              handleNavigateToEvento(eventoSelected.linkOficialEvento)
            }
            endIcon={<ArrowForwardOutlined />}
          >
            Ir para o Evento
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default Dashboard;
