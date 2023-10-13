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
  getSection,
  addSection,
  updateSection,
  deleteSection,
  getDetailSection,
  searchSection,
} from '../../api/SectionAPI';

import {
  colCells,
  filterOptions,
  inputField,
} from '../../assets/data/SectionData';

const Section: React.FC = () => {
  // Alert State
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [successTitle, setSuccessTitle] = useState<string | null>(null);
  const [errorTitle, setErrorTitle] = useState<string | null>(null);

  // Section State
  const [section, setSection] = useState<string[]>([]);
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
    searchResults.length > 0 ? searchResults.length : section.length;
  const totalPages = Math.ceil(totalDataCount / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage + 1;
  const endIndex =
    currentPage === totalPages ? totalDataCount : startIndex + itemsPerPage - 1;
  const currentSectionData = section.slice(startIndex - 1, endIndex);

  // GET all section data
  const fetchAllSection = async () => {
    try {
      setIsLoading(true);

      const responseData = await getSection();
      setSection(responseData.data);
    } catch (error: any) {
      console.error('Error fetch all section:', error);
      setErrorTitle(`Error fetch all section`);

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

  // GET detail section data by id
  const fetchDetailSection = async (id: number) => {
    try {
      setIsLoading(true);

      const responseData = await getDetailSection(id);
      setDetailedData(responseData.data);
    } catch (error: any) {
      console.error('Error fetch detail section:', error);
      setErrorTitle(`Error fetch detail section`);

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

  // POST new section data
  const handleAddSection = async (formData: string) => {
    try {
      const responseData = await addSection(formData);
      setSuccessTitle(`${responseData.status}`);
      setSuccessMessage(`${responseData.message}`);

      fetchAllSection();
    } catch (error: any) {
      console.error('Error adding section:', error);
      setErrorTitle(`Error adding section`);

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

  // PUT section data
  const handleEditSection = async (formData: string, id: number) => {
    try {
      const responseData = await updateSection(id, formData);

      setSuccessTitle(`${responseData.status}`);
      setSuccessMessage(`${responseData.message}`);
      fetchAllSection();
    } catch (error: any) {
      console.error('Error editing section:', error);
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

  // DELETE section data
  const handleDeleteSection = async (id: number) => {
    try {
      setIsLoading(true);

      const responseData = await deleteSection(id);
      setSuccessTitle(`${responseData.status}`);
      setSuccessMessage(`${responseData.message}`);
      fetchAllSection();
    } catch (error: any) {
      console.error('Error deleting section:', error);
      setErrorTitle(`Error deleting section`);

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
        const responseData = await searchSection(inputSearch);

        if (responseData.data.length === 0) {
          setErrorTitle('No Results');
          setErrorMessage(`No results found for ${inputSearch}`);
        } else {
          setSearchResults(responseData.data);
        }
      }
    } catch (error: any) {
      console.error('Error search section:', error);
      setErrorTitle('Error search section');
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
    fetchAllSection();
  }, []);

  return (
    <>
      <h1 className="px-4 text-xl my-1">Section Page</h1>
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
        addButtonText="Add Section"
        title="Add Section"
        filterOptions={filterOptions}
        inputFields={inputField}
        onSubmit={handleAddSection}
        onSearch={handleSearchPostion}
      />
      <TabelBody
        title="Edit Section"
        colCells={colCells}
        data={searchResults.length > 0 ? searchResults : currentSectionData}
        inputFields={inputField}
        onSubmit={handleEditSection}
        onDelete={handleDeleteSection}
        detailedData={detailedData}
        fetchDetailedData={fetchDetailSection}
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

export default Section;
