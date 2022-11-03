import axios from 'axios';

export const CHAVE = 'f37596b4-693c-4ff6-9a9f-04c59e432be6';

export const apiHubspot = axios.create({
  baseURL: 'https://api.hubapi.com/crm/v4/objects/',
  headers: {
    Authorization: CHAVE,
  },
});
