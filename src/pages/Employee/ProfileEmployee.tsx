import DetailEmployee from '../../components/cards/DetailEmployee';
import { useParams } from 'react-router-dom';
import { getDetailEmployee } from '../../api/EmployeeAPI';
import { useEffect, useState } from 'react';

const ProfileEmployee = () => {
  const { employeeId } = useParams();
  console.log('employeeId', employeeId);
  const [detailedData, setDetailedData] = useState<string | null>(null);

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
      <DetailEmployee employeeData={detailedData} />
    </>
  );
};

export default ProfileEmployee;
