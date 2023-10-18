import { Link } from 'react-router-dom';
const CustomToastWithLink = (urlLink: any, info: any, text?: any) => {
  console.log(urlLink);
  return (
    <div>
      <Link to={urlLink}>
        {info}
        {text}
      </Link>
    </div>
  );
};

export default CustomToastWithLink;
