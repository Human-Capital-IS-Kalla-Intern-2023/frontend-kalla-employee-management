// Import Helpers
import { RequestApi } from '../helpers/RequestApi';
import TokenHelper from '../helpers/TokenHelpers';

// GET ConfigureSalary
const getConfigureSalary = async () => {
  try {
    const token = TokenHelper();

    const headerToken = {
      Authorization: `Bearer ${token}`,
    };

    const responseGetConfigureSalary = await RequestApi(
      'GET',
      'salary-component',
      {},
      headerToken,
      'Mengambil configureSalary'
    );

    return responseGetConfigureSalary;
  } catch (error) {
    console.error(
      'Terjadi kesalahan saat mengambil data configureSalary:',
      error
    );
    return false;
  }
};

// GET Detail ConfigureSalary
const getDetailConfigureSalary = async (id: any) => {
  try {
    const token = TokenHelper();

    const headerToken = {
      Authorization: `Bearer ${token}`,
    };

    const reponseGetDetailConfigureSalary = await RequestApi(
      'GET',
      `salary-component/${id}`,
      {},
      headerToken,
      'Mengambil detail configureSalary'
    );

    return reponseGetDetailConfigureSalary;
  } catch (error) {
    console.error(
      'Terjadi kesalahan saat mengambil data configureSalary:',
      error
    );
    return false;
  }
};

// POST ConfigureSalary
const addConfigureSalary = async (formData: any) => {
  try {
    const token = TokenHelper();

    const headerToken = {
      Authorization: `Bearer ${token}`,
    };

    const reponseAddConfigureSalary = await RequestApi(
      'POST',
      'configureSalary',
      formData,
      headerToken,
      'Membuat configureSalary'
    );

    return reponseAddConfigureSalary;
  } catch (error) {
    console.error('Kesalahan saat membuat configureSalary:', error);
    throw error;
  }
};

// PUT ConfigureSalary
const updateConfigureSalary = async (id: any, configureSalaryData: any) => {
  try {
    const token = TokenHelper();

    const headerToken = {
      Authorization: `Bearer ${token}`,
    };

    const reponseUpdateConfigureSalary = await RequestApi(
      'PUT',
      `salary-component/${id}`,
      configureSalaryData,
      headerToken,
      'Memperbarui configureSalary'
    );

    return reponseUpdateConfigureSalary;
  } catch (error) {
    console.error('Kesalahan saat memperbarui configureSalary:', error);
    throw error;
  }
};

// DELETE ConfigureSalary
const deleteConfigureSalary = async (id: any) => {
  try {
    const token = TokenHelper();

    const headerToken = {
      Authorization: `Bearer ${token}`,
    };

    const reponseDeleteConfigureSalary = await RequestApi(
      'DELETE',
      `salary-component/${id}`,
      null,
      headerToken,
      'Menghapus configureSalary'
    );

    return reponseDeleteConfigureSalary;
  } catch (error) {
    console.error('Kesalahan saat menghapus configureSalary:', error);
    throw error;
  }
};

// Search ConfigureSalary
const searchConfigureSalary = async (searchInput: any) => {
  try {
    const token = TokenHelper();

    const headerToken = {
      Authorization: `Bearer ${token}`,
    };

    const responseSearchConfigureSalary = await RequestApi(
      'GET',
      `salary-component?search=${searchInput}`,
      null,
      headerToken,
      'Mencari configureSalary'
    );

    return responseSearchConfigureSalary;
  } catch (error) {
    console.error('Kesalahan saat mencari configureSalary:', error);
    throw error;
  }
};

export {
  getConfigureSalary,
  getDetailConfigureSalary,
  addConfigureSalary,
  updateConfigureSalary,
  deleteConfigureSalary,
  searchConfigureSalary,
};
