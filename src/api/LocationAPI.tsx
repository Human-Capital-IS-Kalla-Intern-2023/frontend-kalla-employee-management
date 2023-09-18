// Import Helpers
import { RequestApi } from '../helpers/RequestApi';
import TokenHelper from '../helpers/TokenHelpers';

// GET Location
const getLocation = async () => {
  try {
    const token = TokenHelper();

    const headerToken = {
      Authorization: `Bearer ${token}`,
    };

    const responseGetLocation = await RequestApi(
      'GET',
      'location',
      {},
      headerToken,
      'Mengambil location'
    );

    return responseGetLocation;
  } catch (error) {
    console.error('Terjadi kesalahan saat mengambil data location:', error);
    return false;
  }
};

// GET Detail Location
const getDetailLocation = async (id: any) => {
  try {
    const token = TokenHelper();

    const headerToken = {
      Authorization: `Bearer ${token}`,
    };

    const reponseGetDetailLocation = await RequestApi(
      'GET',
      `location/${id}`,
      {},
      headerToken,
      'Mengambil detail location'
    );

    return reponseGetDetailLocation;
  } catch (error) {
    console.error('Terjadi kesalahan saat mengambil data location:', error);
    return false;
  }
};

// POST Location
const addLocation = async (formData: any) => {
  try {
    const token = TokenHelper();

    const headerToken = {
      Authorization: `Bearer ${token}`,
    };

    const reponseAddLocation = await RequestApi(
      'POST',
      'location',
      formData,
      headerToken,
      'Membuat location'
    );

    return reponseAddLocation;
  } catch (error) {
    console.error('Kesalahan saat membuat location:', error);
    throw error;
  }
};

// PUT Location
const updateLocation = async (id: any, locationData: any) => {
  try {
    const token = TokenHelper();

    const headerToken = {
      Authorization: `Bearer ${token}`,
    };

    const reponseUpdateLocation = await RequestApi(
      'PUT',
      `location/${id}`,
      locationData,
      headerToken,
      'Memperbarui location'
    );

    return reponseUpdateLocation;
  } catch (error) {
    console.error('Kesalahan saat memperbarui location:', error);
    throw error;
  }
};

// DELETE Location
const deleteLocation = async (id: any) => {
  try {
    const token = TokenHelper();

    const headerToken = {
      Authorization: `Bearer ${token}`,
    };

    const reponseDeleteLocation = await RequestApi(
      'DELETE',
      `location/${id}`,
      null,
      headerToken,
      'Menghapus location'
    );

    return reponseDeleteLocation;
  } catch (error) {
    console.error('Kesalahan saat menghapus location:', error);
    throw error;
  }
};

// Search Location
const searchLocation = async (searchInput: any) => {
  try {
    const token = TokenHelper();

    const headerToken = {
      Authorization: `Bearer ${token}`,
    };

    const responseSearchLocation = await RequestApi(
      'GET',
      `location?search=${searchInput}`,
      null,
      headerToken,
      'Mencari location'
    );

    return responseSearchLocation;
  } catch (error) {
    console.error('Kesalahan saat mencari location:', error);
    throw error;
  }
};

export {
  getLocation,
  getDetailLocation,
  addLocation,
  updateLocation,
  deleteLocation,
  searchLocation,
};
