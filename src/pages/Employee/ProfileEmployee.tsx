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
    secondaryPosition: 'Marketing Coordinator',
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
