// Import Helpers
import { RequestApi } from '../helpers/RequestApi';
import TokenHelper from '../helpers/TokenHelpers';

// GET Compensation
const getCompensation = async () => {
  try {
    const token = TokenHelper();

    const headerToken = {
      Authorization: `Bearer ${token}`,
    };

    const responseGetCompensation = await RequestApi(
      'GET',
      'compensation',
      {},
      headerToken,
      'Mengambil compensation'
    );

    return responseGetCompensation;
  } catch (error) {
    console.error('Terjadi kesalahan saat mengambil data compensation:', error);
    throw error;
  }
};

// GET Detail Compensation
const getDetailCompensation = async (id: any) => {
  try {
    const token = TokenHelper();

    const headerToken = {
      Authorization: `Bearer ${token}`,
    };

    const reponseGetDetailCompensation = await RequestApi(
      'GET',
      `compensation/${id}`,
      {},
      headerToken,
      'Mengambil detail compensation'
    );

    return reponseGetDetailCompensation;
  } catch (error) {
    console.error('Terjadi kesalahan saat mengambil data compensation:', error);
    throw error;
  }
};

// POST Compensation
const addCompensation = async (formData: any) => {
  try {
    const token = TokenHelper();

    const headerToken = {
      Authorization: `Bearer ${token}`,
    };

    const reponseAddCompensation = await RequestApi(
      'POST',
      'compensation',
      formData,
      headerToken,
      'Membuat compensation'
    );

    return reponseAddCompensation;
  } catch (error) {
    console.error('Kesalahan saat membuat compensation:', error);
    throw error;
  }
};

// PUT Compensation
const updateCompensation = async (id: any, compensationData: any) => {
  try {
    const token = TokenHelper();

    const headerToken = {
      Authorization: `Bearer ${token}`,
    };

    const reponseUpdateCompensation = await RequestApi(
      'PUT',
      `compensation/${id}`,
      compensationData,
      headerToken,
      'Memperbarui grade'
    );

    return reponseUpdateCompensation;
  } catch (error) {
    console.error('Kesalahan saat memperbarui compensation:', error);
    throw error;
  }
};

// DELETE Compensation
const deleteCompensation = async (id: any) => {
  try {
    const token = TokenHelper();

    const headerToken = {
      Authorization: `Bearer ${token}`,
    };

    const reponseDeleteCompensation = await RequestApi(
      'DELETE',
      `compensation/${id}`,
      null,
      headerToken,
      'Menghapus compensation'
    );

    return reponseDeleteCompensation;
  } catch (error) {
    console.error('Kesalahan saat menghapus compensation:', error);
    throw error;
  }
};

// Search Compensation
const searchCompensation = async (searchInput: any) => {
  try {
    const token = TokenHelper();

    const headerToken = {
      Authorization: `Bearer ${token}`,
    };

    const responseSearchCompensation = await RequestApi(
      'GET',
      `compensation?search=${searchInput}`,
      null,
      headerToken,
      'Mencari compensation'
    );

    return responseSearchCompensation;
  } catch (error) {
    console.error('Kesalahan saat mencari compensation:', error);
    throw error;
  }
};

export {
  getCompensation,
  getDetailCompensation,
  addCompensation,
  updateCompensation,
  deleteCompensation,
  searchCompensation,
};
