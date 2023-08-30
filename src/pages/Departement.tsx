import React from 'react';
import TabelHeader from '../components/tabels/TabelHeader'; // Adjust the import path
import TabelFooter from '../components/tabels/TabelFooter';
import TabelBody from '../components/tabels/TabelBody';

const colCells = [
  { key: 'name', text: 'Departemen Name' },
  { key: 'location', text: 'Location' },
];

const filterOptions = [{ id: 'Location', label: 'Location' }];

const data = [
  {
    name: 'Departemen Keuangan',
    location: 'Gedung A, Lantai 3',
  },
  {
    name: 'Departemen Sumber Daya Manusia',
    location: 'Gedung B, Lantai 2',
  },
  {
    name: 'Departemen Teknologi Informasi',
    location: 'Gedung C, Lantai 5',
  },
  {
    name: 'Departemen Penjualan',
    location: 'Gedung A, Lantai 1',
  },
];
const Departement: React.FC = () => {
  return (
    <>
      <h1 className="">Departement Page</h1>
      <TabelHeader
        addButtonText="Add Departement"
        filterOptions={filterOptions}
      />
      <TabelBody colCells={colCells} data={data} />
      <TabelFooter />
    </>
  );
};

export default Departement;
