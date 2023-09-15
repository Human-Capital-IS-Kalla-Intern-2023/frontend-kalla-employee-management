// Library & Package Import
import { useState, useEffect, useRef } from 'react';
import ReactLoading from 'react-loading';

// Import Assets
import { CloseButtonIcon } from '../../assets/icons/icon';

const AddModal = ({ isOpen, onClose, title, inputFields, onSubmit }: any) => {
  const [formData, setFormData] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const firstInputRef = useRef<HTMLInputElement | null>(null);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      setIsLoading(true);

      await onSubmit(formData);
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

  useEffect(() => {
    if (isOpen && firstInputRef.current) {
      // Jika modal terbuka dan ref elemen input pertama tersedia
      firstInputRef.current.focus(); // Fokuskan kursor ke elemen input pertama
    }
  }, [isOpen]);

  return (
    <div>
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
              <div
                key={field.id}
                className={
                  inputFields.length === 1
                    ? 'col-span-2'
                    : inputFields.length === 2
                    ? 'col-span-2'
                    : index === 0 && inputFields.length >= 3
                    ? 'col-span-2'
                    : ''
                }
              >
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
                  ref={index === 0 ? firstInputRef : null}
                />
              </div>
            ))}

            <button
              type="submit"
              className={`col-span-2 px-4 py-2 text-lg text-white duration-200 border rounded hover:bg-green-600 hover:text-white  ${
                isLoading ? 'bg-gray-400 cursor-not-allowed' : 'bg-green-800'
              }`}
              disabled={isLoading}
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
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddModal;