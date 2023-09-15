// Import Library & Package
import React, { useEffect, useState } from 'react';

// Import Component
import TabelHeader from '../components/tabels/TabelHeader';
import TabelFooter from '../components/tabels/TabelFooter';
import TabelBody from '../components/tabels/TabelBody';
import { SuccessAlert, ErrorAlert } from '../components/alerts/CustomAlert';
import { ResetAlert } from '../helpers/ResetAlert';

// Import API
import {
  getCompany,
  getDetailCompany,
  addCompany,
  updateCompany,
  deleteCompany,
} from '../api/CompanyAPI';

import {
  colCells,
  filterOptions,
  inputField,
} from '../assets/data/CompanyData';

const Company: React.FC = () => {
  // Alert State
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [successTitle, setSuccessTitle] = useState<string | null>(null);
  const [errorTitle, setErrorTitle] = useState<string | null>(null);

  // Company State
  const [company, setCompany] = useState<string[]>([]);
  const [detailedData, setDetailedData] = useState<string | null>(null);

  // Pagination
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 10;

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const totalDataCount = company.length;
  const totalPages = Math.ceil(totalDataCount / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage + 1;
  const endIndex =
    currentPage === totalPages ? totalDataCount : startIndex + itemsPerPage - 1;
  const curretCompanyData = company.slice(startIndex - 1, endIndex);

  // GET all company data
  const featchCompany = async () => {
    try {
      const reponseData = await getCompany();
      setCompany(reponseData.data);
    } catch (error: any) {
      console.error('Error featch all company:', error);
      setErrorTitle(`Error featch all company`);

      const errorMessages = Object.values(error.response.data.errors).flat();
      setErrorMessage(errorMessages.join('\n'));
    }
  };

  // GET detail company data by id
  const featchDetailCompany = async (id: number) => {
    try {
      const responseData = await getDetailCompany(id);
      setDetailedData(responseData.data);
    } catch (error: any) {
      console.error('Error featch detail company:', error);
      setErrorTitle(`Error featch detail company`);

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

  // POST new company data
  const handleAddCompany = async (formData: string) => {
    try {
      const responseData = await addCompany(formData);
      setSuccessTitle(`${responseData.status}`);
      setSuccessMessage(`${responseData.message}`);

      featchCompany();

      ResetAlert(
        setSuccessTitle,
        setSuccessMessage,
        setErrorTitle,
        setErrorMessage
      );
    } catch (error: any) {
      console.error('Error adding company:', error);
      setErrorTitle(`Error adding company`);

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

  // PUT company data
  const handleEditCompany = async (formData: string, id: number) => {
    try {
      const responseData = await updateCompany(id, formData);

      setSuccessTitle(`${responseData.status}`);
      setSuccessMessage(`${responseData.message}`);
      featchCompany();

      ResetAlert(
        setSuccessTitle,
        setSuccessMessage,
        setErrorTitle,
        setErrorMessage
      );
    } catch (error: any) {
      console.error('Error editing company:', error);
      setErrorTitle(`Error editing company`);
      const errorMessages = Object.values(error.response.data.errors).flat();
      setErrorMessage(errorMessages.join('\n'));
    }
  };

  // DELETE company data
  const handleDeleteCompany = async (id: number) => {
    try {
      const responseData = await deleteCompany(id);
      setSuccessTitle(`${responseData.status}`);
      setSuccessMessage(`${responseData.message}`);
      featchCompany();

      ResetAlert(
        setSuccessTitle,
        setSuccessMessage,
        setErrorTitle,
        setErrorMessage
      );
    } catch (error: any) {
      console.error('Error deleting company:', error);
      setErrorTitle(`Error deleting company`);

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

  useEffect(() => {
    featchCompany();
  }, []);

  return (
    <>
      <h1 className='px-4'>Company Page</h1>
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
      />
      <TabelBody
        title="Edit Company"
        colCells={colCells}
        data={curretCompanyData}
        inputFields={inputField}
        onSubmit={handleEditCompany}
        onDelete={handleDeleteCompany}
        detailedData={detailedData}
        fetchDetailedData={featchDetailCompany}
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
