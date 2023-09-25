import { getCompany } from '../../api/CompanyAPI';
import { getMasterSalary } from '../../api/MasterSalaryAPI';
const colCells = [
  { key: 'salary_name', text: 'Name' },
  { key: 'company_name', text: 'Legal Employee' },
  { key: 'component', text: 'Components' },
  { key: 'is_active', text: 'Active' },
];

const collCellsAdd = [
  { key: 'order', text: 'List Order' },
  { key: 'component_name', text: 'Components' },
  { key: 'is_hide', text: 'Hide' },
  { key: 'is_edit', text: 'Edit' },
  { key: 'is_active', text: 'Active' },
];

const filterOptions = [{ id: 'Location', label: 'Location' }];

const inputField = [
  {
    id: 'company_id',
    label: 'Company Name',
    name: 'company_id',
    type: 'select',
    options: [],
  },
  {
    id: 'salary_name',
    label: 'Name',
    name: 'salary_name',
    type: 'text',
  },

  {
    id: 'is_active',
    label: 'Active',
    name: 'is_active',
    type: 'checkbox',
    checked: 1,
  },
  {
    id: 'component_name',
    label: 'Component Name',
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
];

async function fetchCompany() {
  try {
    const responseData = await getCompany();
    const companyOptions = responseData.data.map((item: any) => ({
      label: item.company_name,
      value: item.id,
    }));

    const companyField = inputField.find(
      (field: any) => field.label === 'Company Name'
    );

    if (companyField) {
      companyField.options = companyOptions;
    }
  } catch (error) {
    console.error('Error fetching companies:', error);
  }
}

async function featchMasterComponent() {
  try {
    const responseData = await getMasterSalary();
    const masterComponentOptions = responseData.data.map((item: any) => ({
      label: item.component_name,
      value: item.id,
    }));

    const masterTypeOptions = responseData.data.map((item: any) => ({
      label: item.type,
      value: item.type,
    }));

    const masterComponentField = inputField.find(
      (field: any) => field.label === 'Component Name'
    );

    const masterTypeField = inputField.find(
      (field: any) => field.label === 'Type'
    );

    if (masterComponentField) {
      masterComponentField.options = masterComponentOptions;
    }

    if (masterTypeField) {
      masterTypeField.options = masterTypeOptions;
    }
  } catch (error) {
    console.error('Error fetching companies:', error);
  }
}

export {
  colCells,
  collCellsAdd,
  filterOptions,
  inputField,
  fetchCompany,
  featchMasterComponent,
};
