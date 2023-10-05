import EditEligiblesCard from '../../components/cards/EditEligiblesCard';
import { useParams } from 'react-router-dom';
import { getDetailEmployee} from '../../api/EmployeeAPI';
import { getGrade} from '../../api/GradeAPI';
import { useEffect, useState } from 'react';
import { SuccessAlert, ErrorAlert } from '../../components/alerts/CustomAlert';

const EditEligibles = () => {
  const { employeeId } = useParams();
  const [detailedData, setDetailedData] = useState<string | null>(null);
  

  // Alert State
  const [successMessage] = useState<string | null>(null);
  const [errorMessage] = useState<string | null>(null);
  const [successTitle] = useState<string | null>(null);
  const [errorTitle] = useState<string | null>(null);

  const featchDetailEmployee = async (id: any) => {
    try {
      const responseData = await getDetailEmployee(id);
      setDetailedData(responseData.data);
    } catch (error: any) {
      console.error('Error featch detail employee:', error);
    }
  };

  useEffect(() => {
    featchDetailEmployee(employeeId);
  }, [employeeId]);

  return (
    <>
      {successMessage && successTitle && (
        <SuccessAlert title={successTitle} text={successMessage} />
      )}
      {errorMessage && errorTitle && (
        <ErrorAlert title={errorTitle} text={errorMessage} />
      )}
      <EditEligiblesCard
        employeeData={detailedData}
      />
    </>
  );
};

export default EditEligibles;
