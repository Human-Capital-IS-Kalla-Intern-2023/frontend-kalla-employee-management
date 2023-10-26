import { getCompany } from '../../api/CompanyAPI';
const colCells = [
  { key: 'compensation_name', text: 'Compensation' },
  { key: 'company_name', text: 'Bisnis Unit' },
  { key: 'salary_name', text: 'Payroll' },
  { key: 'month', text: 'Month' },
  { key: 'year', text: 'Tahun' },
];

const filterOptions = [{ id: 'Location', label: 'Location' }];

interface InputField {
  id: string;
  label: string;
  name: string;
  type: string;
  options: { label: string; value: number }[];
}
const isEditPage = window.location.pathname.includes(
  '/salary/compensation/edit/'
);

const inputField: InputField[] = [
  {
    id: 'company_id',
    label: 'Legal Employee',
    name: isEditPage ? 'company_name' : 'company_id',
    type: isEditPage ? 'text' : 'select',
    options: [],
  },
  {
    id: 'compensation_name',
    label: 'Nama Compensation',
    name: 'compensation_name',
    type: 'text',
    options: [],
  },
  {
    id: 'salary_id',
    label: 'Payroll Component',
    name: isEditPage ? 'salary_name' : 'salary_id',
    type: isEditPage ? 'text' : 'select',
    options: [],
  },
  {
    id: 'month',
    label: 'Month',
    name: 'month',
    type: 'select',
    options: [],
  },
  {
    id: 'year',
    label: 'Year',
    name: 'year',
    type: 'number',
    options: [],
  },
];

async function fetchCompany() {
  try {
    const responseData = await getCompany();
    const companyOptions = responseData.data.map((item: any) => ({
      label: item.company_name,
      value: item.id,
    }));

    const companyField = inputField.find(
      (field) => field.label === 'Legal Employee'
    );

    if (companyField) {
      companyField.options = companyOptions;
    }
  } catch (error) {
    console.error('Error fetching companies:', error);
  }
}

// Function to populate the "Month" options
function populateMonthOptions() {
  const monthField = inputField.find((field) => field.label === 'Month');
  if (monthField) {
    const months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];
    monthField.options = months.map((month, index) => ({
      label: month,
      value: index + 1,
    }));
  }
}

export {
  colCells,
  filterOptions,
  inputField,
  fetchCompany,
  populateMonthOptions,
};
