import { useParams } from 'react-router-dom';

import HeaderCompensationCard from '../HeaderCompensationCard';
import SalaryInfoEmployeeCard from '../../employee/SalaryInfoEmployeeCard';
import profileImg112 from '../../../../assets/img/profile/profileImg-112.webp';
import TypeSalaryCard from './TypeSalaryCard';

const CompensationPeopleEditCard = ({
  editCompensationEmployeeData,
  handleUpdate,
}: any) => {
  const { salary_components } = editCompensationEmployeeData;
  const { employeeCompensationId } = useParams();

  return (
    <>
      <HeaderCompensationCard
        text={`${editCompensationEmployeeData.employee_compensation_name}`}
        link={`/salary/compensation/detail/people/${employeeCompensationId}`}
        submitButton
        handleSaveAndClose={handleUpdate}
      />

      <div className="py-10 rounded-lg bg-third mx-7">
        <div className="mx-8">
          <SalaryInfoEmployeeCard
            employeeDatas={editCompensationEmployeeData}
            profileImg={profileImg112}
          />
        </div>

        <TypeSalaryCard
          typeName="Fixed Pay"
          salaryComponents={salary_components.filter(
            (component: any) => component.type === 'fixed pay'
          )}
        />
        <TypeSalaryCard
          typeName="Deduction"
          salaryComponents={salary_components.filter(
            (component: any) => component.type === 'deductions'
          )}
        />
      </div>
    </>
  );
};

export default CompensationPeopleEditCard;
