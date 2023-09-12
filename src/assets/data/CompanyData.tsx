const colCells = [
  { key: 'id', text: 'No' },
  { key: 'company_name', text: 'Nama Bisnis Unit' },
  { key: 'locations_id', text: 'Lokasi' },
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
    id: 'locations_id',
    label: 'Lokasi',
    name: 'locations_id',
    type: 'text',
  },
];

export { colCells, filterOptions, inputField };
