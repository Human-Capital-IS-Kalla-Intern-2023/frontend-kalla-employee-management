import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const InputSalaryCard = ({
  componentName,
  componentId,
  salaryName,
  nominal,
  isEdit,
  isStatus,
  onChange,
}: {
  componentName: string;
  componentId: any;
  salaryName: string;
  nominal?: any;
  onChange: (newValue: number) => void;
  isEdit: boolean;
  isStatus: boolean;
}) => {
  const formatValue = (value: any) => {
    if (typeof value === 'number') {
      return new Intl.NumberFormat('id-ID').format(value);
    }
    return '';
  };
  const [inputValue, setInputValue] = useState(formatValue(nominal));
  const { employeeCompensationId } = useParams();

  useEffect(() => {
    const storedData = localStorage.getItem(
      `salaryComponents-${employeeCompensationId}`
    );
    if (storedData) {
      const salaryComponents = JSON.parse(storedData);
      const storedValue = salaryComponents.find(
        (component: any) => component.component_id === componentId
      );
      if (storedValue) {
        setInputValue(formatValue(storedValue.nominal));
      }
    }
  }, [componentId, employeeCompensationId]);

  const handleInputChange = (e: any) => {
    if (isEdit) {
      const inputValue = e.target.value;
      if (inputValue === '') {
        // Input kosong, atur nilai ke NaN
        setInputValue('');
        onChange(NaN);
      } else {
        const newValue = parseInt(
          inputValue.split('.').join('').replace(',', ''),
          10
        );
        if (!isNaN(newValue)) {
          setInputValue(formatValue(newValue));
          onChange(newValue);
          const storedData = localStorage.getItem(
            `salaryComponents-${employeeCompensationId}`
          );
          if (storedData) {
            const salaryComponents = JSON.parse(storedData);
            const updatedComponents = salaryComponents.map((component: any) => {
              if (component.component_id === componentId) {
                return { ...component, nominal: newValue };
              }
              return component;
            });
            localStorage.setItem(
              `salaryComponents-${employeeCompensationId}`,
              JSON.stringify(updatedComponents)
            );
          }
        }
      }
    }
  };

  console.log(inputValue);

  return (
    <div className="w-full mb-4">
      <p className="mt-2 ml-2 text-base font-medium text-grayBlack">
        {componentName}
      </p>
      <span className="ml-2 text-[14px] text-gray">
        {salaryName}{' '}
        {inputValue === '' ? (
          <span className="text-sm text-gray italic">
            - Real Value {formatValue(nominal)}
          </span>
        ) : (
          ''
        )}
      </span>
      <div className="relative mx-2 mt-2 mb-1">
        <input
          type="text"
          className={`w-full p-2 pl-10 text-right border border-gray-300 rounded-md small-placeholder ${
            !isEdit || !isStatus ? 'cursor-not-allowed' : 'cursor-auto'
          }`}
          placeholder={`Enter Salary Value`}
          value={inputValue}
          disabled={!isEdit || !isStatus}
          onChange={handleInputChange}
          title={
            !isEdit && !isStatus
              ? 'Not allowed to change nominal for this salary component because not active and editing is disabled'
              : !isEdit
              ? 'Not allowed to change nominal for this salary component because editing is disabled'
              : !isStatus
              ? 'Not allowed to change nominal for this salary component because it is not active'
              : ''
          }
        />
        <span className="absolute inset-y-0 z-10 text-gray-500 transform -translate-y-1/2 left-2 top-1/2">
          Rp.
        </span>
      </div>
    </div>
  );
};

export default InputSalaryCard;
