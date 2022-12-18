export interface Guest {
  id?: string;
  name: string;
  email: string | null;
  phone: string | null;
  message?: string | null;
  accept: boolean;
}
