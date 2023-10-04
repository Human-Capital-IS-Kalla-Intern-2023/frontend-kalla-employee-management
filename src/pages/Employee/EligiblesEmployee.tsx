import { useParams } from 'react-router-dom';
import Eligibles from '../../components/cards/Eligibles';

const EligiblesEmployee = () => {
  const { employeeId } = useParams();

  const employeeData = {
    name: 'John Doe',
    employeeId: 'EMP12345',
    company: 'ABC Corp',
    directorate:'Technology Information',
    division:'Website Developer',
    jobGrade:"A",
    mainPosition: 'Marketing Manager',
    profileImageUrl: '/src/assets/img/ProfilePicture.jpg',
  };

  return (
    <>
      <h1 className="px-4">Eligibles Employee</h1>
      <Eligibles employeeData={employeeData} />
    </>
  );
};

export default EligiblesEmployee;