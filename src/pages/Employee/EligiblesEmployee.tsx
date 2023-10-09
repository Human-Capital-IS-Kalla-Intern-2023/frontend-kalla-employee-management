import Eligibles from '../../components/cards/Eligibles';
import { useParams } from 'react-router-dom';
import { getDetailEligiblesEmployee } from '../../api/EmployeeAPI';
import { useEffect, useState } from 'react';
import { SuccessAlert, ErrorAlert } from '../../components/alerts/CustomAlert';

const EligiblesEmployee = () => {
  const { employeeId } = useParams();
  const { positionId } = useParams();
  const [detailedData, setDetailedData] = useState<string | null>(null);

  // Alert State
  const [successMessage] = useState<string | null>(null);
  const [errorMessage] = useState<string | null>(null);
  const [successTitle] = useState<string | null>(null);
  const [errorTitle] = useState<string | null>(null);

  const featchDetailEmployee = async (employeeId: any, positionId: any) => {
    try {
      const responseData = await getDetailEligiblesEmployee(
        employeeId,
        positionId
      );
      setDetailedData(responseData.data);
    } catch (error: any) {
      console.error('Error featch detail employee:', error);
    }
  };

  useEffect(() => {
    featchDetailEmployee(employeeId, positionId);
  }, [employeeId, positionId]);

  return (
    <>
      {successMessage && successTitle && (
        <SuccessAlert title={successTitle} text={successMessage} />
      )}
      {errorMessage && errorTitle && (
        <ErrorAlert title={errorTitle} text={errorMessage} />
      )}
      <Eligibles employeeData={detailedData} />
    </>
  );
};

export default EligiblesEmployee;
