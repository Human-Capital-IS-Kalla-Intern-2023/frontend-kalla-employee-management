import { useParams } from 'react-router-dom';
const Setting = () => {
  const { settingId } = useParams();
  return <h1>Setting Page/ {settingId}</h1>;
};

export default Setting;
