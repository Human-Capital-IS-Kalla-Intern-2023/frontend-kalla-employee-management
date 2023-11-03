import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';

import profileImg160 from '../../../assets/img/profile/profileImg-160.webp';

type EligiblesProps = {
  employeeData: any;
};

// type PositionType = {
//   position_name: string[];
//   company_name: string;
//   directorate_name: string;
//   division_name: string;
//   section_name: string;
//   id_additional_position: string;
//   employee_detail_id: any;
// };

const DetailPositionCard = ({ employeeData }: EligiblesProps) => {
  const [isAssignmentActive, setAssignmentActive] = useState(true);
  const [isEligibleActive, setEligibleActive] = useState(false);

  const { employeeId } = useParams();
  const { positionId } = useParams();

  const handleAssignmentClick = () => {
    setAssignmentActive(true);
    setEligibleActive(false);
  };

  const handleEligibleClick = () => {
    setAssignmentActive(false);
    setEligibleActive(true);
  };

  const navigate = useNavigate();

  const handleBackButton = async () => {
    navigate(`/salary/compensation/detail/people/${employeeId}`);
  };

  return (
    <>
      {/* {isLoading && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <ReactLoading type="spin" color="green" height={50} width={50} />
        </div>
      )} */}
      <section className="antialiased overlay ">
        {/* Header Section Start */}
        <header className="flex items-center justify-between px-3 py-5 shadow-lg ">
          <h1 className="p-2 ml-2.5 text-md lg:text-xl font-medium border-b-2 border-primary ">
            Assignment & Eligible
          </h1>
          <div className="text-sm font-medium ">
            <div className="">
              <div className="">
                {/* Button Manage untuk edit Eligible */}
                <button
                  aria-label="Manage"
                  onClick={handleBackButton}
                  className="flex items-center justify-center px-5 py-3 text-[17px] font-medium duration-200 rounded-t-lg rounded-lg
                   text-pureBlack bg-secondary focus:outline-none hover:bg-yellow lg:hover:scale-[1.03]"
                >
                  BACK
                </button>
              </div>
            </div>
          </div>
        </header>
        {/* Header Section End */}

        {/* Modal Add Eligibles Section Start */}
        <div className="max-w-screen-xl px-1 pt-6 mx-auto">
          <div className="relative overflow-hidden ">
            <div className="px-5 pt-4 pb-4 overflow-x-auto">
              <div className="flex flex-wrap w-full px-2 py-2 pb-2 overflow-x-auto border-l-4 rounded-lg shadow-lg border-primary lg:w-full bg-slate-50">
                <div className="flex items-center px-4 pt-4 pb-2 lg:w-full sm:w-1/2">
                  <div className="flex items-start">
                    <img
                      src={profileImg160}
                      alt={`Image Profile ${employeeData.fullname}`}
                      className="mr-4 w-28 h-28 rounded-2xl"
                    />
                    <div>
                      <p className="text-lg font-bold uppercase">
                        {employeeData.fullname}
                      </p>
                      <div className="flex flex-wrap items-center mt-4">
                        <div className="pr-5 mb-2 lg:pr-4">
                          <h3 className="text-[15px]">NIK</h3>
                          <p className="text-base font-semibold ">
                            {employeeData.nip}
                          </p>
                        </div>
                        <div className="mb-2 pl-9">
                          <h3 className=" text-[15px]">Position</h3>
                          <p className="text-base font-semibold uppercase">
                            {employeeData.position_name}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* card 1 */}

              <div className="flex flex-row pt-4">
                <div
                  className={`flex flex-row w-2/12 items-start justify-start content-start ${
                    isAssignmentActive ? 'border-b-2' : ''
                  }`}
                >
                  <button
                    className="w-full text-lg"
                    onClick={handleAssignmentClick}
                  >
                    ASSIGNMENT
                  </button>
                </div>
                <div
                  className={`w-1/12 ${isEligibleActive ? 'border-b-2' : ''}`}
                >
                  <button
                    className="w-full text-lg"
                    onClick={handleEligibleClick}
                  >
                    ELIGIBLE
                  </button>
                </div>
              </div>
              {isAssignmentActive && (
                <div className="">
                  <div className="my-4 overflow-x-auto bg-white rounded-lg shadow-md">
                    <div className="px-4 py-2 text-left border-b-2 rounded-tl-lg bg-primary">
                      <h2 className="text-base font-medium text-white md:text-base lg:text-lg">
                        Position
                      </h2>
                    </div>
                    <div className="flex flex-row px-4 py-2 sm:flex-row">
                      <div className="w-full mb-1 mr-3 text-left sm:w-1/2 lg:mb-3 sm:mb-0">
                        <div className="flex items-center w-full py-1">
                          <div className="w-5/12">
                            <p className="text-base">Position Name</p>
                          </div>
                          <label className="relative inline-flex items-center w-8/12">
                            :
                            <div className="p-1 text-base rounded-md">
                              {employeeData.position_name}
                            </div>
                          </label>
                        </div>

                        <div className="flex items-center w-full py-1">
                          <div className="w-5/12">
                            <p className="text-base">Company</p>
                          </div>
                          <label className="relative inline-flex items-center w-8/12">
                            :
                            <div className="p-1 text-base rounded-md">
                              {employeeData.company_name}
                            </div>
                          </label>
                        </div>

                        <div className="flex items-center w-full py-1">
                          <div className="w-5/12">
                            <p className="text-base">Directorate</p>
                          </div>
                          <label className="relative inline-flex items-center w-8/12">
                            :
                            <div className="p-1 text-base rounded-md">
                              {employeeData.directorate_name}
                            </div>
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="my-4 overflow-x-auto bg-white rounded-lg shadow-md">
                    <div className="px-4 py-2 text-left border-b-2 rounded-tl-lg bg-primary">
                      <h2 className="text-base font-medium text-white md:text-base lg:text-lg">
                        Position Detail
                      </h2>
                    </div>
                    <div className="flex flex-row px-4 py-2 sm:flex-row">
                      <div className="w-full mb-1 mr-3 text-left sm:w-1/2 lg:mb-3 sm:mb-0">
                        <div className="flex items-center w-full py-1">
                          <div className="w-5/12">
                            <p className="text-base">Job Grade</p>
                          </div>
                          <label className="relative inline-flex items-center w-8/12">
                            :
                            <div className="p-1 text-base rounded-md">
                              {employeeData.grade_name}
                            </div>
                          </label>
                        </div>

                        {/* <div className="flex items-center w-full py-1">
                          <div className="w-5/12">
                            <p className="text-lg">Company Name</p>
                          </div>
                          <label className="relative inline-flex items-center w-8/12">
                            :
                            <div className="p-1 text-lg rounded-md">
                              {employeeData.company_main}
                            </div>
                          </label>
                        </div>

                        <div className="flex items-center w-full py-1">
                          <div className="w-5/12">
                            <p className="text-lg">Directorate Name</p>
                          </div>
                          <label className="relative inline-flex items-center w-8/12">
                            :
                            <div className="p-1 text-lg rounded-md">
                              {employeeData.directorate_main}
                            </div>
                          </label>
                        </div> */}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Tabel 1*/}
              {isEligibleActive && (
                <div className="">
                  <div className="my-4 overflow-x-auto bg-white rounded-lg shadow-md">
                    <table className="w-full p-5 table-auto">
                      <thead>
                        <tr className="bg-primary">
                          <th className="w-1/2 px-4 py-2 text-left border-b-2 rounded-tl-lg">
                            <h2 className="text-lg font-medium text-white">
                              Bank Information
                            </h2>
                          </th>
                          <th className="w-1/2 px-4 py-2 text-right border-b-2 rounded-tr-lg"></th>
                        </tr>
                      </thead>
                      <tbody>
                        <div className="flex flex-wrap w-full">
                          {employeeData.type_bank !== 'Eligible Belum Dibuat' &&
                          employeeData.account_number !==
                            'Eligible Belum Dibuat' ? (
                            <div className="flex items-center w-full px-4 py-3">
                              <div className="w-5/12">
                                <p className="text-base">Bank Account</p>
                              </div>
                              <label className="relative inline-flex items-center w-7/12">
                                :
                                <div className="p-1 rounded-md">
                                  {employeeData.type_bank} -{' '}
                                  {employeeData.account_number}
                                </div>
                              </label>
                            </div>
                          ) : (
                            <div className="flex items-center w-full px-4 py-3">
                              <div className="w-5/12">
                                <p className="text-base">Bank Account</p>
                              </div>
                              <label className="relative inline-flex items-center w-7/12">
                                :
                                <div className="p-1 ml-1 rounded-md bg-secondary">
                                  No Bank Data
                                </div>
                              </label>
                            </div>
                          )}
                        </div>
                      </tbody>
                    </table>
                  </div>
                  {/* Tabel 1*/}

                  {/* Salary Datail */}
                  <div className="">
                    <div className="my-4 bg-white rounded-lg shadow-xl">
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
                          {employeeData.salary_detail !==
                            'Eligible Belum Dibuat' &&
                          employeeData.salary_detail &&
                          employeeData.salary_detail.length > 0 ? (
                            employeeData.salary_detail
                              .reduce((rows: any, item: any, index: any) => {
                                if (index % 2 === 0) {
                                  rows.push([item]);
                                } else {
                                  rows[rows.length - 1].push(item);
                                }
                                return rows;
                              }, [])
                              .map((row: any, rowIndex: any) => (
                                <tr key={rowIndex}>
                                  {row.map((item: any, itemIndex: any) => (
                                    <td
                                      key={itemIndex}
                                      className="px-4 py-2 text-left align-top"
                                    >
                                      <div>
                                        <h2 className="text- ">
                                          {item.component_name}
                                        </h2>
                                        <span className="text-[13px]">
                                          {item.salary}
                                        </span>
                                        <p className="pt-2 pb-1 text-[15px] border-b ">
                                          <span
                                            className={
                                              item.is_status === 1
                                                ? 'bg-blue-300 px-3 py-[3px] rounded-lg mt-3 mb-2'
                                                : 'bg-red-300 px-3  py-[3px] rounded-lg mt-3 mb-2'
                                            }
                                          >
                                            {item.is_status === 1
                                              ? 'Yes'
                                              : 'No'}
                                          </span>
                                        </p>
                                      </div>
                                    </td>
                                  ))}
                                </tr>
                              ))
                          ) : (
                            <td
                              className="px-4 py-2 text-center bg-zinc-300"
                              colSpan={2}
                            >
                              No salary data available , setting{' '}
                              <Link
                                to={`/employee/detail/eligibles/${employeeId}/${positionId}/set`}
                                className="text-blue-700"
                              >
                                here
                              </Link>
                            </td>
                          )}
                        </tbody>
                      </table>
                    </div>

                    {/* Tabel 3 */}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DetailPositionCard;
