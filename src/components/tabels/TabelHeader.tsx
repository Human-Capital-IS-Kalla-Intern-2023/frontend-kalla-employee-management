// Import Library & Package
import { useState, useEffect, useCallback } from 'react';
import AddModal from '../modals/AddModal';
import { useNavigate, useLocation } from 'react-router-dom';

// Assets Import
import { SearchIcon, PlusIcon } from '../../assets/icons/icon';

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
  onSubmit: any;
}

const TabelHeader: React.FC<TabelHeaderProps> = ({
  addButtonText,
  title,
  inputFields,
  onSubmit,
}) => {
  const [isFilterDropdownOpen, setIsFilterDropdownOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const closeFilterDropdown = () => {
    setIsFilterDropdownOpen(false);
  };

  const navigate = useNavigate();
  const location = useLocation();

  const openModal = () => {
    setModalOpen(true);
    navigate({ search: '?add=true' });
  };

  const closeModal = useCallback(() => {
    setModalOpen(false);
    navigate({ search: '' });
  }, [navigate]);

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const isAddParam = searchParams.get('add');

    if (isAddParam === 'true') {
      setModalOpen(true);
    }
  }, [location.search, modalOpen]);

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
  }, [location.search, modalOpen, closeModal, isFilterDropdownOpen]);

  return (
    <section
      className="py-3 antialiased sm:py-3 overlay"
      onClick={handleOverlayClick}
    >
      <div className="max-w-screen-xl px-4 mx-auto">
        <div className="relative overflow-hidden bg-white shadow-md sm:rounded-lg">
          <div className="flex flex-col items-center justify-between p-3 space-y-3 rounded-md shadow-md md:flex-row md:space-y-0 md:space-x-4 bg-primary">
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
            <div className="flex flex-col items-stretch justify-end flex-shrink-0 w-full space-y-2 md:w-auto md:flex-row md:space-y-0 md:items-center">
              <button
                onClick={openModal}
                type="button"
                className="flex items-center justify-center px-4 py-2 mr-3 text-sm font-medium duration-300 rounded-lg text-pureBlack bg-secondary focus:ring-4 bg-primary-600 hover:bg-white"
              >
                <PlusIcon className="h-3.5 w-3.5 mr-2" />
                {addButtonText}
              </button>
              {modalOpen && (
                <AddModal
                  isOpen={modalOpen}
                  onClose={closeModal}
                  title={title}
                  inputFields={inputFields}
                  onSubmit={onSubmit}
                />
              )}

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TabelHeader;
