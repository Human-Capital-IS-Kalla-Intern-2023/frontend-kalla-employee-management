// Library & Package Import

// Import Assets
import { CloseButtonIcon } from '../../assets/icons/icon';

const DetailModal = ({ isOpen, onClose, data }: any) => {
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
      <div className="fixed inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 p-8 bg-white rounded-lg shadow-lg">
        <h2 className="mb-4 text-xl font-semibold">Detail Data</h2>
        {data && (
          <div>
            {Object.keys(data).map((key) => (
              <div className="my-2" key={key}>
                <strong>{key}: </strong> {data[key]}
              </div>
            ))}
          </div>
        )}
        <div
          onClick={onClose}
          className="absolute cursor-pointer top-2 right-2"
        >
          <CloseButtonIcon className="w-8 h-8 p-1 duration-200 rounded-full overlay hover:bg-primary hover:text-white" />
        </div>
      </div>
    </div>
  );
};

export default DetailModal;
