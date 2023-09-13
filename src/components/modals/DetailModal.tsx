// Library & Package Import

// Import Assets
import { CloseButtonIcon } from '../../assets/icons/icon';

const DetailModal = ({ isOpen, onClose, data}: any) => {
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
      <div className="relative mt-8 mb-5 text-center">
            <span className="relative z-10 px-8 py-2 text-2xl text-white border rounded-full bg-primary border-primaryColor">
              Detail Data
            </span>
            <div className="absolute top-1/2 text-black bg-black left-0 transform -translate-y-1/2 w-full h-0.5 bg-primaryColor z-0"></div>
          </div>
        {data ? (
          <table className="min-w-full">
  <thead>
    <tr>
      <th className="px-6 py-3 bg-gray-50 text-left text-lg leading-4  font-bold text-gray-500 uppercase tracking-wider">
        Field
      </th>
      <th className="px-6 py-3 bg-gray-50 text-left text-lg leading-4 font-bold text-gray-500 uppercase tracking-wider">
        Value
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td className="px-6 py-4 whitespace-no-wrap text-base leading-5 font-medium text-gray-900">
        ID
      </td>
      <td className="px-6 py-4 whitespace-no-wrap text-base leading-5 text-gray-500">
        {data.id}
      </td>
    </tr>
    <tr>
      <td className="px-6 py-4 whitespace-no-wrap text-base leading-5 font-medium text-gray-900">
        Company Name
      </td>
      <td className="px-6 py-4 whitespace-no-wrap text-base leading-5 text-gray-500">
        {data.company_name}
      </td>
    </tr>
    <tr>
      <td className="px-6 py-4 whitespace-no-wrap text-base leading-5 font-medium text-gray-900">
        Created At
      </td>
      <td className="px-6 py-4 whitespace-no-wrap text-base leading-5 text-gray-500">
        {data.created_at}
      </td>
    </tr>
    <tr>
      <td className="px-6 py-4 whitespace-no-wrap text-base leading-5 font-medium text-gray-900">
        Updated At
      </td>
      <td className="px-6 py-4 whitespace-no-wrap text-base leading-5 text-gray-500">
        {data.updated_at}
      </td>
    </tr>
    <tr>
      <td className="px-6 py-4 whitespace-no-wrap text-base leading-5 font-medium text-gray-900">
        Deleted At
      </td>
      <td className="px-6 py-4 whitespace-no-wrap text-base leading-5 text-gray-500">
        {data.deleted_at}
      </td>
    </tr>
    {Array.isArray(data.location) &&
      data.location.map((location: any) => (
        <><tr key={location.id}>
          <td className="px-6 py-4 whitespace-no-wrap text-base leading-5 font-medium text-gray-900">
            Location ID
          </td>
          <td className="px-6 py-4 whitespace-no-wrap text-base leading-5 text-gray-500">
            {location.id}
          </td>
        </tr><tr>
            <td className="px-6 py-4 whitespace-no-wrap text-base leading-5 font-medium text-gray-900">
              Location Name
            </td>
            <td className="px-6 py-4 whitespace-no-wrap text-base leading-5 text-gray-500">
              {location.location_name}
            </td>
          </tr><tr>
            <td className="px-6 py-4 whitespace-no-wrap text-base leading-5 font-medium text-gray-900">
              Location Created At
            </td>
            <td className="px-6 py-4 whitespace-no-wrap text-base leading-5 text-gray-500">
              {location.created_at}
            </td>
          </tr><tr>
            <td className="px-6 py-4 whitespace-no-wrap text-base leading-5 font-medium text-gray-900">
              Location Updated At
            </td>
            <td className="px-6 py-4 whitespace-no-wrap text-base leading-5 text-gray-500">
              {location.updated_at}
            </td>
          </tr><tr>
            <td className="px-6 py-4 whitespace-no-wrap text-base leading-5 font-medium text-gray-900">
              Location Deleted At
            </td>
            <td className="px-6 py-4 whitespace-no-wrap text-base leading-5 text-gray-500">
              {location.deleted_at}
            </td>
          </tr></>
      ))}
  </tbody>
</table>

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
