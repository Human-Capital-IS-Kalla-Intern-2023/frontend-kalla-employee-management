// import React from 'react';
// import TabelHeader from '../components/tabels/TabelHeader';
// import TabelFooter from '../components/tabels/TabelFooter';
// import TabelBody from '../components/tabels/TabelBody';

// const colCells = [
//   { key: 'fullName', text: 'Full Name' },
//   { key: 'nik', text: 'NIK' },
//   { key: 'email', text: 'Email' },
//   { key: 'jabatanUtama', text: 'Jabatan Utama' },
//   { key: 'jabatanLainnya', text: 'Jabatan Lainnya' },
// ];

// const inputField = [
//   {
//     id: 'employee_name',
//     label: 'Nama Karyawan',
//     name: 'Nama Karyawan',
//     type: 'text',
//   },
//   {
//     id: 'nip',
//     label: 'NIP',
//     name: 'NIP',
//     type: 'text',
//   },
//   {
//     id: 'nickname',
//     label: 'Nick Name',
//     name: 'Nick Name',
//     type: 'text',
//   },
//   {
//     id: 'hiredate',
//     label: 'Tanggal Masuk',
//     name: 'Tanggal Masuk',
//     type: 'date',
//   },
//   {
//     id: 'companyemail',
//     label: 'Company Email',
//     name: 'Company Email',
//     type: 'email',
//   },
//   {
//     id: 'mainposition',
//     label: 'Posisi Utama',
//     name: 'Posisi Utama',
//     type: 'text',
//   },
//   {
//     id: 'secondaryposition',
//     label: 'Posisi Lainnya',
//     name: 'Posisi Lainnya',
//     type: 'text',
//   },
// ];
// const data = [
//   {
//     fullName: 'John Doe',
//     nik: '1234567890123456',
//     email: 'john.doe@example.com',
//     jabatanUtama: 'Manager',
//     jabatanLainnya: 'Supervisor',
//   },
//   {
//     fullName: 'Jane Smith',
//     nik: '7890123456123456',
//     email: 'jane.smith@example.com',
//     jabatanUtama: 'Supervisor',
//     jabatanLainnya: 'Team Lead',
//   },
//   {
//     fullName: 'Michael Johnson',
//     nik: '4567890123456789',
//     email: 'michael.johnson@example.com',
//     jabatanUtama: 'Associate',
//     jabatanLainnya: 'Assistant',
//   },
//   {
//     fullName: 'Emily Williams',
//     nik: '2345678901234567',
//     email: 'emily.williams@example.com',
//     jabatanUtama: 'Associate',
//     jabatanLainnya: 'Intern',
//   },
//   {
//     fullName: 'Robert Brown',
//     nik: '6789012345678901',
//     email: 'robert.brown@example.com',
//     jabatanUtama: 'Manager',
//     jabatanLainnya: 'Supervisor',
//   },
//   {
//     fullName: 'John Doe',
//     nik: '1234567890123456',
//     email: 'john.doe@example.com',
//     jabatanUtama: 'Manager',
//     jabatanLainnya: 'Supervisor',
//   },
//   {
//     fullName: 'Jane Smith',
//     nik: '7890123456123456',
//     email: 'jane.smith@example.com',
//     jabatanUtama: 'Supervisor',
//     jabatanLainnya: 'Team Lead',
//   },
//   {
//     fullName: 'Michael Johnson',
//     nik: '4567890123456789',
//     email: 'michael.johnson@example.com',
//     jabatanUtama: 'Associate',
//     jabatanLainnya: 'Assistant',
//   },
//   {
//     fullName: 'Emily Williams',
//     nik: '2345678901234567',
//     email: 'emily.williams@example.com',
//     jabatanUtama: 'Associate',
//     jabatanLainnya: 'Intern',
//   },
//   {
//     fullName: 'Robert Brown',
//     nik: '6789012345678901',
//     email: 'robert.brown@example.com',
//     jabatanUtama: 'Manager',
//     jabatanLainnya: 'Supervisor',
//   },
// ];
// const filterOptions = [{ id: 'Location', label: 'Location' }];

// const Employee: React.FC = () => {
//   return (
//     <>
//       <h1>Employee Management Page</h1>
//       <TabelHeader
//         addButtonText="Add Employee"
//         title="Add Employee"
//         filterOptions={filterOptions}
//         inputFields={inputField}
//       />
//       <TabelBody colCells={colCells} data={data} />

//       <TabelFooter />
//     </>
//   );
// };

// export default Employee;
