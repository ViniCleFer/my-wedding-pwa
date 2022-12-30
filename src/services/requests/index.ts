import emailjs from '@emailjs/browser';

const YOUR_SERVICE_ID = process.env.REACT_APP_YOUR_SERVICE_ID || '';
const YOUR_TEMPLATE_ID = process.env.REACT_APP_YOUR_TEMPLATE_ID || '';
const YOUR_PUBLIC_KEY = process.env.REACT_APP_YOUR_PUBLIC_KEY || '';

export const sendConfirmationRequest = async (data: any) => {
  try {
    const response = await emailjs.sendForm(
      YOUR_SERVICE_ID,
      YOUR_TEMPLATE_ID,
      data,
      YOUR_PUBLIC_KEY
    );

    return response;
  } catch (error) {
    console.error('SendConfirmationRequest Error', error);
    alert('Erro ao enviar a confirmação, tente novamente mais tarde');
    return null;
  }
};
