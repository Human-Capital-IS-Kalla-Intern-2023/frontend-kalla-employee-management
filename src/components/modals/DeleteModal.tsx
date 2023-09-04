const DeleteModal = ({ isOpen, onClose, onDelete }: any) => {
  const handleDelete = () => {
    onDelete();
    onClose();
  };
  const handleOverlayClick = (e: any) => {
    if (e.target.classList.contains('overlay')) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 overlay"
      onClick={handleOverlayClick}
    >
      <div className="w-1/3 p-6 bg-white rounded shadow-lg">
        <h2 className="mb-4 text-xl font-semibold text-center text-red-600">
          Delete Confirmation
        </h2>
        <div className="text-lg text-center text-black">
          Are you sure you want to delete this?
        </div>
        <div className="flex justify-end mt-8">
          <button
            onClick={onClose}
            className="w-full px-4 py-2 mr-4 text-white bg-green-800 rounded overlay hover:bg-green-600"
          >
            Cancel
          </button>
          <button
            onClick={handleDelete}
            className="w-full px-4 py-2 text-white bg-red-500 rounded hover:bg-red-600"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
