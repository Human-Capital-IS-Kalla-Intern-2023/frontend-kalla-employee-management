import React, { useEffect, useState } from 'react';
import TabelHeader from '../components/tabels/TabelHeader';
import TabelFooter from '../components/tabels/TabelFooter';
import TabelBody from '../components/tabels/TabelBody';
import { getDirectorat, addDirectorat } from '../api/api';
import { SuccessAlert, ErrorAlert } from '../components/alerts/CustomAlert';
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
      setDirectorate(directorateData);
    } catch (error) {
      console.error(
        'Terjadi kesalahan saat mengambil data directorate:',
        error
      );
    }
  };

  const handleAddDirectorat = async (formData: any) => {
    try {
      const responseData = await addDirectorat(formData);
      console.log(responseData);

      console.log('Directorate added successfully');
      setSuccessTitle(`${responseData.meta.status}`);
      setSuccessMessage(`${responseData.meta.message}`);

      fetchData();
    } catch (error: any) {
      console.error('Error adding directorate:', error);
      setErrorMessage(`${error.message}`);
      setErrorTitle(`${error.response.data.data.message}`);
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
      <TabelBody colCells={colCells} data={directorate} />
      <TabelFooter />
    </>
  );
};

export default Directorate;
