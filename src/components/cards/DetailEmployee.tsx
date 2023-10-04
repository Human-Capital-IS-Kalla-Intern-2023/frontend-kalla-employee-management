import React, { useState } from 'react';
import profileImg from '../../assets/img/profileImg.png';
import { useNavigate } from 'react-router-dom';
import ReactLoading from 'react-loading';
import EditModal from '../modals/EditModal';
import { updateEmployee } from '../../api/EmployeeAPI';
import { inputField } from '../../assets/data/EmployeeData';
import { ResetAlert } from '../../helpers/ResetAlert';
import { SuccessAlert, ErrorAlert } from '../alerts/CustomAlert';

const DetailEmployee = ({ employeeData }: any) => {
  const [selectedSecondaryPosition, setSelectedSecondaryPosition] =
    useState<string>('');

  const [showEditModal, setShowEditModal] = useState(false);
  const [editedData, setEditedData] = useState(employeeData);

  // Alert State
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [successTitle, setSuccessTitle] = useState<string | null>(null);
  const [errorTitle, setErrorTitle] = useState<string | null>(null);

  const toggleEditModal = () => {
    setShowEditModal(!showEditModal);
  };

  const handleEdit = () => {
    toggleEditModal();
    setEditedData(employeeData);
  };

  const handleEditEmployee = async (formData: string, id: number) => {
    try {
      const responseData = await updateEmployee(id, formData);
      setSuccessTitle(`${responseData.status}`);
      setSuccessMessage(`${responseData.message}`);
    } catch (error: any) {
      console.error('Error editing employee:', error);
      setErrorTitle(`Error editing employee`);
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


  const handleSecondaryPositionChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setSelectedSecondaryPosition(event.target.value);
  };

  const navigate = useNavigate();

  const handleBack = async () => {
    navigate('/employee');
  };

  if (!employeeData) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
        <ReactLoading type="spin" color="green" height={50} width={50} />
      </div>
    );
  }

  return (
    <section className="py-3 antialiased sm:py-2 overlay bg-slate-100">
      <header className="flex items-center justify-between p-3 shadow-lg ">
        <h1 className="p-2 text-lg font-medium border-b-2 border-primary ">
          Detail Employee Page
        </h1>
        <div className="text-sm font-medium ">
          <button
            className="px-4 py-2 mr-4 text-white duration-300 bg-red-500 rounded-md hover:bg-gray"
            onClick={handleBack}
          >
            BACK
          </button>
          <button
            className="px-4 py-2 duration-300 rounded-md text-pureBlack bg-secondary hover:bg-gray"
            onClick={handleEdit}
          >
            EDIT
          </button>
        </div>
      </header>
      {showEditModal && (
        <EditModal
          isOpen={showEditModal}
          onClose={toggleEditModal}
          title="Edit Employee"
          inputFields={inputField}
          initialFormData={editedData}
          onSubmit={handleEditEmployee} // Define a function to handle the edit submission
        />
      )}

      {successMessage && successTitle && (
        <SuccessAlert title={successTitle} text={successMessage} />
      )}
      {errorMessage && errorTitle && (
        <ErrorAlert title={errorTitle} text={errorMessage} />
      )}
      <div className="max-w-screen-xl px-4 pt-6 mx-auto">
        <div className="relative overflow-hidden sm:rounded-lg">
          <div className="pt-4 overflow-x-auto">
            {/* Button Manage akan menggunakan Modal Edit yang sama dengan TabelBody */}
            {/* <div className="flex justify-end pr-2">
              <button className="flex items-center justify-center px-3 py-2 mr-3 text-sm font-medium duration-300 rounded-lg text-pureBlack bg-secondary focus:ring-4 bg-primary-600 hover:bg-yellow">
                Edit
                <ArrowButtonIcon className="h-3.5 w-3.5 ml-1" />
              </button>
            </div> */}
            {/* Button Manage */}

            <img
              src={profileImg}
              alt={employeeData.fullname}
              className="w-40 h-40 mx-auto rounded-2xl"
            />

            <h2 className="mt-4 text-2xl text-center">
              {employeeData.fullname}
            </h2>
            <p className="mt-2 font-lg text-center">{employeeData.nip}</p>

            <div className="px-5">
              <div className="my-4 bg-white rounded-t-lg shadow-md ">
                <table className="w-full p-5 table-auto">
                  <thead>
                    <tr className="bg-primary">
                      <th className="w-1/2 px-4 py-2 text-left border-b-2">
                        <h2 className="text-lg font-medium text-white ">
                          Main Information
                        </h2>
                      </th>
                      <th className="w-1/2 px-4 py-2 text-right border-b-2"></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      {/* Kolom 1 */}
                      <td className="px-4 py-2 text-left align-top ">
                        <div>
                          <h2 className="text-lg font-medium">Company Name</h2>
                          <p className="pb-1 text-base border-b">
                            {employeeData.company_main}
                          </p>
                        </div>
                        <div>
                          <h2 className="pt-3 text-lg font-medium">
                            Directorate
                          </h2>
                          <p className="pb-1 text-base border-b">
                            {employeeData.directorate_main}
                          </p>
                        </div>
                        <div>
                          <h2 className="pt-3 text-lg font-medium ">
                            Division
                          </h2>
                          <p className="pb-1 text-base border-b">
                            {employeeData.division_main}
                          </p>
                        </div>
                      </td>

                      {/* Kolom 2 */}
                      <td className="px-4 py-2 text-left align-top">
                        <div>
                          <h2 className="text-lg font-medium">Section</h2>
                          <p className="pb-1 text-base border-b">
                            {employeeData.section_main}
                          </p>
                        </div>
                        <div>
                          <h2 className="pt-3 text-lg font-medium">
                            Main Position
                          </h2>
                          <p className="pb-1 text-base border-b">
                            {employeeData.main_position}
                          </p>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/*Secondary Position*/}
            <div className="px-5">
              <div className="my-4 bg-white rounded-lg shadow-md ">
                <table className="w-full p-5 table-auto">
                  <thead>
                    <tr className="bg-primary">
                      <th className="w-1/2 px-4 py-2 text-left border-b-2">
                        <h2 className="text-lg font-medium text-white">
                          Secondary Position
                        </h2>
                      </th>
                      <th className="w-1/2 px-4 py-2 text-right border-b-2"></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      {/* Kolom 1 */}
                      <td className="px-4 py-2 text-left align-top">
                        {employeeData.secondaryPosition === undefined ? (
                          <p>No Secondary Position</p>
                        ) : (
                          <div>
                            <select
                              value={selectedSecondaryPosition}
                              onChange={handleSecondaryPositionChange}
                              className="p-1 border-2 border-black rounded-lg"
                            >
                              {employeeData.secondaryPosition.map(
                                (position: { position: string }) => (
                                  <option
                                    key={position.position}
                                    value={position.position}
                                  >
                                    {position.position}
                                  </option>
                                )
                              )}
                            </select>
                          </div>
                        )}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {selectedSecondaryPosition && (
              <div className="px-5">
                <div className="my-4 bg-white rounded-lg shadow-md ">
                  <table className="w-full p-5 table-auto">
                    <thead>
                      <tr>
                        <th className="w-1/2 px-4 py-2 text-left border-b-2">
                          <h2 className="text-base font-bold">
                            Secondary Position Details
                          </h2>
                        </th>
                        <th className="w-1/2 px-4 py-2 text-right border-b-2"></th>
                      </tr>
                    </thead>
                    <tbody>
                      {employeeData.secondaryPosition
                        .filter(
                          (position: { position: string }) =>
                            position.position === selectedSecondaryPosition
                        )
                        .map(
                          (selectedPosition: {
                            position: React.Key | null | undefined;
                            company:
                              | string
                              | number
                              | boolean
                              | React.ReactElement<
                                  any,
                                  string | React.JSXElementConstructor<any>
                                >
                              | Iterable<React.ReactNode>
                              | React.ReactPortal
                              | null
                              | undefined;
                            directorate:
                              | string
                              | number
                              | boolean
                              | React.ReactElement<
                                  any,
                                  string | React.JSXElementConstructor<any>
                                >
                              | Iterable<React.ReactNode>
                              | React.ReactPortal
                              | null
                              | undefined;
                            division:
                              | string
                              | number
                              | boolean
                              | React.ReactElement<
                                  any,
                                  string | React.JSXElementConstructor<any>
                                >
                              | Iterable<React.ReactNode>
                              | React.ReactPortal
                              | null
                              | undefined;
                            section:
                              | string
                              | number
                              | boolean
                              | React.ReactElement<
                                  any,
                                  string | React.JSXElementConstructor<any>
                                >
                              | Iterable<React.ReactNode>
                              | React.ReactPortal
                              | null
                              | undefined;
                          }) => (
                            <tr key={selectedPosition.position}>
                              {/* Kolom 1 */}
                              <td className="px-4 py-2 text-left align-top">
                                <div>
                                  <h2 className="text-lg font-medium">
                                    Company Name
                                  </h2>
                                  <p className="pb-1 text-base border-b">
                                    {selectedPosition.company}
                                  </p>
                                </div>
                                <div>
                                  <h2 className="pt-3 text-lg font-medium">
                                    Directorate
                                  </h2>
                                  <p className="pb-1 text-base border-b">
                                    {selectedPosition.directorate}
                                  </p>
                                </div>
                                <div>
                                  <h2 className="pt-3 text-lg font-medium">
                                    Division
                                  </h2>
                                  <p className="pb-1 text-base border-b">
                                    {selectedPosition.division}
                                  </p>
                                </div>
                              </td>

                              {/* Kolom 2 */}
                              <td className="px-4 py-2 text-left align-top">
                                <div>
                                  <h2 className="text-lg font-medium">
                                    Section
                                  </h2>
                                  <p className="pb-1 text-base border-b">
                                    {selectedPosition.section}
                                  </p>
                                </div>
                                {/* Add more details here */}
                              </td>
                            </tr>
                          )
                        )}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            <div className="px-5">
              <div className="my-4 bg-white rounded-lg shadow-xl ">
                <table className="w-full p-5 table-auto">
                  <thead>
                    <tr className="bg-primary">
                      <th className="w-1/2 px-4 py-2 text-left border-b-2">
                        <h2 className="text-lg font-medium text-white">
                          Allowance Information
                        </h2>
                      </th>
                      <th className="w-1/2 px-4 py-2 text-right border-b-2">
                        
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                      <tr>
                        {/* Kolom 1 */}
                        <td className="px-4 py-2 text-left align-top ">
                          <div>
                            <h2 className="text-base ">Positional Allowance</h2>
                            <p className="pb-1 text-sm border-b pl-7">
                              Entitled
                            </p>
                          </div>
                          
                        </td>

                        {/* Kolom 2 */}
                        <td className="px-4 py-2 text-left align-top">
                          <div>
                            <h2 className="text-base">Functional Allowance</h2>
                            <p className="pb-1 text-sm border-b pl-7">
                              Entitled
                            </p>
                          </div>
                          
                        </td>
                      </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DetailEmployee;
