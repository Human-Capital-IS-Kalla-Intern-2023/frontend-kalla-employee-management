import { useState } from 'react';

const RegistrationModal = ({ isOpen, onClose } : any) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleChange = (e : any) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const [modalOpen, setModalOpen] = useState(false);
  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };
  const handleSubmit = (e : any) => {
    e.preventDefault();
    //logika untuk mengirim data registrasi ke backend atau melakukan validasi
    console.log('Data submitted:', formData);
    onClose();
  };
  const handleOverlayClick = (e : any) => {
    if (e.target.classList.contains('overlay')) {
      closeModal();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50 overlay" onClick ={handleOverlayClick}>
      <div className="bg-white p-6 rounded shadow-lg w-3/6">
        <h2 className="text-xl font-semibold mb-4 bg-green-800 py-3 px-4 rounded text-white">Add Employee</h2>
        <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-6">
          <div className="col-span-2">
            <label className="block mb-2 font-medium" htmlFor="fullname">
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
            <label className="block mb-2 font-medium" htmlFor="nip">
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
            <label className="block mb-2 font-medium" htmlFor="nickname">
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
            <label className="block mb-2 font-medium" htmlFor="hiredate">
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
            <label className="block mb-2 font-medium" htmlFor="companyemail">
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
            <label className="block mb-2 font-medium" htmlFor="mainposition">
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
            <label className="block mb-2 font-medium" htmlFor="secondaryposition">
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
          <button
            type="submit"
            className="bg-green-800 text-white text-lg col-span-2 px-4 py-2 rounded hover:bg-green-600"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegistrationModal;
