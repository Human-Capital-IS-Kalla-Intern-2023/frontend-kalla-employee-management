const colCells = [
  { key: 'name', text: 'Name' },
  { key: 'legal_employee', text: 'Legal Employee' },
  { key: 'effective_date', text: 'Effective Date' },
  { key: 'components', text: 'Components' },
  { key: 'is_active', text: 'Active' },
];

const filterOptions = [{ id: 'Location', label: 'Location' }];

const inputField = [
  {
    id: 'name',
    label: 'Name',
    name: 'name',
    type: 'text',
  },
  {
    id: 'legal_employee',
    label: 'Legal Employee',
    name: 'legal_employee',
    type: 'text',
  },
];

export { colCells, filterOptions, inputField };
