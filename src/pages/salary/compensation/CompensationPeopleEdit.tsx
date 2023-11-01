import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import ReactLoading from 'react-loading';
import {
  SuccessAlert,
  ErrorAlert,
  ConfirmationAlert,
} from '../../../components/alerts/CustomAlert';
import { ResetAlert } from '../../../helpers/ResetAlert';
import CompensationPeopleEditCard from '../../../components/cards/compensation/edit compensation/CompensationPeopleEditCard';
import {
  getEditCompensationEmployee,
  editCompensationEmployee,
} from '../../../api/CompensationAPI';

const CompensationPeopleEdit = () => {
  // Alert State
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [successTitle, setSuccessTitle] = useState<string | null>(null);
  const [errorTitle, setErrorTitle] = useState<string | null>(null);

  const { employeeCompensationId } = useParams();
  const [compensationEditEmployeeData, setCompensationEditEmployeeData] =
    useState<any | null>(null);
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);

  const fetchEditEmployeeCompensation = async (
    employeeCompensationId: string
  ) => {
    try {
      const response = await getEditCompensationEmployee(
        employeeCompensationId
      );
      const salaryComponents = response.data[0].salary_components;

      localStorage.setItem(
        `salaryComponents-${employeeCompensationId}`,
        JSON.stringify(salaryComponents)
      );
      setCompensationEditEmployeeData(response.data[0]);
    } catch (error) {
      console.error(error);
    }
  };

  const handleEditCompoensationData = async (employeeCompensationId: any) => {
    try {
      setIsLoading(true);
      // Ambil data dari localStorage
      const storedData = localStorage.getItem(
        `salaryComponents-${employeeCompensationId}`
      );

      if (storedData) {
        const salaryComponents = JSON.parse(storedData);

        // Kemudian, gunakan data ini saat memanggil fungsi editCompensationEmployee
        const responseData = await editCompensationEmployee(
          employeeCompensationId,
          salaryComponents
        );
        if (responseData) {
          ConfirmationAlert({
            title: `${responseData.status}`,
            html: `${responseData.message}<br/> <small>Click the button below to see update result</small> `,
            confirmButtonText: 'See Update Result',
            onConfirm: () => {
              navigate(
                `/salary/compensation/detail/people/${employeeCompensationId}`
              );
              localStorage.removeItem(
                `salaryComponents-${employeeCompensationId}`
              );
            },
          });
        }
      }
    } catch (error: any) {
      console.error('Error editing compensation employee data:', error);
      setErrorTitle('Error editing compensation  employee data');
      const errorMessages = Object.values(error.response.data.errors).flat();
      setErrorMessage(errorMessages.join('\n'));
    } finally {
      setIsLoading(false);
    }
    ResetAlert(
      setSuccessTitle,
      setSuccessMessage,
      setErrorTitle,
      setErrorMessage
    );
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
    <>
      {isLoading && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <ReactLoading type="spin" color="green" height={50} width={50} />
        </div>
      )}
      {successMessage && successTitle && (
        <SuccessAlert title={successTitle} text={successMessage} />
      )}
      {errorMessage && errorTitle && (
        <ErrorAlert title={errorTitle} text={errorMessage} />
      )}
      <CompensationPeopleEditCard
        editCompensationEmployeeData={compensationEditEmployeeData}
        handleUpdate={() => handleEditCompoensationData(employeeCompensationId)}
      />
    </>
  );
};

export default CompensationPeopleEdit;
