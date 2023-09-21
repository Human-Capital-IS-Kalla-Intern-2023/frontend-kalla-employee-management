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
      { label: 'fixed pay', value: 'fixed pay' },
      { label: 'deductions', value: 'deductions' },
    ],
  },
  {
    id: 'is_hide',
    label: 'Hide',
    name: 'is_hide',
    type: 'checkbox',
    checked: 1,
  },
  {
    id: 'is_edit',
    label: 'Edit',
    name: 'is_edit',
    type: 'checkbox',
    checked: 1,
  },
  {
    id: 'is_active',
    label: 'Active',
    name: 'is_active',
    type: 'checkbox',
    checked: 1,
  },
];

export { colCells, filterOptions, inputField };
