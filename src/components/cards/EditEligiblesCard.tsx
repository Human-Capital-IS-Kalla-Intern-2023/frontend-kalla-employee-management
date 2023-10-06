
import { useState } from 'react';
import {
  ArrowButtonIcon,
  PlusIcon,
  CloseButtonIcon,
} from '../../assets/icons/icon';
import profileImg from '../../assets/img/profileImg.webp';
import ReactLoading from 'react-loading';
// import { useNavigate } from 'react-router-dom';


type EligiblesProps = {
  employeeData: any;
};

const EditEligiblesCard = ({ employeeData }: EligiblesProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddBank = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  // const navigate = useNavigate();

  // const [checked, setChecked] = useState(true);

  // const handleChange = (val: any) => {
  //   setChecked(val);
  // };

  if (!employeeData) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
        <ReactLoading type="spin" color="green" height={50} width={50} />
      </div>
    );
  }
  return (
    <section className="antialiased bg-slate-100 overlay h-screen">
      <header className="flex items-center justify-between px-3 py-5 shadow-lg ">
        <h1 className="p-2 ml-2.5 text-lg font-medium border-b-2 border-primary ">
          Edit Eligibles Employee
        </h1>
        <div className="text-sm font-medium ">
          {/* <button
            className="px-4 py-2 mr-4 text-white duration-300 bg-red-500 rounded-md hover:bg-gray"
            onClick={handleBack}
          >
            BACK
          </button> */}
          <Link to={`edit`} type="button">
            <button className="px-8 py-2 text-base duration-300 rounded-md text-pureBlack bg-secondary hover:bg-gray hover:text-white">
              SAVE
            </button>
          </Link>
        </div>
      </header>
      <div className="max-w-screen-xl px-4 pt-6 mx-auto">
        <div className="overflow-x-auto pb-4 pt-4 px-5">
          {/* card 1 */}

          <div className="flex w-full rounded-lg overflow-hidden bg-slate-200 shadow-lg px-2 py-2 pb-2">
            <div className="flex items-center px-4 pb-2 pt-4">
              <img src={profileImg} className="w-28 h-28 rounded-2xl mr-4" />
              <div className="mb-2 px-4 pl-0">
                <p className="text-lg font-bold">{employeeData.fullname}</p>

                <h3 className="text-md  mt-4">NIK</h3>
                <p className="text-md font-semibold">{employeeData.nip}</p>
              </div>
              <div className="flex flex-row items-start px-6 py-1 pt-12">
                <div className="mb-2 px-4">
                  <h3 className="text-md ">Job Grade</h3>
                  <p className="text-md font-semibold">
                    {employeeData.job_grade_main}
                  </p>
                </div>
                <div className="mb-2 px-4">
                  <h3 className="text-md ">Main Position</h3>
                  <p className="text-md font-semibold">
                    {employeeData.main_position}
                  </p>
                </div>
                <div className="mb-2 px-4">
                  <h3 className="text-md ">Company Name</h3>
                  <p className="text-md font-semibold">
                    {employeeData.company_main}
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* card 1 */}

          {/* card 3 */}
          <div className="pt-3 flex-row flex">
            <div className="my-6 w-4/6 bg-white rounded-t-lg shadow-xl ">
              <div className="w-full">
                <div className="bg-primary rounded-t-lg">
                  <div className="w-full px-4 py-2 text-left  border-b-2">
                    <h2 className="text-lg font-medium text-white">
                      Allowance Information
                    </h2>
                  </div>
                </div>
                <div className="w-full border-b">
                  <div className="flex flex-row w-full">
                    {/* Kolom 1 */}
                    <div className="px-4 py-2 text-left align-top flex items-center">
                      <h2 className="text-base mr-4 w-48 mt-2">
                        Positional Allowance
                      </h2>
                      <label className="relative inline-flex items-center mt-2 cursor-pointer">
                        <input
                          type="checkbox"
                          value=""
                          className="sr-only peer"
                          defaultChecked
                          onChange={() => {}}
                        />

                        <div
                          className={`w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600`}
                        ></div>
                      </label>
                    </div>

                    {/* Kolom 2 */}
                    <div className="flex px-6 py-2 mr-4 text-left align-top flex-row">
                      <h2 className="text-base mr-2 ml-16 w-48 mt-2">
                        Functional Allowance
                      </h2>
                      <label className="relative inline-flex flex-col items-center mt-2 cursor-pointer">
                        <input
                          type="checkbox"
                          value=""
                          className="sr-only peer"
                          defaultChecked
                          onChange={() => {}}
                        />

                        <div
                          className={`w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600`}
                        ></div>
                      </label>
                    </div>
                  </div>

                </div>
                <div className="w-full border-b">
                  <div className="flex flex-row">
                    {/* Kolom 1 */}
                    <div className="px-4 py-2 text-left align-top flex items-center">
                      <h2 className="text-base mr-4 w-48 mt-2">
                        Positional Allowance
                      </h2>
                      <label className="relative inline-flex items-center mt-2 cursor-pointer">
                        <input
                          type="checkbox"
                          value=""
                          className="sr-only peer"
                          defaultChecked
                          onChange={() => {}}
                        />

                        <div
                          className={`w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600`}
                        ></div>
                      </label>
                    </div>

                    {/* Kolom 2 */}


                    <div className="flex px-6 py-2 mr-4 text-left align-top flex-row">
                      <h2 className="text-base mr-2 ml-16 w-48 mt-2">
                        Functional Allowance
                      </h2>
                      <label className="relative inline-flex flex-col items-center mt-2 cursor-pointer">
                        <input
                          type="checkbox"
                          value=""
                          className="sr-only peer"
                          defaultChecked
                          onChange={() => {}}
                        />

                        <div
                          className={`w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600`}
                        ></div>
                      </label>
                    </div>
                  </div>
                </div>
                <div className="w-full border-b">
                  <div className="flex flex-row">
                    {/* Kolom 1 */}
                    <div className="px-4 py-2 text-left align-top flex items-center">
                      <h2 className="text-base mr-4 w-48 mt-2">
                        Positional Allowance
                      </h2>
                      <label className="relative inline-flex items-center mt-2 cursor-pointer">
                        <input
                          type="checkbox"
                          value=""
                          className="sr-only peer"
                          defaultChecked
                          onChange={() => {}}
                        />

                        <div
                          className={`w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600`}
                        ></div>
                      </label>
                    </div>

                      {/* Kolom 2 */}
                      <div className="flex flex-row px-6 py-2 mr-4 text-left align-top">
                        <h2 className="w-48 mt-2 ml-16 mr-2 text-base">
                          Functional Allowance
                        </h2>
                        <label className="relative inline-flex flex-col items-center mt-2 cursor-pointer">
                          <input
                            type="checkbox"
                            value=""
                            className="sr-only peer"
                            defaultChecked
                            onChange={() => {}}
                          />

                        <div
                          className={`w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600`}
                        ></div>
                      </label>
                    </div>
                  </div>
                </div>
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
                          onClick={handleAddBank}
                        >
                          Add
                          <PlusIcon className="w-3 h-3 ml-1" />
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center px-4 py-2 text-left align-top bg-white">
                    <h2 className="w-full mt-1 mb-1 mr-4 text-base text-slate-700">
                      Nama Bank
                    </h2>
                  </div>
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
                        id="input"
                        name="input"
                        placeholder="Employee Name"
                        // value={salaryNameValue}
                        // onChange={handleSalaryNameInput}
                        className="block w-full px-3 py-2 mt-1 text-sm bg-white border rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
                      />
                    </div>
                    <div className="px-4 py-2">
                      <label
                        htmlFor="input"
                        className="block font-medium text-gray-700"
                      >
                        Rekening Number
                      </label>
                      <input
                        type="number"
                        id="input"
                        name="input"
                        placeholder="Input Rekening Number"
                        // value={salaryNameValue}
                        // onChange={handleSalaryNameInput}
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
                          // value={typeMasterComponentOptions}
                          // onChange={handleTypeChange}
                          className="block w-full px-3 py-2 mt-2 text-sm bg-white border rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
                        >
                          <option value="" disabled>
                            Select Bank Name
                          </option>
                          <option value="bank mandiri">Bank Mandiri </option>
                          <option value="bank bri">Bank BRI</option>
                          <option value="bank bni">Bank BNI</option>
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

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EditEligiblesCard;
