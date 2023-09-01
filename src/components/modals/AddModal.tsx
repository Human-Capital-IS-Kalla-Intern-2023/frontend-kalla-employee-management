import { useState } from 'react';
import { CloseButtonIcon } from '../../assets/icons/icon';

const AddModal = ({ isOpen, onClose }: any) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log('Data submitted:', formData);
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
            Add Employee
          </span>
          <div className="absolute top-1/2 text-black bg-black left-0 transform -translate-y-1/2 w-full h-0.5 bg-primaryColor z-0"></div>
        </div>
        <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-6">
          <div className="col-span-2">
            <label
              className="flex justify-start mb-2 font-medium"
              htmlFor="fullname"
            >
              Full Name
            </label>
            <input
              type="text"
              id="fullname"
              name="fullname"
              placeholder="Input Full Name"
              className="w-full px-3 py-2 border rounded"
              onChange={handleChange}
            />
          </div>
          <div>
            <label
              className="flex justify-start mb-2 font-medium"
              htmlFor="nip"
            >
              NIP
            </label>
            <input
              type="text"
              id="nip"
              name="nip"
              placeholder="Input Nip"
              className="w-full px-3 py-2 border rounded"
              onChange={handleChange}
            />
          </div>
          <div>
            <label
              className="flex justify-start mb-2 font-medium"
              htmlFor="nickname"
            >
              Nick Name
            </label>
            <input
              type="text"
              id="nickname"
              name="nickname"
              placeholder="Input Nick Name"
              className="w-full px-3 py-2 border rounded"
              onChange={handleChange}
            />
          </div>
          <div>
            <label
              className="flex justify-start mb-2 font-medium"
              htmlFor="hiredate"
            >
              Hire Date
            </label>
            <input
              type="date"
              id="hiredate"
              name="hiredate"
              className="w-full px-3 py-2 border rounded"
              onChange={handleChange}
            />
          </div>
          <div>
            <label
              className="flex justify-start mb-2 font-medium"
              htmlFor="companyemail"
            >
              Company Email
            </label>
            <input
              type="email"
              id="companyemail"
              name="companyemail"
              placeholder="Input Company Email"
              className="w-full px-3 py-2 border rounded"
              onChange={handleChange}
            />
          </div>
          <div>
            <label
              className="flex justify-start mb-2 font-medium"
              htmlFor="mainposition"
            >
              Main Position
            </label>
            <input
              type="text"
              id="mainposition"
              name="mainposition"
              placeholder="Input Main Position"
              className="w-full px-3 py-2 border rounded"
              onChange={handleChange}
            />
          </div>
          <div>
            <label
              className="flex justify-start mb-2 font-medium"
              htmlFor="secondaryposition"
            >
              Secondary Position
            </label>
            <input
              type="text"
              id="secondaryposition"
              name="secondaryposition"
              placeholder="Input Secondary Position"
              className="w-full px-3 py-2 border rounded"
              onChange={handleChange}
            />
          </div>
          <div className="col-span-2 px-4 py-2 text-lg text-white duration-200 bg-green-800 border border-transparent rounded hover:bg-secondary hover:text-pureBlack hover:border-pureBlack">
            Submit
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddModal;
