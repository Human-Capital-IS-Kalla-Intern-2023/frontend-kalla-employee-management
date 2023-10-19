// Import Library & Package
import React, { useEffect, useState } from 'react';
import ReactLoading from 'react-loading';

// Import Component
import TabelHeader from '../../components/tabels/TabelHeader';
import TabelFooter from '../../components/tabels/TabelFooter';
import TabelBody from '../../components/tabels/TabelBody';
import { SuccessAlert, ErrorAlert } from '../../components/alerts/CustomAlert';
import { ResetAlert } from '../../helpers/ResetAlert';

// Import API
import {
  getDirectorat,
  addDirectorat,
  updateDirectorat,
  deleteDirectorat,
  getDetailDirectorat,
  searchDirectorate,
} from '../../api/DirectoratAPI';

import {
  colCells,
  filterOptions,
  inputField,
} from '../../assets/data/DirectoratData';

const Directorate: React.FC = () => {
  // Alert State
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [successTitle, setSuccessTitle] = useState<string | null>(null);
  const [errorTitle, setErrorTitle] = useState<string | null>(null);

  // Directorate State
  const [directorate, setDirectorate] = useState<string[]>([]);
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
    searchResults.length > 0 ? searchResults.length : directorate.length;
  const totalPages = Math.ceil(totalDataCount / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage + 1;
  const endIndex =
    currentPage === totalPages ? totalDataCount : startIndex + itemsPerPage - 1;
  const currentDirectorateData = directorate.slice(startIndex - 1, endIndex);

  // GET all directorate data
  const fetchAllDirecorateData = async () => {
    try {
      setIsLoading(true);
      const responseData = await getDirectorat();
      setDirectorate(responseData.data);
    } catch (error: any) {
      console.error('Error fetch directorate:', error);
      setErrorTitle('Error fetch directorate data');
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

  // GET detail directorate data by id
  const fetchDirectorateDetail = async (id: number) => {
    try {
      setIsLoading(true);

      const responseData = await getDetailDirectorat(id);
      setDetailedData(responseData.data);
    } catch (error: any) {
      console.error('Error fetch directorate:', error);
      setErrorTitle('Error fetch directorate detail');
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
  const handleAddDirectorat = async (formData: string) => {
    try {
      const responseData = await addDirectorat(formData);
      setSuccessTitle(`${responseData.status}`);
      setSuccessMessage(`${responseData.message}`);

      fetchAllDirecorateData();
    } catch (error: any) {
      console.error('Error adding directorate:', error);
      setErrorTitle('Error adding directorate');
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

  // PUT directorate data
  const handleEditDirectorat = async (formData: string, id: number) => {
    try {
      const responseData = await updateDirectorat(id, formData);
      setSuccessTitle(`${responseData.status}`);
      setSuccessMessage(`${responseData.message}`);
      fetchAllDirecorateData();
    } catch (error: any) {
      console.error('Error editing directorate:', error);
      setErrorTitle('Error editing directorate');
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
  const handleDeleteDirectorat = async (id: number) => {
    try {
      setIsLoading(true);

      const responseData = await deleteDirectorat(id);
      setSuccessTitle(`${responseData.status}`);
      setSuccessMessage(`${responseData.message}`);

      fetchAllDirecorateData();
    } catch (error: any) {
      console.error('Error deleting directorate:', error);
      setErrorTitle('Error deleting directorate');
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

  const handleSearchDirectorat = async (inputSearch: string) => {
    try {
      if (inputSearch.trim() === '') {
        setSearchResults([]);
      } else {
        const responseData = await searchDirectorate(inputSearch);
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
      console.error('Error search directorate:', error);
      setErrorTitle('Error search directorate');
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
    fetchAllDirecorateData();
  }, []);

  return (
    <>
      <h1 className="px-4 py-2 text-xl my-1">Directorate Page</h1>
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
        addButtonText="Add Directorate"
        title="Add Directorate"
        filterOptions={filterOptions}
        inputFields={inputField}
        onSubmit={handleAddDirectorat}
        onSearch={handleSearchDirectorat}
      />
      <TabelBody
        title="Edit Directorate"
        colCells={colCells}
        data={searchResults.length > 0 ? searchResults : currentDirectorateData}
        inputFields={inputField}
        onSubmit={handleEditDirectorat}
        onDelete={handleDeleteDirectorat}
        detailedData={detailedData}
        fetchDetailedData={fetchDirectorateDetail}
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

export default Directorate;
