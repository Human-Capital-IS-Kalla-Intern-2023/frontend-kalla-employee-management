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
  getLocation,
  getDetailLocation,
  addLocation,
  updateLocation,
  deleteLocation,
  searchLocation,
} from '../../api/LocationAPI';

import {
  colCells,
  filterOptions,
  inputField,
} from '../../assets/data/LocationData';

const Location: React.FC = () => {
  // Alert State
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [successTitle, setSuccessTitle] = useState<string | null>(null);
  const [errorTitle, setErrorTitle] = useState<string | null>(null);

  // Location State
  const [location, setLocation] = useState<string[]>([]);
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
    searchResults.length > 0 ? searchResults.length : location.length;
  const totalPages = Math.ceil(totalDataCount / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage + 1;
  const endIndex =
    currentPage === totalPages ? totalDataCount : startIndex + itemsPerPage - 1;
  const currentLocationData = location.slice(startIndex - 1, endIndex);

  // GET all location data
  const featchLocation = async () => {
    try {
      setIsLoading(true);

      const reponseData = await getLocation();
      setLocation(reponseData.data);
    } catch (error: any) {
      console.error('Error fetch all location:', error);
      setErrorTitle(`Error fetch all location`);

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

  // GET detail location data by id
  const featchDetailLocation = async (id: number) => {
    try {
      setIsLoading(true);
      const responseData = await getDetailLocation(id);
      setDetailedData(responseData.data);
    } catch (error: any) {
      console.error('Error fetch detail location:', error);
      setErrorTitle(`Error fetch detail location`);

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

  // POST new location data
  const handleAddLocation = async (formData: string) => {
    try {
      const responseData = await addLocation(formData);
      setSuccessTitle(`${responseData.status}`);
      setSuccessMessage(`${responseData.message}`);

      featchLocation();
    } catch (error: any) {
      console.error('Error adding location:', error);
      setErrorTitle(`Error adding location`);

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

  // PUT location data
  const handleEditLocation = async (formData: string, id: number) => {
    try {
      const responseData = await updateLocation(id, formData);

      setSuccessTitle(`${responseData.status}`);
      setSuccessMessage(`${responseData.message}`);
      featchLocation();
    } catch (error: any) {
      console.error('Error editing location:', error);
      setErrorTitle(`Error editing location`);
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

  // DELETE location data
  const handleDeleteLocation = async (id: number) => {
    try {
      setIsLoading(true);

      const responseData = await deleteLocation(id);
      setSuccessTitle(`${responseData.status}`);
      setSuccessMessage(`${responseData.message}`);
      featchLocation();
    } catch (error: any) {
      console.error('Error deleting location:', error);
      setErrorTitle(`Error deleting location`);

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
        const responseData = await searchLocation(inputSearch);

        if (responseData.data.length === 0) {
          setErrorTitle('No Results');
          setErrorMessage(`No results found for ${inputSearch}`);
        } else {
          setSearchResults(responseData.data);
        }
      }
    } catch (error: any) {
      console.error('Error search location:', error);
      setErrorTitle('Error search location');
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
    featchLocation();
  }, []);

  return (
    <>
      <h1 className="px-4 py-2 text-xl my-1">Location Page</h1>
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
        addButtonText="Add Location"
        title="Add Location"
        filterOptions={filterOptions}
        inputFields={inputField}
        onSubmit={handleAddLocation}
        onSearch={handleSearchPostion}
      />
      <TabelBody
        title="Edit Location"
        colCells={colCells}
        data={searchResults.length > 0 ? searchResults : currentLocationData}
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
