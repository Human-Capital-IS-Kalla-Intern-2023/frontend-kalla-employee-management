const DetailModal = ({onClose, data }: any) => {
const handleOverlayClick = (e: any) => {
  if (e.target.classList.contains('overlay')) {
    onClose();
  }
}

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 overlay"
      onClick={handleOverlayClick}>
      <div className="fixed inset-0 bg-black opacity-50"></div>
      <div className="bg-white p-6 rounded-lg shadow-lg z-10">
        <h2 className="text-xl font-semibold mb-4">Detail Data</h2>
        <div className="mb-4">
          <strong>Name: </strong> {data.name}
        </div>
        <div className="mb-4">
          <strong>Age: </strong> {data.age}
        </div>
        <div className="flex justify-center">
          <button
            onClick={onClose}
            className="px-4 py-2 text-white bg-green-800 hover:bg-green-600 rounded-lg"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default DetailModal;
