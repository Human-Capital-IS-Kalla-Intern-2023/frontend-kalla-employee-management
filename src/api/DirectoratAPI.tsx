// Import Helpers
import { RequestApi } from '../helpers/RequestApi';
import TokenHelper from '../helpers/TokenHelpers';

// GET Directorat
const getDirectorat = async () => {
  try {
    const token = TokenHelper();

    const headerToken = {
      Authorization: `Bearer ${token}`,
    };

    const responseGetDirectorat = await RequestApi(
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

// GET Detail Directorat
const getDetailDirectorat = async (id: any) => {
  try {
    const token = TokenHelper();

    const headerToken = {
      Authorization: `Bearer ${token}`,
    };

    const reponseGetDetailDirectorat = await RequestApi(
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

// POST Directorat
const addDirectorat = async (formData: any) => {
  try {
    const token = TokenHelper();

    const headerToken = {
      Authorization: `Bearer ${token}`,
    };

    const responseAddDirectorat = await RequestApi(
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

// PUT Directorat
const updateDirectorat = async (id: any, directoratData: any) => {
  try {
    const token = TokenHelper();

    const headerToken = {
      Authorization: `Bearer ${token}`,
    };

    const responseUpdateDirectorat = await RequestApi(
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

// DELETE  Directorat
const deleteDirectorat = async (id: any) => {
  try {
    const token = TokenHelper();

    const headerToken = {
      Authorization: `Bearer ${token}`,
    };

    const responseDeleteDirectorat = await RequestApi(
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
  getDirectorat,
  getDetailDirectorat,
  addDirectorat,
  updateDirectorat,
  deleteDirectorat,
};

