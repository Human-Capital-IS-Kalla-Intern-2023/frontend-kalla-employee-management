import { useParams } from 'react-router-dom';
import DetailEmployee from '../../components/cards/DetailEmployee';

const ProfileEmployee = () => {
  const { employeeId } = useParams();

  const employeeData = {
    name: 'John Doe',
    employeeId: 'EMP12345',
    company: 'ABC Corp',
    division: 'Marketing',
    directorate: 'Human Capital',
    section: 'Departement Head',
    mainPosition: 'Marketing Manager',
    secondaryPosition: [
      {
        position: 'HR Coordinator',
        company: 'ABC Corporation',
        division: 'Human Resources',
        directorate: 'HR Management',
        section: 'Recruitment',
      },
      {
        position: 'Finance Analyst',
        company: 'XYZ Inc.',
        division: 'Finance',
        directorate: 'Financial Planning',
        section: 'Budgeting',
      },
      {
        position: 'IT Specialist',
        company: 'Tech Innovators',
        division: 'Information Technology',
        directorate: 'IT Solutions',
        section: 'Software Development',
      },
    ],
    profileImageUrl: '/src/assets/img/ProfilePicture.jpg',
  };

  return (
    <>
      <h1 className="px-4">Detail Employee Page</h1>
      <DetailEmployee employeeData={employeeData} />
    </>
  );
};

export default ProfileEmployee;
