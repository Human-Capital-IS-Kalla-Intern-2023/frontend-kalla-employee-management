import DetailPositionCard from '../../../components/cards/compensation/DetailPositionCard';
import { getDetailEligiblesEmployee } from '../../../api/EmployeeAPI';

import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import {
  SuccessAlert,
  ErrorAlert,
} from '../../../components/alerts/CustomAlert';
import ReactLoading from 'react-loading';

const DetailPosition = () => {
  const { employeeId } = useParams();
  const { positionId } = useParams();

  const [detailedData, setDetailedData] = useState<string | null>(null);
  console.log(detailedData);
  // Alert State
  const [successMessage] = useState<string | null>(null);
  const [errorMessage] = useState<string | null>(null);
  const [successTitle] = useState<string | null>(null);
  const [errorTitle] = useState<string | null>(null);

  const fetchDetailEmployee = async (employeeId: any, positionId: any) => {
    try {
      const responseData = await getDetailEligiblesEmployee(
        employeeId,
        positionId
      );
      console.log(responseData);
      setDetailedData(responseData.data);
    } catch (error: any) {
      console.error('Error fetch detail employee:', error);
    }
  };

  useEffect(() => {
    fetchDetailEmployee(employeeId, positionId);
  }, [employeeId, positionId]);

  if (!detailedData) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
        <ReactLoading type="spin" color="green" height={50} width={50} />
      </div>
    );
  }
  return (
    <>
      {successMessage && successTitle && (
        <SuccessAlert title={successTitle} text={successMessage} />
      )}
      {errorMessage && errorTitle && (
        <ErrorAlert title={errorTitle} text={errorMessage} />
      )}
      <DetailPositionCard employeeData={detailedData} />
    </>
  );
};

export default DetailPosition;
