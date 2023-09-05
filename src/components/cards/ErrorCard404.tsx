import NotFoundImage from '../../assets/img/NotFoundImage.svg';
import { NavLink } from 'react-router-dom';

const ErrorCard404 = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-screen">
      <div className="flex flex-col items-center space-y-8 text-center">
        <div>
          <img
            className="w-full max-w-4xl"
            src={NotFoundImage}
            alt="404 Not Found"
            width={300}
            height={200}
          />
        </div>
        <p className="mt-2 text-3xl font-bold tracking-wider text-black text-gray-300 md:text-lg lg:text-3xl">
          Page Not Found
        </p>
        <p className="my-12 text-lg text-black text-gray-500 md:text-base lg:text-lg">
          Sorry, the page you are looking for could not be found!
        </p>
        <li
          className="flex items-center py-2 space-x-2 text-gray-100 transition duration-150 rounded bg-primary hover:bg-green-700 px-11"
          title="Return Home"
        >
          <NavLink to={'/'}>
            <span className="text-xl text-white">Return Home</span>
          </NavLink>
        </li>
      </div>
    </div>
  );
};

export default ErrorCard404;
