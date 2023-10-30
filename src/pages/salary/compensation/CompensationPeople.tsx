import CompoensationPeopleCard from '../../../components/cards/compensation/CompoensationPeopleCard';

import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getDetailCompensationEmployee } from '../../../api/CompensationAPI';
import ReactLoading from 'react-loading';
const CompensationPeople = () => {
  const { employeeCompensationId } = useParams();
  const [compensationEmployeeData, setCompensationEmployeeData] = useState<
    any | null
  >(null);

  const fetchEmployeeCompensation = async (employeeCompensationId: string) => {
    try {
      const response = await getDetailCompensationEmployee(
        employeeCompensationId
      );
      setCompensationEmployeeData(response.data[0]);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (employeeCompensationId) {
      fetchEmployeeCompensation(employeeCompensationId);
    }
  }, [employeeCompensationId]);

  if (!compensationEmployeeData) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
        <ReactLoading type="spin" color="green" height={50} width={50} />
      </div>
    );
  }
  return (
    <CompoensationPeopleCard
      compensationEmployeeData={compensationEmployeeData}
    />
  );
};

export default CompensationPeople;
