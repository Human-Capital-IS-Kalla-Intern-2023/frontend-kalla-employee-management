import { useState } from 'react';
import { ArrowButtonIcon, CloseButtonIcon } from '../../assets/icons/icon';
import profileImg from '../../assets/img/profileImg.webp';
import ReactLoading from 'react-loading';
import { useNavigate, useParams } from 'react-router-dom';

type EligiblesProps = {
  employeeData: any;
};

const Eligibles = ({ employeeData }: EligiblesProps) => {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const { employeeId } = useParams();

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddEligiblesClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const navigate = useNavigate();

  const handleEditClick = () => {
    navigate(`/employee/detail/eligibles/edit/${employeeId}`);
  };

  const handleManageClick = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };

  if (!employeeData) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
        <ReactLoading type="spin" color="green" height={50} width={50} />
      </div>
    );
  }

  return (
    <section className="antialiased overlay bg-slate-100">
      <header className="flex items-center justify-between px-3 py-5 shadow-lg ">
        <h1 className="p-2 ml-2.5 text-lg font-medium border-b-2 border-primary ">
          Eligibles Employee Page
        </h1>
        <div className="text-sm font-medium ">
          {/* <button
            className="px-4 py-2 mr-4 text-white duration-300 bg-red-500 rounded-md hover:bg-gray"
            onClick={handleBack}
          >
            BACK
          </button> */}
          <div className="">
            <div className="">
              {/* Button Manage untuk edit Eligible */}
              <button
                onClick={handleManageClick}
                className={`flex items-center justify-center px-6 py-2 text-sm font-medium duration-100 ${
                  isDropdownVisible ? 'rounded-t-lg' : 'rounded-lg'
                } text-pureBlack bg-secondary focus:outline-none bg-primary-600 hover:bg-gray hover:text-white`}
              >
                Manage
                <ArrowButtonIcon className="h-3.5 w-3.5 ml-1" />
              </button>
              {isDropdownVisible && (
                <div className="absolute px-1 py-1 bg-white rounded-b-lg top-12.5 border border-secondary right-3 z-50">
                  <button
                    className="block px-3 py-3 text-sm hover:text-white hover:bg-primary"
                    onClick={handleAddEligiblesClick}
                  >
                    Add Eligibles
                  </button>
                  <button
                    className="block px-3 py-3 text-sm hover:text-white hover:bg-primary"
                    onClick={handleEditClick}
                  >
                    Edit Eligibles
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>

      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 ">
          <div className="w-1/3 bg-white rounded-md shadow-md">
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
            <div className="p-4">
              {/* Konten modal */}
              <div className="mb-4">
                <label
                  htmlFor="dropdown"
                  className="block font-medium text-gray-700"
                >
                  Select Position
                </label>

                <select
                  id="type-dropdown"
                  name="type-dropdown"
                  // value={typeMasterComponentOptions}
                  // onChange={handleTypeChange}
                  className="block w-full px-3 py-2 mt-2 text-sm bg-white border rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
                >
                  <option value="">Select position</option>
                  <option value="1">Position 1 </option>
                  <option value="2">Position 2</option>
                  <option value="3">Position 3</option>
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
                // onClick={handleAdd}
              >
                ADD
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="max-w-screen-xl px-4 pt-6 mx-auto">
        <div className="relative overflow-hidden ">
          <div className="px-3 pt-4 pb-4 overflow-x-auto">
            {/* card 1 */}
            <img src={profileImg} className="w-40 h-40 mx-auto rounded-2xl" />

            <h2 className="mt-4 text-2xl font-semibold text-center">
              {employeeData.fullname}
            </h2>
            <p className="mt-2 text-center font-lg">{employeeData.nip}</p>

            <div className="pt-4 pb-1">
              <div className="my-4 rounded-t-lg ">
                <div className="grid grid-cols-3 gap-5">
                  <div className="p-4 bg-white rounded-lg shadow-md">
                    <h2 className="mb-2 text-lg font-semibold">Company Name</h2>
                    <p className="text-base">{employeeData.company_name}</p>
                  </div>

                  <div className="p-4 bg-white rounded-lg shadow-md">
                    <h2 className="mb-2 text-lg font-semibold">Directorate</h2>
                    <p className="text-base">{employeeData.directorate_name}</p>
                  </div>
                  <div className="p-4 bg-white rounded-lg shadow-md">
                    <h2 className="mb-2 text-lg font-semibold">Division</h2>
                    <p className="text-base">{employeeData.division_name}</p>
                  </div>
                </div>
              </div>
            </div>
            {/* card 1 */}

            {/* Tabel 1*/}
            <div className="">
              <div className="my-4 bg-white rounded-lg shadow-xl ">
                <table className="w-full p-5 table-auto">
                  <thead>
                    <tr className="bg-primary">
                      <th className="w-1/2 px-4 py-2 text-left border-b-2 rounded-tl-lg">
                        <h2 className="text-lg font-medium text-white">
                          Primary Information
                        </h2>
                      </th>
                      <th className="w-1/2 px-4 py-2 text-right border-b-2 rounded-tr-lg"></th>
                    </tr>
                  </thead>
                  <tbody>
                    <div className="flex items-center px-4 pb-2">
                      {/* Kolom 1 */}
                      <td className="px-4 py-2 pl-0 text-left align-top ">
                        <div className="flex items-center ">
                          <h2 className="flex-shrink-0 mr-5 text-base">
                            Main Postion Name :
                          </h2>
                          <div className="px-4 py-1 text-pureBlack">
                            {employeeData.position_name}
                          </div>
                        </div>
                      </td>
                    </div>
                    <div className="flex items-center px-4 pb-2">
                      {/* Kolom 1 */}
                      <td className="px-4 py-2 pl-0 text-left align-top">
                        <div className="flex items-center ">
                          <h2 className="flex-shrink-0 mr-5 text-base">
                            Bank Account :
                          </h2>
                          <button className="px-4 py-0 rounded bg-secondary text-pureBlack ">
                            Rekening Number
                          </button>
                        </div>
                      </td>
                    </div>
                  </tbody>
                </table>
              </div>
              {/* Tabel 1*/}

              {/* Tabel 2*/}
              <div className="">
                <div className="my-4 bg-white rounded-lg shadow-xl ">
                  <table className="w-full p-5 table-auto">
                    <thead>
                      <tr className="bg-primary">
                        <th className="w-1/2 px-4 py-2 text-left border-b-2 rounded-tl-lg">
                          <h2 className="text-lg font-medium text-white">
                            Allowance Information
                          </h2>
                        </th>
                        <th className="w-1/2 px-4 py-2 text-right border-b-2 rounded-tr-lg"></th>
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
                {/* Tabel 2*/}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Eligibles;
