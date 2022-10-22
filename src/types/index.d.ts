export interface Post {
  _id: string;
  account: {
    title: string;
    capacity: number;
  };
  categories: {
    title: string;
  };
  dateEvent: string;
  owner: {
    name: string;
  };
  recorder: {
    name: string;
  };
  title: string;
}

interface PostProps {
  posts: Post[];
}

export interface Evento {
  cliente: string;
  data: string;
  hora: string;
  proprietario: string;
  tocarEvento: string;
  contaZoom: string;
  gravacaoIngles: string;
  linkOficialEvento: string;
}

interface EventosProps {
  eventos: Eventos[];
}
