const DetailModal = ({ isOpen, onClose, data }: any) => {
  return (
    <div
      className={`fixed inset-0 flex items-center justify-center z-50 ${
        isOpen ? 'visible opacity-100' : 'invisible opacity-0'
      } transition-opacity duration-300 ease-in-out`}
    >
      <div className="fixed inset-0 bg-black opacity-50"></div>
      <div className="bg-white p-6 rounded-lg shadow-lg z-10">
        <h2 className="text-xl font-semibold mb-4">Detail Data</h2>
        <div className="mb-4">
          <strong>Nama: </strong> {data.nama}
        </div>
        <div className="mb-4">
          <strong>Usia: </strong> {data.usia}
        </div>
        <div className="flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-lg"
          >
            Tutup
          </button>
        </div>
      </div>
    </div>
  );
};

export default DetailModal;
