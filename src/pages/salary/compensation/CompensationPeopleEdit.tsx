import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import ReactLoading from 'react-loading';

import CompensationPeopleEditCard from '../../../components/cards/compensation/edit compensation/CompensationPeopleEditCard';
import { getEditCompensationEmployee } from '../../../api/CompensationAPI';

const CompensationPeopleEdit = () => {
  const { employeeCompensationId } = useParams();
  const [compensationEditEmployeeData, setCompensationEditEmployeeData] =
    useState<any | null>(null);

  const fetchEditEmployeeCompensation = async (
    employeeCompensationId: string
  ) => {
    try {
      const response = await getEditCompensationEmployee(
        employeeCompensationId
      );
      setCompensationEditEmployeeData(response.data[0]);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (employeeCompensationId) {
      fetchEditEmployeeCompensation(employeeCompensationId);
    }
  }, [employeeCompensationId]);

  if (!compensationEditEmployeeData) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
        <ReactLoading type="spin" color="green" height={50} width={50} />
      </div>
    );
  }
  return (
    <CompensationPeopleEditCard
      editCompensationEmployeeData={compensationEditEmployeeData}
    />
  );
};

export default CompensationPeopleEdit;
