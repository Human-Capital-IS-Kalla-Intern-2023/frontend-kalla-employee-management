// import { useState, useEffect } from 'react';
// import { CloseButtonIcon } from '../../../assets/icons/icon';
// import { getCompany } from '../../../api/CompanyAPI';
// interface FieldOptions {
//   label: string;
//   value: number;
// }

// const CompensationAddCard = (onClose: any) => {
//   const [companyDropdownValue, setCompanyDropdownValue] = useState<
//     number | string
//   >('');

//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [companyOptions, setCompanyOptions] = useState<Array<FieldOptions>>([]);

//   const handleOpenModal = () => {
//     setIsModalOpen(true);
//   };

//   const handleCloseModal = () => {
//     setIsModalOpen(false);
//   };
//   const saveDataToLocalStorage = (data: any) => {
//     localStorage.setItem('CompensationData', JSON.stringify(data));
//   };
//   const [formData, setFormData] = useState<{
//     company_id: string | number;
//   }>({
//     company_id: '',
//   });

//   async function fetchCompanyData() {
//     try {
//       const responseData = await getCompany();
//       const companyOptions = responseData.data.map((item: any) => ({
//         label: item.company_name,
//         value: item.id,
//       }));
//       setCompanyOptions(companyOptions);
//     } catch (error) {
//       console.error('Error fetching companies:', error);
//     }
//   }
//   const handleCompanyChange = (e: any) => {
//     const selectedCompany = e.target.value;
//     const companyId = parseInt(selectedCompany, 10);
//     setFormData({ ...formData, company_id: selectedCompany });
//     setCompanyDropdownValue(companyId);

//     // Save data to local storage
//     const newData = { ...formData, company_id: companyId };
//     saveDataToLocalStorage(newData);
//   };
//   useEffect(() => {
//     fetchCompanyData();
//   }, [companyDropdownValue]);

//   return (
//     <>
//       <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
//         <div className="w-5/6 bg-white rounded-md shadow-md lg:w-2/5">
//           <header className="flex items-center justify-between p-4">
//             <h2 className="p-2 text-lg font-medium border-b-2 border-primary ">
//               Add Compensation
//             </h2>
//             <button
//               aria-label="Close Modal Add Bank"
//               className="text-gray-500 hover:text-slate-700"
//               onClick={handleCloseModal}
//             >
//               <CloseButtonIcon className="w-8 h-8 p-1 duration-200 rounded-md overlay hover:bg-red-800 hover:text-white" />
//             </button>
//           </header>
//           <div className="p-4">
//             <label
//               htmlFor="dropdown company"
//               className="block font-medium text-gray-700"
//             >
//               Legal Employer*
//             </label>
//             <select
//               id="dropdown company"
//               name="dropdown company"
//               value={companyDropdownValue}
//               onChange={handleCompanyChange}
//               className="block w-full px-3 py-2 mt-1 mb-5 text-sm bg-white border rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
//             >
//               <option value="" className="text-sm" disabled>
//                 Select a business unit
//               </option>
//               {companyOptions.map((option) => (
//                 <option key={option.label} value={option.value}>
//                   {option.label}
//                 </option>
//               ))}
//             </select>

//             <div className="mt-4 mb-4">
//               <label
//                 htmlFor="input"
//                 className="block font-medium text-gray-700"
//               >
//                 Name*
//               </label>
//               <input
//                 type="text"
//                 id="input"
//                 name="input"
//                 placeholder="Name"
//                 // value={CompensationNameValue}
//                 // onChange={handleCompensationNameInput}
//                 className="block w-full px-3 py-2 mt-1 text-sm bg-white border rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
//               />
//             </div>
//             <div className="grid grid-cols-2 gap-4 mt-4 mb-4">
//               <div>
//                 <label
//                   htmlFor="year"
//                   className="block font-medium text-gray-700"
//                 >
//                   Year*
//                 </label>
//                 <input
//                   type="text"
//                   id="year"
//                   name="year"
//                   placeholder="Year"
//                   // value={CompensationYearValue}
//                   // onChange={handleCompensationYearInput}
//                   className="block w-full px-3 py-2 mt-1 text-sm bg-white border rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
//                 />
//               </div>
//               <div className="mt-6">
//                 <select
//                   id="month"
//                   name="month"
//                   // value={CompensationMonthValue}
//                   // onChange={handleCompensationMonthInput}
//                   className="block w-full px-3 py-2 mt-1 text-sm bg-white border rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
//                 >
//                   <option value="" disabled>
//                     Select the month
//                   </option>
//                   <option value="1">January</option>
//                   <option value="2">February</option>
//                   <option value="3">March</option>
//                   <option value="4">April</option>
//                   <option value="5">May</option>
//                   <option value="6">June</option>
//                   <option value="7">July</option>
//                   <option value="8">August</option>
//                   <option value="9">September</option>
//                   <option value="10">October</option>
//                   <option value="11">November</option>
//                   <option value="12">December</option>
//                 </select>
//               </div>
//             </div>
//             <div className="mt-4 mb-4">
//               <label
//                 htmlFor="input"
//                 className="block font-medium text-gray-700"
//               >
//                 Salary Component*
//               </label>
//               <input
//                 type="text"
//                 id="input"
//                 name="input"
//                 placeholder="Select salary component"
//                 // value={CompensationNameValue}
//                 // onChange={handleCompensationNameInput}
//                 className="block w-full px-3 py-2 mt-1 text-sm bg-white border rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
//               />
//             </div>

//             <div className="flex justify-end w-full pt-3 pb-1 rounded-t-none shadow-inner">
//               <button
//                 aria-label="Close Modal"
//                 className="px-4 py-2 mx-2 text-sm text-white duration-300 bg-red-800 rounded-md lg:text-base hover:bg-red-700"
//                 onClick={handleCloseModal}
//               >
//                 Cancel
//               </button>
//               <button
//                 aria-label="Submit Bank Data"
//                 className="px-4 py-2 text-sm text-white duration-300 rounded-md lg:text-base bg-primary hover:bg-gray"
//                 // onClick={handleAddCompensation}
//               >
//                 Save & Close
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default CompensationAddCard;
