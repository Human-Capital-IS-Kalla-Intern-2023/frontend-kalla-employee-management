// Import Helpers
import { RequestApi } from '../helpers/RequestApi';
import TokenHelper from '../helpers/TokenHelpers';

// GET Grade
const getGrade = async () => {
  try {
    const token = TokenHelper();

    const headerToken = {
      Authorization: `Bearer ${token}`,
    };

    const responseGetGrade = await RequestApi(
      'GET',
      'job-grade',
      {},
      headerToken,
      'Mengambil grade'
    );

    return responseGetGrade;
  } catch (error) {
    console.error('Terjadi kesalahan saat mengambil data grade:', error);
    return false;
  }
};

// GET Detail Grade
const getDetailGrade = async (id: any) => {
  try {
    const token = TokenHelper();

    const headerToken = {
      Authorization: `Bearer ${token}`,
    };

    const reponseGetDetailGrade = await RequestApi(
      'GET',
      `job-grade/${id}`,
      {},
      headerToken,
      'Mengambil detail grade'
    );

    return reponseGetDetailGrade;
  } catch (error) {
    console.error('Terjadi kesalahan saat mengambil data grade:', error);
    return false;
  }
};

// POST Grade
const addGrade = async (formData: any) => {
  try {
    const token = TokenHelper();

    const headerToken = {
      Authorization: `Bearer ${token}`,
    };

    const reponseAddGrade = await RequestApi(
      'POST',
      'job-grade',
      formData,
      headerToken,
      'Membuat grade'
    );

    return reponseAddGrade;
  } catch (error) {
    console.error('Kesalahan saat membuat grade:', error);
    throw error;
  }
};

// PUT Grade
const updateGrade = async (id: any, gradeData: any) => {
  try {
    const token = TokenHelper();

    const headerToken = {
      Authorization: `Bearer ${token}`,
    };

    const reponseUpdateGrade = await RequestApi(
      'PUT',
      `job-grade/${id}`,
      gradeData,
      headerToken,
      'Memperbarui grade'
    );

    return reponseUpdateGrade;
  } catch (error) {
    console.error('Kesalahan saat memperbarui grade:', error);
    throw error;
  }
};

// DELETE  Grade
const deleteGrade = async (id: any) => {
  try {
    const token = TokenHelper();

    const headerToken = {
      Authorization: `Bearer ${token}`,
    };

    const reponseDeleteGrade = await RequestApi(
      'DELETE',
      `job-grade/${id}`,
      null,
      headerToken,
      'Menghapus grade'
    );

    return reponseDeleteGrade;
  } catch (error) {
    console.error('Kesalahan saat menghapus grade:', error);
    throw error;
  }
};

// Search Grade
const searchGrade = async (searchInput: any) => {
  try {
    const token = TokenHelper();

    const headerToken = {
      Authorization: `Bearer ${token}`,
    };

    const responseSearchGrade = await RequestApi(
      'GET',
      `grade?search=${searchInput}`,
      null,
      headerToken,
      'Mencari grade'
    );

    return responseSearchGrade;
  } catch (error) {
    console.error('Kesalahan saat mencari grade:', error);
    throw error;
  }
};

export {
  getGrade,
  getDetailGrade,
  addGrade,
  updateGrade,
  deleteGrade,
  searchGrade,
};
