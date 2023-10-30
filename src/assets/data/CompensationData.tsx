import { getCompany } from '../../api/CompanyAPI';
import { getConfigureSalary } from '../../api/ConfigureSalaryAPI';
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
  options: { label: string; value: any }[];
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
    id: 'salary_id',
    label: 'Payroll Component',
    name: 'salary_id',
    type: 'select',
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

async function fetchSalary() {
  try {
    const responseData = await getConfigureSalary();
    const salaryOption = responseData.data.map((item: any) => ({
      label: item.salary_name,
      value: item.id,
    }));

    const salaryField = inputField.find(
      (field) => field.label === 'Payroll Component'
    );

    if (salaryField) {
      salaryField.options = salaryOption;
    }
  } catch (error) {
    console.error('Error fetching Salary:', error);
  }
}

// Function to populate the "Month" options
function populateMonthOptions() {
  const monthField = inputField.find((field) => field.label === 'Month');
  if (monthField) {
    const months = [
      'JANUARI',
      'FEBRUARI',
      'MARET',
      'APRIL',
      'MEI',
      'JUNI',
      'JULI',
      'AGUSTUS',
      'SEPTEMBER',
      'OKTOBER',
      'NOVEMBER',
      'DESEMBER',
    ];
    monthField.options = months.map((month) => ({
      label: month,
      value: month,
      name: month,
    }));
  }
}

export {
  colCells,
  filterOptions,
  inputField,
  fetchCompany,
  fetchSalary,
  populateMonthOptions,
};
