import { api } from '../api';
import { Guest } from '../types';

export const sendConfirmationRequest = async (guest: Partial<Guest>) => {
  try {
    const response = await api.post('guests', guest);

    return response;
  } catch (error) {
    console.error('SendConfirmationRequest Error', error);
    return null;
  }
};
