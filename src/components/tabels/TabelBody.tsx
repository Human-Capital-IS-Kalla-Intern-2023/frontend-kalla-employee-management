// Library & Package Import
import { useState, useEffect, useRef } from 'react';

// Assets Import
import {
  ThreeDotIcon,
  EditIcon,
  DetailIcon,
  TrashIcon,
} from '../../assets/icons/icon';

import EditModal from '../modals/EditModal';
import DeleteModal from '../modals/DeleteModal';
import DetailModal from '../modals/DetailModal';
interface ColCells {
  key: string;
  text: string;
}

interface InputField {
  id: string;
  label: string;
  name: string;
  type?: string;
}

interface TabelBodyProps {
  title: string;
  data?: any[];
  colCells: ColCells[];
  inputFields: InputField[];
  onSubmit: any;
}

const TabelBody: React.FC<TabelBodyProps> = ({
  title,
  data,
  colCells,
  inputFields,
  onSubmit,
}) => {
  const [activeDropdown, setActiveDropdown] = useState<number | null | boolean>(
    null
  );
  const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);
  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);
  const [selectedData] = useState(null);

  const handleDeleteClick = () => {
    setDeleteModalOpen(true);
  };

  const handleDeleteConfirm = () => {
    // Lakukan logika penghapusan di sini
    console.log('Delete Successful');
    setDeleteModalOpen(false);
  };
  const [modalOpen, setModalOpen] = useState(false);
  const [editId, setEditId] = useState<any>(null);

  const scrollRef = useRef(false);

  const toggleDropdown = (rowIndex: number) => {
    setActiveDropdown((prevIndex) =>
      prevIndex === rowIndex ? null : rowIndex
    );
  };

  const closeFilterDropdown = () => {
    setActiveDropdown(false);
  };

  const openModal = (id: any) => {
    setEditId(id);
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

  const openDetailModal = () => {
    setIsDetailModalOpen(true);
  };
  useEffect(() => {
    const handleScroll = () => {
      if (scrollRef.current) {
        closeFilterDropdown();
        scrollRef.current = false;
      }
    };
    const handleEscapeKey = (event: any) => {
      if (event.key === 'Escape') {
        closeModal();
      }
    };
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('keydown', handleEscapeKey);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('keydown', handleEscapeKey);
    };
  }
  );

  return (
    <section className="py-3 antialiased sm:py-5 overlay" onClick={handleOverlayClick}>
      <div className="max-w-screen-xl px-4 mx-auto">
        <div className="relative overflow-hidden bg-white shadow-custom sm:rounded-lg">
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="text-xs uppercase">
                <tr>
                  {colCells.map((cell, index) => (
                    <th key={index} scope="col" className="px-4 py-4">
                      {cell.text}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {data && Array.isArray(data) && data.length > 0 ? (
                  data.map((customCell: any, index: number) => (
                    <tr
                      className={`border-b ${
                        index === data.length - 1 ? 'border-none' : ''
                      } ${activeDropdown === index ? 'bg-slate-200' : ''}`}
                      key={index}
                    >
                      {colCells.map((cell, cellIndex) => (
                        <td
                          key={cellIndex}
                          className="px-4 py-3 font-medium text-black whitespace-nowrap"
                        >
                          {customCell[cell.key]}
                        </td>
                      ))}

                      <td
                        className="flex items-center justify-end px-4 py-3 "
                        onClick={handleOverlayClick}
                      >
                        <button
                          id={`dropdown-button-${index}`}
                          className="inline-flex items-center text-sm font-medium rounded-lg hover:text-center "
                          role="button"
                          aria-label="Dropdown button"
                          onClick={() => toggleDropdown(index)}
                        >
                          <ThreeDotIcon className="w-5 h-5" />
                        </button>
                        {activeDropdown === index && (
                          <div
                            className={`absolute right-0 z-10 mr-10 bg-white divide-y rounded shadow-2xl w-44 ${
                              index === data.length - 1 ? 'mb-20' : ''
                            }`}
                          >
                            <ul className="py-1 text-sm">
                              <li>
                                <button
                                  onClick={() => openModal(customCell.id)}
                                  type="button"
                                  className="flex items-center w-full px-4 py-2 duration-200 hover: hover:text-white hover:bg-primary"
                                >
                                  <EditIcon className="w-4 h-4 mr-2" />
                                  Edit
                                </button>
                                {modalOpen && (
                                  <EditModal
                                    isOpen={modalOpen}
                                    onClose={closeModal}
                                    title={title}
                                    inputFields={inputFields}
                                    onSubmit={onSubmit}
                                    idToEdit={editId}
                                  />
                                )}
                              </li>
                              <li>
                                <button
                                  type="button"
                                  onClick={openDetailModal}
                                  className="flex items-center w-full px-4 py-2 duration-200 hover: hover:text-white hover:bg-primary"
                                >
                                  <DetailIcon className="w-4 h-4 mr-2" />
                                  Detail
                                </button>
                                <DetailModal
                                  isOpen={isDetailModalOpen}
                                  onClose={() => setIsDetailModalOpen(false)}
                                  data={selectedData}
                                />  
                              </li>
                              <li>
                                <button
                                  type="button"
                                  onClick={handleDeleteClick}
                                  className="flex items-center w-full px-4 py-2 text-red-500 duration-200 hover: hover:text-white hover:bg-red-500"
                                >
                                  <TrashIcon className="w-4 h-4 mr-2" />
                                  Delete
                                  <DeleteModal
                                  isOpen={isDeleteModalOpen}
                                  onClose={() => setDeleteModalOpen(false)}
                                  onDelete={handleDeleteConfirm}
                                  />
                                </button>
                              </li>
                            </ul>
                          </div>
                        )}
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={colCells.length}> </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TabelBody;
