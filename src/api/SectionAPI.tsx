// Import Helpers
import { RequestApi } from '../helpers/RequestApi';
import TokenHelper from '../helpers/TokenHelpers';

// GET Section
const getSection = async () => {
  try {
    const token = TokenHelper();

    const headerToken = {
      Authorization: `Bearer ${token}`,
    };

    const responseGetSection = await RequestApi(
      'GET',
      'section',
      {},
      headerToken,
      'Mengambil section'
    );

    return responseGetSection;
  } catch (error) {
    console.error('Terjadi kesalahan saat mengambil data section:', error);
    return false;
  }
};

// GET Detail Section
const getDetailSection = async (id: any) => {
  try {
    const token = TokenHelper();

    const headerToken = {
      Authorization: `Bearer ${token}`,
    };

    const reponseGetDetailSection = await RequestApi(
      'GET',
      `section/${id}`,
      {},
      headerToken,
      'Mengambil detail section'
    );

    return reponseGetDetailSection;
  } catch (error) {
    console.error('Terjadi kesalahan saat mengambil data section:', error);
    return false;
  }
};

// POST Section
const addSection = async (formData: any) => {
  try {
    const token = TokenHelper();

    const headerToken = {
      Authorization: `Bearer ${token}`,
    };

    const reponseAddSection = await RequestApi(
      'POST',
      'section',
      formData,
      headerToken,
      'Membuat section'
    );

    return reponseAddSection;
  } catch (error) {
    console.error('Kesalahan saat membuat section:', error);
    throw error;
  }
};

// PUT Section
const updateSection = async (id: any, sectionData: any) => {
  try {
    const token = TokenHelper();

    const headerToken = {
      Authorization: `Bearer ${token}`,
    };

    const reponseUpdateSection = await RequestApi(
      'PUT',
      `section/${id}`,
      sectionData,
      headerToken,
      'Memperbarui section'
    );

    return reponseUpdateSection;
  } catch (error) {
    console.error('Kesalahan saat memperbarui section:', error);
    throw error;
  }
};

// DELETE Section
const deleteSection = async (id: any) => {
  try {
    const token = TokenHelper();

    const headerToken = {
      Authorization: `Bearer ${token}`,
    };

    const reponseDeleteSection = await RequestApi(
      'DELETE',
      `section/${id}`,
      null,
      headerToken,
      'Menghapus section'
    );

    return reponseDeleteSection;
  } catch (error) {
    console.error('Kesalahan saat menghapus section:', error);
    throw error;
  }
};

// Search Section
const searchSection = async (searchInput: any) => {
  try {
    const token = TokenHelper();

    const headerToken = {
      Authorization: `Bearer ${token}`,
    };

    const responseSearchSection = await RequestApi(
      'GET',
      `section?search=${searchInput}`,
      null,
      headerToken,
      'Mencari section'
    );

    return responseSearchSection;
  } catch (error) {
    console.error('Kesalahan saat mencari section:', error);
    throw error;
  }
};

export {
  getSection,
  getDetailSection,
  addSection,
  updateSection,
  deleteSection,
  searchSection,
};
