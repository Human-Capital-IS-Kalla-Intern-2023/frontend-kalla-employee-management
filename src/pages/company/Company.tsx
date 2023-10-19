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
  getCompany,
  getDetailCompany,
  addCompany,
  updateCompany,
  deleteCompany,
  searchCompany,
} from '../../api/CompanyAPI';

import {
  colCells,
  filterOptions,
  inputField,
  fetchLocationNames,
} from '../../assets/data/CompanyData';

const Company: React.FC = () => {
  // Alert State
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [successTitle, setSuccessTitle] = useState<string | null>(null);
  const [errorTitle, setErrorTitle] = useState<string | null>(null);

  // Company State
  const [company, setCompany] = useState<string[]>([]);
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
    searchResults.length > 0 ? searchResults.length : company.length;
  const totalPages = Math.ceil(totalDataCount / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage + 1;
  const endIndex =
    currentPage === totalPages ? totalDataCount : startIndex + itemsPerPage - 1;
  const currentCompanyData = company.slice(startIndex - 1, endIndex);

  // GET all company data
  const fetchCompany = async () => {
    try {
      setIsLoading(true);

      const reponseData = await getCompany();
      setCompany(reponseData.data);
    } catch (error: any) {
      console.error('Error fetch all company:', error);
      setErrorTitle(`Error fetch all company`);

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

  // GET detail company data by id
  const fetchDetailCompany = async (id: number) => {
    try {
      setIsLoading(true);
      const responseData = await getDetailCompany(id);
      setDetailedData(responseData.data);
    } catch (error: any) {
      console.error('Error fetch detail company:', error);
      setErrorTitle(`Error fetch detail company`);

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

  // POST new company data
  const handleAddCompany = async (formData: string) => {
    try {
      const responseData = await addCompany(formData);
      setSuccessTitle(`${responseData.status}`);
      setSuccessMessage(`${responseData.message}`);

      fetchCompany();
    } catch (error: any) {
      console.error('Error adding company:', error);
      setErrorTitle(`Error adding company`);

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

  // PUT company data
  const handleEditCompany = async (formData: string, id: number) => {
    try {
      const responseData = await updateCompany(id, formData);

      setSuccessTitle(`${responseData.status}`);
      setSuccessMessage(`${responseData.message}`);
      fetchCompany();
    } catch (error: any) {
      console.error('Error editing company:', error);
      setErrorTitle(`Error editing company`);
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

  // DELETE company data
  const handleDeleteCompany = async (id: number) => {
    try {
      setIsLoading(true);
      const responseData = await deleteCompany(id);
      setSuccessTitle(`${responseData.status}`);
      setSuccessMessage(`${responseData.message}`);
      fetchCompany();
    } catch (error: any) {
      console.error('Error deleting company:', error);
      setErrorTitle(`Error deleting company`);

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
        const responseData = await searchCompany(inputSearch);
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
      console.error('Error search company:', error);
      setErrorTitle('Error search company');
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
    fetchLocationNames();
    fetchCompany();
  }, []);

  return (
    <>
      <h1 className="px-4 py-2 my-1 text-xl">Company Page</h1>
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
        addButtonText="Add Company"
        title="Add Company"
        filterOptions={filterOptions}
        inputFields={inputField}
        onSubmit={handleAddCompany}
        onSearch={handleSearchPostion}
      />
      <TabelBody
        title="Edit Company"
        colCells={colCells}
        data={searchResults.length > 0 ? searchResults : currentCompanyData}
        inputFields={inputField}
        onSubmit={handleEditCompany}
        onDelete={handleDeleteCompany}
        detailedData={detailedData}
        fetchDetailedData={fetchDetailCompany}
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

export default Company;
