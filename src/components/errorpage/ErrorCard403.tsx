import {NavLink} from 'react-router-dom';

export default function PageCard403() {

    return(

<div className="bg-gray-200 w-full px-16 md:px-0 h-screen flex items-center justify-center">
    <div className="bg-white border border-gray-200 flex flex-col items-center justify-center px-4 md:px-8 lg:px-24 py-8 rounded-lg shadow-2xl">
        <p className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-wider text-gray-300">403</p>
        <p className="text-3xl md:text-3xl lg:text-4xl font-bold tracking-wider text-gray-500 mt-4">Forbidden</p>
        <p className="text-gray-500 mt-4 pb-4 border-b-2 text-center text-xl">You Don't Have permission To Access This Page!</p>
        <li className="flex items-center space-x-2 bg-primary hover:bg-green-700 text-gray-100 px-6 py-2 mt-6 rounded transition duration-150 " title="Return Home" >
        <NavLink to={'/dashboard'}>
            <span className="text-white text-2xl">Return Home</span>
        </NavLink>
            
        </li>
    </div>
</div>
    );

    }