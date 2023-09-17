const colCells = [
  { key: 'id', text: 'No' },
  { key: 'position_name', text: 'Position' },
  { key: 'company_name', text: 'Company' },
  { key: 'directorat_name', text: 'Directorat' },
  { key: 'division_name', text: 'Divisi' },
  { key: 'section_name', text: 'Section' },
  { key: 'grade_name', text: 'Grade' },
];

const filterOptions = [{ id: 'Location', label: 'Location' }];

const inputField = [
  {
    id: 'position_name',
    label: 'Position',
    name: 'position_name',
    type: 'text',
  },
  {
    id: 'company_id',
    label: 'Company',
    name: 'company_id',
    type: 'text',
  },
  {
    id: 'directorat_id',
    label: 'Directorat',
    name: 'directorat_id',
    type: 'text',
  },
  {
    id: 'division_id',
    label: 'Divisi',
    name: 'division_id',
    type: 'text',
  },

  {
    id: 'section_id',
    label: 'Section',
    name: 'section_id',
    type: 'text',
  },
  {
    id: 'job_grade_id',
    label: 'Grade',
    name: 'job_grade_id',
    type: 'text',
  },
];

export { colCells, filterOptions, inputField };
