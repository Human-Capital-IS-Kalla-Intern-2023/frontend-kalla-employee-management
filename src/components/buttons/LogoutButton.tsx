import { useState } from 'react';
import Swal from 'sweetalert2';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import ReactLoading from 'react-loading';

import { logoutUser } from '../../api/api';
import { LogoutIcon } from '../../assets/icons/icon';

const ButtonLogout = () => {
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const handleLogout = async () => {
    setIsLoading(true);

    const responseData = await logoutUser();

    if (responseData) {
      Cookies.remove('access_token');
      navigate(`/`);
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Logout Failed',
        text: 'Something went wrong',
      });
      navigate(`/`);
    }

    setIsLoading(false);
  };

  const textAnimation = {
    open: { opacity: 1 },
    closed: { opacity: 0 },
  };

  return (
    <div className="relative">
      {isLoading && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <ReactLoading type="spin" color="green" height={50} width={50} />
        </div>
      )}
      <li className="px-1 py-2 mt-3 mb-1 rounded-md hover:bg-primary hover:text-white">
        <button
          onClick={() => {
            Swal.fire({
              icon: 'warning',
              title: 'Confirm Logout',
              text: 'Are you sure you want to log out?',
              showCancelButton: true,
              confirmButtonText: 'Logout',
              cancelButtonText: 'Cancel',
            }).then((result) => {
              if (result.isConfirmed) {
                handleLogout();
              }
            });
          }}
          className=" link"
        >
          <div className="flex items-center">
            <LogoutIcon className="min-w-max" />
            <motion.div variants={textAnimation} className="ml-2 link">
              Logout
            </motion.div>
          </div>
        </button>
      </li>
    </div>
  );
};

export default ButtonLogout;