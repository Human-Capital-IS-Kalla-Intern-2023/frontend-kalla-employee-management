// Import Library & Package
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
// Import Component
import TabelHeader from '../../components/tabels/TabelHeader';
import TabelFooter from '../../components/tabels/TabelFooter';
import TabelBody from '../../components/tabels/TabelBody';
import { SuccessAlert, ErrorAlert } from '../../components/alerts/CustomAlert';
import { ResetAlert } from '../../helpers/ResetAlert';

// Import API
import {
  getMasterSalary,
  getDetailMasterSalary,
  addMasterSalary,
  updateMasterSalary,
  deleteMasterSalary,
  searchMasterSalary,
} from '../../api/MasterSalaryAPI';

import {
  colCells,
  filterOptions,
  inputField,
} from '../../assets/data/MasterSalaryData';

const MasterSalary: React.FC = () => {
  // Alert State
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [successTitle, setSuccessTitle] = useState<string | null>(null);
  const [errorTitle, setErrorTitle] = useState<string | null>(null);

  // MasterSalary State
  const [masterSalary, setMasterSalary] = useState<string[]>([]);
  const [detailedData, setDetailedData] = useState<string | null>(null);

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
    searchResults.length > 0 ? searchResults.length : masterSalary.length;
  const totalPages = Math.ceil(totalDataCount / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage + 1;
  const endIndex =
    currentPage === totalPages ? totalDataCount : startIndex + itemsPerPage - 1;
  const currentMasterSalaryData = masterSalary.slice(startIndex - 1, endIndex);

  // GET all masterSalary data
  const featchMasterSalary = async () => {
    try {
      const reponseData = await getMasterSalary();
      setMasterSalary(reponseData.data);
    } catch (error: any) {
      console.error('Error featch all masterSalary:', error);
      setErrorTitle(`Error featch all masterSalary`);

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

  // GET detail masterSalary data by id
  const featchDetailMasterSalary = async (id: number) => {
    try {
      const responseData = await getDetailMasterSalary(id);
      setDetailedData(responseData.data);
    } catch (error: any) {
      console.error('Error featch detail masterSalary:', error);
      setErrorTitle(`Error featch detail masterSalary`);
      navigate('/notfound');
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

  // POST new masterSalary data
  const handleAddMasterSalary = async (formData: string) => {
    try {
      const responseData = await addMasterSalary(formData);
      setSuccessTitle(`${responseData.status}`);
      setSuccessMessage(`${responseData.message}`);

      featchMasterSalary();
    } catch (error: any) {
      console.error('Error adding masterSalary:', error);
      setErrorTitle(`Error adding masterSalary`);

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

  // PUT masterSalary data
  const handleEditMasterSalary = async (formData: string, id: number) => {
    try {
      const responseData = await updateMasterSalary(id, formData);

      setSuccessTitle(`${responseData.status}`);
      setSuccessMessage(`${responseData.message}`);
      featchMasterSalary();
    } catch (error: any) {
      console.error('Error editing masterSalary:', error);
      setErrorTitle(`Error editing masterSalary`);
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

  // DELETE masterSalary data
  const handleDeleteMasterSalary = async (id: number) => {
    try {
      const responseData = await deleteMasterSalary(id);
      setSuccessTitle(`${responseData.status}`);
      setSuccessMessage(`${responseData.message}`);
      featchMasterSalary();
    } catch (error: any) {
      console.error('Error deleting masterSalary:', error);
      setErrorTitle(`Error deleting masterSalary`);

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

  const handleSearchMasterSalary = async (inputSearch: string) => {
    try {
      if (inputSearch.trim() === '') {
        setSearchResults([]);
      } else {
        const responseData = await searchMasterSalary(inputSearch);

        if (responseData.data.length === 0) {
          setErrorTitle('No Results');
          setErrorMessage(`No results found for ${inputSearch}`);
        } else {
          setSearchResults(responseData.data);
        }
      }
    } catch (error: any) {
      console.error('Error search masterSalary:', error);
      setErrorTitle('Error search masterSalary');
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
    featchMasterSalary();
  }, []);

  return (
    <>
      <h1 className="px-4">Master Salary Page</h1>
      {successMessage && successTitle && (
        <SuccessAlert title={successTitle} text={successMessage} />
      )}
      {errorMessage && errorTitle && (
        <ErrorAlert title={errorTitle} text={errorMessage} />
      )}
      <TabelHeader
        addButtonText="Add Master Salary"
        title="Add Master Salary"
        filterOptions={filterOptions}
        inputFields={inputField}
        onSubmit={handleAddMasterSalary}
        onSearch={handleSearchMasterSalary}
      />
      <TabelBody
        title="Edit Master Salary"
        colCells={colCells}
        data={
          searchResults.length > 0 ? searchResults : currentMasterSalaryData
        }
        inputFields={inputField}
        onSubmit={handleEditMasterSalary}
        onDelete={handleDeleteMasterSalary}
        detailedData={detailedData}
        fetchDetailedData={featchDetailMasterSalary}
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

export default MasterSalary;
