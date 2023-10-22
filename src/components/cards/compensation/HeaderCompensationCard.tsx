import { Link } from 'react-router-dom';
import { LeftArrowIcon2 } from '../../../assets/icons/icon';

const HeaderCompensationCard = ({ link, text }: any) => {
  return (
    <>
      <header className="flex items-center justify-between p-2 pr-8 sm:p-5">
        <h1 className="p-2 text-base font-medium border-b-2 sm:text-lg md:text-xl lg:text-[20px] border-primary">
          Compensation & Benefits
        </h1>
      </header>

      {/* Back Button Detail Section Start */}
      <section className="flex items-center justify-start m-5 mt-5">
        <Link to={link}>
          <LeftArrowIcon2 className="h-10 ml-2 mr-4 duration-200 w-9 hover:text-primary hover:scale-110" />
        </Link>
        <span className="text-lg">{text}</span>
      </section>
      {/* Back Button Detail Section End */}
    </>
  );
};

export default HeaderCompensationCard;
