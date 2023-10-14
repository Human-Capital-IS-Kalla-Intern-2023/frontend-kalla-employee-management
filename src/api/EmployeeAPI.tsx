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
    throw error;
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
    throw error;
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

// Search Employee
const searchEmployee = async (searchInput: any) => {
  try {
    const token = TokenHelper();

    const headerToken = {
      Authorization: `Bearer ${token}`,
    };

    const responseSearchEmployee = await RequestApi(
      'GET',
      `employee?search=${searchInput}`,
      null,
      headerToken,
      'Mencari employee'
    );

    return responseSearchEmployee;
  } catch (error) {
    console.error('Kesalahan saat mencari employee:', error);
    throw error;
  }
};

const getDetailEligiblesEmployee = async (employeeId: any, positionId: any) => {
  try {
    const token = TokenHelper();

    const headerToken = {
      Authorization: `Bearer ${token}`,
    };

    const responseGetDetailEligiblesEmployee = await RequestApi(
      'GET',
      `eligibles/${employeeId}/${positionId}`,
      {},
      headerToken,
      'Mengambil detail eligibles employee'
    );

    return responseGetDetailEligiblesEmployee;
  } catch (error) {
    console.error(
      'Terjadi kesalahan saat mengambil data eligbles employee:',
      error
    );
    throw error;
  }
};

const getDetailSalaryEmployee = async (employeeId: any, positionId: any) => {
  try {
    const token = TokenHelper();

    const headerToken = {
      Authorization: `Bearer ${token}`,
    };

    const responseGetDetailSalaryEmployee = await RequestApi(
      'GET',
      `eligibles/get-components/${employeeId}/${positionId}`,
      {},
      headerToken,
      'Mengambil detail salary eligibles employee'
    );

    return responseGetDetailSalaryEmployee;
  } catch (error) {
    console.error(
      'Terjadi kesalahan saat mengambil data salary eligbles employee:',
      error
    );
    throw error;
  }
};

const getEditSalaryEmployee = async (employeeId: any, positionId: any) => {
  try {
    const token = TokenHelper();

    const headerToken = {
      Authorization: `Bearer ${token}`,
    };

    const responseGetEditDataSalaryEmployee = await RequestApi(
      'GET',
      `eligibles/edit/${employeeId}/${positionId}`,
      {},
      headerToken,
      'Mengambil detail edit salary eligibles employee'
    );

    return responseGetEditDataSalaryEmployee;
  } catch (error) {
    console.error(
      'Terjadi kesalahan saat mengambil data edit salary eligbles employee:',
      error
    );
    throw error;
  }
};

const addDetailSalaryEmployee = async (employeeSalaryData: any) => {
  try {
    const token = TokenHelper();

    const headerToken = {
      Authorization: `Bearer ${token}`,
    };

    const responseAddDetailSalaryEmployee = await RequestApi(
      'POST',
      `eligibles`,
      employeeSalaryData,
      headerToken,
      'menambahkan detail salary eligibles employee'
    );

    return responseAddDetailSalaryEmployee;
  } catch (error) {
    console.error(
      'Terjadi kesalahan saat menambahkan data salary eligbles employee:',
      error
    );
    throw error;
  }
};

const updateDetailSalaryEmployee = async (
  employeeSalaryData: any,
  employeeId: any
) => {
  try {
    const token = TokenHelper();

    const headerToken = {
      Authorization: `Bearer ${token}`,
    };

    const responseAddDetailSalaryEmployee = await RequestApi(
      'PUT',
      `eligibles/${employeeId}`,
      employeeSalaryData,
      headerToken,
      'menambahkan detail salary eligibles employee'
    );

    return responseAddDetailSalaryEmployee;
  } catch (error) {
    console.error(
      'Terjadi kesalahan saat menambahkan data salary eligbles employee:',
      error
    );
    throw error;
  }
};

export {
  getEmployee,
  getDetailEmployee,
  addEmployee,
  updateEmployee,
  deleteEmployee,
  searchEmployee,
  getDetailEligiblesEmployee,
  getDetailSalaryEmployee,
  addDetailSalaryEmployee,
  getEditSalaryEmployee,
  updateDetailSalaryEmployee,
};
