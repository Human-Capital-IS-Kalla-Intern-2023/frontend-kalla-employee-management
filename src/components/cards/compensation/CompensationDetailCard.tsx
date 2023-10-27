import { ReponsiveSidebarIcon, RefreshIcon } from '../../../assets/icons/icon';
import { SearchIcon } from '../../../assets/icons/icon';
import { Link } from 'react-router-dom';
import profileImg112 from '../../../assets/img/profile/profileImg-112.webp';
import HeaderCompensationCard from './HeaderCompensationCard';

const CompensationDetailCard = ({ compensationData }: any) => {
  return (
    <div className="antialiased lg:pb-4 lg:p-0 sm:py-2 overlay">
      <HeaderCompensationCard text={'Detail'} link={`/salary/compensation`} />
      {/* Back Button Detail Section End */}

      {/* Info Section Start */}
      <section className="flex flex-col border rounded-md border-slate-300 mx-7">
        {/* Baris 1 */}
        <div className="flex items-center justify-between p-4">
          <div>
            {compensationData && (
              <>
                <p className="text-lg font-bold">
                  {compensationData.compensation_name}
                </p>
                <p className="uppercase text-gray">
                  {compensationData.company_name}
                </p>
              </>
            )}
          </div>
          <div className="flex items-center space-x-4">
            <button className="flex items-center px-4 py-2 space-x-2 bg-transparent border-transparent rounded text-primary">
              <ReponsiveSidebarIcon className="w-6 h-5 text-primary" />
              <span className="ml-2 uppercase text-[17px]">Menu</span>
            </button>
            <button className="flex items-center px-4 py-2 space-x-2 bg-transparent border rounded text-primary border-primary">
              <span>Import Additional Data</span>
            </button>
          </div>
        </div>

        {/* Baris 2 */}
        <div className="flex items-center justify-between p-4 border-t border-slate-300">
          <div className="flex space-x-">
            <div>
              {compensationData && (
                <>
                  <p className="text-base font-normal text-grayBlack">
                    Regulation
                  </p>
                  <p className="text-[17px] text-black font-medium">
                    {compensationData.salary_name}
                  </p>
                </>
              )}
            </div>
            <div className="ml-8">
              {compensationData && (
                <>
                  <p className="text-base font-normal text-grayBlack">Period</p>
                  <p className="text-[17px] text-black font-medium">
                    {compensationData.month} {compensationData.year}
                  </p>
                </>
              )}
            </div>
          </div>
          <div className="flex space-x-2">
            {/* <div className="px-4 py-2 text-sm rounded text-grayBlack">
              Generating
            </div>
            <div className="px-4 py-2 text-sm rounded text-grayBlack">
              Calculating
            </div>
            <div className="px-4 py-2 text-sm rounded text-grayBlack">
              Finishing
            </div> */}
          </div>
        </div>
      </section>
      {/* Info Section End */}

      {/* Employee List Section Start */}
      <section className="flex flex-col border rounded-t-md mt-7 border-slate-300 mx-7">
        <div className="flex items-center justify-between p-4">
          <div>
            <p className="text-lg font-bold">Employees</p>
          </div>
          <div className="flex items-center space-x-1">
            <div className="flex items-center px-4 py-2 bg-transparent border-transparent rounded text-primary">
              <button
                className="ml-2 uppercase text-base px-2 py-[7px] rounded-full text-black bg-[#d1d5db] focus:outline-none"
                disabled
              >
                Draft
              </button>
            </div>
            <button className="flex items-center px-4 py-2 bg-transparent border rounded text-primary border-primary">
              <span>Recapitulation</span>
            </button>
          </div>
        </div>
      </section>

      {/* Tabel List Employee Start */}
      <section className="border-b rounded-b-md mx-7 border-slate-300 border-t-none border-x">
        <div className="w-full mt-0">
          {/* Search Employee Start */}
          <form className="flex items-center pt-3 ml-4 lg:w-2/5">
            <label htmlFor="simple-search" className="sr-only">
              Search
            </label>
            <div className="relative w-full">
              <input
                type="text"
                className="block w-full p-2 text-black border rounded-lg text-md"
                placeholder="Search"
              />

              <button
                className="absolute inset-y-0 right-0 flex items-center px-4 duration-300 border rounded-none rounded-r-lg bg-secondary hover:bg-gray hover:text-white hover:border-gray"
                type="submit"
                aria-label="Search Data"
              >
                <SearchIcon className="w-[21px] h-[21px] cursor-pointer" />
              </button>
            </div>
            <button className="flex items-center justify-center ml-6 text-black">
              <RefreshIcon className="w-6 h-6 mr-2" />
              Refresh
            </button>
          </form>
          {/* Search Employee End */}

          <table className="w-full mt-6">
            <thead className="w-full text-left">
              <tr className="border-b border-slate-300">
                <th className="w-2/4 py-4 pl-6 pr-2 text-lg font-semibold">
                  FULL NAME
                </th>
                <th className="w-1/4 p-2 text-lg font-semibold">NIP</th>
                <th className="w-1/4 p-2 text-lg font-semibold">POSITION</th>
              </tr>
            </thead>
            <tbody>
              {compensationData &&
              compensationData.employee_compensations?.length > 0 ? (
                compensationData.employee_compensations.map(
                  (employee: any, index: any) => (
                    <tr
                      key={index}
                      className="border-b border-slate-300 hover:bg-slate-200"
                    >
                      <td className="w-2/4 py-4 pl-6 pr-2 ">
                        <Link to={`/salary/compensation/detail/people`}>
                          <div className="flex items-center ">
                            <img
                              src={profileImg112}
                              alt="User"
                              className="w-12 h-12 p-1 mr-2 rounded-full shadow-md"
                            />
                            <div>
                              <div className="text-[17px] text-primary uppercase">
                                {employee.fullname}
                              </div>
                              <div className="text-[15px] uppercase">
                                {employee.position_name}
                              </div>
                            </div>
                          </div>
                        </Link>
                      </td>
                      <td className="w-1/4 p-2 text-[17px] ">{employee.nip}</td>
                      <td className="w-1/4 p-2 text-[17px]">
                        {employee.position_name}
                      </td>
                    </tr>
                  )
                )
              ) : (
                <tr>
                  <td colSpan={3} className="px-4 py-4 text-center bg-zinc-300">
                    No employee data available.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </section>
      {/* Tabel List Employee Start */}
      {/* Tabel List Employee Start */}

      {/* Employee List Section End */}
    </div>
  );
};

export default CompensationDetailCard;
