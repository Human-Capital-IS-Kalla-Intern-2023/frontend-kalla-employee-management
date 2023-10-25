import DetailPositionCard from '../../../components/cards/compensation/DetailPositionCard';

const employeeData = {
  fullname: 'Reynaldi Liandi',
  nip: '53859374',
  main_position: ['Software Developer'],
  company_main: 'Example Company',
  directorate_main: 'Technology',
  division_name: 'Software Development',
  job_grade: '2A',
  id_additional_position: '12345',
  employee_detail_id: '6789',
};

const DetailPosition = () => {
  return <DetailPositionCard employeeData={employeeData} />;
};

export default DetailPosition;
