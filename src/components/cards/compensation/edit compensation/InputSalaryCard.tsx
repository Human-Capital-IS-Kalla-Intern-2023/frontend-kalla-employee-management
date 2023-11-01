import { useState } from 'react';
const InputSalaryCard = ({
  componentName,
  salaryName,
  value,
  isEdit,
  isStatus,
  onChange,
}: {
  componentName: string;
  salaryName: string;
  value?: any;
  onChange: (newValue: number) => void;
  isEdit: boolean;
  isStatus: boolean;
}) => {
  const [inputValue, setInputValue] = useState(value);

  const handleInputChange = (e: any) => {
    if (isEdit) {
      const inputValue = e.target.value;
      const newValue = parseInt(inputValue, 10);
      console.log(newValue);
      if (isNaN(newValue)) {
        setInputValue('');
        onChange(NaN);
      } else {
        const newValue = parseInt(inputValue, 10);
        setInputValue(newValue);
        onChange(newValue);
      }
    }
  };

  return (
    <div className="w-full mb-4 ">
      <p className="mt-2 ml-2 text-base font-medium text-grayBlack">
        {componentName}
      </p>
      <span className="ml-2 text-[14px] text-gray">{salaryName}</span>
      <div className="relative mx-2 mt-2 ">
        <input
          type="number"
          className={`w-full p-2 pl-10 text-right border border-gray-300 rounded-md small-placeholder appearance-none  [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none ${
            !isEdit || !isStatus ? 'cursor-not-allowed' : 'cursor-auto'
          }`}
          placeholder={`Enter Salary Value - Real Value ${value}`}
          value={inputValue}
          min={0}
          disabled={!isEdit || !isStatus}
          onChange={handleInputChange}
          title={
            !isEdit && !isStatus
              ? 'Not allowed to change value for this salary component because not active and editing is disabled'
              : !isEdit
              ? 'Not allowed to change value for this salary component because editing is disabled'
              : !isStatus
              ? 'Not allowed to change value for this salary component because it is not active'
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
