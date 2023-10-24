import DetailPositionCard from '../../../components/cards/compensation/DetailPositionCard';

const employeeData = {
  fullname: 'Reynaldi Liandi',
  nip: '53859374',
  position_name: ['Software Developer'],
  company_name: 'Example Company',
  directorate_name: 'Technology',
  division_name: 'Software Development',
  section_name: 'Backend',
  id_additional_position: '12345',
  employee_detail_id: '6789',
};

const DetailPosition = () => {
  return <DetailPositionCard employeeData={employeeData} />;
};

export default DetailPosition;
