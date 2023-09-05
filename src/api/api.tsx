import { handleRequest } from '../helpers/ApiHelpers';
import Cookies from 'js-cookie';

const getAccessToken = () => {
  const token = Cookies.get('access_token');
  if (!token) {
    throw new Error('Access token not available');
  }
  return token;
};

const loginUser = async (credentials: any) => {
  try {
    const responseLogin = await handleRequest(
      'POST',
      'login',
      credentials,
      {},
      'Mencoba Login'
    );

    const access_token = responseLogin.data.access_token;
    Cookies.set('access_token', access_token, { expires: 7 });

    return true;
  } catch (error) {
    console.error('Terjadi kesalahan saat mencoba login ', error);
    return false;
  }
};

const logoutUser = async () => {
  try {
    const token = getAccessToken();

    const headerToken = {
      Authorization: `Bearer ${token}`,
    };

    const responseData = await handleRequest(
      'POST',
      'logout',
      {},
      headerToken,
      'Mencoba Keluar'
    );

    Cookies.remove('access_token');

    return responseData;
  } catch (error) {
    console.error('Terjadi kesalahan saat mencoba logout ', error);
    return false;
  }
};

const getDirectorat = async () => {
  try {
    const token = getAccessToken();

    const headerToken = {
      Authorization: `Bearer ${token}`,
    };

    const responseGetDirectorat = await handleRequest(
      'GET',
      'directorat',
      {},
      headerToken,
      'Mengambil direktorat'
    );

    return responseGetDirectorat;
  } catch (error) {
    console.error('Terjadi kesalahan saat mengambil data direktorat:', error);
    return false;
  }
};

const getDetailDirectorat = async (id: any) => {
  try {
    const token = getAccessToken();

    const headerToken = {
      Authorization: `Bearer ${token}`,
    };

    const reponseGetDetailDirectorat = await handleRequest(
      'GET',
      `directorat/${id}`,
      {},
      headerToken,
      'Mengambil detail direktorat'
    );

    return reponseGetDetailDirectorat;
  } catch (error) {
    console.error('Terjadi kesalahan saat mengambil data direktorat:', error);
    return false;
  }
};

const addDirectorat = async (formData: any) => {
  try {
    const token = getAccessToken();

    const headerToken = {
      Authorization: `Bearer ${token}`,
    };

    const responseAddDirectorat = await handleRequest(
      'POST',
      'directorat',
      formData,
      headerToken,
      'Membuat Direktorat'
    );

    return responseAddDirectorat;
  } catch (error) {
    console.error('Kesalahan saat membuat direktorat:', error);
    throw error;
  }
};

const updateDirectorat = async (id: any, directoratData: any) => {
  try {
    const token = getAccessToken();

    const headerToken = {
      Authorization: `Bearer ${token}`,
    };

    const responseUpdateDirectorat = await handleRequest(
      'PUT',
      `directorat/${id}`,
      directoratData,
      headerToken,
      'Memperbarui Direktorat'
    );

    return responseUpdateDirectorat;
  } catch (error) {
    console.error('Kesalahan saat memperbarui direktorat:', error);
    throw error;
  }
};

const deleteDirectorat = async (id: any) => {
  try {
    const token = getAccessToken();

    const headerToken = {
      Authorization: `Bearer ${token}`,
    };

    const responseDeleteDirectorat = await handleRequest(
      'DELETE',
      `directorat/${id}`,
      null,
      headerToken,
      'Menghapus Direktorat'
    );

    return responseDeleteDirectorat;
  } catch (error) {
    console.error('Kesalahan saat menghapus direktorat:', error);
    throw error;
  }
};

export {
  loginUser,
  logoutUser,
  getDirectorat,
  getDetailDirectorat,
  addDirectorat,
  updateDirectorat,
  deleteDirectorat,
};
