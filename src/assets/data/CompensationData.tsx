const colCells = [
  { key: 'compensation_name', text: 'Nama Compensation' },
  { key: 'Year', text: 'Tahun' },
  { key: 'Month', text: 'Bulan' },
  { key: 'company_name', text: 'Nama Bisnis Unit' },
];

const filterOptions = [{ id: 'Location', label: 'Location' }];

const inputField = [
  {
    id: 'compensation_name',
    label: 'Nama Compensation',
    name: 'compensation_name',
    type: 'text',
  },
  {
    id: 'Year',
    label: 'Tahun',
    name: 'Year',
    type: 'text',
  },
  {
    id: 'Month',
    label: 'Bulan',
    name: 'Month',
    type: 'text',
  },

  {
    id: 'company_name',
    label: 'Nama Bisnis Unit',
    name: 'company_name',
    type: 'text',
  },
];

export { colCells, filterOptions, inputField };
