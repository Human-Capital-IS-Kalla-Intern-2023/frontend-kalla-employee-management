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

const inputField: InputField[] = [
  {
    id: 'company_id',
    label: 'Legal Employee',
    name: 'company_id',
    type: 'select',
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
    id: 'year',
    label: 'Year',
    name: 'year',
    type: 'number',
    options: [],
  },
  {
    id: 'month',
    label: 'Month',
    name: 'month',
    type: 'select',
    options: [], // You will populate this array with month options
  },
  {
    id: 'salary_id',
    label: 'Payroll Component',
    name: 'salary_id',
    type: 'select',
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
