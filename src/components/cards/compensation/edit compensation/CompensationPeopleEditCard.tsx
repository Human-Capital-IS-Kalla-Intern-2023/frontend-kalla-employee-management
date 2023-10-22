import HeaderCompensationCard from '../HeaderCompensationCard';
import SalaryInfoEmployeeCard from '../../employee/SalaryInfoEmployeeCard';
import profileImg112 from '../../../../assets/img/profile/profileImg-112.webp';

import TypeSalaryCard from './TypeSalaryCard';
function generateRandomData() {
  const fullname = 'Muh Thoriq Ali Said';
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

      <div className="py-10 rounded-lg bg-third mx-7">
        <div className="mx-8">
          <SalaryInfoEmployeeCard
            employeeDatas={employeeDatas}
            profileImg={profileImg112}
          />
        </div>

        <TypeSalaryCard typeName="Fixed Pay" />
        <TypeSalaryCard typeName="Deduction " />
      </div>
    </>
  );
};

export default CompensationPeopleEditCard;
