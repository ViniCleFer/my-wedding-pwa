type SignInRequestData = {
  email: string;
  password: string;
};

const delay = (amount = 750) =>
  new Promise((resolve) => setTimeout(resolve, amount));

export async function signInRequest(data: SignInRequestData) {
  await delay();

  console.log({ data });

  return {
    token: new Date().toString(),
    user: {
      name: 'Vinicius Fernandes',
      email: 'vinicius@ten.com.br',
      avatar_url: 'https://github.com/viniclefer.png',
      id: '1',
      type: 'admin',
      firstTime: true,
      created_at: new Date().toString(),
    },
  };
}

export async function recoverUserInformation() {
  await delay();

  return {
    user: {
      name: 'Vinicius Fernandes',
      email: 'vinicius@ten.com.br',
      avatar_url: 'https://github.com/viniclefer.png',
      id: '1',
      type: 'admin',
      firstTime: false,
      created_at: new Date().toString(),
    },
  };
}

