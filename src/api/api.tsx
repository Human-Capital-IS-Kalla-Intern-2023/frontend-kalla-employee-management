import { handleRequest } from '../helpers/ApiHelpers';

const loginUser = async (credentials: any) => {
  console.log(credentials);

  return await handleRequest('post', 'login', credentials, {}, 'want to login');
};

const logoutUser = async (token: string) => {
  const headerToken = {
    Authorization: `Bearer ${token}`,
  };

  return await handleRequest(
    'post',
    'logout',
    {},
    headerToken,
    'want to logout'
  );
};

export { loginUser, logoutUser };
