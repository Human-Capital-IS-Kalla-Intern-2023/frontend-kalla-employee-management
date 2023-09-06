import React, { useEffect, useState } from 'react';
import TabelHeader from '../components/tabels/TabelHeader';
import TabelFooter from '../components/tabels/TabelFooter';
import TabelBody from '../components/tabels/TabelBody';
import {
  getDirectorat,
  addDirectorat,
  updateDirectorat,
  deleteDirectorat,
  getDetailDirectorat,
} from '../api/api';

import { SuccessAlert, ErrorAlert } from '../components/alerts/CustomAlert';
import { ResetAlert } from '../helpers/ResetAlert';
const colCells = [
  { key: 'id', text: 'No' },
  { key: 'directorat_name', text: 'Nama Direktorat' },
];

const filterOptions = [{ id: 'Location', label: 'Location' }];
const inputField = [
  {
    id: 'directorat_name',
    label: 'Nama Directorat',
    name: 'directorat_name',
    type: 'text',
  },
];

const Directorate: React.FC = () => {
  const [directorate, setDirectorate] = useState<any[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 10;

  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const [successTitle, setSuccessTitle] = useState<string | null>(null);
  const [errorTitle, setErrorTitle] = useState<string | null>(null);

  const [detailedData, setDetailedData] = useState<any | null>(null);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const fetchData = async () => {
    try {
      const directorateData = await getDirectorat();
      setDirectorate(directorateData.data);
    } catch (error: any) {
      console.error('Error adding directorate:', error);
      setErrorTitle(`${error.response.data.meta.status}`);
      setErrorMessage(` ${error.response.data.data.message}`);
    }
  };

  const handleAddDirectorat = async (formData: any) => {
    try {
      const responseData = await addDirectorat(formData);
      setSuccessTitle(`${responseData.meta.status}`);
      setSuccessMessage(`${responseData.meta.message}`);

      fetchData();

      ResetAlert(
        setSuccessTitle,
        setSuccessMessage,
        setErrorTitle,
        setErrorMessage
      );
    } catch (error: any) {
      console.error('Error adding directorate:', error);
      setErrorTitle(`${error.response.data.meta.status}`);
      setErrorMessage(` ${error.response.data.data.message}`);

      ResetAlert(
        setSuccessTitle,
        setSuccessMessage,
        setErrorTitle,
        setErrorMessage
      );
    }
  };

  const handleEditDirectorat = async (formData: any, id: any) => {
    try {
      const responseData = await updateDirectorat(id, formData);

      setSuccessTitle(`${responseData.meta.status}`);
      setSuccessMessage(`${responseData.meta.message}`);
      fetchData();

      ResetAlert(
        setSuccessTitle,
        setSuccessMessage,
        setErrorTitle,
        setErrorMessage
      );
    } catch (error: any) {
      console.error('Error editing directorate:', error);
      setErrorTitle(`${error.response.data.meta.status}`);
      setErrorMessage(` ${error.response.data.data.message}`);
    }
  };

  const handeGetDetail = async (id: any) => {
    try {
      const responseData = await getDetailDirectorat(id);
      setDetailedData(responseData.data);
    } catch (error: any) {
      console.error('Error deleting directorate:', error);
      setErrorTitle(`${error.response.data.meta.status}`);
      setErrorMessage(` ${error.response.data.data.message}`);

      ResetAlert(
        setSuccessTitle,
        setSuccessMessage,
        setErrorTitle,
        setErrorMessage
      );
    }
  };

  const handleDeleteDirectorat = async (id: any) => {
    try {
      const responseData = await deleteDirectorat(id);
      setSuccessTitle(`${responseData.meta.status}`);
      setSuccessMessage(`${responseData.meta.message}`);

      fetchData();

      ResetAlert(
        setSuccessTitle,
        setSuccessMessage,
        setErrorTitle,
        setErrorMessage
      );
    } catch (error: any) {
      console.error('Error deleting directorate:', error);
      setErrorTitle(`${error.response.data.meta.status}`);
      setErrorMessage(` ${error.response.data.data.message}`);

      ResetAlert(
        setSuccessTitle,
        setSuccessMessage,
        setErrorTitle,
        setErrorMessage
      );
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const totalDataCount = directorate.length;
  const totalPages = Math.ceil(totalDataCount / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage + 1;
  const endIndex =
    currentPage === totalPages ? totalDataCount : startIndex + itemsPerPage - 1;

  const currentDirectorateData = directorate.slice(startIndex - 1, endIndex);

  return (
    <>
      <h1 className="px-4">Directorate Page</h1>
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
      />
      <TabelBody
        title="Edit Directorate"
        colCells={colCells}
        data={currentDirectorateData}
        inputFields={inputField}
        onSubmit={handleEditDirectorat}
        onDelete={handleDeleteDirectorat}
        detailedData={detailedData}
        fetchDetailedData={handeGetDetail}
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
