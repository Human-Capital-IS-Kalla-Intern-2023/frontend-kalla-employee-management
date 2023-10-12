import { useEffect, useState, useCallback } from 'react';
import { ArrowButtonIcon } from '../../assets/icons/icon';
import profileImg from '../../assets/img/profileImg.webp';
import { useNavigate, useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import {
  getDetailEmployee,
  getEditSalaryEmployee,
} from '../../api/EmployeeAPI';
import SetEligiblesModal from '../modals/SetEligiblesModal';
import ReactLoading from 'react-loading';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
type EligiblesProps = {
  employeeData: any;
};
import { TrashIcon } from '../../assets/icons/icon';

type PositionType = {
  position_name: string[];
  company_name: string;
  directorate_name: string;
  division_name: string;
  section_name: string;
  id_additional_position: string;
};

const Eligibles = ({ employeeData }: EligiblesProps) => {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const { employeeId } = useParams();
  const { positionId } = useParams();

  const [isModalOpen, setIsModalOpen] = useState(false);

  const [allPositionOption, setAllPositionOption] = useState<any | null>(null);

  const [isLoading, setIsLoading] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const navigate = useNavigate();

  const handleCloseModal = useCallback(() => {
    setIsModalOpen(false);
    if (location.pathname.endsWith('/set')) {
      const newUrl = location.pathname.slice(0, -4);
      navigate(newUrl);
    }
  }, [navigate]);

  const handleEditClick = async () => {
    try {
      setIsLoading(true);
      const response = await getEditSalaryEmployee(employeeId, positionId);

      if (response) {
        navigate(`/employee/detail/eligibles/${employeeId}/${positionId}/edit`);
      }
    } catch (error: any) {
      toast.error(`${error.response.data.message}`);
    } finally {
      setIsLoading(false);
    }
  };

  const handleManageClick = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };

  const featchSecondaryPositionEmployee = async (employeeId: any) => {
    try {
      setIsLoading(true);

      const responseData = await getDetailEmployee(employeeId);
      setAllPositionOption(responseData.data);
    } catch (error: any) {
      console.error('Error featch detail employee:', error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    featchSecondaryPositionEmployee(employeeId);
  }, [employeeId, positionId]);

  return (
    <>
      {isLoading && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <ReactLoading type="spin" color="green" height={50} width={50} />
        </div>
      )}
      <section className="antialiased overlay bg-slate-100">
        {/* Header Section Start */}
        <header className="flex items-center justify-between px-3 py-5 shadow-lg ">
          <h1 className="p-2 ml-2.5 text-md lg:text-lgfont-medium border-b-2 border-primary ">
            Eligibles Employee Page
          </h1>
          <div className="text-sm font-medium ">
            <div className="">
              <div className="">
                {/* Button Manage untuk edit Eligible */}
                <button
                  onClick={handleManageClick}
                  className={`flex items-center justify-center px-6 py-2 text-sm font-medium duration-100 ${
                    isDropdownVisible ? 'rounded-t-lg' : 'rounded-lg'
                  } text-pureBlack bg-secondary focus:outline-none bg-primary-600 hover:bg-gray hover:text-white `}
                >
                  Manage
                  <ArrowButtonIcon className="h-3.5 w-3.5 ml-1" />
                </button>
                {isDropdownVisible && (
                  <div className="absolute px-1 py-1 bg-white rounded-b-lg top-12.5 border border-secondary right-3 z-10">
                    <Link to={'set'} onClick={handleOpenModal}>
                      <button className="block px-3 py-3 text-sm hover:text-white hover:bg-primary">
                        Add Eligibles
                      </button>
                    </Link>

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
        {/* Header Section End */}

        <ToastContainer />

        {isModalOpen && (
          <SetEligiblesModal
            onClose={handleCloseModal}
            allPositionOption={allPositionOption}
          />
        )}
        {/* Modal Add Eligibles Section Start */}
        <div className="max-w-screen-xl px-1 pt-6 mx-auto">
          <div className="relative overflow-hidden ">
            <div className="px-3 pt-4 pb-4 overflow-x-auto">
              {/* card 1 */}
              <img src={profileImg} className="w-40 h-40 mx-auto rounded-2xl" />

              <h2 className="mt-4 text-xl font-semibold text-center sm:text-md md:text-lg lg:text-xl">
                {employeeData.fullname}
              </h2>
              <p className="mt-2 text-center font-lg">{employeeData.nip}</p>

              <div className="px-3">
                <div className="my-4 rounded-t-lg ">
                  <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
                    <div className="p-4 bg-white rounded-lg shadow-md">
                      <h2 className="mb-2 text-base font-semibold lg:text-lg">
                        Company Name
                      </h2>
                      <p className="text-sm lg:text-base">
                        {employeeData.company_name}
                      </p>
                    </div>

                    <div className="p-4 bg-white rounded-lg shadow-md">
                      <h2 className="mb-2 text-base font-semibold lg:text-lg">
                        Directorate
                      </h2>
                      <p className="text-sm lg:text-base">
                        {employeeData.directorate_name}
                      </p>
                    </div>
                    <div className="p-4 bg-white rounded-lg shadow-md">
                      <h2 className="mb-2 text-base font-semibold lg:text-lg">
                        Division
                      </h2>
                      <p className="text-sm lg:text-base">
                        {employeeData.division_name}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* card 1 */}

              {/* Tabel 1*/}
              <div className="px-3">
                <div className="my-4 overflow-x-auto bg-white rounded-lg shadow-md">
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
                      <div className="flex flex-wrap w-full">
                        <div className="flex items-center w-full px-4 py-3">
                          <div className="w-5/12">
                            <p className="text-base">Position Name</p>
                          </div>
                          <label className="relative inline-flex items-center w-7/12">
                            : {employeeData.position_name}
                          </label>
                        </div>
                        {employeeData.type_bank !== 'Eligible Belum Dibuat' &&
                        employeeData.account_number !==
                          'Eligible Belum Dibuat' ? (
                          <div className="flex items-center w-full px-4 py-3">
                            <div className="w-5/12">
                              <p className="text-base">Bank Account</p>
                            </div>
                            <label className="relative inline-flex items-center w-7/12">
                              :
                              <div className="p-1 ml-1 rounded-md">
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
                                      <h2 className="text-base">
                                        {item.component_name}
                                      </h2>
                                      <p className="pt-2 pb-1 text-sm border-b ">
                                        <span
                                          className={
                                            item.is_status === 1
                                              ? 'bg-blue-300 px-2 rounded-md mt-2 mb-2'
                                              : 'bg-red-300 px-2 rounded-md mt-2 mb-2'
                                          }
                                        >
                                          {item.is_status === 1 ? 'Yes' : 'No'}
                                        </span>
                                      </p>
                                    </div>
                                  </td>
                                ))}
                              </tr>
                            ))
                        ) : (
                          <td
                            className="px-4 py-4 text-center bg-zinc-300"
                            colSpan={2}
                          >
                            No salary data available , setting{' '}
                            <Link
                              to={`/employee/detail/eligibles/${employeeId}/${positionId}/set`}
                              onClick={handleOpenModal}
                              className="text-blue-700"
                            >
                              here
                            </Link>
                          </td>
                        )}
                      </tbody>
                    </table>
                  </div>
                  {/* Tabel 2*/}

                  {/* Tabel 3 */}
                  <div className="w-full my-6 bg-white rounded-t-lg shadow-xl">
                    <div className="rounded-t-lg bg-primary">
                      <div className="w-full px-4 py-2 text-left border-b-2">
                        <h2 className="text-lg font-medium text-white">
                          Secondary Information
                        </h2>
                      </div>
                    </div>

                    {employeeData.additional_position ? (
                      <div className="flex flex-wrap w-full">
                        {employeeData.additional_position.map(
                          (position: PositionType, index: number) => (
                            <div
                              key={index}
                              className="flex items-center w-1/2 px-4 py-4"
                            >
                              <div className="w-4/5 px-2 py-2 duration-200 rounded-md cursor-pointer hover:bg-gray hover:text-white bg-secondary">
                                <Link
                                  to={`/employee/detail/eligibles/${employeeId}/${position.id_additional_position}`}
                                >
                                  <p className="text-base ">
                                    <span className="">
                                      {position.position_name}
                                    </span>
                                  </p>
                                </Link>
                              </div>
                              <div className="relative inline-flex items-center w-1/5 ml-2 cursor-pointer">
                                <div className="px-2 py-2 text-white bg-black rounded-md hover:bg-red-300 hover:text-black">
                                  <TrashIcon className="w-6 h-6" />
                                </div>
                              </div>
                            </div>
                          )
                        )}
                      </div>
                    ) : (
                      <div className="px-4 py-5 text-center bg-zinc-300">
                        No salary data available
                      </div>
                    )}
                  </div>
                  {/* Tabel 3 */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Eligibles;
