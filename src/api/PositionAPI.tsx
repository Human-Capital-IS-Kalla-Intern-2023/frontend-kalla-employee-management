// Import Helpers
import { RequestApi } from '../helpers/RequestApi';
import TokenHelper from '../helpers/TokenHelpers';

// GET Position
const getPosition = async () => {
  try {
    const token = TokenHelper();

    const headerToken = {
      Authorization: `Bearer ${token}`,
    };

    const responseGetPosition = await RequestApi(
      'GET',
      'position',
      {},
      headerToken,
      'Mengambil position'
    );

    return responseGetPosition;
  } catch (error) {
    console.error('Terjadi kesalahan saat mengambil data position:', error);
    throw error;
  }
};

// GET Detail Position
const getDetailPosition = async (id: any) => {
  try {
    const token = TokenHelper();

    const headerToken = {
      Authorization: `Bearer ${token}`,
    };

    const reponseGetDetailPosition = await RequestApi(
      'GET',
      `position/${id}`,
      {},
      headerToken,
      'Mengambil detail position'
    );

    return reponseGetDetailPosition;
  } catch (error) {
    console.error('Terjadi kesalahan saat mengambil data position:', error);
    throw error;
  }
};

// POST Position
const addPosition = async (formData: any) => {
  try {
    const token = TokenHelper();

    const headerToken = {
      Authorization: `Bearer ${token}`,
    };

    const reponseAddPosition = await RequestApi(
      'POST',
      'position',
      formData,
      headerToken,
      'Membuat position'
    );

    return reponseAddPosition;
  } catch (error) {
    console.error('Kesalahan saat membuat position:', error);
    throw error;
  }
};

// PUT Position
const updatePosition = async (id: any, positionData: any) => {
  try {
    const token = TokenHelper();

    const headerToken = {
      Authorization: `Bearer ${token}`,
    };

    const reponseUpdatePosition = await RequestApi(
      'PUT',
      `position/${id}`,
      positionData,
      headerToken,
      'Memperbarui position'
    );

    return reponseUpdatePosition;
  } catch (error) {
    console.error('Kesalahan saat memperbarui position:', error);
    throw error;
  }
};

// DELETE Position
const deletePosition = async (id: any) => {
  try {
    const token = TokenHelper();

    const headerToken = {
      Authorization: `Bearer ${token}`,
    };

    const reponseDeletePosition = await RequestApi(
      'DELETE',
      `position/${id}`,
      null,
      headerToken,
      'Menghapus position'
    );

    return reponseDeletePosition;
  } catch (error) {
    console.error('Kesalahan saat menghapus position:', error);
    throw error;
  }
};

// Search Position
const searchPosition = async (searchInput: any) => {
  try {
    const token = TokenHelper();

    const headerToken = {
      Authorization: `Bearer ${token}`,
    };

    const responseSearchPosition = await RequestApi(
      'GET',
      `position?search=${searchInput}`,
      null,
      headerToken,
      'Mencari position'
    );

    return responseSearchPosition;
  } catch (error) {
    console.error('Kesalahan saat mencari position:', error);
    throw error;
  }
};

export {
  getPosition,
  getDetailPosition,
  addPosition,
  updatePosition,
  deletePosition,
  searchPosition,
};
