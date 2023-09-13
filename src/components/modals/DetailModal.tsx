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
  console.log('meh', data);
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 overlay"
      onClick={handleOverlayClick}
    >
      <div className="fixed inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 p-8 bg-white rounded-lg shadow-lg">
        <h2 className="mb-4 text-xl font-semibold">Detail Data</h2>
        {data ? (
          <div>
            <strong>ID: </strong> {data.id} <br />
            <strong>Company Name: </strong> {data.company_name} <br />
            <strong>Created At: </strong> {data.created_at} <br />
            <strong>Updated At: </strong> {data.updated_at} <br />
            <strong>Deleted At: </strong> {data.deleted_at} <br />
            {Array.isArray(data.location) && data.location.length > 0 && (
              <>
                <h3 className="mt-4 mb-2 text-lg font-semibold">Location</h3>
                {data.location.map((location: any) => (
                  <div key={location.id} className="my-2">
                    <strong>ID: </strong> {location.id} <br />
                    <strong>Location Name: </strong> {location.location_name}{' '}
                    <br />
                    <strong>Created At: </strong> {location.created_at} <br />
                    <strong>Updated At: </strong> {location.updated_at} <br />
                    <strong>Deleted At: </strong> {location.deleted_at} <br />
                  </div>
                ))}
              </>
            )}
          </div>
        ) : (
          <p>Loading...</p>
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
