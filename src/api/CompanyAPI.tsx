// Import Helpers
import { RequestApi } from '../helpers/RequestApi';
import TokenHelper from '../helpers/TokenHelpers';

// GET Company
const getCompany = async () => {
  try {
    const token = TokenHelper();

    const headerToken = {
      Authorization: `Bearer ${token}`,
    };

    const responseGetCompany = await RequestApi(
      'GET',
      'company',
      {},
      headerToken,
      'Mengambil company'
    );

    return responseGetCompany;
  } catch (error) {
    console.error('Terjadi kesalahan saat mengambil data company:', error);
    throw error;
  }
};

// GET Detail Company
const getDetailCompany = async (id: any) => {
  try {
    const token = TokenHelper();

    const headerToken = {
      Authorization: `Bearer ${token}`,
    };

    const reponseGetDetailCompany = await RequestApi(
      'GET',
      `company/${id}`,
      {},
      headerToken,
      'Mengambil detail company'
    );

    return reponseGetDetailCompany;
  } catch (error) {
    console.error('Terjadi kesalahan saat mengambil data company:', error);
    throw error;
  }
};

// POST Company
const addCompany = async (formData: any) => {
  try {
    const token = TokenHelper();

    const headerToken = {
      Authorization: `Bearer ${token}`,
    };

    const reponseAddCompany = await RequestApi(
      'POST',
      'company',
      formData,
      headerToken,
      'Membuat company'
    );

    return reponseAddCompany;
  } catch (error) {
    console.error('Kesalahan saat membuat company:', error);
    throw error;
  }
};

// PUT Company
const updateCompany = async (id: any, companyData: any) => {
  try {
    const token = TokenHelper();

    const headerToken = {
      Authorization: `Bearer ${token}`,
    };

    const reponseUpdateCompany = await RequestApi(
      'PUT',
      `company/${id}`,
      companyData,
      headerToken,
      'Memperbarui company'
    );

    return reponseUpdateCompany;
  } catch (error) {
    console.error('Kesalahan saat memperbarui company:', error);
    throw error;
  }
};

// DELETE  Company
const deleteCompany = async (id: any) => {
  try {
    const token = TokenHelper();

    const headerToken = {
      Authorization: `Bearer ${token}`,
    };

    const reponseDeleteCompany = await RequestApi(
      'DELETE',
      `company/${id}`,
      null,
      headerToken,
      'Menghapus company'
    );

    return reponseDeleteCompany;
  } catch (error) {
    console.error('Kesalahan saat menghapus company:', error);
    throw error;
  }
};

// Search Company
const searchCompany = async (searchInput: any) => {
  try {
    const token = TokenHelper();

    const headerToken = {
      Authorization: `Bearer ${token}`,
    };

    const responseSearchCompany = await RequestApi(
      'GET',
      `company?search=${searchInput}`,
      null,
      headerToken,
      'Mencari company'
    );

    return responseSearchCompany;
  } catch (error) {
    console.error('Kesalahan saat mencari company:', error);
    throw error;
  }
};

export {
  getCompany,
  getDetailCompany,
  addCompany,
  updateCompany,
  deleteCompany,
  searchCompany,
};
