// Import Library & Package
import React, { useEffect, useState } from 'react';

// Import Component
import TabelHeader from '../../components/tabels/TabelHeader';
import TabelFooter from '../../components/tabels/TabelFooter';
import TabelBody from '../../components/tabels/TabelBody';
import { SuccessAlert, ErrorAlert } from '../../components/alerts/CustomAlert';
import { ResetAlert } from '../../helpers/ResetAlert';
import ReactLoading from 'react-loading';

// Import API
import {
  getEmployee,
  getDetailEmployee,
  addEmployee,
  updateEmployee,
  deleteEmployee,
  searchEmployee,
} from '../../api/EmployeeAPI';

import {
  colCells,
  filterOptions,
  inputField,
  fetchPositions,
} from '../../assets/data/EmployeeData';

const Employee: React.FC = () => {
  // Alert State
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [successTitle, setSuccessTitle] = useState<string | null>(null);
  const [errorTitle, setErrorTitle] = useState<string | null>(null);

  // Employee State
  const [employee, setEmployee] = useState<string[]>([]);
  const [detailedData, setDetailedData] = useState<string | null>(null);

  // Loading
  const [isLoading, setIsLoading] = useState(false);

  // Search
  const [searchResults, setSearchResults] = useState<any[]>([]);

  // Pagination
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 10;

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const totalDataCount =
    searchResults && searchResults.length > 0
      ? searchResults.length
      : (employee && employee.length) || 0;

  const totalPages = Math.ceil(totalDataCount / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage + 1;
  const endIndex =
    currentPage === totalPages ? totalDataCount : startIndex + itemsPerPage - 1;
  const currentEmployeeData = (employee || []).slice(startIndex - 1, endIndex);

  // GET all employee data
  const fetchEmployee = async () => {
    try {
      setIsLoading(true);
      const reponseData = await getEmployee();
      setEmployee(reponseData.data);
    } catch (error: any) {
      console.error('Error fetch all employee:', error);
      setErrorTitle(`Error fetch all employee`);

      setErrorMessage(error.response.data.message);
    } finally {
      setIsLoading(false);
    }
    ResetAlert(
      setSuccessTitle,
      setSuccessMessage,
      setErrorTitle,
      setErrorMessage
    );
  };

  // GET detail employee data by id
  const fetchDetailEmployee = async (id: number) => {
    try {
      const responseData = await getDetailEmployee(id);
      setDetailedData(responseData.data);
    } catch (error: any) {
      console.error('Error fetch detail employee:', error);
      setErrorTitle(`Error fetch detail employee`);

      const errorMessages = Object.values(error.response.data.errors).flat();
      setErrorMessage(errorMessages.join('\n'));

      ResetAlert(
        setSuccessTitle,
        setSuccessMessage,
        setErrorTitle,
        setErrorMessage
      );
    }
  };

  // POST new employee data
  const handleAddEmployee = async (formData: string) => {
    try {
      const responseData = await addEmployee(formData);
      setSuccessTitle(`${responseData.status}`);
      setSuccessMessage(`${responseData.message}`);

      fetchEmployee();
    } catch (error: any) {
      console.error('Error adding employee:', error);
      setErrorTitle(`Error adding employee`);

      const errorMessages = Object.values(error.response.data.errors).flat();
      setErrorMessage(errorMessages.join('\n'));
    }
    ResetAlert(
      setSuccessTitle,
      setSuccessMessage,
      setErrorTitle,
      setErrorMessage
    );
  };

  // PUT employee data
  const handleEditEmployee = async (formData: string, id: number) => {
    try {
      const responseData = await updateEmployee(id, formData);

      setSuccessTitle(`${responseData.status}`);
      setSuccessMessage(`${responseData.message}`);
      fetchEmployee();
    } catch (error: any) {
      console.error('Error editing employee:', error);
      setErrorTitle(`Error editing employee`);
      const errorMessages = Object.values(error.response.data.errors).flat();
      setErrorMessage(errorMessages.join('\n'));
    }
    ResetAlert(
      setSuccessTitle,
      setSuccessMessage,
      setErrorTitle,
      setErrorMessage
    );
  };

  // DELETE employee data
  const handleDeleteEmployee = async (id: number) => {
    try {
      const responseData = await deleteEmployee(id);
      setSuccessTitle(`${responseData.status}`);
      setSuccessMessage(`${responseData.message}`);
      fetchEmployee();
    } catch (error: any) {
      console.error('Error deleting employee:', error);
      setErrorTitle(`Error deleting employee`);

      setErrorMessage(error.response.data.message);
    }
    ResetAlert(
      setSuccessTitle,
      setSuccessMessage,
      setErrorTitle,
      setErrorMessage
    );
  };

  const handleSearchPostion = async (inputSearch: string) => {
    try {
      if (inputSearch.trim() === '') {
        setSearchResults([]);
      } else {
        const responseData = await searchEmployee(inputSearch);

        if (responseData.data.length === 0) {
          setErrorTitle('No Results');
          setErrorMessage(`No results found for ${inputSearch}`);
        } else {
          setSearchResults(responseData.data);
        }
      }
    } catch (error: any) {
      console.error('Error search employee:', error);
      setErrorTitle('Error search employee');
      const errorMessages = Object.values(error.response.data.errors).flat();
      setErrorMessage(errorMessages.join('\n'));
    }
    ResetAlert(
      setSuccessTitle,
      setSuccessMessage,
      setErrorTitle,
      setErrorMessage
    );
  };

  useEffect(() => {
    fetchEmployee();
    fetchPositions();
  }, []);

  return (
    <>
      {isLoading && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <ReactLoading type="spin" color="green" height={50} width={50} />
        </div>
      )}
      <h1 className="px-4 py-2 my-1 text-xl">Employee Page</h1>
      {successMessage && successTitle && (
        <SuccessAlert title={successTitle} text={successMessage} />
      )}
      {errorMessage && errorTitle && (
        <ErrorAlert title={errorTitle} text={errorMessage} />
      )}
      <TabelHeader
        onNavigate="add"
        addButtonText="Add Employee"
        title="Add Employee"
        filterOptions={filterOptions}
        inputFields={inputField}
        onSubmit={handleAddEmployee}
        onSearch={handleSearchPostion}
      />
      <TabelBody
        title="Edit Employee"
        colCells={colCells}
        data={searchResults.length > 0 ? searchResults : currentEmployeeData}
        inputFields={inputField}
        onSubmit={handleEditEmployee}
        onDelete={handleDeleteEmployee}
        detailedData={detailedData}
        fetchDetailedData={fetchDetailEmployee}
        onDetailNavigate="detail/personal-data/{employeeId}/{positionId}"
      />
      <TabelFooter
        currentPage={currentPage}
        totalPages={totalPages}
        itemsPerPage={itemsPerPage}
        totalDataCount={totalDataCount}
        onPreviousPage={() => setCurrentPage(currentPage - 1)}
        onNextPage={() => setCurrentPage(currentPage + 1)}
        onPageChange={handlePageChange}
      />
    </>
  );
};

export default Employee;
