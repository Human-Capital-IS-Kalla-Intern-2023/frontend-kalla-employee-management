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
  getDivision,
  addDivision,
  updateDivision,
  deleteDivision,
  getDetailDivision,
} from '../api/DivisionAPI';

import {
  colCells,
  filterOptions,
  inputField,
} from '../assets/data/DivisionData';

const Division: React.FC = () => {
  // Alert State
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [successTitle, setSuccessTitle] = useState<string | null>(null);
  const [errorTitle, setErrorTitle] = useState<string | null>(null);

  // Division State
  const [division, setDivision] = useState<string[]>([]);
  const [detailedData, setDetailedData] = useState<string | null>(null);

  // Pagination
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 10;

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const totalDataCount = division.length;
  const totalPages = Math.ceil(totalDataCount / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage + 1;
  const endIndex =
    currentPage === totalPages ? totalDataCount : startIndex + itemsPerPage - 1;
  const curretDivisionData = division.slice(startIndex - 1, endIndex);

  // GET all division data
  const featchAllDivision = async () => {
    try {
      const responseData = await getDivision();
      setDivision(responseData.data);
    } catch (error: any) {
      console.error('Error featch all division:', error);
      setErrorTitle(`Error featch all division`);

      const errorMessages = Object.values(error.response.data.errors).flat();
      setErrorMessage(errorMessages.join('\n'));
    }
  };

  // GET detail division data by id
  const featchDetailDivision = async (id: number) => {
    try {
      const responseData = await getDetailDivision(id);
      setDetailedData(responseData.data);
    } catch (error: any) {
      console.error('Error featch detail division:', error);
      setErrorTitle(`Error featch detail division`);

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

  // POST new division data
  const handleAddDivision = async (formData: string) => {
    try {
      const responseData = await addDivision(formData);
      setSuccessTitle(`${responseData.status}`);
      setSuccessMessage(`${responseData.message}`);

      featchAllDivision();

      ResetAlert(
        setSuccessTitle,
        setSuccessMessage,
        setErrorTitle,
        setErrorMessage
      );
    } catch (error: any) {
      console.error('Error adding division:', error);
      setErrorTitle(`Error adding division`);

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

  // PUT division data
  const handleEditDivision = async (formData: string, id: number) => {
    try {
      const responseData = await updateDivision(id, formData);

      setSuccessTitle(`${responseData.status}`);
      setSuccessMessage(`${responseData.message}`);
      featchAllDivision();

      ResetAlert(
        setSuccessTitle,
        setSuccessMessage,
        setErrorTitle,
        setErrorMessage
      );
    } catch (error: any) {
      console.error('Error editing division:', error);
      setErrorTitle(``);
      const errorMessages = Object.values(error.response.data.errors).flat();
      setErrorMessage(errorMessages.join('\n'));
    }
  };

  // DELETE division data
  const handleDeleteDivision = async (id: number) => {
    try {
      const responseData = await deleteDivision(id);
      setSuccessTitle(`${responseData.status}`);
      setSuccessMessage(`${responseData.message}`);
      featchAllDivision();

      ResetAlert(
        setSuccessTitle,
        setSuccessMessage,
        setErrorTitle,
        setErrorMessage
      );
    } catch (error: any) {
      console.error('Error deleting division:', error);
      setErrorTitle(`Error deleting division`);

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
    featchAllDivision();
  }, []);

  return (
    <>
      <h1 className='px-4'>Division Page</h1>
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
      />
      <TabelBody
        title="Edit Division"
        colCells={colCells}
        data={curretDivisionData}
        inputFields={inputField}
        onSubmit={handleEditDivision}
        onDelete={handleDeleteDivision}
        detailedData={detailedData}
        fetchDetailedData={featchDetailDivision}
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
