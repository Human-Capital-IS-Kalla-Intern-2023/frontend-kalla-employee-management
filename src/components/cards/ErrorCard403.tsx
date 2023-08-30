import { NavLink } from 'react-router-dom';

const ErrorCard403 = () => {
  return (
    <div className="flex items-center justify-center w-full h-screen px-16 bg-gray-200 md:px-0">
      <div className="flex flex-col items-center justify-center px-4 py-8 bg-white border border-gray-200 rounded-lg shadow-2xl md:px-8 lg:px-24">
        <p className="text-6xl font-bold tracking-wider text-gray-300 md:text-7xl lg:text-8xl">
          403
        </p>
        <p className="mt-4 text-3xl font-bold tracking-wider text-gray-500 md:text-3xl lg:text-4xl">
          Forbidden
        </p>
        <p className="pb-4 mt-4 text-xl text-center text-gray-500 border-b-2">
          You Don't Have permission To Access This Page!
        </p>
        <li
          className="flex items-center px-6 py-2 mt-6 space-x-2 text-gray-100 transition duration-150 rounded bg-primary hover:bg-green-700 "
          title="Return Home"
        >
          <NavLink to={'/'}>
            <span className="text-2xl text-white">Return Home</span>
          </NavLink>
        </li>
      </div>
    </div>
  );
};

export default ErrorCard403;
