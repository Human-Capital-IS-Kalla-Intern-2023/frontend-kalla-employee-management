import React, { useState } from 'react';
import profileImg from '../../assets/img/profileImg.webp';
// import { useNavigate } from 'react-router-dom';
import ReactLoading from 'react-loading';
import EditModal from '../modals/EditModal';
import { inputField } from '../../assets/data/EmployeeData';
import { Link, useNavigate } from 'react-router-dom';

type DetailEmployeeProps = {
  employeeData: any;
  onUpdateEmployee: (formData: string, id: number) => void;
};

const DetailEmployee = ({
  employeeData,
  onUpdateEmployee,
}: DetailEmployeeProps) => {
  const [selectedSecondaryPosition, setSelectedSecondaryPosition] =
    useState<string>('');

  const [showEditModal, setShowEditModal] = useState(false);
  const [editedData, setEditedData] = useState(employeeData);

  const navigate = useNavigate();
  const toggleEditModal = () => {
    setShowEditModal(!showEditModal);
    if (showEditModal) {
      navigate(
        `/employee/detail/personal-data/${employeeData.id}/${employeeData.id_main_position}`
      );
    }
  };

  const handleEdit = () => {
    toggleEditModal();
    setEditedData(employeeData);
  };

  const handleSecondaryPositionChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setSelectedSecondaryPosition(event.target.value);
  };

  // const navigate = useNavigate();

  // const handleBack = async () => {
  //   navigate('/employee');
  // };

  if (!employeeData) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
        <ReactLoading type="spin" color="green" height={50} width={50} />
      </div>
    );
  }

  return (
    <section className="antialiased overlay ">
      <header className="flex items-center justify-between px-3 py-5 shadow-lg ">
        <h1 className="p-2 ml-2.5 text-xl font-medium border-b-2 border-primary ">
          Personal Data Page
        </h1>
        <div className="pl-11 pr-3 text-sm font-semibold ">
          {/* <button
            className="px-4 py-2 mr-4 text-white duration-300 bg-red-500 rounded-md hover:bg-gray"
            onClick={handleBack}
          >
            BACK
          </button> */}
          <Link to={`edit`} type="button">
            <button
              className="px-6 py-2 text-base duration-300 font-medium  text-[17px] rounded-md text-pureBlack bg-secondary hover:bg-gray hover:text-white lg:hover:scale-105"
              onClick={handleEdit}
            >
              EDIT
            </button>
          </Link>
        </div>
      </header>
      {showEditModal && (
        <EditModal
          isOpen={showEditModal}
          onClose={toggleEditModal}
          title="Edit Employee"
          inputFields={inputField}
          initialFormData={editedData}
          onSubmit={onUpdateEmployee}
        />
      )}

      <div className="max-w-screen-xl px-4 pt-6 mx-auto">
        <div className="relative overflow-hidden sm:rounded-lg">
          <div className="pt-4 overflow-x-auto ">
            <img
              src={profileImg}
              alt={employeeData.fullname}
              className="w-40 h-40 mx-auto rounded-2xl"
            />

            <h2 className="mt-4 text-md font-semibold sm:text-md md:text-lg lg:text-2xl text-center">
              {employeeData.fullname}
            </h2>
            <p className="text-base lg:text-lg pt-2 italic font-medium text-center">
              {employeeData.nip}
            </p>

            <div className="px-1 lg:px-3">
              <div className="my-4 rounded-t-lg">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  <div className="p-4 bg-white border-l-4 border-b-4 border-primary rounded-lg shadow-md">
                    <h2 className="mb-1 lg:mb-2  text-base font-semibold sm:text-md lg:text-md">
                      Nickname
                    </h2>
                    <p className="text-base md:text-base lg:text-md">
                      {employeeData.nickname}
                    </p>
                  </div>

                  <div className="p-4 bg-white border-l-4 border-b-4 border-primary rounded-lg shadow-md">
                    <h2 className="mb-1 lg:mb-2 text-base font-semibold sm:text-md lg:text-md">
                      Email
                    </h2>
                    <p className="text-base md:text-base lg:text-md">
                      {employeeData.company_email}
                    </p>
                  </div>

                  <div className="p-4 bg-white border-l-4 border-b-4 border-primary rounded-lg shadow-md">
                    <h2 className="mb-1 lg:mb-2 text-base font-semibold sm:text-md lg:text-md">
                      Hire Date
                    </h2>
                    <p className="text-base md:text-base lg:text-md">
                      {employeeData.hire_date}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="px-1 lg:px-3">
              <div className="my-4 bg-white rounded-lg shadow-md overflow-x-auto">
                <div className="bg-primary px-4 py-2 text-left rounded-tl-lg border-b-2">
                  <h2 className="text-base md:text-base lg:text-lg font-medium text-white">
                    Main Position
                  </h2>
                </div>
                <div className="flex flex-col sm:flex-row px-4 py-2">
                  <div className="w-full sm:w-1/2 text-left mb-2 lg:mb-3 sm:mb-0 mr-3">
                    <h2 className="text-base md:text-base lg:text-md font-semibold">
                      Position Name
                    </h2>
                    <p className="text-sm lg:text-base border-b mb-2">
                      {employeeData.main_position}
                    </p>

                    <h2 className="text-base md:text-base lg:text-md font-semibold">
                      Company Name
                    </h2>
                    <p className="text-sm lg:text-base border-b mb-2">
                      {employeeData.company_main}
                    </p>

                    <h2 className="text-base md:text-base lg:text-md font-semibold">
                      Directorate
                    </h2>
                    <p className="text-sm lg:text-base border-b">
                      {employeeData.directorate_main}
                    </p>
                  </div>
                  <div className="w-full sm:w-1/2 text-left">
                    <h2 className="text-base md:text-base lg:text-md font-semibold">
                      Division
                    </h2>
                    <p className="text-sm lg:text-base border-b mb-2">
                      {employeeData.division_main}
                    </p>

                    <h2 className="text-base md:text-base lg:text-md font-semibold">
                      Section
                    </h2>
                    <p className="text-sm lg:text-base border-b">
                      {employeeData.section_main}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/*Secondary Position*/}
            <div className="px-1 lg:px-3">
              <div className="my-4 bg-white rounded-lg shadow-md ">
                <div className="bg-primary w-full table-auto rounded-t-lg">
                  <div className="w-full px-4 py-2 text-left border-b-2">
                    <h2 className="text-base md:text-base lg:text-lg font-medium text-white">
                      Secondary Position
                    </h2>
                  </div>
                </div>
                <div>
                  <div>
                    {/* Kolom 1 */}
                    <div className="px-4 py-2 text-left align-top">
                      {employeeData.additional_position.length === 0 ? (
                        <p>No Secondary Position</p>
                      ) : (
                        <div className="text-sm md:text-sm lg:text-base">
                          <select
                            value={selectedSecondaryPosition}
                            onChange={handleSecondaryPositionChange}
                            className="w-full p-1 border-2 border-black rounded-lg"
                          >
                            <option value="" disabled>
                              Select Additional Position
                            </option>
                            {employeeData.additional_position.map(
                              (position: any) => (
                                <option
                                  key={position.id_position_name}
                                  value={position.position_name}
                                >
                                  {position.position_name}
                                </option>
                              )
                            )}
                          </select>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {selectedSecondaryPosition && (
            <div className="lg:px-3">
              <div className="lg:my-4  bg-white rounded-lg shadow-md overflow-x-auto">
                <div className="bg-primary px-4 py-2 text-left border-b-2">
                  <h2 className="text-base md:text-base lg:text-lg font-medium text-white">
                    Secondary Position Details
                  </h2>
                </div>
                {employeeData.additional_position
                  .filter(
                    (position: any) =>
                      position.position_name === selectedSecondaryPosition
                  )
                  .map(
                    (selectedPosition: {
                      position_name: any;
                      company_name: any;
                      directorate_name: any;
                      division_name: any;
                      section_name: any;
                    }) => (
                      <div
                        key={selectedPosition.position_name}
                        className="flex flex-col sm:flex-row px-4 py-2"
                      >
                        {/* Kolom 1 */}
                        <div className="w-full sm:w-1/2 text-left lg:mb-2 mr-3 ">
                          <div>
                            <h2 className="text-base md:text-base lg:text-md font-semibold">
                              Position Name
                            </h2>
                            <p className="text-sm lg:text-base border-b">
                              {selectedPosition.position_name}
                            </p>
                          </div>
                          <div>
                            <h2 className="text-base md:text-base lg:text-md pt-2 font-semibold">
                              Company Name
                            </h2>
                            <p className="text-sm lg:text-base border-b mb-2">
                              {selectedPosition.company_name}
                            </p>
                          </div>
                          <div>
                            <h2 className="text-base md:text-base lg:text-md font-semibold">
                              Directorate
                            </h2>
                            <p className="pb-1 text-sm lg:text-base mb-2 border-b ">
                              {selectedPosition.directorate_name}
                            </p>
                          </div>
                        </div>

                        {/* Kolom 2 */}
                        <div className="w-full sm:w-1/2 text-left mb-4 sm:mb-0">
                          <div>
                            <h2 className="text-base md:text-base lg:text-md font-semibold">
                              Division
                            </h2>
                            <p className="text-sm lg:text-base border-b">
                              {selectedPosition.division_name}
                            </p>
                          </div>
                          <div>
                            <h2 className="text-base md:text-base lg:text-md pt-2 font-semibold">
                              Section
                            </h2>
                            <p className="text-sm lg:text-base border-b">
                              {selectedPosition.section_name}
                            </p>
                          </div>
                        </div>
                      </div>
                    )
                  )}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default DetailEmployee;
