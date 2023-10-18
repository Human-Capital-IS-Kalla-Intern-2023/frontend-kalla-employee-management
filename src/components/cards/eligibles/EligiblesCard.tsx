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

import SetEligiblesModal from '../../modals/Eligibles/SetEligiblesModal';
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

const EligiblesCard = ({ employeeData }: EligiblesProps) => {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

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

  return (
    <>
      {isLoading && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <ReactLoading type="spin" color="green" height={50} width={50} />
        </div>
      )}
      <section className="antialiased overlay ">
        {/* Header Section Start */}
        <header className="flex items-center justify-between px-3 py-5 shadow-lg ">
          <h1 className="p-2 ml-2.5 text-md lg:text-xl font-medium border-b-2 border-primary ">
            Eligibles Employee Page
          </h1>
          <div className="text-sm font-medium ">
            <div className="">
              <div className="">
                {/* Button Manage untuk edit Eligible */}
                <button
                  aria-label="Manage"
                  onClick={handleManageClick}
                  className={`flex items-center justify-center px-6 py-3 text-[17px] font-medium duration-200 ${
                    isDropdownVisible ? 'rounded-t-lg' : 'rounded-lg'
                  } text-pureBlack bg-secondary focus:outline-none bg-primary-600 hover:bg-gray hover:text-white `}
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
            <div className="px-3 pt-4 pb-4 overflow-x-auto">
              {/* card 1 */}

              <img
                src={profileImg160}
                alt={`Image Profile ${employeeData.fullname}`}
                className="w-40 h-40 mx-auto shadow-lg rounded-2xl"
              />

              <h2 className="mt-4 text-xl font-semibold text-center sm:text-md md:text-lg lg:text-[22px]">
                {employeeData.fullname}
              </h2>
              <p className="mt-2 text-lg italic text-center font-lg">
                {employeeData.nip}
              </p>

              <div className="px-3">
                <div className="my-5 rounded-t-lg ">
                  <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
                    <div className="p-4 bg-white border-b-4 border-l-4 rounded-lg  shadow-[0_0px_15px_1px_rgba(0,0,0,0.3)] border-primary">
                      <h2 className="mb-2 text-base font-semibold lg:text-lg">
                        Company Name
                      </h2>
                      <p className="text-sm lg:text-base">
                        {employeeData.company_name}
                      </p>
                    </div>

                    <div className="p-4 bg-white border-b-4 border-l-4 rounded-lg  shadow-[0_0px_15px_1px_rgba(0,0,0,0.3)] border-primary">
                      <h2 className="mb-2 text-base font-semibold lg:text-lg">
                        Directorate
                      </h2>
                      <p className="text-sm lg:text-base">
                        {employeeData.directorate_name}
                      </p>
                    </div>
                    <div className="p-4 bg-white border-b-4 border-l-4 rounded-lg  shadow-[0_0px_15px_1px_rgba(0,0,0,0.3)] border-primary">
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
                  <div className="w-full my-6 bg-white rounded-t-lg shadow-xl">
                    <div className="rounded-t-lg bg-primary">
                      <div className="w-full px-4 py-2 text-left border-b-2">
                        <h2 className="text-lg font-medium text-white">
                          Secondary Information
                        </h2>
                      </div>
                    </div>

                    {employeeData.additional_position.length !== 0 ? (
                      <div className="flex flex-wrap w-full">
                        {employeeData.additional_position.map(
                          (position: PositionType, index: number) => (
                            <div
                              key={index}
                              className="flex items-center w-full px-4 py-2 border-b"
                            >
                              <div className="relative inline-flex items-center w-5 cursor-pointer">
                                <button
                                  id={`dropdown-button-${index}`}
                                  className="inline-flex items-center text-sm font-medium rounded-lg hover:text-center"
                                  role="button"
                                  aria-label="Dropdown button"
                                  onClick={() => toggleDropdown(index)}
                                >
                                  <ThreeDotIcon className="w-5 h-5" />
                                </button>
                                {activeDropdown === index && (
                                  <div
                                    className={`absolute left-0 z-10 ml-8 bg-white divide-y rounded shadow-2xl w-44 ${
                                      index === employeeData.length - 1
                                        ? 'mb-20'
                                        : ''
                                    }`}
                                  >
                                    <ul className="text-sm">
                                      <li>
                                        <Link
                                          to={`/employee/detail/eligibles/${employeeId}/${position.id_additional_position}/edit`}
                                          type="button"
                                          className="flex items-center w-full px-4 py-[9px] duration-200 hover:text-white hover:bg-primary"
                                        >
                                          <EditIcon className="w-4 h-4 mr-2" />
                                          Edit
                                        </Link>
                                      </li>
                                      <li>
                                        <Link
                                          to={`/employee/detail/eligibles/${employeeId}/${position.id_additional_position}`}
                                          type="button"
                                          className="flex items-center w-full px-4 py-[9px] duration-200 hover: hover:text-white hover:bg-primary"
                                          onClick={handleClickDetail}
                                        >
                                          <DetailIcon className="w-4 h-4 mr-2" />
                                          Detail
                                        </Link>
                                      </li>

                                      <li>
                                        <DeleteModal
                                          isOpen={isDeleteModalOpen}
                                          onClose={() =>
                                            setIsDeleteModalOpen(false)
                                          }
                                          onDelete={confirmDelete}
                                        />

                                        <button
                                          onClick={() =>
                                            handleDeleteEligibles(
                                              position.employee_detail_id
                                            )
                                          } // Replace employeeData.id with the actual ID of the item
                                          className="flex items-center w-full px-4 py-[9px] text-red-500 duration-200 hover: hover:text-white hover:bg-red-800"
                                        >
                                          <TrashIcon className="w-4 h-4 mr-2" />
                                          Delete
                                        </button>
                                      </li>
                                    </ul>
                                  </div>
                                )}
                              </div>
                              <div className="w-full px-2 py-2 ml-2 duration-200 rounded-md ">
                                {/* <Link
                                  to={`/employee/detail/eligibles/${employeeId}/${position.id_additional_position}`}
                                ></Link> */}
                                <p className="text-base ">
                                  <span className="">
                                    {position.position_name}
                                  </span>
                                </p>
                              </div>
                            </div>
                          )
                        )}
                      </div>
                    ) : (
                      <div className="px-4 py-5 text-center bg-zinc-300">
                        No other positions available
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

export default EligiblesCard;
