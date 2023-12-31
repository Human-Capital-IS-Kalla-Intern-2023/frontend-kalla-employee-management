// Import Library & Package
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ReactLoading from 'react-loading';

// Import Component
import TabelHeader from '../../../components/tabels/TabelHeader';
import TabelFooter from '../../../components/tabels/TabelFooter';
import TabelBody from '../../../components/tabels/TabelBody';
import {
  SuccessAlert,
  ErrorAlert,
} from '../../../components/alerts/CustomAlert';
import { ResetAlert } from '../../../helpers/ResetAlert';

// Import API
import {
  getConfigureSalary,
  getDetailConfigureSalary,
  addConfigureSalary,
  updateConfigureSalary,
  deleteConfigureSalary,
  searchConfigureSalary,
  changeIsActiveSalarySBU,
} from '../../../api/ConfigureSalaryAPI';

import {
  colCells,
  filterOptions,
  inputField,
} from '../../../assets/data/ConfigureSalaryData';

const ConfigureSalary: React.FC = () => {
  // Alert State
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [successTitle, setSuccessTitle] = useState<string | null>(null);
  const [errorTitle, setErrorTitle] = useState<string | null>(null);

  // ConfigureSalary State
  const [configureSalary, setConfigureSalary] = useState<string[]>([]);
  const [detailedData, setDetailedData] = useState<string | null>(null);

  // Loading
  const [isLoading, setIsLoading] = useState(false);

  // Search
  const [searchResults, setSearchResults] = useState<any[]>([]);

  // Pagination
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 10;

  const navigate = useNavigate();
  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const totalDataCount =
    searchResults.length > 0 ? searchResults.length : configureSalary?.length;
  const totalPages = Math.ceil(totalDataCount / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage + 1;
  const endIndex =
    currentPage === totalPages ? totalDataCount : startIndex + itemsPerPage - 1;
  const currentConfigureSalaryData = configureSalary?.slice(
    startIndex - 1,
    endIndex
  );

  // GET all configureSalary data
  const fetchConfigureSalary = async () => {
    try {
      setIsLoading(true);

      const reponseData = await getConfigureSalary();
      setConfigureSalary(reponseData.data);
    } catch (error: any) {
      console.error('Error fetch all configureSalary:', error);
      setErrorTitle(`Error fetch all configureSalary`);

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

  // GET detail configureSalary data by id
  const fetchDetailConfigureSalary = async (id: number) => {
    try {
      setIsLoading(true);

      const responseData = await getDetailConfigureSalary(id);
      setDetailedData(responseData.data);
    } catch (error: any) {
      console.error('Error fetch detail configureSalary:', error);
      setErrorTitle(`Error fetch detail configureSalary`);
      navigate('/notfound');
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

  // POST new configureSalary data
  const handleAddConfigureSalary = async (formData: string) => {
    try {
      const responseData = await addConfigureSalary(formData);
      setSuccessTitle(`${responseData.status}`);
      setSuccessMessage(`${responseData.message}`);

      fetchConfigureSalary();
    } catch (error: any) {
      console.error('Error adding configureSalary:', error);
      setErrorTitle(`Error adding configureSalary`);

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

  // PUT configureSalary data
  const handleEditConfigureSalary = async (formData: string, id: number) => {
    try {
      const responseData = await updateConfigureSalary(id, formData);

      setSuccessTitle(`${responseData.status}`);
      setSuccessMessage(`${responseData.message}`);
      fetchConfigureSalary();
    } catch (error: any) {
      console.error('Error editing configureSalary:', error);
      setErrorTitle(`Error editing configureSalary`);
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

  // DELETE configureSalary data
  const handleDeleteConfigureSalary = async (id: number) => {
    try {
      setIsLoading(true);

      const responseData = await deleteConfigureSalary(id);
      setSuccessTitle(`${responseData.status}`);
      setSuccessMessage(`${responseData.message}`);
      fetchConfigureSalary();
    } catch (error: any) {
      console.error('Error deleting configureSalary:', error);
      setErrorTitle(`Error deleting configureSalary`);

      const errorMessages = Object.values(error.response.data.errors).flat();
      setErrorMessage(errorMessages.join('\n'));
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

  const handleSearchConfigureSalary = async (inputSearch: string) => {
    try {
      if (inputSearch.trim() === '') {
        setSearchResults([]);
      } else {
        const responseData = await searchConfigureSalary(inputSearch);

        if (responseData.data.length === 0) {
          setErrorTitle('No Results');
          setErrorMessage(`No results found for ${inputSearch}`);
        } else {
          setSearchResults(responseData.data);
        }
      }
    } catch (error: any) {
      console.error('Error search configureSalary:', error);
      setErrorTitle('Error search configureSalary');
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

  const handleChangeIsActiveSalarySBU = async (
    idIsActive: any,
    newIsActive: any
  ) => {
    try {
      await changeIsActiveSalarySBU(idIsActive, newIsActive);
      fetchConfigureSalary();
    } catch (error: any) {
      console.error('Error change is active configureSalary:', error);
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
    fetchConfigureSalary();
  }, []);

  return (
    <>
      <h1 className="px-4 py-2 my-1 text-xl">SBU Salary Page</h1>
      {isLoading && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <ReactLoading type="spin" color="green" height={50} width={50} />
        </div>
      )}
      {successMessage && successTitle && (
        <SuccessAlert title={successTitle} text={successMessage} />
      )}
      {errorMessage && errorTitle && (
        <ErrorAlert title={errorTitle} text={errorMessage} />
      )}
      <TabelHeader
        addButtonText="Add SBU Salary"
        title="Add SBU Salary"
        filterOptions={filterOptions}
        inputFields={inputField}
        onSubmit={handleAddConfigureSalary}
        onSearch={handleSearchConfigureSalary}
        onNavigate="payroll_component/add"
      />
      <TabelBody
        title="Edit SBU Salary"
        colCells={colCells}
        data={
          searchResults.length > 0 ? searchResults : currentConfigureSalaryData
        }
        inputFields={inputField}
        onSubmit={handleEditConfigureSalary}
        onDelete={handleDeleteConfigureSalary}
        detailedData={detailedData}
        fetchDetailedData={fetchDetailConfigureSalary}
        onEditNavigate="payroll_component/edit/{salaryId}"
        changeIsActive={handleChangeIsActiveSalarySBU}
        onDetailNavigate="payroll_component/detail/{salaryId}"
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

export default ConfigureSalary;
