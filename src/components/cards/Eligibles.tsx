import { useState } from "react";
import { ArrowButtonIcon, CloseButtonIcon } from "../../assets/icons/icon";
import profileImg from "../../assets/img/profileImg.webp";
import ReactLoading from "react-loading";
import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { WarningAlert } from "../alerts/CustomAlert";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
type EligiblesProps = {
  employeeData: any;
};

type PositionType = {
  position_name: string[];
  company_name: string;
  directorate_name: string;
  division_name: string;
  section_name: string;
};

const Eligibles = ({ employeeData }: EligiblesProps) => {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const { employeeId } = useParams();
  const { positionId } = useParams();

  const [isModalOpen, setIsModalOpen] = useState(false);
  // const [showWarningAlert, setShowWarningAlert] = useState(false);

  // const [selectedPosition, setSelectedPosition] = useState('');

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const navigate = useNavigate();

  const handleAddEligbles = () => {};

  const handleEditClick = () => {
    if (employeeData.salary_detail === null) {
      // Display the warning alert
      toast.error(
        `No salary component for ${employeeData.company_name} employee!`
      );
    } else {
      navigate(`/employee/detail/eligibles/edit/${employeeId}/${positionId}`);
    }
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

  const positions = [
    ...employeeData.additional_position.map((pos: any) => pos.position_name),
  ];
  return (
    <section className="antialiased overlay bg-slate-100">
      {/* Header Section Start */}
      <header className="flex items-center justify-between px-3 py-5 shadow-lg ">
        <h1 className="p-2 ml-2.5 text-lg font-medium border-b-2 border-primary ">
          Eligibles Employee Page
        </h1>
        <div className="text-sm font-medium ">
          <div className="">
            <div className="">
              {/* Button Manage untuk edit Eligible */}
              <button
                onClick={handleManageClick}
                className={`flex items-center justify-center px-6 py-2 text-sm font-medium duration-100 ${
                  isDropdownVisible ? "rounded-t-lg" : "rounded-lg"
                } text-pureBlack bg-secondary focus:outline-none bg-primary-600 hover:bg-gray hover:text-white`}
              >
                Manage
                <ArrowButtonIcon className="h-3.5 w-3.5 ml-1" />
              </button>
              {isDropdownVisible && (
                <div className="absolute px-1 py-1 bg-white rounded-b-lg top-12.5 border border-secondary right-3 z-50">
                  <button
                    className="block px-3 py-3 text-sm hover:text-white hover:bg-primary"
                    onClick={handleOpenModal}
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
      {/* Header Section End */}

      {employeeData.salary_detail === null && (
        <WarningAlert
          title="Warning"
          text={`There is no salary component at this employee's company.
          Add Salary First for "${employeeData.company_name}"`}
        />
      )}

      <ToastContainer />
      {/* Modal Add Eligibles Section Start */}
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
                  // onChange={(e) => setSelectedPosition(e.target.value)}
                  // value={positionOption}
                  // onChange={handlePositionChange}
                  className="block w-full px-3 py-2 mt-2 text-sm bg-white border rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
                >
                  <option value="" disabled>
                    Select position
                  </option>
                  {positions.map((pos: any, index: any) => (
                    <option key={index} value={pos}>
                      {pos}
                    </option>
                  ))}
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
                onClick={handleAddEligbles}
              >
                ADD
              </button>
            </div>
          </div>
        </div>
      )}
      {/* Modal Add Eligibles Section Start */}

      <div className="max-w-screen-xl px-4 pt-6 mx-auto">
        <div className="relative overflow-hidden ">
          <div className="px-3 pt-4 pb-4 overflow-x-auto">
            {/* card 1 */}
            <img src={profileImg} className="w-40 h-40 mx-auto rounded-2xl" />

            <h2 className="mt-4 text-2xl font-semibold text-center">
              {employeeData.fullname}
            </h2>
            <p className="mt-2 text-center font-lg">{employeeData.nip}</p>

            <div className="">
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
                    <div className="flex flex-wrap w-full">
                      <div className="flex items-center w-full px-4 py-3">
                        <div className="w-5/12">
                          <p className="text-base">Main Postion Name :</p>
                        </div>
                        <label className="relative inline-flex items-center w-7/12 cursor-pointer">
                          {employeeData.position_name}
                        </label>
                      </div>
                      {employeeData.type_bank && employeeData.account_number ? (
                        <div className="flex items-center w-full px-4 py-3">
                          <div className="w-5/12">
                            <p className="text-base"> Bank Account:</p>
                          </div>
                          <label className="relative inline-flex items-center w-7/12 cursor-pointer">
                            <div className="p-1 rounded-md bg-secondary">
                              {employeeData.type_bank} -{" "}
                              {employeeData.account_number}
                            </div>
                          </label>
                        </div>
                      ) : (
                        <div className="flex items-center w-full px-4 py-3">
                          <div className="w-5/12">
                            <p className="text-base"> Bank Account:</p>
                          </div>
                          <label className="relative inline-flex items-center w-7/12 cursor-pointer">
                            <div className="p-1 rounded-md bg-secondary">
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
                      {employeeData.salary_detail &&
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
                                    <p className="pt-2 pb-1 text-sm border-b">
                                      {item.is_status === 1 ? "Yes" : "No"}
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
                          No salary componets for{" "}
                          <span className="italic">
                            {employeeData.company_name}
                          </span>{" "}
                          , add
                          <Link to={`/salary/configures`}>
                            <span className="text-blue-700"> here</span>
                          </Link>
                          .
                        </td>
                      )}
                    </tbody>
                  </table>
                </div>
                {/* Tabel 2*/}

                {/* Tabel 3 */}
                <div className="">
                  <div className="my-4 bg-white rounded-lg shadow-xl ">
                    <table className="w-full p-5 table-auto">
                      <thead>
                        <tr className="bg-primary">
                          <th className="w-1/2 px-4 py-2 text-left border-b-2 rounded-tl-lg">
                            <h2 className="text-lg font-medium text-white">
                              Secondary Information
                            </h2>
                          </th>
                          <th className="w-1/2 px-4 py-2 text-right border-b-2 rounded-tr-lg"></th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          {/* Kolom 1 */}
                          <td className="px-4 py-1 text-left align-top ">
                            <div>
                              {employeeData.additional_position.map(
                                (position: PositionType, index: number) => (
                                  <tr key={index}>
                                    {/* Kolom 1 */}
                                    <div>
                                      <p className="pt-2 pb-1 text-base border-b">
                                        {position.position_name}
                                      </p>
                                    </div>

                                    {/* Kolom 2 */}
                                    {/* <td className="px-4 py-2 text-left align-top">
                                      <div>
                                        <h2 className="pt-2 text-lg font-medium">
                                          Division
                                        </h2>
                                        <p className="pb-1 text-base border-b">
                                          {position.division_name}
                                        </p>
                                      </div>
                                      <div>
                                        <h2 className="text-lg font-medium">
                                          Section
                                        </h2>
                                        <p className="pb-1 text-base border-b">
                                          {position.section_name}
                                        </p>
                                      </div>
                                    </td> */}
                                  </tr>
                                )
                              )}
                            </div>
                          </td>
                          {/* Kolom 2 */}
                          {/* <td className="px-4 py-2 text-left align-top">
                            <div>
                              <h2 className="text-base">
                                Functional Allowance
                              </h2>
                              <p className="pb-1 text-sm border-b pl-7">
                                Entitled
                              </p>
                            </div>
                          </td> */}
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                {/* Tabel 3 */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Eligibles;
