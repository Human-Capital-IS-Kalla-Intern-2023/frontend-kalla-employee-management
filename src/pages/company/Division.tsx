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
  getDivision,
  addDivision,
  updateDivision,
  deleteDivision,
  getDetailDivision,
  searchDivision,
} from '../../api/DivisionAPI';

import {
  colCells,
  filterOptions,
  inputField,
} from '../../assets/data/DivisionData';

const Division: React.FC = () => {
  // Alert State
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [successTitle, setSuccessTitle] = useState<string | null>(null);
  const [errorTitle, setErrorTitle] = useState<string | null>(null);

  // Division State
  const [division, setDivision] = useState<string[]>([]);
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
    searchResults.length > 0 ? searchResults.length : division.length;
  const totalPages = Math.ceil(totalDataCount / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage + 1;
  const endIndex =
    currentPage === totalPages ? totalDataCount : startIndex + itemsPerPage - 1;
  const currentDivisionData = division.slice(startIndex - 1, endIndex);

  // GET all division data
  const fetchAllDivision = async () => {
    try {
      setIsLoading(true);

      const responseData = await getDivision();
      setDivision(responseData.data);
    } catch (error: any) {
      console.error('Error fetch all division:', error);
      setErrorTitle(`Error fetch all division`);
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

  // GET detail division data by id
  const fetchDetailDivision = async (id: number) => {
    try {
      setIsLoading(true);

      const responseData = await getDetailDivision(id);
      setDetailedData(responseData.data);
    } catch (error: any) {
      console.error('Error fetch detail division:', error);
      setErrorTitle(`Error fetch detail division`);

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

  // POST new division data
  const handleAddDivision = async (formData: string) => {
    try {
      const responseData = await addDivision(formData);
      setSuccessTitle(`${responseData.status}`);
      setSuccessMessage(`${responseData.message}`);

      fetchAllDivision();
    } catch (error: any) {
      console.error('Error adding division:', error);
      setErrorTitle(`Error adding division`);

      setErrorMessage(error);
    }
    ResetAlert(
      setSuccessTitle,
      setSuccessMessage,
      setErrorTitle,
      setErrorMessage
    );
  };

  // PUT division data
  const handleEditDivision = async (formData: string, id: number) => {
    try {
      const responseData = await updateDivision(id, formData);

      setSuccessTitle(`${responseData.status}`);
      setSuccessMessage(`${responseData.message}`);
      fetchAllDivision();
    } catch (error: any) {
      console.error('Error editing division:', error);
      setErrorTitle(``);
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

  // DELETE division data
  const handleDeleteDivision = async (id: number) => {
    try {
      setIsLoading(true);

      const responseData = await deleteDivision(id);
      setSuccessTitle(`${responseData.status}`);
      setSuccessMessage(`${responseData.message}`);
      fetchAllDivision();
    } catch (error: any) {
      console.error('Error deleting division:', error);
      setErrorTitle(`Error deleting division`);

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

  const handleSearchDivision = async (inputSearch: string) => {
    try {
      if (inputSearch.trim() === '') {
        setSearchResults([]);
      } else {
        const responseData = await searchDivision(inputSearch);

        if (responseData.data.length === 0) {
          setErrorTitle('No Results');
          setErrorMessage(`No results found for ${inputSearch}`);
        } else {
          setSearchResults(responseData.data);
        }
      }
    } catch (error: any) {
      console.error('Error search division:', error);
      setErrorTitle('Error search division');
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
    fetchAllDivision();
  }, []);

  return (
    <>
      <h1 className="px-4 text-xl my-1">Division Page</h1>
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
        addButtonText="Add Division"
        title="Add Division"
        filterOptions={filterOptions}
        inputFields={inputField}
        onSubmit={handleAddDivision}
        onSearch={handleSearchDivision}
      />
      <TabelBody
        title="Edit Division"
        colCells={colCells}
        data={searchResults.length > 0 ? searchResults : currentDivisionData}
        inputFields={inputField}
        onSubmit={handleEditDivision}
        onDelete={handleDeleteDivision}
        detailedData={detailedData}
        fetchDetailedData={fetchDetailDivision}
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

export default Division;
