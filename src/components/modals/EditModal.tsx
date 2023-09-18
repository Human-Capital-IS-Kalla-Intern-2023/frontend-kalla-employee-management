// Library & Package Import
import { useEffect, useState, useRef } from 'react';
import ReactLoading from 'react-loading';

// Import Assets
import { CloseButtonIcon } from '../../assets/icons/icon';

interface FormData {
  [key: string]: string;
}

const EditModal = ({
  isOpen,
  onClose,
  title,
  inputFields,
  onSubmit,
  idToEdit,
  initialFormData,
}: any) => {
  const [formData, setFormData] = useState<FormData>({});
  const [isLoading, setIsLoading] = useState(false);
  const firstInputRef = useRef<HTMLInputElement | null>(null);
  const selectRef = useRef<HTMLSelectElement | null>(null);

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
      await onSubmit(formData, idToEdit);

      onClose();
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      const initialData: FormData = {};
      inputFields.forEach((field: any) => {
        initialData[field.name] = initialFormData[field.name] || '';
      });
      setFormData(initialData);
    }
  }, [isOpen, initialFormData, inputFields]);

  useEffect(() => {
    if (isOpen && firstInputRef.current) {
      firstInputRef.current.focus();
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-20 flex items-center justify-center bg-black bg-opacity-50 overlay">
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
              className={index === 0 || index === 1 ? 'col-span-2' : ''}
            >
              <label
                className="flex justify-start mb-2 font-medium"
                htmlFor={field.id}
              >
                {field.label}
              </label>
              {field.type === 'select' ? (
                <select
                  id={field.id}
                  name={field.name}
                  className="w-full px-3 py-2 border rounded"
                  onChange={handleChange}
                  ref={index === 0 ? selectRef : null}
                  value={formData[field.name] || ''}
                >
                  <option value="">Select {field.label}</option>
                  {field.options.map((option: any) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              ) : (
                <input
                  type={field.type || 'text'}
                  id={field.id}
                  name={field.name}
                  placeholder={`Masukkan ${field.label}`}
                  className="w-full px-3 py-2 border rounded"
                  onChange={handleChange}
                  ref={index === 0 ? firstInputRef : null}
                  value={formData[field.name] || ''}
                />
              )}
            </div>
          ))}

          <button
            type="submit"
            className={`col-span-2 px-4 py-2 text-lg text-white duration-200 border rounded hover:bg-secondary hover:text-pureBlack hover:border-pureBlack ${
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
            Perbarui
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditModal;
