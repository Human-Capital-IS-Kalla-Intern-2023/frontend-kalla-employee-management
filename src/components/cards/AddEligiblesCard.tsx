import { useState, useEffect, useMemo } from 'react';
import { PlusIcon, TrashIcon } from '../../assets/icons/icon';
import profileImg112 from '../../assets/img/profileImg-112.webp';
import { useNavigate, useParams, Link } from 'react-router-dom';
import { addDetailSalaryEmployee } from '../../api/EmployeeAPI';
import {
  SuccessAlert,
  ErrorAlert,
  DeleteConfimationAlert,
  WarningAlert,
  CancelConfirmationAlert,
} from '../alerts/CustomAlert';
import { ResetAlert } from '../../helpers/ResetAlert';
import ReactLoading from 'react-loading';
import AddBankModal from '../modals/AddBankModal';

type EligiblesProps = {
  employeeData: any;
};

const AddEligiblesCard = ({ employeeData }: EligiblesProps) => {
  const { employeeId } = useParams();
  const { positionId } = useParams();

  // Alert State
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [successTitle, setSuccessTitle] = useState<string | null>(null);
  const [errorTitle, setErrorTitle] = useState<string | null>(null);

  const [employeeDatas, setEmployeeDatas] = useState(employeeData);
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [componentStatus, setComponentStatus] = useState(
    () => employeeDatas?.components.map(() => true) || []
  );

  const [bankData, setBankData] = useState({
    type_bank: '',
    account_number: '',
    account_name: employeeDatas.fullname,
  });

  const handleOpenModalAddBank = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const saveEmployeeDataToServer = async () => {
    try {
      setIsLoading(true);
      const existingData = JSON.parse(
        localStorage.getItem('employeeDatas') || '{}'
      );

      const responseData = await addDetailSalaryEmployee(existingData);
      if (responseData) {
        setIsLoading(false);
        setSuccessTitle(`${responseData.status}`);
        setSuccessMessage(`${responseData.message}`);
        setTimeout(() => {
          navigate(`/employee/detail/eligibles/${employeeId}/${positionId}`);
        }, 2000);
      }
    } catch (error: any) {
      // Handle any errors that occur during the API call
      console.error('Error saving employee data:', error);
      setErrorTitle(`Error saving employee data`);

      const errorMessages = Object.values(error.response.data.errors).flat();
      setErrorMessage(errorMessages.join('\n'));
    } finally {
      setIsLoading(false);
    }
    ResetAlert(
      setSuccessTitle,
      setSuccessMessage,
      setErrorTitle,
      setErrorMessage
    );
  };

  const handleCancelButton = async () => {
    // Show a confirmation dialog
    CancelConfirmationAlert({
      title: 'Cancel',
      text: 'Are you sure you want to cancel?',
      detail: `Adding  eligibles for ${employeeDatas.position_name} - ${employeeDatas.company_name} is cancelled`,
      onConfirm: () => {
        // Clear data from local storage
        localStorage.removeItem('employeeDatas');
        // Navigate to the desired page
        navigate(`/employee/detail/eligibles/${employeeId}/${positionId}`);
      },
    });
  };

  const handleAddBank = () => {
    if (
      !bankData.account_name ||
      !bankData.account_number ||
      !bankData.type_bank
    ) {
      setErrorTitle(`Error adding bank data`);
      setErrorMessage(`Please fill all bank data`);
      return;
    }

    // Update bank data in the employeeData parameter
    const updatedEmployeeData = {
      ...employeeData,
      account_name: bankData.account_name,
      type_bank: bankData.type_bank,
      account_number: bankData.account_number,
    };

    // Update the state with the new employeeData
    setEmployeeDatas(updatedEmployeeData);

    // Update local storage with bank data
    const existingData = JSON.parse(
      localStorage.getItem('employeeDatas') || '{}'
    );
    const updatedData = {
      ...existingData,
      type_bank: bankData.type_bank,
      account_number: bankData.account_number,
    };
    localStorage.setItem('employeeDatas', JSON.stringify(updatedData));

    setSuccessTitle(`Success Add Bank`);
    setSuccessMessage(`Success Add Bank`);

    setIsModalOpen(false);
    ResetAlert(
      setSuccessTitle,
      setSuccessMessage,
      setErrorTitle,
      setErrorMessage
    );
  };

  const resetBankData = () => {
    // Tampilkan konfirmasi alert delete
    DeleteConfimationAlert({
      title: 'Delete Bank Data',
      text: 'Are you sure you want to delete this bank data?',
      detail: `Success Delete ${bankData.type_bank} - ${bankData.account_number}`,
      onConfirm: () => {
        // Reset bankData
        setBankData({
          type_bank: '',
          account_number: '',
          account_name: '',
        });

        const updatedEmployeeData = {
          ...employeeData,
          account_name: undefined,
          type_bank: undefined,
          account_number: undefined,
        };

        // Update the state with the new employeeData
        setEmployeeDatas(updatedEmployeeData);
        // Hapus data bank dari localStorage
        const existingData = JSON.parse(
          localStorage.getItem('employeeDatas') || '{}'
        );

        const updatedData = {
          ...existingData,
          type_bank: '',
          account_number: '',
          account_name: '',
        };

        localStorage.setItem('employeeDatas', JSON.stringify(updatedData));
      },
    });
  };

  const updatedEmployeeData = useMemo(() => {
    if (!employeeDatas) {
      return null;
    }

    const updatedData = {
      ...employeeDatas,
      salary_detail: employeeDatas.components.map(
        (component: any, index: number) => ({
          ...component,
          component_id: component.component_id,
          is_status: componentStatus[index] ? 0 : 1,
        })
      ),
    };

    // Menghapus atribut components yang tidak diperlukan (jika perlu)
    delete updatedData.components;
    delete updatedData.id;

    return updatedData;
  }, [componentStatus, employeeDatas]);

  useEffect(() => {
    if (updatedEmployeeData) {
      localStorage.setItem(
        'employeeDatas',
        JSON.stringify(updatedEmployeeData)
      );
    }
  }, [updatedEmployeeData]);

  return (
    <>
      {isLoading && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <ReactLoading type="spin" color="green" height={50} width={50} />
        </div>
      )}
      {successMessage && successTitle && (
        <SuccessAlert title={successTitle} timer={3000} text={successMessage} />
      )}
      {errorMessage && errorTitle && (
        <ErrorAlert title={errorTitle} text={errorMessage} />
      )}
      <section className="h-screen antialiased lg:py-0 sm:py-2 overlay">
        <header className="flex items-center justify-between p-2 pr-8 shadow-lg sm:p-5">
          <h1 className="p-2 text-base font-medium border-b-2 sm:text-lg md:text-xl lg:text-2xl border-primary">
            Add Eligibles Employee
          </h1>
          <div className="flex text-xs font-medium sm:flex-row lg:text-sm">
            <button
              aria-label="Cancel Add Eligibles Employee"
              className="px-1 py-2 mr-2 text-base text-white duration-300 border border-transparent rounded-md lg:px-4 lg:py-2 lg:mr-4 bg-gray lg:hover:scale-105 hover:bg-white hover:border-black hover:text-black"
              onClick={handleCancelButton}
            >
              CANCEL
            </button>
            <button
              aria-label="Save Data"
              className="px-2 py-2 text-sm duration-300 border border-transparent rounded-md lg:px-6 lg:text-base text-pureBlack bg-secondary hover:bg-amber-400 hover:border-black hover:text-black"
              onClick={saveEmployeeDataToServer}
            >
              SAVE
            </button>
          </div>
        </header>

        {employeeDatas.components.length === 0 && (
          <WarningAlert
            title="Warning"
            text={`There is no salary component at this employee's company.
          Add Salary First for ${employeeDatas.company_name}`}
          />
        )}
        <div className="max-w-screen-xl px-4 pt-6 mx-auto">
          <div className="relative overflow-hidden ">
            <div className="px-5 pt-4 pb-4 overflow-x-auto">
              {/* card 1 */}

              <div className="flex flex-wrap w-full px-2 py-2 pb-2 overflow-x-auto rounded-lg shadow-lg lg:w-full bg-slate-50">
                <div className="flex items-center px-4 pt-4 pb-2 lg:w-full sm:w-1/2">
                  <img
                    src={profileImg112}
                    alt={`Image Profile ${employeeDatas.fullname}`}
                    className="mr-4 w-28 h-28 rounded-2xl "
                  />
                  <div className="px-4 pl-0 mb-2">
                    <p className="text-lg font-bold">
                      {employeeDatas.fullname}
                    </p>
                    <h3 className="mt-4 font-semibold text-md">NIK</h3>
                    <p className=" text-[15px]">{employeeDatas.nip}</p>
                  </div>
                  <div className="flex flex-row items-start px-6 py-1 pt-12">
                    <div className="px-5 mb-2 lg:px-4">
                      <h3 className="font-semibold text-md ">Job Grade</h3>
                      <p className="text-[15px]">{employeeDatas.grade_name}</p>
                    </div>
                    <div className="px-4 mb-2">
                      <h3 className="font-semibold text-md ">Position</h3>
                      <p className="text-[15px]">
                        {employeeDatas.position_name}
                      </p>
                    </div>
                    <div className="px-4 mb-2">
                      <h3 className="font-semibold text-md ">Company Name</h3>
                      <p className="text-[15px]">
                        {employeeDatas.company_name}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* card 1 */}

              {/* card 2*/}
              <div className="flex flex-col pt-3 sm:flex-row">
                <div className="flex flex-col w-full my-6 bg-white rounded-t-lg shadow-xl sm:w-4/6">
                  <div className="rounded-t-lg bg-primary">
                    <div className="w-full px-4 py-2 text-left border-b-2">
                      <h2 className="text-lg font-medium text-white">
                        Allowance Information
                      </h2>
                    </div>
                  </div>
                  {employeeDatas.components.length !== 0 ? (
                    <div className="flex flex-wrap w-full xs:flex-col">
                      {employeeDatas.components.map(
                        (component: any, index: any) => (
                          <div
                            key={index}
                            className={`flex items-center w-full lg:w-1/2 px-4 py-4 ${
                              index === employeeDatas.components.length - 1 &&
                              employeeDatas.components.length % 2 !== 0
                                ? ''
                                : 'border-b'
                            }`}
                          >
                            <div className="w-full lg:w-2/3">
                              <p className="text-base">
                                {component.component_name}
                              </p>
                              <span className="text-[13px]">
                                {component.salary}
                              </span>
                            </div>
                            <label className="relative inline-flex items-center w-1/3 ml-2 cursor-pointer">
                              <input
                                type="checkbox"
                                value={componentStatus[index]}
                                className="sr-only peer"
                                onChange={() => {
                                  const updatedStatus = [...componentStatus];
                                  updatedStatus[index] = !updatedStatus[index];
                                  setComponentStatus(updatedStatus);
                                }}
                              />
                              <div
                                className={`w-11 h-6 bg-red-300 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-white dark:peer-focus:ring-gray-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600`}
                              ></div>
                            </label>
                          </div>
                        )
                      )}
                    </div>
                  ) : (
                    <div className="px-4 py-5 text-center bg-zinc-300">
                      No salary data available , add
                      <Link to={`/salary/configures/payroll_component/add`}>
                        <span className="text-blue-700"> here</span>
                      </Link>
                      .
                    </div>
                  )}
                </div>

                <div className="flex-grow py-6 lg:pl-4">
                  <div className="rounded-lg bg-primary">
                    <div className="flex justify-between w-full px-4 pt-2 text-left border-b-2 rounded-t-lg flew-row">
                      <h2 className="flex-row text-lg font-medium text-white">
                        Bank
                      </h2>
                      <div className="flex pl-6">
                        <div className="flex flex-row pb-2">
                          <button
                            aria-label="Open Modal Add Bank"
                            className="flex items-center justify-center px-3 py-1 text-sm font-medium duration-300 rounded-lg text-pureBlack bg-secondary focus:ring-4 bg-primary-600 hover:bg-yellow"
                            onClick={handleOpenModalAddBank}
                          >
                            Add
                            <PlusIcon className="w-3 h-3 ml-1" />
                          </button>
                        </div>
                      </div>
                    </div>
                    {employeeDatas.type_bank !== undefined &&
                    employeeDatas.account_number !== undefined ? (
                      <div>
                        <div className="flex items-center px-2 py-2 text-left align-top bg-white">
                          <TrashIcon
                            className="z-50 w-8 h-8 p-1 mr-3 duration-200 rounded-md cursor-pointer overlay hover:bg-red-800 hover:text-white "
                            onClick={resetBankData}
                          />
                          <h2 className="w-full mt-1 mb-1 mr-4 text-base text-slate-700">
                            {employeeDatas.type_bank} -{' '}
                            {employeeDatas.account_number}
                          </h2>
                        </div>
                      </div>
                    ) : (
                      <p className="p-5 text-center bg-white text-gray">
                        There are no bank data available.
                      </p>
                    )}
                  </div>
                </div>

                <AddBankModal
                  isModalOpen={isModalOpen}
                  handleCloseModal={handleCloseModal}
                  bankData={bankData}
                  setBankData={setBankData}
                  handleAddBank={handleAddBank}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AddEligiblesCard;
