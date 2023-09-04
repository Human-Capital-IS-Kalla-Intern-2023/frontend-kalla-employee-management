import React from 'react';

const DeleteModal = ({ isOpen, onClose, onDelete } : any) => {
  if (!isOpen) return null;

  const handleDelete = () => {
    onDelete();
    onClose();
  };
  const handleOverlayClick = (e :any) => {
    if (e.target.classList.contains('overlay')) {
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 overlay bg-black bg-opacity-50"
      onClick={handleOverlayClick}>
      <div className="bg-white p-6 rounded shadow-lg w-3/6">
        <h2 className="text-xl font-semibold mb-4 text-red-600">Delete Confirmation</h2>
        <div className="text-red-600 text-lg">Are you sure you want to delete this?</div>
        <div className="mt-4 flex justify-end">
          <button
            onClick={onClose}
            className="bg-green-800 text-white px-4 overlay py-2 rounded mr-4 hover:bg-green-600"
          >
            Cancel
          </button>
          <button
            onClick={handleDelete}
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
          >
            Delete
          </button>
        </div>      
      </div>
    </div>
  );
};

export default DeleteModal;
