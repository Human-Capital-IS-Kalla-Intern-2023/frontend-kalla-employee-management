import { ArrowButtonIcon } from '../../../../assets/icons/icon';
import InputSalaryCard from './InputSalaryCard';
import { useState } from 'react';

const TypeSalaryCard = ({ typeName, salaryComponents }: any) => {
  const [isCardVisible, setIsCardVisible] = useState(true);
  const [inputValues, setInputValues] = useState(
    salaryComponents.map((component: any) => component.nominal)
  );

  const handleChange = (newValue: number, index: number) => {
    const updatedValues = [...inputValues];
    updatedValues[index] = newValue;
    setInputValues(updatedValues);
  };

  console.log(inputValues);
  const toggleCardVisibility = () => {
    setIsCardVisible(!isCardVisible);
  };

  return (
    <div className="flex flex-col justify-between p-4 mx-8 mt-6 transition-all duration-300 bg-white rounded-lg shadow-md">
      <div
        className={`flex justify-between py-2  ${
          isCardVisible ? 'border-b border-slate-300 pt-2 pb-4' : ''
        } `}
      >
        <div className="flex items-center">
          <p className="mr-2 text-[17px] font-semibold">{typeName}</p>
        </div>
        <div className="flex items-center">
          <button onClick={toggleCardVisibility} aria-label="toogle">
            <ArrowButtonIcon className="w-6 h-6 ml-1" />
          </button>
        </div>
      </div>

      {isCardVisible && (
        <div className="grid grid-cols-3 mt-3">
          {salaryComponents.map((component: any, index: number) => (
            <InputSalaryCard
              key={component.component_id}
              componentName={component.component_name}
              salaryName={component.salary}
              value={component.nominal}
              isEdit={component.is_edit === 1}
              isStatus={component.is_status === 1}
              onChange={(newValue) => handleChange(newValue, index)}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default TypeSalaryCard;
