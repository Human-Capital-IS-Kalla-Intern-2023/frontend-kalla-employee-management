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
      'compensations',
      {},
      headerToken,
      'Mengambil compensations'
    );

    return responseGetCompensation;
  } catch (error) {
    console.error(
      'Terjadi kesalahan saat mengambil data compensations:',
      error
    );
    throw error;
  }
};

const getCompanySalary = async (company_id: any) => {
  try {
    const token = TokenHelper();

    const headerToken = {
      Authorization: `Bearer ${token}`,
    };

    const responseGetSalaryByCompany = await RequestApi(
      'GET',
      `compensations/salary/${company_id}`,
      {},
      headerToken,
      'Mengambil Salary By Company'
    );

    return responseGetSalaryByCompany;
  } catch (error) {
    console.error(
      'Terjadi kesalahan saat mengambil data  Salary By Company:',
      error
    );
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
      `compensations/${id}`,
      {},
      headerToken,
      'Mengambil detail compensations'
    );

    return reponseGetDetailCompensation;
  } catch (error) {
    console.error(
      'Terjadi kesalahan saat mengambil data compensations:',
      error
    );
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
      'compensations',
      formData,
      headerToken,
      'Membuat compensations'
    );

    return reponseAddCompensation;
  } catch (error) {
    console.error('Kesalahan saat membuat compensations:', error);
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
      `compensations/${id}`,
      compensationData,
      headerToken,
      'Memperbarui Compensations'
    );

    return reponseUpdateCompensation;
  } catch (error) {
    console.error('Kesalahan saat memperbarui compensations:', error);
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
      `compensations/${id}`,
      null,
      headerToken,
      'Menghapus compensations'
    );

    return reponseDeleteCompensation;
  } catch (error) {
    console.error('Kesalahan saat menghapus compensations:', error);
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
      `compensations?search=${searchInput}`,
      null,
      headerToken,
      'Mencari compensations'
    );

    return responseSearchCompensation;
  } catch (error) {
    console.error('Kesalahan saat mencari compensations:', error);
    throw error;
  }
};

export {
  getCompensation,
  getCompanySalary,
  getDetailCompensation,
  addCompensation,
  updateCompensation,
  deleteCompensation,
  searchCompensation,
};
