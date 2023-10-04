import { useParams } from 'react-router-dom';
import EditEligiblesCard from '../../components/cards/EditEligiblesCard';

const EditEligibles = () => {
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
      <h1 className="px-4">Edit Eligibles Employee</h1>
      <EditEligiblesCard employeeData={employeeData} />
    </>
  );
};

export default EditEligibles;