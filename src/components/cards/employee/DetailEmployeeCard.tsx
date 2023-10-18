import React, { useState } from 'react';
import profileImg160 from '../../../assets/img/profile/profileImg-160.webp'; // import { useNavigate } from 'react-router-dom';
import ReactLoading from 'react-loading';
import EditModal from '../../modals/EditModal';
import { inputField } from '../../../assets/data/EmployeeData';
import { Link, useNavigate } from 'react-router-dom';

type DetailEmployeeProps = {
  employeeData: any;
  onUpdateEmployee: (formData: string, id: number) => void;
};

const DetailEmployeeCard = ({
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
      <header className="flex items-center justify-between px-1 py-5 shadow-lg lg:px-3 ">
        <h1 className="p-2 ml-2.5 text-lg lg:text-xl font-medium border-b-2 border-primary ">
          Personal Data Page
        </h1>
        <div className="pr-3 text-sm font-semibold pl-11 ">
          <Link to={`edit`} type="button">
            <button
              className="px-6 py-2 text-base duration-300 font-medium  text-[17px] rounded-md text-pureBlack bg-secondary hover:bg-gray hover:text-white lg:hover:scale-105"
              onClick={handleEdit}
              aria-label="Edit"
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

      <div className="max-w-screen-xl px-3 pt-5 mx-auto lg:px-4 lg:pt-6">
        <div className="relative overflow-hidden sm:rounded-lg">
          <div className="pt-4 overflow-x-auto ">
            <img
              src={profileImg160}
              alt={`Image Profile ${employeeData.fullname}`}
              className="mx-auto shadow-md rounded-2xl"
              width={160}
              height={160}
            />

            <h2 className="mt-4 font-semibold text-center text-md sm:text-md md:text-lg lg:text-[22px]">
              {employeeData.fullname}
            </h2>
            <p className="pt-2 text-base italic font-medium text-center lg:text-lg">
              {employeeData.nip}
            </p>

            <div className="px-1 lg:px-3">
              <div className="my-4 rounded-t-lg">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  <div className="p-4 bg-white border-l-4 border-b-4 border-primary rounded-lg shadow-[0_0px_15px_1px_rgba(0,0,0,0.3)]">
                    <h2 className="mb-1 text-base font-semibold lg:mb-2 sm:text-md lg:text-md">
                      Nickname
                    </h2>
                    <p className="text-base md:text-base lg:text-md">
                      {employeeData.nickname}
                    </p>
                  </div>

                  <div className="p-4 bg-white border-b-4 border-l-4 rounded-lg  shadow-[0_0px_15px_1px_rgba(0,0,0,0.3)] border-primary">
                    <h2 className="mb-1 text-base font-semibold lg:mb-2 sm:text-md lg:text-md">
                      Email
                    </h2>
                    <p className="text-base md:text-base lg:text-md">
                      {employeeData.company_email}
                    </p>
                  </div>

                  <div className="p-4 bg-white border-b-4 border-l-4 rounded-lg  shadow-[0_0px_15px_1px_rgba(0,0,0,0.3)] border-primary">
                    <h2 className="mb-1 text-base font-semibold lg:mb-2 sm:text-md lg:text-md">
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
              <div className="my-4 overflow-x-auto bg-white rounded-lg shadow-md">
                <div className="px-4 py-2 text-left border-b-2 rounded-tl-lg bg-primary">
                  <h2 className="text-base font-medium text-white md:text-base lg:text-lg">
                    Main Position
                  </h2>
                </div>
                <div className="flex flex-col px-4 py-2 sm:flex-row">
                  <div className="w-full mb-2 mr-3 text-left sm:w-1/2 lg:mb-3 sm:mb-0">
                    <h2 className="text-base font-semibold md:text-base lg:text-md">
                      Position Name
                    </h2>
                    <p className="mb-2 text-sm border-b lg:text-base">
                      {employeeData.main_position}
                    </p>

                    <h2 className="text-base font-semibold md:text-base lg:text-md">
                      Company Name
                    </h2>
                    <p className="mb-2 text-sm border-b lg:text-base">
                      {employeeData.company_main}
                    </p>

                    <h2 className="text-base font-semibold md:text-base lg:text-md">
                      Directorate
                    </h2>
                    <p className="text-sm border-b lg:text-base">
                      {employeeData.directorate_main}
                    </p>
                  </div>
                  <div className="w-full text-left sm:w-1/2">
                    <h2 className="text-base font-semibold md:text-base lg:text-md">
                      Division
                    </h2>
                    <p className="mb-2 text-sm border-b lg:text-base">
                      {employeeData.division_main}
                    </p>

                    <h2 className="text-base font-semibold md:text-base lg:text-md">
                      Section
                    </h2>
                    <p className="text-sm border-b lg:text-base">
                      {employeeData.section_main}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/*Secondary Position*/}
            <div className="px-1 lg:px-3">
              <div className="my-4 bg-white rounded-lg shadow-md ">
                <div className="w-full rounded-t-lg table-auto bg-primary">
                  <div className="w-full px-4 py-2 text-left border-b-2">
                    <h2 className="text-base font-medium text-white md:text-base lg:text-lg">
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
              <div className="overflow-x-auto bg-white rounded-lg shadow-md lg:my-4">
                <div className="px-4 py-2 text-left border-b-2 bg-primary">
                  <h2 className="text-base font-medium text-white md:text-base lg:text-lg">
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
                        className="flex flex-col px-4 py-2 sm:flex-row"
                      >
                        {/* Kolom 1 */}
                        <div className="w-full mr-3 text-left sm:w-1/2 lg:mb-2 ">
                          <div>
                            <h2 className="text-base font-semibold md:text-base lg:text-md">
                              Position Name
                            </h2>
                            <p className="text-sm border-b lg:text-base">
                              {selectedPosition.position_name}
                            </p>
                          </div>
                          <div>
                            <h2 className="pt-2 text-base font-semibold md:text-base lg:text-md">
                              Company Name
                            </h2>
                            <p className="mb-2 text-sm border-b lg:text-base">
                              {selectedPosition.company_name}
                            </p>
                          </div>
                          <div>
                            <h2 className="text-base font-semibold md:text-base lg:text-md">
                              Directorate
                            </h2>
                            <p className="pb-1 mb-2 text-sm border-b lg:text-base ">
                              {selectedPosition.directorate_name}
                            </p>
                          </div>
                        </div>

                        {/* Kolom 2 */}
                        <div className="w-full mb-4 text-left sm:w-1/2 sm:mb-0">
                          <div>
                            <h2 className="text-base font-semibold md:text-base lg:text-md">
                              Division
                            </h2>
                            <p className="text-sm border-b lg:text-base">
                              {selectedPosition.division_name}
                            </p>
                          </div>
                          <div>
                            <h2 className="pt-2 text-base font-semibold md:text-base lg:text-md">
                              Section
                            </h2>
                            <p className="text-sm border-b lg:text-base">
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

export default DetailEmployeeCard;
