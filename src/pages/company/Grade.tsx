// Import Library & Package
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ReactLoading from 'react-loading';

// Import Component
import TabelHeader from '../../components/tabels/TabelHeader';
import TabelFooter from '../../components/tabels/TabelFooter';
import TabelBody from '../../components/tabels/TabelBody';
import { SuccessAlert, ErrorAlert } from '../../components/alerts/CustomAlert';
import { ResetAlert } from '../../helpers/ResetAlert';

// Import API
import {
  getGrade,
  getDetailGrade,
  addGrade,
  updateGrade,
  deleteGrade,
  searchGrade,
} from '../../api/GradeAPI';

import {
  colCells,
  filterOptions,
  inputField,
} from '../../assets/data/GradeData';

const Grade: React.FC = () => {
  // Alert State
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [successTitle, setSuccessTitle] = useState<string | null>(null);
  const [errorTitle, setErrorTitle] = useState<string | null>(null);

  // Grade State
  const [grade, setGrade] = useState<string[]>([]);
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
    searchResults.length > 0 ? searchResults.length : grade.length;
  const totalPages = Math.ceil(totalDataCount / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage + 1;
  const endIndex =
    currentPage === totalPages ? totalDataCount : startIndex + itemsPerPage - 1;
  const currentGradeData = grade.slice(startIndex - 1, endIndex);

  // GET all grade data
  const fetchGrade = async () => {
    try {
      setIsLoading(true);

      const reponseData = await getGrade();
      setGrade(reponseData.data);
    } catch (error: any) {
      console.error('Error fetch all grade:', error);
      setErrorTitle(`Error fetch all grade`);

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

  // GET detail grade data by id
  const fetchDetailGrade = async (id: number) => {
    try {
      setIsLoading(true);

      const responseData = await getDetailGrade(id);
      setDetailedData(responseData.data);
    } catch (error: any) {
      console.error('Error fetch detail grade:', error);
      setErrorTitle(`Error fetch detail grade`);
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

  // POST new grade data
  const handleAddGrade = async (formData: string) => {
    try {
      const responseData = await addGrade(formData);
      setSuccessTitle(`${responseData.status}`);
      setSuccessMessage(`${responseData.message}`);

      fetchGrade();
    } catch (error: any) {
      console.error('Error adding grade:', error);
      setErrorTitle(`Error adding grade`);

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

  // PUT grade data
  const handleEditGrade = async (formData: string, id: number) => {
    try {
      const responseData = await updateGrade(id, formData);

      setSuccessTitle(`${responseData.status}`);
      setSuccessMessage(`${responseData.message}`);
      fetchGrade();
    } catch (error: any) {
      console.error('Error editing grade:', error);
      setErrorTitle(`Error editing grade`);
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

  // DELETE grade data
  const handleDeleteGrade = async (id: number) => {
    try {
      setIsLoading(true);

      const responseData = await deleteGrade(id);
      setSuccessTitle(`${responseData.status}`);
      setSuccessMessage(`${responseData.message}`);
      fetchGrade();
    } catch (error: any) {
      console.error('Error deleting grade:', error);
      setErrorTitle(`Error deleting grade`);

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

  const handleSearchGrade = async (inputSearch: string) => {
    try {
      if (inputSearch.trim() === '') {
        setSearchResults([]);
      } else {
        const responseData = await searchGrade(inputSearch);

        if (responseData.data.length === 0) {
          setErrorTitle('No Results');
          setErrorMessage(`No results found for ${inputSearch}`);
        } else {
          setSearchResults(responseData.data);
        }
      }
    } catch (error: any) {
      console.error('Error search grade:', error);
      setErrorTitle('Error search grade');
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
    fetchGrade();
  }, []);

  return (
    <>
      <h1 className="px-4 py-2 text-xl my-1">Job Grade Page</h1>
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
        addButtonText="Add Grade"
        title="Add Grade"
        filterOptions={filterOptions}
        inputFields={inputField}
        onSubmit={handleAddGrade}
        onSearch={handleSearchGrade}
      />
      <TabelBody
        title="Edit Grade"
        colCells={colCells}
        data={searchResults.length > 0 ? searchResults : currentGradeData}
        inputFields={inputField}
        onSubmit={handleEditGrade}
        onDelete={handleDeleteGrade}
        detailedData={detailedData}
        fetchDetailedData={fetchDetailGrade}
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

export default Grade;
