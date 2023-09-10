// Library & Package Import
import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

// Import Components
import EditModal from '../modals/EditModal';
import DeleteModal from '../modals/DeleteModal';
import DetailModal from '../modals/DetailModal';

// Import Assets
import {
  ThreeDotIcon,
  EditIcon,
  DetailIcon,
  TrashIcon,
} from '../../assets/icons/icon';

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
  detailedData?: any | null;
  fetchDetailedData?: (id: any) => void;
  onSubmit: (formData: any, id: any) => void;
  onDelete: (id: any) => void;
}

const TabelBody: React.FC<TabelBodyProps> = ({
  title,
  data,
  colCells,
  inputFields,
  onSubmit,
  onDelete,
  detailedData,
  fetchDetailedData,
}) => {
  const [activeDropdown, setActiveDropdown] = useState<number | null | boolean>(
    null
  );

  const [editId, setEditId] = useState<any>(null);

  const scrollRef = useRef(false);

  const toggleDropdown = (idOrNo: number) => {
    setActiveDropdown((prevIdOrNo) => (prevIdOrNo === idOrNo ? null : idOrNo));
  };

  const [editModalOpen, setEditModalOpen] = useState(false);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [detailModalOpen, setIsDetailModalOpen] = useState(false);
  const [deleteId, setDeleteId] = useState<number | null>(null);
<<<<<<< HEAD

=======
  const [editedData, setEditedData] = useState<any>({});
>>>>>>> 62b6bb9c673086ce46fbc33e273979c1c346b789

  const navigate = useNavigate();
  const location = useLocation();

  const openEditModal = async (id: number) => {
    console.log(data);
    navigate({ search: `edit=${id}` });

    if (data) {
      const dataToEdit = await data.find((item: any) => item.id === id);
      console.log(dataToEdit);
      if (dataToEdit) {
        console.log(editedData);
        console.log(editModalOpen);
        setEditId(id);
        setEditedData(dataToEdit);
        setEditModalOpen(true);
      }
    }
  };

  const closeEditModal = useCallback(() => {
    setEditModalOpen(false);
    navigate({ search: '' });
  }, [navigate]);

  const openDeleteModal = useCallback(
    (id: number) => {
      setDeleteId(id);
      setDeleteModalOpen(true);
      navigate({ search: `delete=${id}` });
    },
    [navigate]
  );

  const closeDeleteModal = useCallback(() => {
    setDeleteId(null);
    setDeleteModalOpen(false);
    navigate({ search: '' });
  }, [navigate]);

  const closeFilterDropdown = () => {
    setActiveDropdown(false);
  };

  const openDetailModal = useCallback(
    async (id: any) => {
      if (fetchDetailedData) {
        navigate({ search: `detail=${id}` });
        fetchDetailedData(id);
        setIsDetailModalOpen(true);
      }
    },
    [fetchDetailedData, navigate]
  );

  const closeDetailModal = useCallback(() => {
    setIsDetailModalOpen(false);
    navigate({ search: '' });
  }, [navigate]);

  const handleOverlayClick = (e: any) => {
    if (e.target.classList.contains('overlay')) {
      closeEditModal();
      closeDeleteModal();
      closeDetailModal();
    }
  };

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const editParam = searchParams.get('edit');

    if (editParam) {
      const idToEdit = parseInt(editParam);

      if (data && Array.isArray(data) && data.length > 0) {
        const dataToEdit = data.find((item: any) => item.id === idToEdit);
        setActiveDropdown(dataToEdit.id);

        if (dataToEdit) {
          setEditId(idToEdit);
          setEditedData(dataToEdit);
          setEditModalOpen(true);
        }
      }
    }
  }, [activeDropdown, data, editModalOpen, location.search]);

  useEffect(() => {
    const handleScroll = () => {
      if (scrollRef.current) {
        closeFilterDropdown();
        scrollRef.current = false;
      }
    };

    const handleEscapeKey = (event: any) => {
      if (event.key === 'Escape') {
        closeEditModal();
        closeDeleteModal();
        closeDetailModal();
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('keydown', handleEscapeKey);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('keydown', handleEscapeKey);
<<<<<<< HEAD
      document.removeEventListener("keydown", handleEscapeKey);
=======
>>>>>>> 62b6bb9c673086ce46fbc33e273979c1c346b789
    };
  }, [closeDeleteModal, closeDetailModal, closeEditModal]);

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const deleteParam = searchParams.get('delete');

    if (deleteParam) {
      console.log(deleteParam);
      const idToDelete = parseInt(deleteParam);
      setActiveDropdown(idToDelete);

      if (data && Array.isArray(data) && data.length > 0) {
        const dataToDelete = data.find((item: any) => item.id === idToDelete);

        if (dataToDelete) {
          openDeleteModal(idToDelete);
        }
      }
    }
  }, [data, location.search, openDeleteModal]);

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const detailParam = searchParams.get('detail');

    if (detailParam) {
      const idToDetail = parseInt(detailParam);
      setActiveDropdown(idToDetail);
      console.log(detailParam);

      if (!isNaN(idToDetail)) {
        openDetailModal(idToDetail);
      }
    }
  }, [location.search, openDetailModal]);

  return (
    <section
      className="py-3 antialiased sm:py-5 overlay"
      onClick={handleOverlayClick}
    >
      <div className="max-w-screen-xl px-4 mx-auto">
        <div className="relative overflow-hidden bg-white shadow-custom sm:rounded-lg">
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="text-xs uppercase">
                <tr>
                  {colCells.map((cell, index) => (
                    <th
                      key={index}
                      scope="col"
                      className={`px-2 py-4 ${
                        index === 0 ? 'text-center' : ''
                      }`}
                    >
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
                      } ${
                        activeDropdown === customCell.id ? 'bg-slate-200' : ''
                      }`}
                      key={index}
                    >
                      {colCells.map((cell, cellIndex) => (
                        <td
                          key={cellIndex}
                          className={`px-2 py-3 font-medium ${
                            cellIndex === 0 ? 'text-center' : ''
                          } text-black whitespace-nowrap`}
                        >
                          {customCell[cell.key]}
                        </td>
                      ))}

                      <td
                        className="flex items-center justify-end px-2 py-3"
                        onClick={handleOverlayClick}
                      >
                        <button
                          id={`dropdown-button-${index}`}
                          className="inline-flex items-center text-sm font-medium rounded-lg hover:text-center"
                          role="button"
                          aria-label="Dropdown button"
                          onClick={() => toggleDropdown(customCell.id)}
                        >
                          <ThreeDotIcon className="w-5 h-5" />
                        </button>
                        {activeDropdown === customCell.id && (
                          <div
                            className={`absolute right-0 z-10 mr-10 bg-white divide-y rounded shadow-2xl w-44 ${
                              index === data.length - 1 ? 'mb-20' : ''
                            }`}
                          >
                            <ul className="py-1 text-sm">
                              <li>
                                <button
                                  onClick={() => openEditModal(customCell.id)}
                                  type="button"
                                  className="flex items-center w-full px-4 py-2 duration-200 hover: hover:text-white hover:bg-primary"
                                >
                                  <EditIcon className="w-4 h-4 mr-2" />
                                  Edit
                                </button>
                                {editModalOpen && (
                                  <EditModal
                                    isOpen={editModalOpen}
                                    onClose={closeEditModal}
                                    title={title}
                                    inputFields={inputFields}
                                    onSubmit={onSubmit}
                                    idToEdit={editId}
                                    initialFormData={editedData}
                                  />
                                )}
                              </li>
                              <li>
                                <button
                                  type="button"
                                  onClick={() => openDetailModal(customCell.id)}
                                  className="flex items-center w-full px-4 py-2 duration-200 hover: hover:text-white hover:bg-primary"
                                >
                                  <DetailIcon className="w-4 h-4 mr-2" />
                                  Detail
                                </button>
                                {detailModalOpen && (
                                  <DetailModal
                                    isOpen={detailModalOpen}
                                    onClose={closeDetailModal}
                                    data={detailedData}
                                  />
                                )}
                              </li>
                              <li>
                                <button
                                  type="button"
                                  onClick={() => openDeleteModal(customCell.id)}
                                  className="flex items-center w-full px-4 py-2 text-red-500 duration-200 hover: hover:text-white hover:bg-red-500"
                                >
                                  <TrashIcon className="w-4 h-4 mr-2" />
                                  Delete
                                </button>
                                {deleteModalOpen && (
                                  <DeleteModal
                                    isOpen={deleteModalOpen}
                                    onClose={closeDeleteModal}
                                    onDelete={() => {
                                      if (deleteId) {
                                        onDelete(deleteId);
                                        closeDeleteModal();
                                      }
                                    }}
                                  />
                                )}
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
