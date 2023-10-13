// Import API
import { getLocation } from '../../api/LocationAPI';

const colCells = [
  { key: 'company_name', text: 'Nama Bisnis Unit' },
  { key: 'location[0].location_name', text: 'Lokasi' },
];

const filterOptions = [{ id: 'Location', label: 'Location' }];
const inputField = [
  {
    id: 'company_name',
    label: 'Nama Bisnis Unit',
    name: 'company_name',
    type: 'text',
  },
  {
    id: 'location_name',
    label: 'Lokasi',
    name: 'locations_id',
    type: 'select',
    options: [], // Initialize the options array as empty
  },
];

// Fetch location names and update the options array
const fetchLocationNames = async () => {
  try {
    const responseData = await getLocation();
    const locationOptions = responseData.data.map((item: any) => ({
      label: item.location_name,
      value: item.id, // Use the location ID as the value
    }));

    // Find the 'Lokasi' field in the inputField array
    const lokasiField = inputField.find((field) => field.label === 'Lokasi');
    if (lokasiField) {
      lokasiField.options = locationOptions;
    }
  } catch (error) {
    console.error('Error fetching location');
  }
};

export { colCells, filterOptions, inputField, fetchLocationNames };
