import React, { useEffect, useState } from 'react';
import TabelHeader from '../components/tabels/TabelHeader';
import TabelFooter from '../components/tabels/TabelFooter';
import TabelBody from '../components/tabels/TabelBody';
import {
  getDirectorat,
  addDirectorat,
  updateDirectorat,
  deleteDirectorat,
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
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const [successTitle, setSuccessTitle] = useState<string | null>(null);
  const [errorTitle, setErrorTitle] = useState<string | null>(null);

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

  const handleDeleteDirectorat = async (id: any) => {
    try {
      const responseData = await deleteDirectorat(id);
      setSuccessTitle(`${responseData.meta.status}`);
      setSuccessMessage(`${responseData.meta.message}`);

      // Refresh the data after deletion
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
  return (
    <>
      <h1 className="">Directorate Page</h1>
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
        data={directorate}
        inputFields={inputField}
        onSubmit={handleEditDirectorat}
        onDelete={handleDeleteDirectorat}
      />
      <TabelFooter />
    </>
  );
};

export default Directorate;
