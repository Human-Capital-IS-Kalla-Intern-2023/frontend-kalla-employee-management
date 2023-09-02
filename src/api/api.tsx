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

const getDirectorat = async () => {
  try {
    const token = Cookies.get('access_token');
    if (!token) {
      console.error('Token tidak tersedia');
      return;
    }

    const headerToken = {
      Authorization: `Bearer ${token}`,
    };

    const reponseGetDirectorat = await handleRequest(
      'GET',
      'directorat',
      {},
      headerToken,
      'fetching directorate'
    );

    return reponseGetDirectorat.data;
  } catch (error) {
    console.error('Terjadi kesalahan saat mengambil data directorate:', error);
  }
};

const addDirectorat = async (formData: any) => {
  try {
    const token = Cookies.get('access_token');
    if (!token) {
      console.error('Token tidak tersedia');
      return;
    }

    const headerToken = {
      Authorization: `Bearer ${token}`,
    };

    const responseAddDirectorat = await handleRequest(
      'POST',
      'directorat',
      formData,
      headerToken,
      'Create Directorat'
    );

    return responseAddDirectorat;
  } catch (error) {
    console.error('Error creating directorate:', error);
    throw error;
  }
};

export { loginUser, logoutUser, getDirectorat, addDirectorat };
