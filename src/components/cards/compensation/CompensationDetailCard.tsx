import {
  LeftArrowIcon2,
  ReponsiveSidebarIcon,
  RefreshIcon,
} from '../../../assets/icons/icon';
import { SearchIcon } from '../../../assets/icons/icon';
import { Link } from 'react-router-dom';
import profileImg112 from '../../../assets/img/profile/profileImg-112.webp';

const CompensationDetailCard = () => {
  return (
    <div className="antialiased lg:pb-4 lg:p-0 sm:py-2 overlay">
      <header className="flex items-center justify-between p-2 pr-8 sm:p-5">
        <h1 className="p-2 text-base font-medium border-b-2 sm:text-lg md:text-xl lg:text-[20px] border-primary">
          Compensation & Benefits
        </h1>
      </header>

      {/* Back Button Detail Section Start */}
      <section className="flex items-center justify-start m-5 mt-5">
        <Link to={`/salary/compensation`}>
          <LeftArrowIcon2 className="h-10 ml-2 mr-4 duration-200 w-9 hover:text-primary hover:scale-110" />
        </Link>
        <span className="text-lg">Details</span>
      </section>
      {/* Back Button Detail Section End */}

      {/* Info Section Start */}
      <section className="flex flex-col border rounded-md border-slate-300 mx-7">
        {/* Baris 1 */}
        <div className="flex items-center justify-between p-4">
          <div>
            <p className="text-lg font-bold">Company - Month Year</p>
            <p className="uppercase text-gray">Company Full Name</p>
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
              <p className="text-base text-grayBlack">Regulation</p>
              <p className="text-[17px] text-grayBlack">Salary Name</p>
            </div>
            <div className="ml-8">
              <p className="text-base text-grayBlack">Period</p>
              <p className="text-[17px] text-grayBlack">Month Year</p>
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
                <th className="w-1/4 p-2 text-lg font-semibold">NIK</th>
                <th className="w-1/4 p-2 text-lg font-semibold">POSITION</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-slate-300">
                <td className="w-2/4 py-4 pl-6 pr-2">
                  <Link to={`/salary/compensation/detail/people`}>
                    <div className="flex items-center ">
                      <img
                        src={profileImg112}
                        alt="User"
                        className="w-12 h-12 p-1 mr-2 rounded-full shadow-md"
                      />
                      <div>
                        <div className="text-[17px] text-primary uppercase">
                          Muh Thoriq AS
                        </div>
                        <div className="text-[15px] uppercase">
                          Position Name
                        </div>
                      </div>
                    </div>
                  </Link>
                </td>
                <td className="w-1/4 p-2 text-[17px] ">123456789</td>
                <td className="w-1/4 p-2 text-[17px]">Manager</td>
              </tr>

              <tr className="border-b border-slate-300">
                <td className="w-2/4 py-4 pl-6 pr-2">
                  <Link to={`/salary/compensation/detail/people`}>
                    <div className="flex items-center ">
                      <img
                        src={profileImg112}
                        alt="User"
                        className="w-12 h-12 p-1 mr-2 rounded-full shadow-md"
                      />
                      <div>
                        <div className="text-[17px] text-primary uppercase">
                          Muh Thoriq AS
                        </div>
                        <div className="text-[15px] uppercase">
                          Position Name
                        </div>
                      </div>
                    </div>
                  </Link>
                </td>
                <td className="w-1/4 p-2 text-[17px] ">123456789</td>
                <td className="w-1/4 p-2 text-[17px]">Manager</td>
              </tr>

              <tr className="border-b border-slate-300">
                <td className="w-2/4 py-4 pl-6 pr-2">
                  <Link to={`/salary/compensation/detail/people`}>
                    <div className="flex items-center ">
                      <img
                        src={profileImg112}
                        alt="User"
                        className="w-12 h-12 p-1 mr-2 rounded-full shadow-md"
                      />
                      <div>
                        <div className="text-[17px] text-primary uppercase">
                          Muh Thoriq AS
                        </div>
                        <div className="text-[15px] uppercase">
                          Position Name
                        </div>
                      </div>
                    </div>
                  </Link>
                </td>
                <td className="w-1/4 p-2 text-[17px] ">123456789</td>
                <td className="w-1/4 p-2 text-[17px]">Manager</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
      {/* Tabel List Employee Start */}

      {/* Employee List Section End */}
    </div>
  );
};

export default CompensationDetailCard;
