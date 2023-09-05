import { useState } from 'react';
import { CloseButtonIcon } from '../../assets/icons/icon';
import ReactLoading from 'react-loading';

const EditModal = ({
  isOpen,
  onClose,
  title,
  inputFields,
  onSubmit,
  idToEdit,
}: any) => {
  const [formData, setFormData] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      await onSubmit(formData, idToEdit);

      onClose();
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleOverlayClick = (e: any) => {
    if (e.target.classList.contains('overlay')) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-20 flex items-center justify-center bg-black bg-opacity-50 overlay"
      onClick={handleOverlayClick}
    >
      <div className="relative w-3/6 p-6 bg-white rounded shadow-lg overlay">
        <div
          onClick={onClose}
          className="absolute cursor-pointer top-4 right-5 focus:outline-none"
        >
          <CloseButtonIcon className="w-10 h-10 p-1 duration-200 rounded-full overlay hover:bg-primary hover:text-white" />
        </div>
        <div className="relative mt-8 mb-5 text-center">
          <span className="relative z-10 px-8 py-2 text-2xl text-white border rounded-full bg-primary border-primaryColor">
            {title}
          </span>
          <div className="absolute top-1/2 text-black bg-black left-0 transform -translate-y-1/2 w-full h-0.5 bg-primaryColor z-0"></div>
        </div>
        <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-6 mt-8">
          {inputFields.map((field: any, index: number) => (
            <div key={field.id} className={index === 0 ? 'col-span-2' : ''}>
              <label
                className="flex justify-start mb-2 font-medium"
                htmlFor={field.id}
              >
                {field.label}
              </label>
              <input
                type={field.type || 'text'}
                id={field.id}
                name={field.name}
                placeholder={`Input ${field.label}`}
                className="w-full px-3 py-2 border rounded"
                onChange={handleChange}
              />
            </div>
          ))}
          <button
            type="submit"
            className="col-span-2 px-4 py-2 text-lg text-white duration-200 bg-green-800 border border-transparent rounded hover:bg-secondary hover:text-pureBlack hover:border-pureBlack"
          >
            {isLoading && (
              <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                <ReactLoading
                  type="spin"
                  color="green"
                  height={50}
                  width={50}
                />
              </div>
            )}
            Update
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditModal;