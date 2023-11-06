import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getCompany } from '../../../api/CompanyAPI';
import ReactLoading from 'react-loading';

import { getDetailConfigureSalary } from '../../../api/ConfigureSalaryAPI';

interface FieldOptions {
  label: string;
  value: number;
}

const DetailPropertySalaryCard = () => {
  const { salaryId } = useParams();
  const [companyDropdownValue, setCompanyDropdownValue] = useState<
    number | string
  >('');

  const [salaryNameValue, setSalaryNameValue] = useState('');

  const [companyOptions, setCompanyOptions] = useState<Array<FieldOptions>>([]);

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

  // Checkbox State
  const leftActiveCheckbox = formData.is_active;

  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  //* LOCAL STORAGE SECTION
  const saveDataToLocalStorage = (data: any) => {
    localStorage.setItem('salaryDetailData', JSON.stringify(data));
  };

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

  ///* NAVBAR SECTION

  // Handler Cancel Navbar Button
  const backHandler = async () => {
    localStorage.removeItem('salaryDetailData');
    navigate('/salary/configures');
  };

  useEffect(() => {
    // Define the fetchData function inside the useEffect
    const fetchData = async () => {
      try {
        setIsLoading(true);

        const response = await getDetailConfigureSalary(salaryId);
        const configuresalaryDetailData = response.data;

        setCompanyDropdownValue(configuresalaryDetailData.company_id);
        setSalaryNameValue(configuresalaryDetailData.salary_name);

        setFormData(configuresalaryDetailData);

        saveDataToLocalStorage(configuresalaryDetailData);
      } catch (error: any) {
        console.error('Error fetching data:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [salaryId]);

  useEffect(() => {
    const savedData = localStorage.getItem('salaryDetailData');

    if (savedData) {
      const parsedData = JSON.parse(savedData);
      // Update your component state with the loaded data
      setFormData(parsedData);
      setCompanyDropdownValue(parsedData.company_id);
      setSalaryNameValue(parsedData.salary_name);
    }

    fetchCompanyData();
  }, []);

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
        <h1 className="p-2 text-base font-medium border-b-2 sm:text-lg md:text-xl lg:text-[22px] border-primary">
          Detail Configure Salary Page
        </h1>
        <div className="flex text-xs font-medium sm:flex-row lg:text-sm ">
          <button
            aria-label="Cancel"
            className="px-1 py-2 mr-2 duration-300 rounded-md lg:text-lg  lg:px-4 lg:py-2 lg:mr-4 hover:bg-stone-300 hover:text-pureBlack bg-slate-500 text-white lg:hover:scale-[1.03] "
            onClick={backHandler}
          >
            BACK
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
            <h1 className="py-4 pl-4 shadow-lg sm:text-sm lg:text-[18px] uppercase border-gray bg-slate-300 rounded-t-md">
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
                disabled
                value={companyDropdownValue}
                className="block w-full px-3 py-2 mt-1 text-sm bg-white border rounded-md shadow-sm cursor-not-allowed focus:outline-none focus:ring-primary focus:border-primary"
                title="Not Allowed to edit legal employee in this page"
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
                  title="Not Allowed to edit salary name in this page"
                  readOnly
                  placeholder="Salary Name"
                  value={salaryNameValue}
                  className="w-full px-3 py-2 mt-1 text-sm bg-white border rounded-md shadow-sm cursor-not-allowed text-gray cursor-not-allowedblock focus:outline-none focus:ring-primary focus:border-primary"
                />
              </div>

              <div className="flex items-center">
                <span className="mr-2">Active:</span>
                <p
                  className={`mr-2 rounded-full ${
                    leftActiveCheckbox ? 'text-green-800' : 'text-red-300'
                  }`}
                >
                  {leftActiveCheckbox ? 'Yes' : 'No'}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Card Design  */}
        <div className="w-full ml-0 overflow-x-auto rounded-md shadow-2xl sm:w-3/4 sm:ml-10">
          <h1 className="flex py-4 pl-4 shadow-lg sm:text-sm lg:text-[18px] border-gray bg-slate-300 rounded-t-md">
            COMPONENT
          </h1>

          <thead className="overflow-x-auto ">
            <tr className="overflow-auto uppercase text-[16px]">
              <th className="w-1/12 px-4 py-6 text-left">Type</th>
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
                <h2 className="py-4 pl-4 capitalize border-gray allSideLow">
                  {type}
                </h2>
                <table className="min-w-full border-collapse border-gray-200 table-auto">
                  <tbody className="shadow-inner">
                    {componentByType[type].map((row, innerIndex) => (
                      <tr
                        key={`${outerIndex}-${innerIndex}`}
                        className="text-[15px]"
                      >
                        <td className="w-1/12 px-4 py-6 "></td>
                        <td className="w-2/12 px-4 py-6 ">
                          <input
                            type="number"
                            value={row.order}
                            readOnly
                            className="w-24 bg-white border-b cursor-not-allowed focus:outline-none"
                            title="Not Allowed to edit order in this page"
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
                            disabled
                            className="w-5 h-5 rounded cursor-not-allowed focus:ring-primary "
                            title="Not Allowed to edit hide function in this page"
                            checked={row.is_hide === 1}
                          />
                        </td>
                        <td className="w-1/12 px-4 py-6">
                          <input
                            type="checkbox"
                            disabled
                            className="w-5 h-5 rounded cursor-not-allowed focus:ring-primary"
                            title="Not Allowed to change edit function in this page"
                            checked={row.is_edit === 1}
                          />
                        </td>
                        <td className="w-1/12 px-4 py-6">
                          <label className="relative inline-flex items-center ">
                            <p
                              className={`px-4 py-2 mr-2 rounded-full ${
                                row.is_active === 1
                                  ? 'bg-green-300'
                                  : 'bg-red-300'
                              }`}
                            >
                              {row.is_active === 1 ? 'Yes' : 'No'}
                            </p>
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
    </>
  );
};

export default DetailPropertySalaryCard;
