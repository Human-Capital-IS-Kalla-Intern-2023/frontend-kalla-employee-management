// Import Library & Package
import React, { useEffect, useState } from 'react';
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
  getCompensation,
  addCompensation,
  updateCompensation,
  deleteCompensation,
  getDetailCompensation,
  searchCompensation,
} from '../../../api/CompensationAPI';

import {
  colCells,
  filterOptions,
  inputField,
} from '../../../assets/data/CompensationData';

const Compensation: React.FC = () => {
  // Alert State
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [successTitle, setSuccessTitle] = useState<string | null>(null);
  const [errorTitle, setErrorTitle] = useState<string | null>(null);

  // compensation State
  const [compensation, setCompensation] = useState<string[]>([]);
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
    searchResults.length > 0 ? searchResults.length : compensation.length;
  const totalPages = Math.ceil(totalDataCount / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage + 1;
  const endIndex =
    currentPage === totalPages ? totalDataCount : startIndex + itemsPerPage - 1;
  const currentCompensationData = compensation.slice(startIndex - 1, endIndex);

  // GET all compensation data
  const fetchAllCompensationData = async () => {
    try {
      setIsLoading(true);
      const responseData = await getCompensation();
      setCompensation(responseData.data);
    } catch (error: any) {
      console.error('Error fetch compensation:', error);
      setErrorTitle('Error fetch compensation data');
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

  // GET detail compensation data by id
  const fetchCompensationDetail = async (id: number) => {
    try {
      setIsLoading(true);

      const responseData = await getDetailCompensation(id);
      setDetailedData(responseData.data);
    } catch (error: any) {
      console.error('Error fetch compensation:', error);
      setErrorTitle('Error fetch compensation detail');
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

  // POST new directorat data
  const handleAddCompensation = async (formData: string) => {
    try {
      const responseData = await addCompensation(formData);
      setSuccessTitle(`${responseData.status}`);
      setSuccessMessage(`${responseData.message}`);

      fetchAllCompensationData();
    } catch (error: any) {
      console.error('Error adding compensation:', error);
      setErrorTitle('Error adding compensation');
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

  // PUT compensation data
  const handleEditCompensation = async (formData: string, id: number) => {
    try {
      const responseData = await updateCompensation(id, formData);
      setSuccessTitle(`${responseData.status}`);
      setSuccessMessage(`${responseData.message}`);
      fetchAllCompensationData();
    } catch (error: any) {
      console.error('Error editing compensation:', error);
      setErrorTitle('Error editing compensation');
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

  // DELETE directorat data
  const handleDeleteCompensation = async (id: number) => {
    try {
      setIsLoading(true);

      const responseData = await deleteCompensation(id);
      setSuccessTitle(`${responseData.status}`);
      setSuccessMessage(`${responseData.message}`);

      fetchAllCompensationData();
    } catch (error: any) {
      console.error('Error deleting compensation:', error);
      setErrorTitle('Error deleting compensation');
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

  const handleSearchCompensation = async (inputSearch: string) => {
    try {
      if (inputSearch.trim() === '') {
        setSearchResults([]);
      } else {
        const responseData = await searchCompensation(inputSearch);
        if (responseData.data.length === 0) {
          setErrorTitle('No Results');
          setErrorMessage(`No results found for ${inputSearch}`);
          ResetAlert(
            setSuccessTitle,
            setSuccessMessage,
            setErrorTitle,
            setErrorMessage
          );
        } else {
          setSearchResults(responseData.data);
        }
      }
    } catch (error: any) {
      console.error('Error search compensation:', error);
      setErrorTitle('Error search compensation');
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
    fetchAllCompensationData();
  }, []);

  return (
    <>
      {isLoading && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <ReactLoading type="spin" color="green" height={50} width={50} />
        </div>
      )}
      <h1 className="px-4 text-xl my-1">Compensation & Benefits</h1>
      {successMessage && successTitle && (
        <SuccessAlert title={successTitle} text={successMessage} />
      )}
      {errorMessage && errorTitle && (
        <ErrorAlert title={errorTitle} text={errorMessage} />
      )}
      <TabelHeader
        addButtonText="Add Compensation"
        title="Add Compensation"
        filterOptions={filterOptions}
        inputFields={inputField}
        onSubmit={handleAddCompensation}
        onSearch={handleSearchCompensation}
      />
      <TabelBody
        title="Edit Employee"
        colCells={colCells}
        data={
          searchResults.length > 0 ? searchResults : currentCompensationData
        }
        inputFields={inputField}
        onSubmit={handleEditCompensation}
        onDelete={handleDeleteCompensation}
        detailedData={detailedData}
        fetchDetailedData={fetchCompensationDetail}
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

export default Compensation;
