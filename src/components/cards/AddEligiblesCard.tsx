import { useState, useEffect, useMemo } from 'react';
import { PlusIcon, CloseButtonIcon, TrashIcon } from '../../assets/icons/icon';
import profileImg from '../../assets/img/profileImg.webp';
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
    account_name: '',
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
      employee_detail_id: employeeDatas.id,
      salary_detail: employeeDatas.components.map(
        (component: any, index: number) => ({
          ...component,
          component_id: component.component_id,
          is_status: componentStatus[index] ? 1 : 0,
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
      <section className="h-screen py-3 antialiased sm:py-2 overlay bg-slate-100 ">
        <header className="z-50 flex items-center justify-between px-3 py-5 shadow-lg">
          <h1 className="p-2 ml-2.5 text-lg font-medium border-b-2 border-primary ">
            Add Eligibles Employee
          </h1>

          <div className="text-sm font-medium ">
            <button
              className="px-8 py-2 mx-4 text-base text-white duration-300 border border-transparent rounded-md bg-gray hover:bg-white hover:border-black hover:text-black"
              onClick={handleCancelButton}
            >
              CANCEL
            </button>
            <button
              className="px-8 py-2 text-base duration-300 border border-transparent rounded-md text-pureBlack bg-secondary hover:bg-white hover:border-black hover:text-black"
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
          <div className="relative overflow-hidden bg-slate-100 ">
            <div className="px-5 pt-4 pb-4 overflow-x-auto">
              {/* card 1 */}

              <div className="flex w-full px-2 py-2 pb-2 overflow-hidden rounded-lg shadow-lg bg-slate-50">
                <div className="flex items-center px-4 pt-4 pb-2">
                  <img
                    src={profileImg}
                    className="mr-4 w-28 h-28 rounded-2xl"
                  />
                  <div className="px-4 pl-0 mb-2">
                    <p className="text-lg font-bold">
                      {employeeDatas.fullname}
                    </p>
                    <h3 className="mt-4 text-md">NIK</h3>
                    <p className="font-semibold text-md">{employeeDatas.nip}</p>
                  </div>
                  <div className="flex flex-row items-start px-6 py-1 pt-12">
                    <div className="px-4 mb-2">
                      <h3 className="text-md ">Job Grade</h3>
                      <p className="font-semibold text-md">
                        {employeeDatas.grade_name}
                      </p>
                    </div>
                    <div className="px-4 mb-2">
                      <h3 className="text-md ">Position</h3>
                      <p className="font-semibold text-md">
                        {employeeDatas.position_name}
                      </p>
                    </div>
                    <div className="px-4 mb-2">
                      <h3 className="text-md ">Company Name</h3>
                      <p className="font-semibold text-md">
                        {employeeDatas.company_name}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* card 1 */}

              {/* card 2*/}
              <div className="flex flex-row pt-3">
                <div className="w-4/6 my-6 bg-white rounded-t-lg shadow-xl">
                  <div className="rounded-t-lg bg-primary">
                    <div className="w-full px-4 py-2 text-left border-b-2">
                      <h2 className="text-lg font-medium text-white">
                        Allowance Information
                      </h2>
                    </div>
                  </div>
                  {employeeDatas.components.length !== 0 ? (
                    <div className="flex flex-wrap w-full">
                      {employeeDatas.components.map(
                        (component: any, index: any) => (
                          <div
                            key={index}
                            className="flex items-center w-1/2 px-4 py-4"
                          >
                            <div className="w-2/3">
                              <p className="text-base">
                                {component.component_name}
                              </p>
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

                <div className="flex-grow py-6 pl-4">
                  <div className="rounded-lg bg-primary">
                    <div className="flex justify-between w-full px-4 pt-2 text-left border-b-2 rounded-t-lg flew-row">
                      <h2 className="flex-row text-lg font-medium text-white">
                        Bank
                      </h2>
                      <div className="flex pl-6">
                        <div className="flex flex-row pb-2">
                          <button
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
                            className="z-50 w-8 h-8 p-1 mr-3 duration-200 rounded-md cursor-pointer overlay hover:bg-red-500 hover:text-white "
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

                {isModalOpen && (
                  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 ">
                    <div className="w-2/5 bg-white rounded-md shadow-md">
                      <header className="flex items-center justify-between p-4">
                        <h2 className="p-2 text-lg font-medium border-b-2 border-primary ">
                          Add Eligibles
                        </h2>
                        <button
                          className="text-gray-500 hover:text-gray-700"
                          onClick={handleCloseModal}
                        >
                          <CloseButtonIcon className="w-8 h-8 p-1 duration-200 rounded-md overlay hover:bg-red-500 hover:text-white" />
                        </button>
                      </header>
                      <div className="px-4 py-2">
                        <label
                          htmlFor="input"
                          className="block font-medium text-gray-700"
                        >
                          Employee Name
                        </label>
                        <input
                          type="text"
                          id="account_name"
                          name="account_name"
                          placeholder="Account Name"
                          value={bankData.account_name}
                          onChange={(e) =>
                            setBankData({
                              ...bankData,
                              account_name: e.target.value,
                            })
                          }
                          className="block w-full px-3 py-2 mt-1 text-sm bg-white border rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
                        />
                      </div>
                      <div className="px-4 py-2">
                        <label
                          htmlFor="input"
                          className="block font-medium text-gray-700"
                        >
                          Account Number
                        </label>
                        <input
                          type="number"
                          id="account_number"
                          name="account_number"
                          placeholder="Account Number"
                          value={bankData.account_number}
                          onChange={(e) =>
                            setBankData({
                              ...bankData,
                              account_number: e.target.value,
                            })
                          }
                          className="block w-full px-3 py-2 mt-1 text-sm bg-white border rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
                        />
                      </div>
                      <div className="px-4 py-2">
                        {/* Konten modal */}
                        <div className="mb-4">
                          <label
                            htmlFor="dropdown"
                            className="block font-medium text-gray-700"
                          >
                            Select Bank
                          </label>

                          <select
                            id="type-dropdown"
                            name="type-dropdown"
                            value={bankData.type_bank}
                            onChange={(e) =>
                              setBankData({
                                ...bankData,
                                type_bank: e.target.value,
                              })
                            }
                            className="block w-full px-3 py-2 mt-2 text-sm bg-white border rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
                          >
                            <option value="" disabled>
                              Select Bank Name
                            </option>
                            <option value="Mandiri">Bank Mandiri </option>
                            <option value="BRI">Bank BRI</option>
                            <option value="BNI">Bank BNI</option>
                          </select>
                        </div>
                      </div>
                      <div className="flex justify-end w-full p-4 rounded-t-none shadow-inner rounded-b-md border-gray bg-slate-200">
                        <button
                          className="px-4 py-2 mx-2 text-white duration-300 bg-red-500 rounded-md hover:bg-gray"
                          onClick={handleCloseModal}
                        >
                          CANCEL
                        </button>
                        <button
                          className="px-4 py-2 text-white duration-300 rounded-md bg-primary hover:bg-gray"
                          onClick={handleAddBank}
                        >
                          ADD
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AddEligiblesCard;
