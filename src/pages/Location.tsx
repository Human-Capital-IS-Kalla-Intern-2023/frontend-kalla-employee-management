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
  getLocation,
  getDetailLocation,
  addLocation,
  updateLocation,
  deleteLocation,
} from '../api/LocationAPI';

import {
  colCells,
  filterOptions,
  inputField,
} from '../assets/data/LocationData';

const Location: React.FC = () => {
  // Alert State
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [successTitle, setSuccessTitle] = useState<string | null>(null);
  const [errorTitle, setErrorTitle] = useState<string | null>(null);

  // Location State
  const [location, setLocation] = useState<string[]>([]);
  const [detailedData, setDetailedData] = useState<string | null>(null);

  // Pagination
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 10;

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const totalDataCount = location.length;
  const totalPages = Math.ceil(totalDataCount / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage + 1;
  const endIndex =
    currentPage === totalPages ? totalDataCount : startIndex + itemsPerPage - 1;
  const curretLocationData = location.slice(startIndex - 1, endIndex);

  // GET all location data
  const featchLocation = async () => {
    try {
      const reponseData = await getLocation();
      setLocation(reponseData.data);
    } catch (error: any) {
      console.error('Error featch all location:', error);
      setErrorTitle(`Error featch all location`);

      const errorMessages = Object.values(error.response.data.errors).flat();
      setErrorMessage(errorMessages.join('\n'));
    }
  };

  // GET detail location data by id
  const featchDetailLocation = async (id: number) => {
    try {
      const responseData = await getDetailLocation(id);
      setDetailedData(responseData.data);
    } catch (error: any) {
      console.error('Error featch detail location:', error);
      setErrorTitle(`Error featch detail location`);

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

  // POST new location data
  const handleAddLocation = async (formData: string) => {
    try {
      const responseData = await addLocation(formData);
      setSuccessTitle(`${responseData.status}`);
      setSuccessMessage(`${responseData.message}`);

      featchLocation();

      ResetAlert(
        setSuccessTitle,
        setSuccessMessage,
        setErrorTitle,
        setErrorMessage
      );
    } catch (error: any) {
      console.error('Error adding location:', error);
      setErrorTitle(`Error adding location`);

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

  // PUT location data
  const handleEditLocation = async (formData: string, id: number) => {
    try {
      const responseData = await updateLocation(id, formData);

      setSuccessTitle(`${responseData.status}`);
      setSuccessMessage(`${responseData.message}`);
      featchLocation();

      ResetAlert(
        setSuccessTitle,
        setSuccessMessage,
        setErrorTitle,
        setErrorMessage
      );
    } catch (error: any) {
      console.error('Error editing location:', error);
      setErrorTitle(`Error editing location`);
      const errorMessages = Object.values(error.response.data.errors).flat();
      setErrorMessage(errorMessages.join('\n'));
    }
  };

  // DELETE location data
  const handleDeleteLocation = async (id: number) => {
    try {
      const responseData = await deleteLocation(id);
      setSuccessTitle(`${responseData.status}`);
      setSuccessMessage(`${responseData.message}`);
      featchLocation();

      ResetAlert(
        setSuccessTitle,
        setSuccessMessage,
        setErrorTitle,
        setErrorMessage
      );
    } catch (error: any) {
      console.error('Error deleting location:', error);
      setErrorTitle(`Error deleting location`);

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
    featchLocation();
  }, []);

  return (
    <>
      <h1>Location Page</h1>
      {successMessage && successTitle && (
        <SuccessAlert title={successTitle} text={successMessage} />
      )}
      {errorMessage && errorTitle && (
        <ErrorAlert title={errorTitle} text={errorMessage} />
      )}
      <TabelHeader
        addButtonText="Add Location"
        title="Add Location"
        filterOptions={filterOptions}
        inputFields={inputField}
        onSubmit={handleAddLocation}
      />
      <TabelBody
        title="Edit Location"
        colCells={colCells}
        data={curretLocationData}
        inputFields={inputField}
        onSubmit={handleEditLocation}
        onDelete={handleDeleteLocation}
        detailedData={detailedData}
        fetchDetailedData={featchDetailLocation}
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

export default Location;
