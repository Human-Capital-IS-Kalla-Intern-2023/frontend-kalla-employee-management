// Library & Package Import
import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useNavigate, useLocation, useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

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

  const [editedData, setEditedData] = useState<any>({});

  const navigate = useNavigate();
  const location = useLocation();

  const openEditModal = useCallback(
    async (id: number) => {
      if (data) {
        const dataToEdit = await data.find((item: any) => item.id === id);
        if (dataToEdit) {
          setEditId(id);
          setEditedData(dataToEdit);
          setEditModalOpen(true);
        }
      }
    },
    [data]
  );
  const { modalEditId, modalDetailId, modalDeleteId } = useParams();

  const closeEditModal = useCallback(() => {
    setEditId(null);
    setEditModalOpen(false);
    if (modalEditId !== undefined) {
      const modalEditIdNumber = parseInt(modalEditId, 10);

      if (!isNaN(modalEditIdNumber)) {
        if (modalEditIdNumber >= 10) {
          const newUrl = location.pathname.slice(0, -8);
          navigate(newUrl);
        } else {
          const newUrl = location.pathname.slice(0, -7);
          navigate(newUrl);
        }
      }
    }
  }, [navigate, modalEditId, location.pathname]);

  const openDetailModal = useCallback(
    async (id: any) => {
      if (fetchDetailedData) {
        try {
          fetchDetailedData(id);
          setIsDetailModalOpen(true);
        } catch (error) {
          console.error('Error fetching detailed data:', error);
        }
      }
    },
    [fetchDetailedData]
  );

  const closeDetailModal = useCallback(() => {
    setIsDetailModalOpen(false);
    if (modalDetailId !== undefined) {
      const modalDetailNumber = parseInt(modalDetailId, 10);

      if (!isNaN(modalDetailNumber)) {
        if (modalDetailNumber >= 10) {
          const newUrl = location.pathname.slice(0, -10);
          navigate(newUrl);
        } else {
          const newUrl = location.pathname.slice(0, -9);
          navigate(newUrl);
        }
      }
    }
  }, [location.pathname, modalDetailId, navigate]);

  const openDeleteModal = useCallback((id: number) => {
    setDeleteId(id);
    setDeleteModalOpen(true);
  }, []);

  const closeDeleteModal = useCallback(() => {
    setDeleteId(null);
    setDeleteModalOpen(false);
    if (modalDeleteId !== undefined) {
      const modalDeleteNumber = parseInt(modalDeleteId, 10);

      if (!isNaN(modalDeleteNumber)) {
        if (modalDeleteNumber >= 10) {
          const newUrl = location.pathname.slice(0, -10);
          navigate(newUrl);
        } else {
          const newUrl = location.pathname.slice(0, -9);
          navigate(newUrl);
        }
      }
    }
  }, [location.pathname, modalDeleteId, navigate]);

  const closeFilterDropdown = () => {
    setActiveDropdown(false);
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
        closeEditModal();
        closeDeleteModal();
        closeDetailModal();
        setActiveDropdown(null);
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('keydown', handleEscapeKey);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('keydown', handleEscapeKey);
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, [closeDeleteModal, closeDetailModal, closeEditModal]);

  useEffect(() => {
    if (modalEditId !== undefined) {
      const modalEditIdNumber = parseInt(modalEditId, 10);

      if (!isNaN(modalEditIdNumber)) {
        if (data && Array.isArray(data) && data.length > 0) {
          const dataToEdit = data.find(
            (item: any) => item.id === modalEditIdNumber
          );

          if (dataToEdit) {
            setActiveDropdown(dataToEdit.id);
            setEditId(modalEditIdNumber);
            setEditedData(dataToEdit);
            setEditModalOpen(true);
          } else {
            navigate('/notfound');
          }
        }
      }
    }
  }, [data, modalEditId, navigate, openEditModal]);

  useEffect(() => {
    if (modalDetailId !== undefined) {
      const modalDetailNumber = parseInt(modalDetailId, 10);

      if (!isNaN(modalDetailNumber)) {
        setActiveDropdown(modalDetailNumber);

        if (!detailedData) {
          if (fetchDetailedData) {
            setIsDetailModalOpen(true);
            fetchDetailedData(modalDetailNumber);
          }
        }
      }
    }
  }, [modalDetailId, navigate, detailedData, fetchDetailedData]);

  useEffect(() => {
    if (modalDeleteId) {
      const modalDeleteNumber = parseInt(modalDeleteId);
      setActiveDropdown(modalDeleteNumber);

      if (data && Array.isArray(data) && data.length > 0) {
        const dataToDelete = data.find(
          (item: any) => item.id === modalDeleteNumber
        );

        if (dataToDelete) {
          openDeleteModal(modalDeleteNumber);
        } else {
          navigate('/notfound');
        }
      }
    }
  }, [data, location.search, modalDeleteId, navigate, openDeleteModal]);

  return (
    <section className="py-3 antialiased sm:py-2 overlay">
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
                          className={`px-2 py-4 font-medium ${
                            cellIndex === 0 ? 'text-center' : ''
                          } text-black whitespace-nowrap`}
                        >
                          {cell.key === 'location[0].location_name'
                            ? customCell.location[0].location_name
                            : customCell[cell.key]}
                        </td>
                      ))}

                      <td className="flex items-center justify-end px-2 py-3">
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
                                <Link
                                  to={`edit/${customCell.id}`}
                                  onClick={() => openEditModal(customCell.id)}
                                  type="button"
                                  className="flex items-center w-full px-4 py-2 duration-200 hover: hover:text-white hover:bg-primary"
                                >
                                  <EditIcon className="w-4 h-4 mr-2" />
                                  Edit
                                </Link>
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
                                <Link
                                  to={`detail/${customCell.id}`}
                                  onClick={() => openDetailModal(customCell.id)}
                                  type="button"
                                  className="flex items-center w-full px-4 py-2 duration-200 hover: hover:text-white hover:bg-primary"
                                >
                                  <DetailIcon className="w-4 h-4 mr-2" />
                                  Detail
                                </Link>
                                {detailModalOpen && (
                                  <DetailModal
                                    isOpen={detailModalOpen}
                                    onClose={closeDetailModal}
                                    data={detailedData}
                                  />
                                )}
                              </li>
                              <li>
                                <Link
                                  to={`delete/${customCell.id}`}
                                  type="button"
                                  onClick={() => openDeleteModal(customCell.id)}
                                  className="flex items-center w-full px-4 py-2 text-red-500 duration-200 hover: hover:text-white hover:bg-red-500"
                                >
                                  <TrashIcon className="w-4 h-4 mr-2" />
                                  Delete
                                </Link>
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
