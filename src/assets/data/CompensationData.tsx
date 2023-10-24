import { getCompany } from '../../api/CompanyAPI';

const colCells = [
  { key: 'compensation_name', text: 'Nama Compensation' },
  { key: 'Year', text: 'Tahun' },
  { key: 'Month', text: 'Bulan' },
  { key: 'company_name', text: 'Nama Bisnis Unit' },
];

const filterOptions = [{ id: 'Location', label: 'Location' }];

interface InputField {
  id: string;
  label: string;
  name: string;
  type: string;
  options: { label: string; value: number }[];
  min?: number;
  max?: number;
}

const inputField: InputField[] = [
  {
    id: 'legal_employee',
    label: 'Legal Employee',
    name: 'legal_employee',
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
    id: 'Year',
    label: 'Tahun',
    name: 'Year',
    type: 'number',
    options: [],
    min: 2000, // Set the minimum year
    max: new Date().getFullYear(), // Set the maximum year as the current year
  },
  {
    id: 'Month',
    label: 'Month',
    name: 'Month',
    type: 'select',
    options: [], // You will populate this array with month options
  },
  {
    id: 'payroll_component',
    label: 'Payroll Component',
    name: 'payroll_component',
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
