import { useState, useEffect } from 'react';
import { CloseButtonIcon } from '../../../assets/icons/icon';

const CompensationAddCard = (isOpen: any) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
        <div className="w-5/6 lg:w-2/5 bg-white rounded-md shadow-md">
          <header className="flex items-center justify-between p-4">
            <h2 className="p-2 text-lg font-medium border-b-2 border-primary ">
              Add Compensation
            </h2>
            <button
              aria-label="Close Modal Add Bank"
              className="text-gray-500 hover:text-slate-700"
              onClick={handleCloseModal}
            >
              <CloseButtonIcon className="w-8 h-8 p-1 duration-200 rounded-md overlay hover:bg-red-800 hover:text-white" />
            </button>
          </header>
        </div>
      </div>
    </>
  );
};

export default CompensationAddCard;
