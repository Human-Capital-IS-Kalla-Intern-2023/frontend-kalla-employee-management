// Library & Package Import
import { useState, useEffect } from 'react';
import AddModal from '../modals/AddModal';

// Assets Import
import { SearchIcon, ArrowButtonIcon, PlusIcon } from '../../assets/icons/icon';

interface FilterOption {
  id: string;
  label: string;
}

interface InputField {
  id: string;
  label: string;
  name: string;
  type?: string;
}
interface TabelHeaderProps {
  addButtonText: string;
  title: string;
  filterOptions: FilterOption[];
  inputFields: InputField[];
}
const TabelHeader: React.FC<TabelHeaderProps> = ({
  addButtonText,
  title,
  filterOptions,
  inputFields,
}) => {
  const [isFilterDropdownOpen, setIsFilterDropdownOpen] = useState(false);

  const toggleFilterDropdown = () => {
    setIsFilterDropdownOpen(!isFilterDropdownOpen);
  };

  const closeFilterDropdown = () => {
    setIsFilterDropdownOpen(false);
  };
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const handleOverlayClick = (e: any) => {
    if (e.target.classList.contains('overlay')) {
      closeModal();
    }
  };

  useEffect(() => {
    const handleEscapeKey = (event: any) => {
      if (event.key === 'Escape') {
        closeModal();
      }
    };

    const handleScroll = () => {
      if (isFilterDropdownOpen) {
        closeFilterDropdown();
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('keydown', handleEscapeKey);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('keydown', handleEscapeKey);
    };
  }, [isFilterDropdownOpen]);

  return (
    <section
      className="py-3 antialiased sm:py-5 overlay"
      onClick={handleOverlayClick}
    >
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
                onClick={openModal}
                type="button"
                className="flex items-center justify-center px-4 py-2 text-sm font-medium duration-300 rounded-lg text-pureBlack bg-secondary focus:ring-4 bg-primary-600 hover:bg-white"
              >
                <PlusIcon className="h-3.5 w-3.5 mr-2" />
                {addButtonText}
                <AddModal
                  isOpen={modalOpen}
                  onClose={closeModal}
                  title={title}
                  inputFields={inputFields}
                />
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
                      {filterOptions.map((option: FilterOption) => (
                        <li
                          className="flex items-center px-2 py-1"
                          key={option.id}
                        >
                          <input
                            id={option.id}
                            type="checkbox"
                            value=""
                            className="w-4 h-4 rounded focus:ring-2"
                          />
                          <label
                            htmlFor={option.id}
                            className="ml-2 text-sm font-medium"
                          >
                            {option.label}
                          </label>
                        </li>
                      ))}
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

export default TabelHeader;
