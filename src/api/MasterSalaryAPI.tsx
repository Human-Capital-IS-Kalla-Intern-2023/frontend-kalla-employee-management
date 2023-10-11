// Import Helpers
import { RequestApi } from '../helpers/RequestApi';
import TokenHelper from '../helpers/TokenHelpers';

// GET MasterSalary
const getMasterSalary = async () => {
  try {
    const token = TokenHelper();

    const headerToken = {
      Authorization: `Bearer ${token}`,
    };

    const responseGetMasterSalary = await RequestApi(
      'GET',
      'salary-component',
      {},
      headerToken,
      'Mengambil masterSalary'
    );

    return responseGetMasterSalary;
  } catch (error) {
    console.error('Terjadi kesalahan saat mengambil data masterSalary:', error);
    return false;
  }
};

// GET Detail MasterSalary
const getDetailMasterSalary = async (id: any) => {
  try {
    const token = TokenHelper();

    const headerToken = {
      Authorization: `Bearer ${token}`,
    };

    const reponseGetDetailMasterSalary = await RequestApi(
      'GET',
      `salary-component/${id}`,
      {},
      headerToken,
      'Mengambil detail masterSalary'
    );

    return reponseGetDetailMasterSalary;
  } catch (error) {
    console.error('Terjadi kesalahan saat mengambil data masterSalary:', error);
    return false;
  }
};

// POST MasterSalary
const addMasterSalary = async (formData: any) => {
  try {
    const token = TokenHelper();

    const headerToken = {
      Authorization: `Bearer ${token}`,
    };

    const reponseAddMasterSalary = await RequestApi(
      'POST',
      'salary-component',
      formData,
      headerToken,
      'Membuat masterSalary'
    );

    return reponseAddMasterSalary;
  } catch (error) {
    console.error('Kesalahan saat membuat masterSalary:', error);
    throw error;
  }
};

// PUT MasterSalary
const updateMasterSalary = async (id: any, masterSalaryData: any) => {
  try {
    const token = TokenHelper();

    const headerToken = {
      Authorization: `Bearer ${token}`,
    };

    const reponseUpdateMasterSalary = await RequestApi(
      'PUT',
      `salary-component/${id}`,
      masterSalaryData,
      headerToken,
      'Memperbarui masterSalary'
    );

    return reponseUpdateMasterSalary;
  } catch (error) {
    console.error('Kesalahan saat memperbarui masterSalary:', error);
    throw error;
  }
};

// DELETE MasterSalary
const deleteMasterSalary = async (id: any) => {
  try {
    const token = TokenHelper();

    const headerToken = {
      Authorization: `Bearer ${token}`,
    };

    const reponseDeleteMasterSalary = await RequestApi(
      'DELETE',
      `salary-component/${id}`,
      null,
      headerToken,
      'Menghapus masterSalary'
    );

    return reponseDeleteMasterSalary;
  } catch (error) {
    console.error('Kesalahan saat menghapus masterSalary:', error);
    throw error;
  }
};

// Search MasterSalary
const searchMasterSalary = async (searchInput: any) => {
  try {
    const token = TokenHelper();

    const headerToken = {
      Authorization: `Bearer ${token}`,
    };

    const responseSearchMasterSalary = await RequestApi(
      'GET',
      `salary-component?search=${searchInput}`,
      null,
      headerToken,
      'Mencari masterSalary'
    );

    return responseSearchMasterSalary;
  } catch (error) {
    console.error('Kesalahan saat mencari masterSalary:', error);
    throw error;
  }
};

// Change Is Active MasterSalary
const changeIsActiveMasterComponent = async (
  idIsActive: any,
  newIsActive: any
) => {
  try {
    const token = TokenHelper();

    const headerToken = {
      Authorization: `Bearer ${token}`,
    };
    const sendData = { is_active: newIsActive };

    const responseIsActiveChange = await RequestApi(
      'PUT',
      `salary-component/is_active/${idIsActive}`,
      sendData,
      headerToken,
      'Mengubah Active Master'
    );

    return responseIsActiveChange;
  } catch (error) {
    console.error('Kesalahan saat mengubah Active Master:', error);
    throw error;
  }
};

export {
  getMasterSalary,
  getDetailMasterSalary,
  addMasterSalary,
  updateMasterSalary,
  deleteMasterSalary,
  searchMasterSalary,
  changeIsActiveMasterComponent,
};
