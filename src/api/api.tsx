import { handleRequest } from '../helpers/ApiHelpers';
import Cookies from 'js-cookie';

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
  const token = Cookies.get('access_token');

  if (!token) {
    return false;
  }

  const headerToken = {
    Authorization: `Bearer ${token}`,
  };

  try {
    const responseData = await handleRequest(
      'post',
      'logout',
      {},
      headerToken,
      'Mencoba Leluar'
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
      'Mengambil direktorat'
    );

    return reponseGetDirectorat;
  } catch (error) {
    console.error('Terjadi kesalahan saat mengambil data direktorat:', error);
    return false;
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
    const token = Cookies.get('access_token');
    if (!token) {
      console.error('Token tidak tersedia');
      return;
    }

    const headerToken = {
      Authorization: `Bearer ${token}`,
    };

    const reponseUpdateDirectorat = await handleRequest(
      'PUT',
      `directorat/${id}`,
      directoratData,
      headerToken,
      'Memperbarui Direktorat'
    );

    return reponseUpdateDirectorat;
  } catch (error) {
    console.error('Kesalahan saat memperbarui direktorat:', error);
    throw error;
  }
};
const deleteDirectorat = async (id: any) => {
  try {
    const token = Cookies.get('access_token');
    if (!token) {
      console.error('Token tidak tersedia');
      return;
    }

    const headerToken = {
      Authorization: `Bearer ${token}`,
    };

    const responseDeleteDirectorat = await handleRequest(
      'DELETE',
      `directorat/${id}`,
      null, // No request body is needed for DELETE requests
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
  addDirectorat,
  updateDirectorat,
  deleteDirectorat,
};
