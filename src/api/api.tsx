import { handleRequest } from '../helpers/ApiHelpers';
import Cookies from 'js-cookie';

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

const fetchDepartments = async () => {
  try {
    const token = Cookies.get('access_token');
    if (!token) {
      console.error('Token tidak tersedia');
      return;
    }

    const headerToken = {
      Authorization: `Bearer ${token}`,
    };

    const responseDepartement = await handleRequest(
      'GET',
      'directorat',
      {},
      headerToken,
      'fetching departments'
    );
    console.log(responseDepartement);

    return responseDepartement.data;
  } catch (error) {
    console.error('Terjadi kesalahan saat mengambil data departemen:', error);
  }
};

export { loginUser, logoutUser, fetchDepartments };
