import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getDetailSalaryEmployee } from '../../../api/EmployeeAPI';
import ReactLoading from 'react-loading';
import CustomToastWithLink from '../../alerts/CustomToastWithLink';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const SetEligiblesModal = ({ onClose, allPositionOption }: any) => {
  const [selectedPosition, setSelectedPosition] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const { employeeId, positionId } = useParams();

  const navigate = useNavigate();

  // const [detailedData, setComponentData] = useState<any | null>(null);

  const onAddEligibles = async () => {
    try {
      setIsLoading(true);
      const response = await getDetailSalaryEmployee(
        employeeId,
        selectedPosition
      );

      if (response.data.components.length === 0) {
        // Display the warning alert
        toast.error(
          `No salary component for ${response.data.company_name} employee!`
        );
      } else {
        navigate(
          `/employee/detail/eligibles/${employeeId}/${selectedPosition}/add-eligibles`
        );
      }
    } catch (error: any) {
      console.error(error);
      if (error.response.data.message.includes('Salary')) {
        toast.error(
          CustomToastWithLink(
            `/salary/configures/payroll_component/add`,
            `${error.response.data.message}, Click this alert to add`
          )
        );
      } else {
        console.error(error);
        toast.error(
          CustomToastWithLink(
            `/salary/configures/payroll_component/add`,
            `${error.response.data.message}`
          )
        );
      }
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (positionId) {
      setSelectedPosition(positionId);
    }
  }, [positionId]);

  return (
    <>
      <ToastContainer />
      {isLoading && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <ReactLoading type="spin" color="green" height={50} width={50} />
        </div>
      )}
      <div className="fixed inset-0 z-30 flex items-center justify-center bg-black bg-opacity-50">
        <div className="w-5/6 bg-white rounded-md shadow-md lg:w-1/3">
          <header className="flex items-center justify-between sm:p-6 lg:p-3">
            <h2 className="lg:p-1 p-3 px-[86px] lg:px-[148px] text-xl font-medium border-b-2 border-primary">
              Add Eligibles
            </h2>
          </header>
          <div className="p-4">
            {/* Form for adding eligibles */}
            <div className="mb-4">
              <label
                htmlFor="dropdown"
                className="block font-medium text-gray-700"
              >
                Select Position
              </label>

              <select
                id="type-dropdown"
                name="type-dropdown"
                value={selectedPosition}
                onChange={(e) => setSelectedPosition(e.target.value)}
                className="block w-full px-1 lg:px-3 py-2 mt-2 text-sm bg-white border rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
              >
                <option value="" disabled>
                  Select position
                </option>
                <option
                  className="w-10/12 text-xs lg:text-base"
                  value={allPositionOption?.id_main_position}
                >
                  {allPositionOption?.main_position} -{' '}
                  {allPositionOption?.company_main} - Main
                </option>
                {/* Display additional positions */}
                {allPositionOption?.additional_position.map((position: any) => (
                  <option
                    className="w-10/12 text-xs lg:text-base"
                    key={position.id_additional_position}
                    value={position.id_additional_position}
                  >
                    {position.position_name} - {position.company_name}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="flex justify-end w-full p-4 rounded-t-none shadow-inner rounded-b-md border-gray bg-slate-200">
            <button
              aria-label="Cancel"
              className="px-4 py-2 mx-2 text-sm text-white duration-300 bg-red-800 rounded-md lg:text-base hover:bg-red-700"
              onClick={onClose}
            >
              CANCEL
            </button>
            <button
              aria-label="Add"
              className={`px-4 py-2 text-sm lg:text-base text-white duration-300 rounded-md ${
                !selectedPosition
                  ? 'bg-gray text-slate-400'
                  : 'bg-primary hover:bg-green-700'
              }`}
              disabled={!selectedPosition}
              onClick={() => onAddEligibles()}
            >
              ADD
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SetEligiblesModal;
