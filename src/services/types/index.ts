export interface Guest {
  id?: string;
  name: string;
  amount: string;
  email: string;
  phone: string;
  message?: string;
  accept: boolean;
}
