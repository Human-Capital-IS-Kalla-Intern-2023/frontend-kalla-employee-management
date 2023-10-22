import { ArrowButtonIcon } from '../../../../assets/icons/icon';
import InputSalaryCard from './InputSalaryCard';

const TypeSalaryCard = ({ typeName }: { typeName: string }) => {
  return (
    <div className="flex flex-col justify-between p-4 mx-8 mt-6 rounded-lg shadow-md bg-slate-50">
      <div className="flex justify-between mb-4">
        <div className="flex items-center">
          <p className="mr-2 text-lg font-semibold">{typeName}</p>
        </div>
        <div className="flex items-center">
          <ArrowButtonIcon className="w-6 h-6 ml-1" />
        </div>
      </div>

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
  );
};

export default TypeSalaryCard;
