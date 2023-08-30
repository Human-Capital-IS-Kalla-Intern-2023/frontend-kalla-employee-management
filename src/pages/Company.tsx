import { useParams } from 'react-router-dom';
const Company = () => {
  const { companyId } = useParams();
  return <h1>Company Page/ {companyId}</h1>;
};

export default Company;
