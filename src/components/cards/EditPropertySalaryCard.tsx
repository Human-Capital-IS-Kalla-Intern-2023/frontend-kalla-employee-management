import { useState, useEffect, useCallback } from 'react';
import { CloseButtonIcon, PlusIcon } from '../../assets/icons/icon';
import { useNavigate, useParams } from 'react-router-dom';
import { getCompany } from '../../api/CompanyAPI';
import ReactLoading from 'react-loading';

import {
  ErrorAlert,
  SuccessAlert,
  DeleteConfimationAlert,
  ConfirmationAlert,
} from '../alerts/CustomAlert';
import { ResetAlert } from '../../helpers/ResetAlert';
import {
  getMasterSalary,
  getDetailMasterSalary,
} from '../../api/MasterSalaryAPI';
import {
  updateConfigureSalary,
  getDetailConfigureSalary,
} from '../../api/ConfigureSalaryAPI';

interface FieldOptions {
  label: string;
  value: number;
}

const EditPropertySalaryCard = () => {
  const { salaryId } = useParams();

  const [companyDropdownValue, setCompanyDropdownValue] = useState<
    number | string
  >('');
  const [componentDropdownValue, setComponentDropdownValue] = useState<{
    id: any;
    name: any;
  }>({ id: '', name: '' });

  const [salaryNameValue, setSalaryNameValue] = useState('');
  const [newComponentNameValue, setNewComponentNameValue] = useState('');

  const [getMasterChecboxValue, setGetMasterChecboxValue] = useState(true);

  const [companyOptions, setCompanyOptions] = useState<Array<FieldOptions>>([]);
  const [masterComponentOptions, setMasterComponentOptions] = useState<
    Array<FieldOptions>
  >([]);
  const [typeMasterComponentOptions, setTypeMasterComponentOptoins] =
    useState('');

  const [isModalOpen, setIsModalOpen] = useState(false);

  const [formData, setFormData] = useState<{
    company_id: string | number;
    salary_name: string;
    is_active: number;
    components: {
      component_id: number;
      order: number;
      component_name: string;
      type: string;
      is_hide: number;
      is_edit: number;
      is_active: number;
    }[];
  }>({
    company_id: '',
    salary_name: '',
    is_active: 1,
    components: [],
  });

  // Alert State
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [successTitle, setSuccessTitle] = useState<string | null>(null);

  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [errorTitle, setErrorTitle] = useState<string | null>(null);

  // Checkbox State
  const [leftActiveCheckbox, setLeftActiveCheckbox] = useState(true);

  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  //* LOCAL STORAGE SECTION
  const saveDataToLocalStorage = (data: any) => {
    localStorage.setItem('salaryData', JSON.stringify(data));
  };

  const getLocalStorageData = () => {
    const savedData = localStorage.getItem('salaryData');
    if (savedData) {
      const parsedData = JSON.parse(savedData);
      return parsedData.components || [];
    }
    return [];
  };

  const [tableData, setTabelData] = useState(getLocalStorageData());

  ///* FEATCH SECTION
  async function fetchCompanyData() {
    try {
      const responseData = await getCompany();
      const companyOptions = responseData.data.map((item: any) => ({
        label: item.company_name,
        value: item.id,
      }));
      setCompanyOptions(companyOptions);
    } catch (error) {
      console.error('Error fetching companies:', error);
    }
  }

  async function fetchMasterComponent() {
    try {
      const responseData = await getMasterSalary();
      const masterComponentOptions = responseData.data.map((item: any) => ({
        label: item.component_name,
        value: item.id,
      }));

      setMasterComponentOptions(masterComponentOptions);
    } catch (error) {
      console.error('Error fetching companies:', error);
    }
  }

  ///* NAVBAR SECTION

  // Handler Cancel Navbar Button
  const cancelHandler = async () => {
    localStorage.removeItem('salaryData');
    navigate('/salary/configures');
  };

  // Handler Save and Close Navbar Button
  const handleSaveAndClose = async () => {
    try {
      const savedData = localStorage.getItem('salaryData');

      if (savedData) {
        // Parse objek JSON dari data yang diambil dari localStorage
        const parsedData = JSON.parse(savedData);

        // Simpan kembali objek yang telah diubah
        localStorage.setItem('salaryData', JSON.stringify(parsedData));

        // Panggil fungsi API untuk menambahkan gaji
        const responseData = await updateConfigureSalary(salaryId, parsedData);

        ConfirmationAlert({
          title: `${responseData.status}`,
          text: `${responseData.message}`,
          onConfirm: () => {
            navigate('/salary/configures');
            localStorage.removeItem('salaryData');
          },
        });
      }
    } catch (error: any) {
      console.error('Error adding salary:', error);
      setErrorTitle(`Error adding salary`);

      const errorMessages = Object.values(error.response.data.errors).flat();
      setErrorMessage(errorMessages.join('\n'));
    }
    ResetAlert(
      setSuccessTitle,
      setSuccessMessage,
      setErrorTitle,
      setErrorMessage
    );
  };

  ///* LEFT CARD SECTION
  // Handle Company Name
  const handleCompanyChange = (e: any) => {
    const selectedCompany = e.target.value;
    const companyId = parseInt(selectedCompany, 10);
    setFormData({ ...formData, company_id: selectedCompany });
    setCompanyDropdownValue(companyId);

    // Save data to local storage
    const newData = { ...formData, company_id: companyId };
    saveDataToLocalStorage(newData);
  };

  // Handle Salary Name
  const handleSalaryNameInput = (e: any) => {
    setFormData({ ...formData, salary_name: e.target.value });
    setSalaryNameValue(e.target.value);

    // Save data to local storage
    const newData = { ...formData, salary_name: e.target.value };
    saveDataToLocalStorage(newData);
  };

  // Handle Left Is Active Checbox
  const handleLeftActiveCheckboxChange = (e: any) => {
    const isChecked = e.target.checked;

    // Update the local state
    setLeftActiveCheckbox(isChecked);

    // Update the formData and save to local storage
    const updatedFormData = {
      ...formData,
      is_active: isChecked ? 1 : 0,
    };

    // Save data to local storage
    setFormData(updatedFormData);
    saveDataToLocalStorage(updatedFormData);
  };

  const handleOrderChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    componentId: number
  ) => {
    const inputValue = e.target.value;
    const newOrder = parseInt(inputValue, 10);

    // Update the formData and save to local storage
    const updatedComponents = [...formData.components];
    const componentIndex = updatedComponents.findIndex(
      (component) => component.component_id === componentId
    );

    if (componentIndex !== -1) {
      updatedComponents[componentIndex].order = newOrder;
      const updatedFormData = {
        ...formData,
        components: updatedComponents,
      };

      // Update tableData state
      const updatedTableData = [...tableData];
      const tableDataIndex = updatedTableData.findIndex(
        (row) => row.component_id === componentId
      );

      if (tableDataIndex !== -1) {
        updatedTableData[tableDataIndex].order = newOrder;
        setTabelData(updatedTableData);
      }

      // Save data to local storage
      setFormData(updatedFormData);
      saveDataToLocalStorage(updatedFormData);
    }
  };

  ///* RIGHT CARD SECTION

  // Handle Hide Checkbox
  const handleIsHideCheckboxChange = (e: any, component_id: any) => {
    const isChecked = e.target.checked;

    // Update the formData and save to local storage
    const updatedComponents = [...formData.components];

    const componentIndex = updatedComponents.findIndex(
      (component) => component.component_id === component_id
    );

    if (componentIndex !== -1) {
      updatedComponents[componentIndex].is_hide = isChecked ? 1 : 0;

      const updatedFormData = {
        ...formData,
        components: updatedComponents,
      };

      // Update tableData state
      const updatedTableData = [...tableData];

      updatedTableData[componentIndex].is_hide = isChecked ? 1 : 0;
      setTabelData(updatedTableData);

      // Save data to local storage
      setFormData(updatedFormData);
      saveDataToLocalStorage(updatedFormData);
    }
  };

  const handleIsEditCheckboxChange = (e: any, component_id: any) => {
    const isChecked = e.target.checked;

    // Update the formData and save to local storage
    const updatedComponents = [...formData.components];
    const componentIndex = updatedComponents.findIndex(
      (component) => component.component_id === component_id
    );

    if (componentIndex !== -1) {
      updatedComponents[componentIndex].is_edit = isChecked ? 1 : 0;

      const updatedFormData = {
        ...formData,
        components: updatedComponents,
      };

      // Update tableData state
      const updatedTableData = [...tableData];
      updatedTableData[componentIndex].is_edit = isChecked ? 1 : 0;
      setTabelData(updatedTableData);

      // Save data to local storage
      setFormData(updatedFormData);
      saveDataToLocalStorage(updatedFormData);
    }
  };

  // Handle Right Is Active Checkbox
  const handleRightActiveChecboxChange = (e: any, component_id: any) => {
    const isChecked = e.target.checked;

    // Update the formData and save to local storage
    const updatedComponents = [...formData.components];
    const componentIndex = updatedComponents.findIndex(
      (component) => component.component_id === component_id
    );

    if (componentIndex !== -1) {
      updatedComponents[componentIndex].is_active = isChecked ? 1 : 0;

      const updatedFormData = {
        ...formData,
        components: updatedComponents,
      };

      // Update tableData state
      const updatedTableData = [...tableData];
      updatedTableData[componentIndex].is_active = isChecked ? 1 : 0;
      setTabelData(updatedTableData);

      // Save data to local storage
      setFormData(updatedFormData);
      saveDataToLocalStorage(updatedFormData);
    }
  };

  const handleDeleteComponent = (listIdToRemove: any) => {
    // Cari indeks komponen yang akan dihapus berdasarkan component_id
    const indexToRemove = formData.components.findIndex(
      (component) => component.component_id === listIdToRemove
    );

    if (indexToRemove !== -1) {
      const updatedComponents = [...formData.components];
      updatedComponents.splice(indexToRemove, 1);

      const updatedTableData = [...tableData];
      updatedTableData.splice(indexToRemove, 1);

      const updatedFormData = {
        ...formData,
        components: updatedComponents,
      };

      setFormData(updatedFormData);
      saveDataToLocalStorage(updatedFormData);
      setTabelData(updatedTableData);
    }
  };

  const showDeleteConfirmation = (index: number, componentName: string) => {
    DeleteConfimationAlert({
      title: 'Delete Component',
      text: `Are you sure you want to delete "${componentName}"?`,
      detail: 'Component successfully deleted',
      onConfirm: () => handleDeleteComponent(index),
    });
  };

  ///* TABEL HEADER SECTION
  // Handler Open Modal
  const openModalAdd = () => {
    setIsModalOpen(true);
  };

  // Handler Close Modal
  const closeModalAdd = () => {
    setIsModalOpen(false);
  };

  const handleClearAllComponents = () => {
    // Menghapus semua komponen dari state formData dan tableData
    const clearedFormData = {
      ...formData,
      components: [],
    };

    setFormData(clearedFormData);
    saveDataToLocalStorage(clearedFormData);
    setTabelData([]);
  };

  const showDeleteAllConfirmation = () => {
    DeleteConfimationAlert({
      title: 'Delete All Component',
      text: 'Are you sure you want to delete all component?',
      detail: 'AllComponent successfully deleted',
      onConfirm: () => handleClearAllComponents(),
    });
  };

  ///* MODAL COMPONENT SECTION
  // Handle Master Component
  const handleMasterComponentChange = async (e: any) => {
    const selectedComponentId = e.target.value;

    const responseData = await getDetailMasterSalary(selectedComponentId);
    const masterComponentName = responseData.data.component_name;

    setComponentDropdownValue({
      id: selectedComponentId,
      name: masterComponentName || '',
    });
  };

  // Handle Type Component
  const handleTypeChange = (e: any) => {
    setTypeMasterComponentOptoins(e.target.value);
  };

  // Handle New Component Name
  const handleNewComponentNameInput = (e: any) => {
    setNewComponentNameValue(e.target.value);
  };

  // Handle Get From Master Libary Checkbox
  const handleMasterCheckbox = (e: any) => {
    setGetMasterChecboxValue(e.target.checked);
    // If the checkbox is checked, reset the componentDropdownValue and typeDropdownValue
    if (e.target.checked) {
      setComponentDropdownValue({ id: '', name: '' });
      setTypeMasterComponentOptoins('');
    }
  };

  const [maxList, setMaxList] = useState(0);

  // Handler to Add Component
  const handleAdd = async () => {
    try {
      let newComponentId = '';
      let newComponentType = '';

      if (getMasterChecboxValue) {
        newComponentId = componentDropdownValue.name;
      } else {
        // If the checkbox is unchecked, use newComponentNameValue
        newComponentId = newComponentNameValue;
      }

      if (!newComponentId) {
        throw new Error('Salary Component Name is required');
      }

      // Check if the newComponentId already exists in the master component
      const componentExistsInMaster = masterComponentOptions.some(
        (option) => option.label === newComponentId
      );

      if (!getMasterChecboxValue && componentExistsInMaster) {
        throw new Error(
          'Salary Component Name already exists in master component'
        );
      }

      const componentExists = formData.components.some(
        (component) => component.component_name === newComponentId
      );

      if (componentExists) {
        throw new Error('Component with the same name already exists.');
      }

      if (!typeMasterComponentOptions) {
        throw new Error('Type is required');
      } else {
        newComponentType = typeMasterComponentOptions;
      }

      // Calculate the next order value by finding the maximum order value among existing component
      const maxOrder = formData.components.reduce(
        (max, component) => Math.max(max, component.order),
        0
      );

      setMaxList(maxList + 1);

      const newComponent = {
        component_id: maxList,
        order: maxOrder + 1,
        component_name: newComponentId,
        type: newComponentType,
        is_hide: 0,
        is_edit: 1,
        is_active: 1,
      };

      const updatedComponents = Array.isArray(formData.components)
        ? [...formData.components, newComponent]
        : [newComponent];

      // Update the formData with the new component
      const newFormData = {
        ...formData,
        components: updatedComponents,
      };

      // Set the updated form data
      setFormData(newFormData);

      // Save the entire form data to local storage
      saveDataToLocalStorage(newFormData);

      const updatedTableData = getLocalStorageData();
      setTabelData(updatedTableData);

      // Reset Field
      setTypeMasterComponentOptoins('');
      if (getMasterChecboxValue) {
        setComponentDropdownValue({ id: '', name: '' });
      } else {
        setNewComponentNameValue('');
      }

      setSuccessTitle(`Success`);
      setSuccessMessage(`Success Add New Component`);
    } catch (error: any) {
      console.error('Error adding salary:', error);
      setErrorTitle(`Error adding salary`);

      setErrorMessage(error.message);
    }
    ResetAlert(
      setSuccessTitle,
      setSuccessMessage,
      setErrorTitle,
      setErrorMessage
    );
  };

  //* USE EFFECT SECTION
  const fetchData = useCallback(async () => {
    try {
      setIsLoading(true);

      const response = await getDetailConfigureSalary(salaryId);
      const configureSalaryData = response.data;

      setCompanyDropdownValue(configureSalaryData.company_id);
      setSalaryNameValue(configureSalaryData.salary_name);

      setGetMasterChecboxValue(configureSalaryData.is_active === 1);
      setLeftActiveCheckbox(configureSalaryData.is_active === 1);
      setFormData(configureSalaryData);

      saveDataToLocalStorage(configureSalaryData);

      const updatedTableData = getLocalStorageData();
      setTabelData(updatedTableData);
    } catch (error: any) {
      console.error('Error fetching data:', error);
    } finally {
      setIsLoading(false);
    }
  }, [salaryId]);

  const fetchTypeOptions = useCallback(async () => {
    try {
      if (componentDropdownValue.id) {
        const responseData = await getDetailMasterSalary(
          componentDropdownValue.id
        );
        setTypeMasterComponentOptoins(responseData.data.type);
      }
    } catch (error) {
      console.error('Error fetching types:', error);
    }
  }, [componentDropdownValue]);

  useEffect(() => {
    const savedData = localStorage.getItem('salaryData');

    if (!savedData) {
      fetchData();
    }

    if (savedData) {
      const parsedData = JSON.parse(savedData);
      // Update your component state with the loaded data
      setFormData(parsedData);
      setCompanyDropdownValue(parsedData.company_id);
      setSalaryNameValue(parsedData.salary_name);

      setLeftActiveCheckbox(parsedData.is_active === 1);
    }

    fetchCompanyData();
    fetchMasterComponent();
    fetchTypeOptions();
  }, [fetchData, fetchTypeOptions]);

  const componentByType: { [key: string]: any[] } = {};
  formData.components.forEach((component: any) => {
    const type = component.type;
    if (!componentByType[type]) {
      componentByType[type] = [];
    }
    componentByType[type].push(component);
  });
  return (
    <>
      {/* Header Design  */}
      <header className="flex items-center justify-between p-4 shadow-lg sm:p-5 ">
        <h1 className="p-2 text-base font-medium border-b-2 sm:text-lg md:text-xl lg:text-2xl border-primary">
          Edit Configure Salary Page
        </h1>
        <div className="flex text-xs font-medium sm:flex-row lg:text-sm ">
          <button
            aria-label="Cancel"
            className="px-1 py-2 mr-2 text-white duration-300 bg-red-800 rounded-md lg:px-4 lg:py-2 lg:mr-4 hover:bg-graylg:hover:scale-105"
            onClick={cancelHandler}
          >
            CANCEL
          </button>
          <button
            aria-label="Save and Close"
            className="px-1 py-2 text-white duration-300 rounded-md lg:px-4 lg:py-2 bg-primary hover:bg-gray lg:hover:scale-105"
            onClick={handleSaveAndClose}
          >
            SAVE & CLOSE
          </button>
        </div>
      </header>

      {isLoading && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <ReactLoading type="spin" color="green" height={50} width={50} />
        </div>
      )}

      {/* Left Card Design  */}
      <div className="flex flex-col m-4 sm:flex-row">
        <div className="w-full mb-4 bg-gray-100 shadow-2xl sm:w-1/4 sm:mb-0">
          <div className="mb-4">
            <h1 className="py-4 pl-4 shadow-lg sm:text-sms lg:text-md border-gray bg-slate-300 rounded-t-md">
              Property
            </h1>
            <div className="p-4">
              <label
                htmlFor="dropdown"
                className="block mt-3 font-medium text-gray-700"
              >
                Legal Employer *
              </label>
              <select
                id="dropdown"
                name="dropdown"
                value={companyDropdownValue}
                onChange={handleCompanyChange}
                className="block w-full px-3 py-2 mt-1 text-sm bg-white border rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
              >
                <option value="" disabled>
                  Select an option
                </option>
                {companyOptions.map((option) => (
                  <option key={option.label} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
              <div className="mt-4 mb-4">
                <label
                  htmlFor="input"
                  className="block font-medium text-gray-700"
                >
                  Salary Name *
                </label>
                <input
                  type="text"
                  id="input"
                  name="input"
                  placeholder="Salary Name"
                  value={salaryNameValue}
                  onChange={handleSalaryNameInput}
                  className="block w-full px-3 py-2 mt-1 text-sm bg-white border rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
                />
              </div>
              <div className="flex items-center">
                <span className="mr-2">Active</span>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    value=""
                    className="sr-only peer"
                    checked={leftActiveCheckbox}
                    onChange={handleLeftActiveCheckboxChange}
                  />
                  <div
                    className={`w-11 h-6 bg-red-300 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-white dark:peer-focus:ring-gray-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600`}
                  ></div>
                </label>
              </div>
            </div>
          </div>
        </div>

        {/* Right Card Design  */}
        <div className="w-full ml-0 overflow-x-auto rounded-md shadow-2xl sm:w-3/4 sm:ml-10">
          <h1 className="flex py-4 pl-4 shadow-lg sm:text-sm lg:text-md border-gray bg-slate-300 rounded-t-md">
            COMPONENT
          </h1>
          <div className="flex my-6 ml-6 space-x-2">
            <button
              aria-label="open Modal"
              className="flex items-center justify-center px-4 py-2 mr-3 text-sm font-medium text-white duration-300 rounded-lg bg-primary focus:ring-4 hover:bg-gray lg:hover:scale-105"
              onClick={openModalAdd}
            >
              <PlusIcon className="h-3.5 w-3.5 mr-2" /> ADD COMPONENT
            </button>
            <button
              aria-label="Clear Components"
              className="px-2 py-2 text-sm font-medium text-white duration-300 bg-red-800 rounded-lg hover:bg-gray lg:hover:scale-105"
              onClick={() => showDeleteAllConfirmation()}
            >
              CLEAR
            </button>
          </div>
          <thead className="overflow-x-auto ">
            <tr className="overflow-x-auto ">
              <th className="w-1/12 px-4 py-6 text-left"></th>
              <th className="w-2/12 px-4 py-6 text-left">List Order</th>
              <th className="w-2/12 px-4 py-6 text-left">Component</th>
              <th className="w-2/12 px-4 py-6 text-left">Type</th>
              <th className="w-1/12 px-4 py-6 text-left">Hide</th>
              <th className="w-1/12 px-4 py-6 text-left">Edit</th>
              <th className="w-1/12 px-4 py-6 text-left">Active</th>
            </tr>
          </thead>

          {Object.keys(componentByType).length === 0 && (
            <div className="my-2 text-center">
              <p className="py-4 mx-2 text-gray-500 rounded-md bg-slate-200">
                No Data Avalaible
              </p>
            </div>
          )}
          {Object.keys(componentByType).map((type, outerIndex) => (
            <div className="mt-2">
              <div key={outerIndex}>
                <h2 className="py-4 pl-4 capitalize shadow-lg border-gray rounded-t-md">
                  {type}
                </h2>
                <table className="min-w-full border-collapse border-gray-200 table-auto">
                  <tbody className="shadow-inner">
                    {componentByType[type].map((row, innerIndex) => (
                      <tr key={`${outerIndex}-${innerIndex}`}>
                        <td className="w-1/12 px-4 py-6 ">
                          <div className="absolute cursor-pointer top-4 right-5 focus:outline-none"></div>
                          <button
                            aria-label="Delete Component"
                            onClick={() =>
                              showDeleteConfirmation(
                                row.component_id,
                                row.component_name
                              )
                            }
                          >
                            <CloseButtonIcon className="w-8 h-8 p-1 text-red-500 duration-200 rounded-md overlay hover:bg-red-800 hover:text-white" />
                          </button>
                        </td>
                        <td className="w-2/12 px-4 py-6 ">
                          <input
                            type="number"
                            value={row.order}
                            onChange={(e) =>
                              handleOrderChange(e, row.component_id)
                            }
                            className="w-24 bg-white border-b focus:outline-none"
                          />
                        </td>

                        <td className="w-2/12 px-4 py-6">
                          {row.component_name}
                        </td>
                        <td className="w-2/12 px-4 py-6 capitalize">
                          {row.type}
                        </td>
                        <td className="w-1/12 px-4 py-6">
                          <input
                            type="checkbox"
                            className="w-5 h-5 rounded focus:ring-primary"
                            checked={row.is_hide === 1}
                            onChange={(e) =>
                              handleIsHideCheckboxChange(e, row.component_id)
                            }
                          />
                        </td>
                        <td className="w-1/12 px-4 py-6">
                          <input
                            type="checkbox"
                            className="w-5 h-5 rounded focus:ring-primary"
                            checked={row.is_edit === 1}
                            onChange={(e) =>
                              handleIsEditCheckboxChange(e, row.component_id)
                            }
                          />
                        </td>
                        <td className="w-1/12 px-4 py-6">
                          <label className="relative inline-flex items-center cursor-pointer">
                            <input
                              type="checkbox"
                              value=""
                              className="sr-only peer"
                              checked={row.is_active === 1}
                              onChange={(e) =>
                                handleRightActiveChecboxChange(
                                  e,
                                  row.component_id
                                )
                              }
                            />
                            <div
                              className={`w-11 h-6 bg-red-300 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-white dark:peer-focus:ring-gray-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600`}
                            ></div>
                          </label>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ))}
        </div>
      </div>

      {successMessage && successTitle && (
        <SuccessAlert title={successTitle} text={successMessage} />
      )}
      {errorMessage && errorTitle && (
        <ErrorAlert title={errorTitle} text={errorMessage} />
      )}
      {/* Modal Design */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 ">
          <div className="w-full bg-white rounded-md shadow-md sm:w-1/2">
            <header className="flex items-center justify-between p-4">
              <h2 className="p-2 text-lg font-medium border-b-2 border-primary ">
                Add Component
              </h2>
              <button
                aria-label="close Modal"
                className="text-gray-500 hover:text-gray-700"
                onClick={closeModalAdd}
              >
                <CloseButtonIcon className="w-8 h-8 p-1 duration-200 rounded-md overlay hover:bg-red-800 hover:text-white" />
              </button>
            </header>
            <div className="p-4">
              {/* Konten modal */}
              <div className="mb-4">
                <div className="flex items-center">
                  <label
                    htmlFor="component"
                    className="block font-medium text-gray-700"
                  >
                    Component*
                  </label>
                  <div className="flex items-center ml-4">
                    <input
                      type="checkbox"
                      id="component"
                      name="component"
                      checked={getMasterChecboxValue}
                      onChange={handleMasterCheckbox}
                      className="w-5 h-5 rounded focus:ring-primary"
                    />
                    <label
                      htmlFor="component"
                      className="block ml-2 text-gray-900"
                    >
                      Get from master library
                    </label>
                  </div>
                </div>
              </div>
              <div className="mb-4">
                {getMasterChecboxValue ? (
                  <label
                    htmlFor="dropdown"
                    className="block font-medium text-gray-700"
                  >
                    Search Component
                  </label>
                ) : (
                  <label
                    htmlFor="input"
                    className="block font-medium text-gray-700"
                  >
                    Component Name
                  </label>
                )}
                {getMasterChecboxValue ? (
                  <select
                    id="dropdown"
                    name="dropdown"
                    value={componentDropdownValue.id}
                    onChange={handleMasterComponentChange}
                    className="block w-full px-3 py-2 text-sm bg-white border rounded-md shadow-sm mt- focus:outline-none focus:ring-primary focus:border-primary"
                  >
                    <option value="" disabled>
                      Select an option
                    </option>
                    {masterComponentOptions.map((option) => (
                      <option key={option.label} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                ) : (
                  <input
                    type="text"
                    id="input"
                    name="input"
                    placeholder="Component Name"
                    value={newComponentNameValue}
                    onChange={handleNewComponentNameInput}
                    className="block w-full px-3 py-2 mt-1 text-sm bg-white border rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
                  />
                )}
              </div>
              <div className="mb-4">
                <label
                  className="block font-medium text-gray-700"
                  htmlFor="type-dropdown"
                >
                  Type
                </label>
                {getMasterChecboxValue ? (
                  <select
                    id="type-dropdown"
                    name="type-dropdown"
                    value={typeMasterComponentOptions}
                    disabled={!componentDropdownValue.id}
                    onChange={handleTypeChange}
                    className="block w-full px-3 py-2 mt-2 text-sm bg-white border rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
                  >
                    <option value="" disabled>
                      Select type
                    </option>
                    <option value={typeMasterComponentOptions}>
                      {typeMasterComponentOptions}
                    </option>
                  </select>
                ) : (
                  <select
                    id="type-dropdown"
                    name="type-dropdown"
                    value={typeMasterComponentOptions}
                    onChange={handleTypeChange}
                    className="block w-full px-3 py-2 mt-2 text-sm bg-white border rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
                  >
                    <option value="" disabled>
                      Select type
                    </option>
                    <option value="fixed pay">Fixed Pay</option>
                    <option value="deductions">Deduction</option>
                  </select>
                )}
              </div>
            </div>
            <div className="flex justify-end w-full p-4 rounded-t-none shadow-inner rounded-b-md border-gray bg-slate-200">
              <button
                aria-label="close Modal"
                className="px-4 py-2 mx-2 text-white duration-300 bg-red-800 rounded-md hover:bg-gray"
                onClick={closeModalAdd}
              >
                CANCEL
              </button>
              <button
                aria-label="Add "
                className="px-4 py-2 text-white duration-300 rounded-md bg-primary hover:bg-gray"
                onClick={handleAdd}
              >
                ADD
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default EditPropertySalaryCard;
