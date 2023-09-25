import { useState, useEffect } from 'react';
import { CloseButtonIcon, PlusIcon } from '../../assets/icons/icon';
import { useNavigate } from 'react-router-dom';
import { getCompany } from '../../api/CompanyAPI';
import { ErrorAlert, ConfirmationAlert } from '../alerts/CustomAlert';
import { ResetAlert } from '../../helpers/ResetAlert';
import {
  getMasterSalary,
  getDetailMasterSalary,
} from '../../api/MasterSalaryAPI';
import { addConfigureSalary } from '../../api/ConfigureSalaryAPI';

interface FieldOptions {
  label: string;
  value: number;
}

const PropertySalaryCard = () => {
  const [companyDropdownValue, setCompanyDropdownValue] = useState<
    number | string
  >('');
  const [componentDropdownValue, setComponentDropdownValue] = useState('');

  const [inputValue, setInputValue] = useState('');
  const [checkboxValue, setCheckboxValue] = useState(true);
  const [leftActiveCheckbox, setLeftActiveCheckbox] = useState(true);

  const [companyOptions, setCompanyOptions] = useState<Array<FieldOptions>>([]);
  const [masterComponentOptions, setMasterComponentOptions] = useState<
    Array<FieldOptions>
  >([]);
  const [typeMasterComponentOptions, setTypeMasterComponentOptoins] =
    useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Alert State
  // const [successMessage, setSuccessMessage] = useState<string | null>(null);
  // const [successTitle, setSuccessTitle] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [errorTitle, setErrorTitle] = useState<string | null>(null);

  const [successConfirmTitle, setSuccessConfirmTitle] = useState<string | null>(
    null
  );

  const [successConfirmMessage, setSuccessConfirmMessage] = useState<
    string | null
  >(null);

  const navigate = useNavigate();

  const cancelHandler = async () => {
    navigate('/salary/configures');
  };

  const confirmButtonHandler = async () => {
    console.log('niji');
    navigate('/salary/configures');
  };

  const handleSaveAndClose = async () => {
    try {
      // Persiapan data untuk permintaan API
      const formData = {
        company_id: companyDropdownValue,
        salary_name: inputValue,
        is_active: checkboxValue ? 1 : 0,
      };

      // Panggil fungsi API untuk menambahkan gaji
      const responseData = await addConfigureSalary(formData);
      setSuccessConfirmTitle(`${responseData.status}`);
      setSuccessConfirmMessage(`${responseData.message}`);
      // Tampilkan SweetAlert konfirmasi OK dan navigasi saat OK dikonfirmasi
    } catch (error: any) {
      console.error('Error adding salary:', error);
      setErrorTitle(`Error adding salary`);

      const errorMessages = Object.values(error.response.data.errors).flat();
      setErrorMessage(errorMessages.join('\n'));
      // Tangani kesalahan (misalnya, tampilkan pesan kesalahan)
    }
    ResetAlert(
      setSuccessConfirmTitle,
      setSuccessConfirmMessage,
      setErrorTitle,
      setErrorMessage
    );
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

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

  async function featchMasterComponent() {
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

  useEffect(() => {
    fetchCompanyData();
    featchMasterComponent();

    async function fetchTypeOptions() {
      try {
        if (componentDropdownValue) {
          const responseData = await getDetailMasterSalary(
            componentDropdownValue
          );

          setTypeMasterComponentOptoins(responseData.data.type);
        }
      } catch (error) {
        console.error('Error fetching types:', error);
      }
    }
    fetchTypeOptions();
  }, [componentDropdownValue]);

  const handleCompanyChange = (e: any) => {
    const selectedCompany = e.target.value;
    // Parse the selected value to an integer
    const companyId = parseInt(selectedCompany, 10);
    setCompanyDropdownValue(companyId);
  };

  // Fungsi untuk meng-handle perubahan dropdown Search Component
  const handleComponentChange = (e: any) => {
    const selectedComponent = e.target.value;
    console.log(selectedComponent);

    // Check if the selected value is empty
    if (selectedComponent === '') {
      // If it's empty, reset the typeDropdownValue to an empty string
      setTypeMasterComponentOptoins('');
    }

    setComponentDropdownValue(selectedComponent);
  };

  // Fungsi untuk meng-handle perubahan dropdown Type
  const handleTypeChange = (e: any) => {
    setTypeMasterComponentOptoins(e.target.value);
  };

  const handleInputChange = (e: any) => {
    setInputValue(e.target.value);
  };

  const handleCheckboxChange = (e: any) => {
    setCheckboxValue(e.target.checked);
    // If the checkbox is checked, reset the componentDropdownValue and typeDropdownValue
    if (e.target.checked) {
      setComponentDropdownValue('');
      setTypeMasterComponentOptoins('');
    }
  };

  return (
    <>
      <header className="flex items-center justify-between p-5 shadow-lg ">
        <h1 className="p-2 text-lg font-medium border-b-2 border-primary ">
          Add Configure Salary Page
        </h1>
        <div className="text-sm font-medium ">
          <button
            className="px-4 py-2 mr-4 text-white duration-300 bg-red-500 rounded-md hover:bg-gray"
            onClick={cancelHandler}
          >
            CANCEL
          </button>
          <button
            className="px-4 py-2 text-white duration-300 rounded-md bg-primary hover:bg-gray "
            onClick={handleSaveAndClose}
          >
            SAVE & CLOSE
          </button>
        </div>
      </header>
      <div className="flex h-screen m-8">
        <div className="w-1/4 bg-gray-100 shadow-2xl ">
          <div className="mb-4">
            <h1 className="py-4 pl-4 shadow-lg border-gray bg-slate-200 rounded-t-md">
              Property
            </h1>
            <div className="p-4">
              <label
                htmlFor="dropdown"
                className="block mt-6 font-medium text-gray-700"
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
                <option value="">Select an option</option>
                {companyOptions.map((option) => (
                  <option key={option.value} value={option.value}>
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
                  value={inputValue}
                  onChange={handleInputChange}
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
                    onChange={() => {
                      setLeftActiveCheckbox(!leftActiveCheckbox); // Toggle the checkbox value
                    }}
                  />
                  <div
                    className={`w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600`}
                  ></div>
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className="w-3/4 ml-10 rounded-md shadow-2xl h-fit">
          <h1 className="py-4 pl-4 shadow-lg border-gray bg-slate-200 rounded-t-md">
            COMPONENT
          </h1>
          <div className="flex mt-6 mb-4 ml-6 space-x-2">
            <button
              className="flex items-center justify-center px-4 py-2 mr-3 text-sm font-medium text-white duration-300 rounded-lg bg-primary focus:ring-4 hover:bg-gray"
              onClick={openModal}
            >
              <PlusIcon className="h-3.5 w-3.5 mr-2" /> ADD COMPONENT
            </button>
            <button className="px-2 py-2 text-sm font-medium text-white duration-300 bg-red-500 rounded-lg hover:bg-gray">
              CLEAR
            </button>
          </div>
          <div>
            <table className="min-w-full mt-4 border-collapse border-gray-200 table-auto">
              <thead className="">
                <tr className="">
                  <th className="w-1/12 px-4 py-6 text-left"></th>
                  <th className="w-2/12 px-4 py-6 text-left">List Order</th>
                  <th className="w-3/12 px-8 py-6 text-left">Component</th>
                  <th className="w-2/12 px-4 py-6 text-left">Hide</th>
                  <th className="w-2/12 px-4 py-6 text-left">Edit</th>
                  <th className="w-2/12 px-4 py-6 text-left">Active</th>
                </tr>
              </thead>
              <tbody className="shadow-inner">
                <tr>
                  <td className="w-1/12 px-4 py-6 ">
                    <div className="absolute cursor-pointer top-4 right-5 focus:outline-none"></div>
                    <CloseButtonIcon className="w-8 h-8 p-1 text-red-500 duration-200 rounded-md overlay hover:bg-red-500 hover:text-white" />
                  </td>
                  <td className="w-1/12 px-4 py-6 ">
                    <input
                      type="number"
                      className="w-24 bg-white border-b focus:outline-none"
                    />
                  </td>
                  <td className="px-8 py-6 w-4/1 ">Text Biasa</td>
                  <td className="w-2/12 px-4 py-6 ">
                    <input
                      type="checkbox"
                      className="w-5 h-5 rounded focus:ring-primary"
                    />
                  </td>
                  <td className="w-2/12 px-4 py-6 ">
                    <input
                      type="checkbox"
                      className="w-5 h-5 rounded focus:ring-primary"
                    />
                  </td>
                  <td className="w-2/12 px-4 py-6 ">
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        value=""
                        className="sr-only peer"
                        defaultChecked
                        // checked={customCell[cell.key] === 1}
                        onChange={() => {
                          // const updatedValue = customCell[cell.key] === 1 ? 0 : 1;
                          //  onUpdateIsActive(customCell.id, updatedValue);
                        }}
                      />
                      <div
                        className={`w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600`}
                      ></div>
                    </label>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* {successMessage && successTitle && (
        <SuccessAlert title={successTitle} text={successMessage} />
      )} */}
      {errorMessage && errorTitle && (
        <ErrorAlert title={errorTitle} text={errorMessage} />
      )}

      {successConfirmMessage && successConfirmTitle && (
        <ConfirmationAlert
          title={successConfirmTitle}
          text={successConfirmMessage}
          onConfirm={confirmButtonHandler}
        />
      )}

      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 ">
          <div className="w-1/2 bg-white rounded-md shadow-md">
            <header className="flex items-center justify-between p-4">
              <h2 className="p-2 text-lg font-medium border-b-2 border-primary ">
                Add Component
              </h2>
              <button
                className="text-gray-500 hover:text-gray-700"
                onClick={closeModal}
              >
                <CloseButtonIcon className="w-8 h-8 p-1 duration-200 rounded-md overlay hover:bg-red-500 hover:text-white" />
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
                      checked={checkboxValue}
                      onChange={handleCheckboxChange}
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
                {checkboxValue ? (
                  // Render a dropdown for component selection
                  <label
                    htmlFor="dropdown"
                    className="block font-medium text-gray-700"
                  >
                    Search Component
                  </label>
                ) : (
                  // Render an input field for component selection
                  <label
                    htmlFor="input"
                    className="block font-medium text-gray-700"
                  >
                    Component Name
                  </label>
                )}
                {checkboxValue ? (
                  // Render a dropdown for component selection
                  <select
                    id="dropdown"
                    name="dropdown"
                    value={componentDropdownValue}
                    onChange={handleComponentChange}
                    className="block w-full px-3 py-2 text-sm bg-white border rounded-md shadow-sm mt- focus:outline-none focus:ring-primary focus:border-primary"
                  >
                    <option value="">Select an option</option>
                    {masterComponentOptions.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                ) : (
                  // Render an input field for component selection
                  <input
                    type="text"
                    id="input"
                    name="input"
                    placeholder="Component Name"
                    onChange={handleComponentChange}
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
                {checkboxValue ? (
                  <select
                    id="type-dropdown"
                    name="type-dropdown"
                    value={typeMasterComponentOptions}
                    disabled={!componentDropdownValue}
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
                    // value={typeMasterComponentOptions}
                    // onChange={handleTypeChange}
                    className="block w-full px-3 py-2 mt-2 text-sm bg-white border rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
                  >
                    <option value="">Select type</option>
                    <option value="fixed pay">Fixed Pay</option>
                    <option value="deductions">Deduction</option>
                  </select>
                )}
              </div>
            </div>
            <div className="flex justify-end w-full p-4 rounded-t-none shadow-inner rounded-b-md border-gray bg-slate-200">
              <button
                className="px-4 py-2 mx-2 text-white duration-300 bg-red-500 rounded-md hover:bg-gray"
                onClick={closeModal}
              >
                CANCEL
              </button>
              <button className="px-4 py-2 text-white duration-300 rounded-md bg-primary hover:bg-gray">
                ADD
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PropertySalaryCard;
