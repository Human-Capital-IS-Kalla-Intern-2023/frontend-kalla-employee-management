import ErrorIcon from '../../assets/img/NotFound.jpg';
import { NavLink} from 'react-router-dom';


export default function PageCard404() {

return(
    <div className="w-full h-screen flex flex-col lg:flex-row items-center justify-center space-y-16 lg:space-y-0 space-x-8 2xl:space-x-0">
        <div className="w-full  ml-40 lg:w-2/4 flex flex-col items-center justify-center lg:px-2 xl:px-5 text-center">
            <p className="text-6xl md:text-8xl lg:text-7xl font-bold tracking-wider text-gray-300">404</p>
            <p className="text-3xl md:text-5xl lg:text-4xl font-bold tracking-wider text-gray-300 mt-2">Page Not Found</p>
            <p className="text-lg md:text-xl lg:text-2xl text-gray-500 my-12">Sorry, the page you are looking for could not be found!</p>
            <li className="flex items-center space-x-2 bg-primary hover:bg-green-700  text-gray-100 px-11 py-2 rounded transition duration-150" title="Return Home">
            <NavLink to={'/dashboard'}>
                <span className="text-white text-2xl">Return Home</span>
            </NavLink>
            </li>
        </div>
        <div className=" w-2/3 lg:h-full flex lg:items-center justify-center p-4">
            <img className="w-10/12 " src={ErrorIcon} />
        </div>
    </div>    

);

}