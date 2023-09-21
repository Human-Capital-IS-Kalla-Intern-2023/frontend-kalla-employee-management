import React from 'react';

const DetailEmployee = () => {
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
    <section className="py-3 antialiased sm:py-2 overlay">
      <div className="max-w-screen-xl px-4 mx-auto">
        <div className="relative overflow-hidden bg-white shadow-custom sm:rounded-lg">
          <div className="overflow-x-auto">
      <img
        src={employeeData.profileImageUrl}
        alt={employeeData.name}
        className="w-32 h-32 mx-auto rounded-full"
      />

      <h2 className="text-2xl font-semibold mt-4 text-center">
        {employeeData.name}
      </h2>
      <p className="text-gray-600 text-center">NIP: {employeeData.employeeId}</p>

      <div className="mt-6">
        <div className="bg-blue-100 p-4 rounded-lg mb-4">
          <h3 className="text-lg font-semibold">Company Name</h3>
          <p>{employeeData.company}</p>
        </div>

        <div className="bg-green-100 p-4 rounded-lg mb-4">
          <h3 className="text-lg font-semibold">Division</h3>
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
    </div>
    </div>
    </section>
  );
};

export default DetailEmployee;
