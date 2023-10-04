import DetailEmployee from '../../components/cards/DetailEmployee';
import { useParams } from 'react-router-dom';
import { getDetailEmployee, updateEmployee } from '../../api/EmployeeAPI';
import { useEffect, useState } from 'react';
import { ResetAlert } from '../../helpers/ResetAlert';
import { SuccessAlert, ErrorAlert } from '../../components/alerts/CustomAlert';

const ProfileEmployee = () => {
  const { employeeId } = useParams();
  const [detailedData, setDetailedData] = useState<string | null>(null);

  // Alert State
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [successTitle, setSuccessTitle] = useState<string | null>(null);
  const [errorTitle, setErrorTitle] = useState<string | null>(null);

  const featchDetailEmployee = async (id: any) => {
    try {
      const responseData = await getDetailEmployee(id);
      setDetailedData(responseData.data);
    } catch (error: any) {
      console.error('Error featch detail employee:', error);
    }
  };

  const handleEditEmployee = async (formData: string) => {
    try {
      const responseData = await updateEmployee(employeeId, formData);
      setSuccessTitle(`${responseData.status}`);
      setSuccessMessage(`${responseData.message}`);
      featchDetailEmployee(employeeId);
    } catch (error: any) {
      console.error('Error editing employee:', error);
      setErrorTitle(`Error editing employee`);
      const errorMessages = Object.values(error.response.data.errors).flat();
      setErrorMessage(errorMessages.join('\n'));
    }
    ResetAlert(
      setSuccessTitle,
      setSuccessMessage,
      setErrorTitle,
      setErrorMessage
    );
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
      <DetailEmployee
        employeeData={detailedData}
        onUpdateEmployee={handleEditEmployee}
      />
    </>
  );
};

export default ProfileEmployee;
