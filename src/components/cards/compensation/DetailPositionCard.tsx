import { useEffect, useState, useCallback } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Link, useLocation } from 'react-router-dom';
import ReactLoading from 'react-loading';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import { ThreeDotIcon } from '../../../assets/icons/icon';
import { DetailIcon, EditIcon } from '../../../assets/icons/icon';
import DeleteModal from '../../modals/DeleteModal';
import {
  getDetailEmployee,
  getEditSalaryEmployee,
  deleteEligiblesEmployee,
} from '../../../api/EmployeeAPI';

import SetEligiblesModal from '../../modals/eligibles//SetEligiblesModal';
import CustomToastWithLink from '../../alerts/CustomToastWithLink';

import { ArrowButtonIcon } from '../../../assets/icons/icon';
import profileImg160 from '../../../assets/img/profile/profileImg-160.webp';
import { TrashIcon } from '../../../assets/icons/icon';

type EligiblesProps = {
  employeeData: any;
};

type PositionType = {
  position_name: string[];
  company_name: string;
  directorate_name: string;
  division_name: string;
  section_name: string;
  id_additional_position: string;
  employee_detail_id: any;
};

const DetailPositionCard = ({ employeeData }: EligiblesProps) => {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const [isAssignmentActive, setAssignmentActive] = useState(true);
  const [isEligibleActive, setEligibleActive] = useState(false);

  const { employeeId } = useParams();
  const { positionId } = useParams();

  const [isModalOpen, setIsModalOpen] = useState(false);

  const [allPositionOption, setAllPositionOption] = useState<any | null>(null);

  const [isLoading, setIsLoading] = useState(false);

  const [activeDropdown, setActiveDropdown] = useState<number | null | boolean>(
    null
  );

  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [itemToDeleteId, setItemToDeleteId] = useState(null);

  const handleAssignmentClick = () => {
    setAssignmentActive(true);
    setEligibleActive(false);
  };

  const handleEligibleClick = () => {
    setAssignmentActive(false);
    setEligibleActive(true);
  };

  const handleDeleteEligibles = (employeeDetailId: any) => {
    setIsDeleteModalOpen(true);
    setItemToDeleteId(employeeDetailId);
  };

  const toggleDropdown = (idOrNo: number) => {
    setActiveDropdown((prevIdOrNo) => (prevIdOrNo === idOrNo ? null : idOrNo));
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleClickDetail = () => {
    setActiveDropdown(false);
  };

  const navigate = useNavigate();
  const location = useLocation();

  const handleCloseModal = useCallback(() => {
    setIsModalOpen(false);
    if (location.pathname.endsWith('/set')) {
      const newUrl = location.pathname.slice(0, -4);
      navigate(newUrl);
    }
  }, [location.pathname, navigate]);

  const handleEditClick = async () => {
    try {
      setIsLoading(true);
      const response = await getEditSalaryEmployee(employeeId, positionId);

      if (response) {
        navigate(`/employee/detail/eligibles/${employeeId}/${positionId}/edit`);
      }
    } catch (error: any) {
      console.error(error);
      toast.error(
        CustomToastWithLink(
          `/employee/detail/eligibles/${employeeId}/${positionId}/set`,
          `${error.response.data.message}, Click this alert to add`
        )
      );
    } finally {
      setIsLoading(false);
    }
  };

  const handleManageClick = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };

  const fetchSecondaryPositionEmployee = async (employeeId: any) => {
    try {
      setIsLoading(true);

      const responseData = await getDetailEmployee(employeeId);
      setAllPositionOption(responseData.data);
    } catch (error: any) {
      console.error('Error fetch detail employee:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const confirmDelete = async () => {
    try {
      setIsLoading(true);
      await deleteEligiblesEmployee(itemToDeleteId);

      toast.success('Successfully deleted eligibles employee');
      setTimeout(() => {
        window.location.reload();
      }, 1500);
    } catch (error) {
      console.error('Error deleting:', error);
      toast.error('Error deleted eligibles employee');
    } finally {
      setIsLoading(false);
      setIsDeleteModalOpen(false);
    }
  };

  useEffect(() => {
    if (location.pathname.endsWith('/set')) {
      handleOpenModal();
    }
  }, [location.pathname]);

  useEffect(() => {
    fetchSecondaryPositionEmployee(employeeId);
  }, [employeeId, positionId]);

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  useEffect(() => {
    const handleEscKeyPress = (event: any) => {
      if (event.key === 'Escape') {
        setIsDropdownVisible(false);
      }
    };

    if (isDropdownVisible) {
      document.addEventListener('keydown', handleEscKeyPress);
    } else {
      document.removeEventListener('keydown', handleEscKeyPress);
    }

    return () => {
      document.removeEventListener('keydown', handleEscKeyPress);
    };
  }, [isDropdownOpen]);

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
                  onClick={handleManageClick}
                  className={`flex items-center justify-center px-4 pr-3 py-3 text-[17px] font-medium duration-200 ${
                    isDropdownVisible ? 'rounded-t-lg' : 'rounded-lg'
                  } text-pureBlack bg-secondary focus:outline-none hover:bg-yellow lg:hover:scale-105`}
                >
                  Manage
                  <ArrowButtonIcon className="h-3.5 w-3.5 ml-1" />
                </button>
                {isDropdownVisible && (
                  <div className="absolute px-1 py-1 bg-white rounded-b-lg top-12.5 border border-secondary right-3 z-10">
                    <Link to={'set'} onClick={handleOpenModal}>
                      <button
                        className="block px-[18px] py-3 text-sm hover:text-white text-[16px] hover:bg-primary"
                        aria-label="Add Eligibles"
                      >
                        Add Eligibles
                      </button>
                    </Link>

                    <button
                      className="block px-[18px]  py-3 text-sm hover:text-white text-[16px] hover:bg-primary"
                      onClick={handleEditClick}
                      aria-label="Edit Eligibels"
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
                        <div className="pl-9 mb-2">
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
                  <button className="w-full" onClick={handleAssignmentClick}>
                    ASSIGNMENT
                  </button>
                </div>
                <div
                  className={`w-1/12 ${isEligibleActive ? 'border-b-2' : ''}`}
                >
                  <button className="w-full" onClick={handleEligibleClick}>
                    ELIGIBLE
                  </button>
                </div>
              </div>

              {/* Tabel 1*/}
              <div className="">
                <div className="my-4 overflow-x-auto bg-white rounded-lg shadow-md">
                  <table className="w-full p-5 table-auto">
                    <thead>
                      <tr className="bg-primary">
                        <th className="w-1/2 px-4 py-2 text-left border-b-2 rounded-tl-lg">
                          <h2 className="text-lg font-medium text-white">
                            Bank Information Information
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
                            className="px-4 py-2 text-center bg-zinc-300"
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DetailPositionCard;
