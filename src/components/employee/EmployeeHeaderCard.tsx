// Library & Package Import
import { useState, useEffect } from 'react';

// Assets Import
import { SearchIcon, ArrowButtonIcon, PlusIcon } from '../../assets/icons/icon';

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
                    <SearchIcon className="w-5 h-5 " />
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
                <PlusIcon className="h-3.5 w-3.5 mr-2" />
                Add Employee
              </button>
              <div className="relative flex items-center w-full space-x-3 md:w-auto">
                <div className="relative inline-block">
                  <button
                    onClick={toggleFilterDropdown}
                    className="flex items-center justify-center w-full px-4 py-2 text-sm duration-300 bg-white rounded-lg md:w-auto focus:outline-none hover:text-primary-700 focus:z-10 focus:ring-4 hover:text-black hover:bg-secondary"
                    type="button"
                  >
                    <ArrowButtonIcon className="-ml-1 mr-1.5 w-5 h-5" />
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
