import { ArrowButtonIcon } from '../../../../assets/icons/icon';
import InputSalaryCard from './InputSalaryCard';
import { useState } from 'react';

const TypeSalaryCard = ({ typeName }: { typeName: string }) => {
  const [isCardVisible, setIsCardVisible] = useState(true);

  const toggleCardVisibility = () => {
    setIsCardVisible(!isCardVisible);
  };

  return (
    <div className="flex flex-col justify-between p-4 mx-8 mt-6 transition-all duration-300 rounded-lg shadow-md bg-slate-50">
      <div className="flex justify-between py-2">
        <div className="flex items-center">
          <p className="mr-2 text-[17px] font-semibold">{typeName}</p>
        </div>
        <div className="flex items-center">
          <button onClick={toggleCardVisibility}>
            <ArrowButtonIcon className="w-6 h-6 ml-1" />
          </button>
        </div>
      </div>

      {isCardVisible && (
        <div>
          <div className="flex mb-4 space-x-4">
            <InputSalaryCard componentName="Salary 1" />
            <InputSalaryCard componentName="Salary 2" />
            <InputSalaryCard componentName="Salary 3" />
          </div>
          <div className="flex mb-4 space-x-4">
            <InputSalaryCard componentName="Salary 1" />
            <InputSalaryCard componentName="Salary 2" />
            <InputSalaryCard componentName="Salary 3" />
          </div>
        </div>
      )}
    </div>
  );
};

export default TypeSalaryCard;
