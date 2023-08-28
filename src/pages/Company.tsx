import { useParams } from 'react-router-dom';
const Company = () => {
  const { aID } = useParams();
  return <h1>Company Page/ {aID}</h1>;
};

export default Company;
