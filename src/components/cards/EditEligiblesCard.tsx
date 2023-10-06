import { useState } from "react";
import { ArrowButtonIcon, PlusIcon } from "../../assets/icons/icon";
import profileImg from "../../assets/img/profileImg.webp";
import { useNavigate, Link } from "react-router-dom";
import ReactLoading from "react-loading";

type EligiblesProps = {
  employeeData: any;
};

const EditEligiblesCard = ({ employeeData }: EligiblesProps) => {
  if (!employeeData) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
        <ReactLoading type="spin" color="green" height={50} width={50} />
      </div>
    );
  }

  const [checked, setChecked] = useState(true);

  const handleChange = (val: any) => {
    setChecked(val);
  };

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
              </div>
            </div>
            <div className="pl-4 flex-grow py-6">
              <div className="bg-primary rounded-lg">
                <div className=" w-full px-4 pt-2 flew-row flex text-left justify-between rounded-t-lg border-b-2">
                  <h2 className="text-lg font-medium flex-row text-white">
                    Bank
                  </h2>
                  <div className="flex pl-6">
                    <div className="flex flex-row pb-2">
                      {/* Button Manage untuk edit Eligible */}
                      <button className="flex items-center justify-center px-3 py-1 text-sm font-medium duration-300 rounded-lg text-pureBlack bg-secondary focus:ring-4 bg-primary-600 hover:bg-yellow">
                        Add
                        <PlusIcon className="h-3 w-3 ml-1" />
                      </button>
                    </div>
                  </div>
                </div>
                {/* Kolom 1 */}
                <div className="px-4 py-2 text-left bg-white align-top flex items-center">
                  <h2 className="text-base mr-4 w-full mt-1 mb-1 text-slate-700">
                    Nama Bank
                  </h2>
                </div>

                {/* Kolom 2 */}
                {/* <td className="flex px-4 py-2 mr-4 text-left align-top flex-row">
                      <h2 className="text-base mr-2 ml-16 w-48 mt-2"></h2>
                    </td> */}
              </div>

              {/* card 3 */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EditEligiblesCard;
