import EmployeeBodyCard from '../components/employee/EmployeeBodyCard';
import EmployeeCardHeader from '../components/employee/EmployeeHeaderCard';
import EmployeeBootomCard from '../components/employee/EmployeeBootomCard';
const Employee = () => {
  return (
    <>
      <h1>Employee Management Page</h1>
      <EmployeeCardHeader />
      <EmployeeBodyCard />
      <EmployeeBootomCard />
    </>
  );
};

export default Employee;
