const colCells = [
  { key: 'component_name', text: 'Nama Gaji' },
  { key: 'type', text: 'Type' },
  { key: 'is_hide', text: 'Hide' },
  { key: 'is_edit', text: 'Edit' },
  { key: 'is_active', text: 'Active' },
];

const filterOptions = [{ id: 'Location', label: 'Location' }];

const inputField = [
  {
    id: 'component_name',
    label: 'Nama Gaji',
    name: 'component_name',
    type: 'text',
  },
  {
    id: 'type',
    label: 'Type',
    name: 'type',
    type: 'select',
    options: [
      { label: 'fixed pay', value: 1 },
      { label: 'deductions', value: 2 },
    ],
  },
];

export { colCells, filterOptions, inputField };
