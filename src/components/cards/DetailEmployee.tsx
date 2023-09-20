import React from 'react';

const EmployeeDetail = () => {
  const employeeData = {
    name: 'John Doe',
    employeeId: 'EMP12345',
    company: 'ABC Corp',
    division: 'Marketing',
    mainPosition: 'Marketing Manager',
    secondaryPosition: 'Marketing Coordinator',
    profileImageUrl: 'https://via.placeholder.com/150',
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-md">
      <img
        src={employeeData.profileImageUrl}
        alt={employeeData.name}
        className="w-32 h-32 mx-auto rounded-full"
      />

      <h2 className="text-2xl font-semibold mt-4 text-center">
        {employeeData.name}
      </h2>
      <p className="text-gray-600 text-center">Nomor Induk: {employeeData.employeeId}</p>

      <div className="mt-6">
        <div className="bg-blue-100 p-4 rounded-lg mb-4">
          <h3 className="text-lg font-semibold">Perusahaan</h3>
          <p>{employeeData.company}</p>
        </div>

        <div className="bg-green-100 p-4 rounded-lg mb-4">
          <h3 className="text-lg font-semibold">Divisi</h3>
          <p>{employeeData.division}</p>
        </div>

        <div className="bg-yellow-100 p-4 rounded-lg mb-4">
          <h3 className="text-lg font-semibold">Jabatan Utama</h3>
          <p>{employeeData.mainPosition}</p>
        </div>

        <div className="bg-pink-100 p-4 rounded-lg">
          <h3 className="text-lg font-semibold">Jabatan Lainnya</h3>
          <p>{employeeData.secondaryPosition}</p>
        </div>
      </div>
    </div>
  );
};

export default EmployeeDetail;
