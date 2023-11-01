import profileImg160 from '../../../assets/img/profile/profileimg-160.webp';
import HeaderCompensationCard from './HeaderCompensationCard';
import { ArrowButtonIcon } from '../../../assets/icons/icon';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import PaySlipModal from '../../modals/compensation/PaySlipModal';

const CompoensationPeopleCard = ({ compensationEmployeeData }: any) => {
  const [isDropdownPaySlip, setIsDropdownPaySlip] = useState(false);
  const [isDropdownPosition, setIsDropdownPosition] = useState(false);
  const [isFixedPayVisible, setIsFixedPayVisible] = useState(true);
  const [isDeductionVisible, setIsDeductionVisible] = useState(true);
  const [isPaySlipVisible, setIsPaySlipVisible] = useState(false);

  const { employeeCompensationId } = useParams();

  const toggleFixedPayVisibility = () => {
    setIsFixedPayVisible(!isFixedPayVisible);
  };

  const toggleDeductionVisibility = () => {
    setIsDeductionVisible(!isDeductionVisible);
  };

  const togglePaySlipVisibility = () => {
    setIsPaySlipVisible(!isPaySlipVisible);
  };

  const toggleHidePaySlipVisibility = () => {
    setIsPaySlipVisible(false);
  };

  const handleManageClick = () => {
    setIsDropdownPaySlip(!isDropdownPaySlip);
  };

  const [dropdownWidth, setDropdownWidth] = useState(0);

  const handlePositionClick = () => {
    setIsDropdownPosition(!isDropdownPosition);
    // Measure the width of the position text
    const positionTextWidth = document
      .querySelector('.position-text')
      ?.getBoundingClientRect().width;
    if (positionTextWidth) {
      setDropdownWidth(positionTextWidth);
    }
  };
  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname.includes(`/payslip`)) {
      setIsPaySlipVisible(true);
    }
  }, [pathname]);
  return (
    <>
      <div className="">
        <HeaderCompensationCard
          text={`${compensationEmployeeData.employee_compensation_name}`}
          link={`/salary/compensation/detail/${compensationEmployeeData.compensation_id}
        `}
        />

        <div className="pt-6 pb-4 mx-8 overflow-x-auto rounded-md bg-third ">
          <div className="flex justify-end mb-6 ">
            <div className="px-[13px] py-1 mr-4 bg-transparent border rounded-md border-primary">
              <button
                className="flex items-center justify-center text-center"
                onClick={handleManageClick}
              >
                <p className="text-base text-center uppercase lg:text-[17px] text-primary">
                  Pay Slip
                </p>
                <ArrowButtonIcon className="w-6 h-8 ml-3 text-center" />
              </button>

              {isDropdownPaySlip && (
                <div className="absolute  bg-white rounded-b-lg mt-[3px] border border-primary right-[149px] z-10 duration-200">
                  <Link to={'payslip'}>
                    <button
                      className="block  pl-[13px] px-[65px]  py-3 duration-300 rounded-b-lg text-sm w-full items-start text-left hover:text-white  lg:text-[17px] uppercase hover:bg-primary"
                      aria-label="Add Eligibles"
                      onClick={togglePaySlipVisibility}
                    >
                      Show
                    </button>
                  </Link>
                </div>
              )}

              {isPaySlipVisible && (
                <div className="fixed inset-0 flex items-center justify-center z-[1000] bg-black bg-opacity-50">
                  <PaySlipModal onClose={toggleHidePaySlipVisibility} />
                </div>
              )}
            </div>
            <div>
              <Link
                to={`/salary/compensation/detail/people/${employeeCompensationId}/edit`}
              >
                <button className="px-4 py-2 mr-8 text-white  lg:text-[17px] uppercase duration-300 border rounded-md border-primary bg-primary hover:bg-gray">
                  Edit
                </button>
              </Link>
            </div>
          </div>
          <img
            src={profileImg160}
            alt={`Image Profile ${compensationEmployeeData.fullname}`}
            className="mx-auto rounded-2xl shadow-allSideLow"
            width={160}
            height={160}
          />

          <h2 className="mt-4 font-semibold text-center uppercase text-md sm:text-md md:text-lg lg:text-[22px]">
            {compensationEmployeeData.fullname}
          </h2>
          <p className="pt-2 text-base italic font-medium text-center lg:text-md">
            {compensationEmployeeData.nip}
          </p>
          <div className="relative flex items-center justify-center mt-2 text-center">
            <p
              className={`pt-2 ml-5 text-base font-medium text-center border z-10 p-2  rounded-t-lg uppercase lg:text-lg text-primary position-text ${
                isDropdownPosition ? ' border-primary ' : 'border-transparent'
              }`}
            >
              {compensationEmployeeData.position_name}
            </p>
            <button onClick={handlePositionClick} className="relative ml-1">
              <ArrowButtonIcon className={`w-6 h-8 text-center  `} />
              {isDropdownPosition && (
                <div
                  className="absolute right-0 z-5 mt-[6px] mr-[28px] duration-200 bg-white border rounded-t-none rounded-lg border-primary"
                  style={{ width: `${dropdownWidth}px ` }}
                >
                  <ul className="">
                    <Link to={`/salary/compensation/detail/position`}>
                      <li className="px-4 py-3 duration-300 rounded-lg rounded-t-none shadow-lg cursor-pointer hover:bg-primary hover:text-white">
                        DETAIL
                      </li>
                    </Link>
                  </ul>
                </div>
              )}
            </button>
          </div>
          <div className="px-1 lg:px-10 lg:mx-2 lg:mt-10">
            <div className="my-4 rounded-t-lg">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-1 lg:grid-cols-2">
                <div className="p-4 bg-white border-b-4 border-l-4 border-transparent rounded-lg shadow-allSideLow">
                  <h2 className="mb-1 text-[17px] font-semibold uppercase text-grayBlack lg:mb-2 sm:text-md lg:text-md">
                    Fixed Pay
                  </h2>
                  <p className="text-base md:text-base lg:text-md">
                    {compensationEmployeeData.fixed_pay}
                  </p>
                </div>

                <div className="p-4 bg-white border-b-4 border-l-4 border-transparent rounded-lg shadow-allSideLow">
                  <h2 className="mb-1 text-[17px] font-semibold uppercase text-grayBlack lg:mb-2 sm:text-md lg:text-md">
                    Deduction
                  </h2>
                  <p className="text-base md:text-base lg:text-md">
                    {compensationEmployeeData.deductions}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="px-1 lg:px-10 lg:mx-2 lg:mt-7">
            <div className="py-2 transition-all duration-300 bg-white rounded-lg shadow-allSideLow">
              <div className="flex justify-between px-4 py-2">
                <div className="flex items-center">
                  <h2 className="text-[17px] font-semibold">Fixed Pay</h2>
                </div>
                <div className="flex items-center">
                  <button onClick={toggleFixedPayVisibility}>
                    <ArrowButtonIcon className="w-6 h-6" />
                  </button>
                </div>
              </div>
              <div
                className={`mx-11 ${isFixedPayVisible ? 'block' : 'hidden'}`}
              >
                <table className="w-full">
                  <thead>
                    <tr>
                      <th className="w-9/12 text-sm"></th>
                      <th className="w-1/12 text-sm"></th>
                      <th className="w-2/12 text-sm text-end"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {compensationEmployeeData.salary_components
                      .filter(
                        (component: any) => component.type === 'fixed pay'
                      ) // Filter for fixed pay components
                      .map((component: any, index: any) => (
                        <tr key={index} className="border-b border-slate-300">
                          <td className="w-10/12 py-3 text-sm">
                            {component.component_name}
                          </td>
                          <td className="w-1/12 text-sm">Rp.</td>
                          <td className="w-1/12 text-sm font-semibold text-end">
                            {component.nominal}
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="px-1 lg:px-10 lg:mx-2 lg:mt-7">
            <div className="py-2 transition-all duration-300 bg-white rounded-lg shadow-allSideLow">
              <div className="flex justify-between px-4 py-2">
                <div className="flex items-center">
                  <h2 className="text-[17px] font-semibold">Deduction</h2>
                </div>
                <div className="flex items-center">
                  <button onClick={toggleDeductionVisibility}>
                    <ArrowButtonIcon className="w-6 h-6" />
                  </button>
                </div>
              </div>
              <div
                className={`mx-11 ${isDeductionVisible ? 'block' : 'hidden'}`}
              >
                <table className="w-full">
                  <thead>
                    <tr>
                      <th className="w-9/12 text-sm"></th>
                      <th className="w-1/12 text-sm"></th>
                      <th className="w-2/12 text-sm text-end"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {compensationEmployeeData.salary_components
                      .filter(
                        (component: any) => component.type === 'deductions'
                      ) // Filter for fdeduction components
                      .map((component: any, index: any) => (
                        <tr key={index} className="border-b border-slate-300">
                          <td className="w-10/12 py-3 text-sm">
                            {component.component_name}
                          </td>
                          <td className="w-1/12 text-sm">Rp.</td>
                          <td className="w-1/12 text-sm font-semibold text-end">
                            {component.nominal}
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CompoensationPeopleCard;
