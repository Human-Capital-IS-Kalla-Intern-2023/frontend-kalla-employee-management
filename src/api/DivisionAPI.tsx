// Import Helpers
import { RequestApi } from '../helpers/RequestApi';
import TokenHelper from '../helpers/TokenHelpers';

// GET Division
const getDivision = async () => {
  try {
    const token = TokenHelper();

    const headerToken = {
      Authorization: `Bearer ${token}`,
    };

    const reponseGetDivision = await RequestApi(
      'GET',
      'division',
      {},
      headerToken,
      'Mengambil divisi'
    );

    return reponseGetDivision;
  } catch (error) {
    console.error('Terjadi kesalahan saat mengambil data divisi:', error);
    return false;
  }
};

// GET Detail Division
const getDetailDivision = async (id: any) => {
  try {
    const token = TokenHelper();

    const headerToken = {
      Authorization: `Bearer ${token}`,
    };

    const reponseGetDetailDivision = await RequestApi(
      'GET',
      `division/${id}`,
      {},
      headerToken,
      'Mengambil detail divisi'
    );

    return reponseGetDetailDivision;
  } catch (error) {
    console.error('Terjadi kesalahan saat mengambil data divisi:', error);
    return false;
  }
};

// POST Division
const addDivision = async (formData: any) => {
  try {
    const token = TokenHelper();

    const headerToken = {
      Authorization: `Bearer ${token}`,
    };

    const reponseAddDivision = await RequestApi(
      'POST',
      'division',
      formData,
      headerToken,
      'Membuat divisi'
    );

    return reponseAddDivision;
  } catch (error) {
    console.error('Kesalahan saat membuat divisi:', error);
    throw error;
  }
};

// PUT Division
const updateDivision = async (id: any, divisionData: any) => {
  try {
    const token = TokenHelper();

    const headerToken = {
      Authorization: `Bearer ${token}`,
    };

    const reponseUpdateDivision = await RequestApi(
      'PUT',
      `division/${id}`,
      divisionData,
      headerToken,
      'Memperbarui divisi'
    );

    return reponseUpdateDivision;
  } catch (error) {
    console.error('Kesalahan saat memperbarui divisi:', error);
    throw error;
  }
};

// DELETE  Division
const deleteDivision = async (id: any) => {
  try {
    const token = TokenHelper();

    const headerToken = {
      Authorization: `Bearer ${token}`,
    };

    const reponseDeleteDivision = await RequestApi(
      'DELETE',
      `division/${id}`,
      null,
      headerToken,
      'Menghapus divisi'
    );

    return reponseDeleteDivision;
  } catch (error) {
    console.error('Kesalahan saat menghapus divisi:', error);
    throw error;
  }
};

// Search Division
const searchDivision = async (searchInput: any) => {
  try {
    const token = TokenHelper();

    const headerToken = {
      Authorization: `Bearer ${token}`,
    };

    const responseSearchDivision = await RequestApi(
      'GET',
      `division?search=${searchInput}`,
      null,
      headerToken,
      'Mencari division'
    );

    return responseSearchDivision;
  } catch (error) {
    console.error('Kesalahan saat mencari division:', error);
    throw error;
  }
};

export {
  getDivision,
  getDetailDivision,
  addDivision,
  updateDivision,
  deleteDivision,
  searchDivision,
};
