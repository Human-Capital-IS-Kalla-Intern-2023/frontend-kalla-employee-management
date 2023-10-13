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
  UserIcon,
} from '../../assets/icons/icon';

interface ColCells {
  key: any;
  text: any;
}

interface InputField {
  id: any;
  label: any;
  name: any;
  type?: any;
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
  onEditNavigate?: string;
  onDetailNavigate?: string;
  changeIsActive?: (idIsActive: any, newIsActive: any) => Promise<any>;
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
  onEditNavigate,
  onDetailNavigate,
  changeIsActive,
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
          // Extract the salaryId from the onEditNavigate prop
          const salaryId = dataToEdit.id;
          if (onEditNavigate) {
            const navigateUrl = onEditNavigate.replace(
              '{salaryId}',
              salaryId.toString()
            );
            // Use the `navigate` function with the correct URL
            navigate(navigateUrl, { replace: true });
          } else {
            setEditId(id);
            setEditedData(dataToEdit);
            setEditModalOpen(true);
          }
        }
      }
    },
    [data, onEditNavigate, navigate]
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

          if (!onDetailNavigate) {
            setIsDetailModalOpen(true);
          }
        } catch (error) {
          console.error('Error fetching detailed data:', error);
        }
      }
    },
    [fetchDetailedData, onDetailNavigate]
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
  const [showProfileButton, setShowProfileButton] = useState<boolean>(false);

  //Menentukan apakah tombol "Profile" harus ditampilkan
  useEffect(() => {
    const currentPath = location.pathname;
    const shouldShowProfileButton = currentPath === '/employee';
    setShowProfileButton(shouldShowProfileButton);
  }, [location.pathname]);

  const truncateText = (text: string, maxLength: number) => {
    return text.length > maxLength
      ? text.substring(0, maxLength) + '...'
      : text;
  };

  interface TableCell {
    key: string;
  }
  const renderTableCell = (
    cell: TableCell,
    customCell: Record<string, any>,
    locationPathname: string
  ) => {
    // Check if the cell key is "type" and if the value is "fixed pay" or "deductions"
    if (
      cell.key === 'type' &&
      (customCell.type === 'fixed pay' || customCell.type === 'deductions')
    ) {
      const bgColorClass =
        customCell.type === 'fixed pay' ? 'bg-blue-300' : 'bg-red-300';
      return (
        <span className={`px-4 py-2 rounded-full ${bgColorClass}`}>
          {customCell.type}
        </span>
      );
    }
    if (['is_hide', 'is_edit'].includes(cell.key)) {
      const bgColorClass =
        customCell[cell.key] === 1 ? 'bg-green-300' : 'bg-red-300';
      const textContent = customCell[cell.key] === 1 ? 'Yes' : 'No';
      return (
        <span className={`px-4 py-2 rounded-full ${bgColorClass}`}>
          {textContent}
        </span>
      );
    }

    if (cell.key === 'is_active') {
      return (
        <label className="relative inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            value=""
            className="sr-only peer"
            defaultChecked={customCell[cell.key] === 1}
            onChange={async () => {
              const newValue = customCell[cell.key] === 1 ? 0 : 1;
              try {
                if (changeIsActive) {
                  await changeIsActive(customCell.id, newValue);
                }
              } catch (error) {
                console.error('Error changing is_active:', error);
              }
            }}
          />

          <div
            className={`w-11 h-6 bg-red-300 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-white dark:peer-focus:ring-gray-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600`}
          ></div>
        </label>
      );
    }

    if (cell.key === 'location[0].location_name') {
      return customCell.location[0].location_name;
    } else if (
      ['fullname', 'company_email', 'main_position'].includes(cell.key)
    ) {
      return truncateText(customCell[cell.key], 16);
    } else if (
      locationPathname.includes('/position/posisi') &&
      [
        'division_name',
        'section_name',
        'directorat_name',
        'position_name',
      ].includes(cell.key)
    ) {
      return truncateText(customCell[cell.key], 14);
    } else {
      return customCell[cell.key];
    }
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

          if (dataToEdit && !onEditNavigate) {
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
  }, [data, modalEditId, navigate, onEditNavigate, openEditModal]);

  useEffect(() => {
    if (modalDetailId !== undefined) {
      const modalDetailNumber = parseInt(modalDetailId, 10);

      if (!isNaN(modalDetailNumber)) {
        setActiveDropdown(modalDetailNumber);

        if (!detailedData && !onDetailNavigate) {
          if (fetchDetailedData) {
            setIsDetailModalOpen(true);
            fetchDetailedData(modalDetailNumber);
          }
        }
      }
    }
  }, [
    modalDetailId,
    navigate,
    detailedData,
    fetchDetailedData,
    onDetailNavigate,
  ]);

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
        <div className="relative bg-white shadow-custom sm:rounded-lg">
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="uppercase text-[16px] ">
                <tr>
                  <th scope="col" className="px-2 py-4 w-14 "></th>
                  {colCells.map((cell, index) => (
                    <th key={index} scope="col" className={`px-2 py-4`}>
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
                      <td className="flex items-center px-2 py-4 font-medium text-center text-black whitespace-nowrap">
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
                            className={`absolute left-0 z-10 ml-10 bg-white divide-y rounded shadow-2xl w-44 ${
                              index === data.length - 1 ? 'mb-20' : ''
                            }`}
                          >
                            <ul className="py-1 text-sm">
                              <li>
                                <Link
                                  to={
                                    onEditNavigate
                                      ? onEditNavigate
                                      : `edit/${customCell.id}`
                                  }
                                  onClick={() => openEditModal(customCell.id)}
                                  type="button"
                                  className="flex items-center w-full px-4 py-2 duration-200 hover:text-white hover:bg-primary"
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
                                  to={
                                    onDetailNavigate
                                      ? onDetailNavigate
                                          .replace(
                                            '{employeeId}',
                                            customCell.id
                                          )
                                          .replace(
                                            '{positionId}',
                                            customCell.id_main_position
                                          )
                                      : `detail/${customCell.id}`
                                  }
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
                              {showProfileButton && (
                                <li>
                                  <Link
                                    to={`detail/eligibles/${customCell.id}/${customCell.id_main_position}`}
                                    type="button"
                                    className="flex items-center w-full px-4 py-2 duration-200 hover: hover:text-white hover:bg-primary"
                                    onClick={() =>
                                      navigate(
                                        `detail/eligibles/${customCell.id}`
                                      )
                                    }
                                  >
                                    <UserIcon className="w-4 h-4 mr-2" />
                                    Eligible
                                  </Link>
                                </li>
                              )}
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
                      {colCells.map((cell, cellIndex) => (
                        <td
                          key={cellIndex}
                          className={`px-2 py-4 font-medium text-black whitespace-nowrap text-[15px]`}
                        >
                          {renderTableCell(cell, customCell, location.pathname)}
                        </td>
                      ))}
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={colCells.length + 1}></td>
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
