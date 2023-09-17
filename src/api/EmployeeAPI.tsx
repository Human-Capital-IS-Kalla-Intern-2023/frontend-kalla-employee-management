// Import Helpers
import { RequestApi } from '../helpers/RequestApi';
import TokenHelper from '../helpers/TokenHelpers';

// GET Employee
const getEmployee = async () => {
  try {
    const token = TokenHelper();

    const headerToken = {
      Authorization: `Bearer ${token}`,
    };

    const reponseGetEmployee = await RequestApi(
      'GET',
      'employee',
      {},
      headerToken,
      'Mengambil employee'
    );

    return reponseGetEmployee;
  } catch (error) {
    console.error('Terjadi kesalahan saat mengambil data employee:', error);
    return false;
  }
};

// GET Detail Employee
const getDetailEmployee = async (id: any) => {
  try {
    const token = TokenHelper();

    const headerToken = {
      Authorization: `Bearer ${token}`,
    };

    const reponseGetDetailEmployee = await RequestApi(
      'GET',
      `employee/${id}`,
      {},
      headerToken,
      'Mengambil detail employee'
    );

    return reponseGetDetailEmployee;
  } catch (error) {
    console.error('Terjadi kesalahan saat mengambil data employee:', error);
    return false;
  }
};

// POST Employee
const addEmployee = async (formData: any) => {
  try {
    const token = TokenHelper();

    const headerToken = {
      Authorization: `Bearer ${token}`,
    };

    const reponseAddEmployee = await RequestApi(
      'POST',
      'employee',
      formData,
      headerToken,
      'Membuat employee'
    );

    return reponseAddEmployee;
  } catch (error) {
    console.error('Kesalahan saat membuat employee:', error);
    throw error;
  }
};

// PUT Employee
const updateEmployee = async (id: any, employeeData: any) => {
  try {
    const token = TokenHelper();

    const headerToken = {
      Authorization: `Bearer ${token}`,
    };

    const reponseUpdateEmployee = await RequestApi(
      'PUT',
      `employee/${id}`,
      employeeData,
      headerToken,
      'Memperbarui employee'
    );

    return reponseUpdateEmployee;
  } catch (error) {
    console.error('Kesalahan saat memperbarui employee:', error);
    throw error;
  }
};

// DELETE  Employee
const deleteEmployee = async (id: any) => {
  try {
    const token = TokenHelper();

    const headerToken = {
      Authorization: `Bearer ${token}`,
    };

    const reponseDeleteEmployee = await RequestApi(
      'DELETE',
      `employee/${id}`,
      null,
      headerToken,
      'Menghapus employee'
    );

    return reponseDeleteEmployee;
  } catch (error) {
    console.error('Kesalahan saat menghapus employee:', error);
    throw error;
  }
};

export {
  getEmployee,
  getDetailEmployee,
  addEmployee,
  updateEmployee,
  deleteEmployee,
};
