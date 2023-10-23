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
  getPosition,
  getDetailPosition,
  addPosition,
  updatePosition,
  deletePosition,
  searchPosition,
} from '../../api/PositionAPI';

import {
  colCells,
  filterOptions,
  inputField,
  fetchCompany,
  fetchDirectorat,
  fetchDivision,
  fetchSection,
  fetchGrade,
} from '../../assets/data/PositionData';

const Position: React.FC = () => {
  // Alert State
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [successTitle, setSuccessTitle] = useState<string | null>(null);
  const [errorTitle, setErrorTitle] = useState<string | null>(null);

  // Position State
  const [position, setPosition] = useState<string[]>([]);
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

  const totalDataCount = position?.length;
  const totalPages = Math.ceil(totalDataCount / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage + 1;
  const endIndex =
    currentPage === totalPages ? totalDataCount : startIndex + itemsPerPage - 1;
  const currentPositionData = position?.slice(startIndex - 1, endIndex);

  // GET all position data
  const fetchPosition = async () => {
    try {
      setIsLoading(true);

      const reponseData = await getPosition();
      setPosition(reponseData.data);
    } catch (error: any) {
      console.error('Error fetch all position:', error);
      setErrorTitle(`Error fetch all position`);

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

  // GET detail position data by id
  const fetchDetailPosition = async (id: number) => {
    try {
      setIsLoading(true);

      const responseData = await getDetailPosition(id);
      setDetailedData(responseData.data);
    } catch (error: any) {
      console.error('Error fetch detail position:', error);
      setErrorTitle(`Error fetch detail position`);

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

  // POST new position data
  const handleAddPosition = async (formData: string) => {
    try {
      const responseData = await addPosition(formData);
      setSuccessTitle(`${responseData.status}`);
      setSuccessMessage(`${responseData.message}`);

      fetchPosition();
    } catch (error: any) {
      console.error('Error adding position:', error);
      setErrorTitle(`Error adding position`);

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

  // PUT position data
  const handleEditPosition = async (formData: string, id: number) => {
    try {
      const responseData = await updatePosition(id, formData);

      setSuccessTitle(`${responseData.status}`);
      setSuccessMessage(`${responseData.message}`);
      fetchPosition();
    } catch (error: any) {
      console.error('Error editing position:', error);
      setErrorTitle(`Error editing position`);
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

  // DELETE position data
  const handleDeletePosition = async (id: number) => {
    try {
      setIsLoading(true);

      const responseData = await deletePosition(id);
      setSuccessTitle(`${responseData.status}`);
      setSuccessMessage(`${responseData.message}`);
      fetchPosition();
    } catch (error: any) {
      console.error('Error deleting position:', error);
      setErrorTitle(`Error deleting position`);

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

  const handleSearchPostion = async (inputSearch: string) => {
    try {
      if (inputSearch.trim() === '') {
        setSearchResults([]);
      } else {
        const responseData = await searchPosition(inputSearch);

        if (responseData.data.length === 0) {
          setErrorTitle('No Results');
          setErrorMessage(`No results found for ${inputSearch}`);
        } else {
          setSearchResults(responseData.data);
        }
      }
    } catch (error: any) {
      console.error('Error search position:', error);
      setErrorTitle('Error search position');
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
    fetchCompany(),
      fetchDirectorat(),
      fetchDivision(),
      fetchSection(),
      fetchGrade(),
      fetchPosition();
  }, []);

  return (
    <>
      <h1 className="px-4 py-2 text-xl my-1">Position Page</h1>
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
        onNavigate="add"
        addButtonText="Add Position"
        title="Add Position"
        filterOptions={filterOptions}
        inputFields={inputField}
        onSubmit={handleAddPosition}
        onSearch={handleSearchPostion}
      />
      <TabelBody
        title="Edit Position"
        colCells={colCells}
        data={searchResults.length > 0 ? searchResults : currentPositionData}
        inputFields={inputField}
        onSubmit={handleEditPosition}
        onDelete={handleDeletePosition}
        detailedData={detailedData}
        fetchDetailedData={fetchDetailPosition}
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

export default Position;
