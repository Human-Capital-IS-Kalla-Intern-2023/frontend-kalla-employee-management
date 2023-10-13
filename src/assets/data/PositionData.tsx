import { getCompany } from '../../api/CompanyAPI';
import { getDirectorat } from '../../api/DirectoratAPI';
import { getDivision } from '../../api/DivisionAPI';
import { getSection } from '../../api/SectionAPI';
import { getGrade } from '../../api/GradeAPI';

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
    label: 'Company Name',
    name: 'company_id',
    type: 'select',
    options: [],
  },
  {
    id: 'directorat_id',
    label: 'Directorat',
    name: 'directorat_id',
    type: 'select',
    options: [],
  },
  {
    id: 'division_id',
    label: 'Divisi',
    name: 'division_id',
    type: 'select',
    options: [],
  },
  {
    id: 'section_id',
    label: 'Section',
    name: 'section_id',
    type: 'select',
    options: [],
  },
  {
    id: 'grade_id',
    label: 'Grade',
    name: 'grade_id',
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
      (field: any) => field.label === 'Company Name'
    );

    if (companyField) {
      companyField.options = companyOptions;
    }
  } catch (error) {
    console.error('Error fetching companies:', error);
  }
}

async function fetchDirectorat() {
  try {
    const responseData = await getDirectorat();
    const directoratOptions = responseData.data.map((item: any) => ({
      label: item.directorat_name,
      value: item.id,
    }));

    const directoratField = inputField.find(
      (field: any) => field.label === 'Directorat'
    );

    if (directoratField) {
      directoratField.options = directoratOptions;
    }
  } catch (error) {
    console.error('Error fetching directorats:', error);
  }
}

async function fetchDivision() {
  try {
    const responseData = await getDivision();
    const divisionOptions = responseData.data.map((item: any) => ({
      label: item.division_name,
      value: item.id,
    }));

    const divisionField = inputField.find(
      (field: any) => field.label === 'Divisi'
    );

    if (divisionField) {
      divisionField.options = divisionOptions;
    }
  } catch (error) {
    console.error('Error fetching divisions:', error);
  }
}

async function fetchSection() {
  try {
    const responseData = await getSection();
    const sectionOptions = responseData.data.map((item: any) => ({
      label: item.section_name,
      value: item.id,
    }));

    const sectionField = inputField.find(
      (field: any) => field.label === 'Section'
    );

    if (sectionField) {
      sectionField.options = sectionOptions;
    }
  } catch (error) {
    console.error('Error fetching sections:', error);
  }
}

async function fetchGrade() {
  try {
    const responseData = await getGrade();
    const gradeOptions = responseData.data.map((item: any) => ({
      label: item.grade_name,
      value: item.id,
    }));

    const gradeField = inputField.find((field: any) => field.label === 'Grade');

    if (gradeField) {
      gradeField.options = gradeOptions;
    }
  } catch (error) {
    console.error('Error fetching grades:', error);
  }
}

export {
  colCells,
  filterOptions,
  inputField,
  fetchCompany,
  fetchDirectorat,
  fetchDivision,
  fetchSection,
  fetchGrade,
};
