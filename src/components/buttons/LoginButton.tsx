import React, { useState } from 'react';
import ReactLoading from 'react-loading';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import { loginUser } from '../../api/api';

interface LoginButtonProps {
  email: string;
  passwordInput: string;
  setLoginError: React.Dispatch<React.SetStateAction<boolean>>;
}

const LoginButton: React.FC<LoginButtonProps> = ({
  email,
  passwordInput,
  setLoginError,
}) => {
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const handleLoginFormSubmit = async (
    event: React.FormEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();

    setIsLoading(true);
    const credentials = {
      email,
      password: passwordInput,
    };

    try {
      const responseData = await loginUser(credentials);
      console.log(responseData);
      const access_token = responseData.data.access_token;
      Cookies.set('access_token', access_token, { expires: 7 });
      setIsLoading(false);

      navigate(`/dashboard/`);
    } catch (error) {
      setIsLoading(false);
      setLoginError(true);
    }
  };

  return (
    <div className="relative">
      {isLoading && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <ReactLoading type="spin" color="green" height={50} width={50} />
        </div>
      )}
      <button
        type="submit"
        onClick={handleLoginFormSubmit}
        className={`py-2 text-white k duration-300 w-full rounded-full ${
          isLoading
            ? 'bg-gray-400 cursor-not-allowed'
            : 'bg-primary hover:bg-black'
        }`}
        disabled={isLoading}
      >
        {isLoading ? '....' : 'Login'}
      </button>
    </div>
  );
};

export default LoginButton;
