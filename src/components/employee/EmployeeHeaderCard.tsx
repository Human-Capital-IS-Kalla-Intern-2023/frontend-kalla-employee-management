import { useState, useEffect } from 'react';

const EmployeeHeaderCard = () => {
  const [isFilterDropdownOpen, setIsFilterDropdownOpen] = useState(false);

  const toggleFilterDropdown = () => {
    setIsFilterDropdownOpen(!isFilterDropdownOpen);
  };

  const closeFilterDropdown = () => {
    setIsFilterDropdownOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (isFilterDropdownOpen) {
        closeFilterDropdown();
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isFilterDropdownOpen]);

  return (
    <section className="py-3 antialiased sm:py-5">
      <div className="max-w-screen-xl px-4 mx-auto">
        <div className="relative overflow-hidden bg-white shadow-md sm:rounded-lg">
          <div className="flex flex-col items-center justify-between p-4 space-y-3 rounded-md shadow-md md:flex-row md:space-y-0 md:space-x-4 bg-primary">
            <div className="w-full md:w-1/2">
              <form className="flex items-center">
                <label htmlFor="simple-search" className="sr-only">
                  Search
                </label>
                <div className="relative w-full">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg
                      aria-hidden="true"
                      className="w-5 h-5 "
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <input
                    type="text"
                    className="block w-full p-2 pl-10 text-sm text-black border rounded-lg "
                    placeholder="Search"
                  />
                </div>
              </form>
            </div>
            <div className="flex flex-col items-stretch justify-end flex-shrink-0 w-full space-y-2 md:w-auto md:flex-row md:space-y-0 md:items-center md:space-x-3">
              <button
                type="button"
                className="flex items-center justify-center px-4 py-2 text-sm font-medium duration-300 rounded-lg text-pureBlack bg-secondary focus:ring-4 bg-primary-600 hover:bg-white"
              >
                <svg
                  className="h-3.5 w-3.5 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    clipRule="evenodd"
                    fillRule="evenodd"
                    d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                  />
                </svg>
                Add Employee
              </button>
              <div className="relative flex items-center w-full space-x-3 md:w-auto">
                <div className="relative inline-block">
                  <button
                    onClick={toggleFilterDropdown}
                    className="flex items-center justify-center w-full px-4 py-2 text-sm duration-300 bg-white rounded-lg md:w-auto focus:outline-none hover:text-primary-700 focus:z-10 focus:ring-4 hover:text-black hover:bg-secondary"
                    type="button"
                  >
                    <svg
                      className="-ml-1 mr-1.5 w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                    >
                      <path
                        clipRule="evenodd"
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      />
                    </svg>
                    Filters
                  </button>
                  <div
                    id="actionsDropdown"
                    style={{ marginRight: '2rem' }}
                    className={`${
                      isFilterDropdownOpen ? '' : 'hidden'
                    }  z-10 w-44 bg-white rounded divide-y fixed right-0 mt-2  shadow `}
                  >
                    <ul
                      className="space-y-2 text-sm"
                      aria-labelledby="filterDropdownButton"
                    >
                      <li className="flex items-center px-2 py-1">
                        <input
                          id="nama"
                          type="checkbox"
                          value=""
                          className="w-4 h-4 rounded focus:ring-2"
                        />
                        <label
                          htmlFor="nama"
                          className="ml-2 text-sm font-medium"
                        >
                          Nama
                        </label>
                      </li>
                      <li className="flex items-center px-2 py-1">
                        <input
                          id="jabatan_utama"
                          type="checkbox"
                          value=""
                          className="w-4 h-4 rounded focus:ring-2"
                        />
                        <label
                          htmlFor="jabatan_utama"
                          className="ml-2 text-sm font-medium"
                        >
                          Jabatan Utama
                        </label>
                      </li>
                      <li className="flex items-center px-2 py-1">
                        <input
                          id="jabatan_lainnya"
                          type="checkbox"
                          value=""
                          className="w-4 h-4 rounded focus:ring-2"
                        />
                        <label
                          htmlFor="jabatan_lainnya"
                          className="ml-2 text-sm font-medium"
                        >
                          Jabatan Lainnya
                        </label>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmployeeHeaderCard;
