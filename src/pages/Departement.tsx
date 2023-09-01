import React, { useEffect, useState } from 'react';
import TabelHeader from '../components/tabels/TabelHeader'; // Adjust the import path
import TabelFooter from '../components/tabels/TabelFooter';
import TabelBody from '../components/tabels/TabelBody';
import { fetchDepartments } from '../api/api';

const colCells = [
  { key: 'id', text: 'No' },
  { key: 'directorat_name', text: 'Departemen Name' },
];

const filterOptions = [{ id: 'Location', label: 'Location' }];
const inputField = [
  {
    id: 'directorate_name',
    label: 'Nama Directorat',
    name: 'directorate_name',
    type: 'text',
  },
];
const Departement: React.FC = () => {
  const [departments, setDepartments] = useState<any[]>([]);
  const fetchData = async () => {
    try {
      const departementData = await fetchDepartments();
      setDepartments(departementData);
    } catch (error) {
      console.error('Terjadi kesalahan saat mengambil data departemen:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <h1 className="">Departement Page</h1>
      <TabelHeader
        addButtonText="Add Departement"
        title="Add Departement"
        filterOptions={filterOptions}
        inputFields={inputField}
      />
      <TabelBody colCells={colCells} data={departments} />
      <TabelFooter />
    </>
  );
};

export default Departement;
