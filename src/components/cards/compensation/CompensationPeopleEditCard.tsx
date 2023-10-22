import HeaderCompensationCard from './HeaderCompensationCard';
import SalaryInfoEmployeeCard from '../employee/SalaryInfoEmployeeCard';
import profileImg112 from '../../../assets/img/profile/profileImg-112.webp';
import { ArrowButtonIcon } from '../../../assets/icons/icon';

function generateRandomData() {
  const fullname = 'John Doe'; // Replace with a random full name generator
  const nip = Math.floor(1000000000 + Math.random() * 9000000000).toString();
  const grade_name = 'Grade ' + (Math.floor(Math.random() * 10) + 1);
  const position_name = 'Position ' + (Math.floor(Math.random() * 5) + 1);
  const company_name = 'Company ' + (Math.floor(Math.random() * 3) + 1);

  return {
    fullname,
    nip,
    grade_name,
    position_name,
    company_name,
  };
}

const CompensationPeopleEditCard = () => {
  const employeeDatas = generateRandomData();
  return (
    <>
      <HeaderCompensationCard
        text={'Company - Month Year'}
        link={`/salary/compensation/detail/people
        `}
      />
      <div className="mx-7">
        <SalaryInfoEmployeeCard
          employeeDatas={employeeDatas}
          profileImg={profileImg112}
        />
      </div>

      <div className="flex flex-col justify-between p-4 mt-6 rounded-lg shadow-md mx-7 bg-slate-50">
        <div className="flex justify-between mb-4">
          <div className="flex items-center">
            <p className="mr-2 text-lg font-semibold">Fixed Pay</p>
          </div>
          <div className="flex items-center">
            <ArrowButtonIcon className="w-6 h-6 ml-1" />
          </div>
        </div>

        <div className="flex mb-4">
          <div className="w-1/2 pr-2">
            <p className="text-sm font-medium">Input Rp</p>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
          <div className="w-1/2 pl-2">
            <p className="text-sm font-medium">Input Rp</p>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
        </div>

        <div className="flex">
          <div className="w-1/2 pr-2">
            <p className="text-sm font-medium">Input Rp</p>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
          <div className="w-1/2 pl-2">
            <p className="text-sm font-medium">Input Rp</p>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default CompensationPeopleEditCard;
