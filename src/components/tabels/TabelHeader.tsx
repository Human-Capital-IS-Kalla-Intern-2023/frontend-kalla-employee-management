// Import Library & Package
import { useState, useEffect, useCallback } from 'react';
import AddModal from '../modals/AddModal';
import { Link, useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
// Import Assets
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
  const openModal = () => {
    setModalOpen(true);
  };

  const location = useLocation();

  const closeModal = useCallback(() => {
    setModalOpen(false);
    if (location.pathname.endsWith('/add')) {
      const newUrl = location.pathname.slice(0, -4);
      navigate(newUrl);
    }
  }, [location.pathname, navigate]);

  const handleOverlayClick = (e: any) => {
    if (e.target.classList.contains('overlay')) {
      closeModal();
    }
  };
  useEffect(() => {
    if (location.pathname.endsWith('/add')) {
      setModalOpen(true);
    }
  }, [location.pathname]);

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
  }, [closeModal, location.pathname, isFilterDropdownOpen]);

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
              <Link
                to="add"
                onClick={openModal}
                className="flex items-center justify-center px-4 py-2 mr-3 text-sm font-medium duration-300 rounded-lg text-pureBlack bg-secondary focus:ring-4 bg-primary-600 hover:bg-yellow"
              >
                <PlusIcon className="h-3.5 w-3.5 mr-2" />
                {addButtonText}
              </Link>

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
