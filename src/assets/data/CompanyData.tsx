const colCells = [
  { key: 'id', text: 'No' },
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
    id: 'location[0].location_name',
    label: 'Lokasi',
    name: 'location[0].location_name',
    type: 'text',
  },
];

export { colCells, filterOptions, inputField };
