import React, { useState } from 'react';
import ReactLoading from 'react-loading';
import { useNavigate } from 'react-router-dom';

// Import API
import { loginUser } from '../../api/AuthAPI';
import { ErrorAlert } from '../alerts/CustomAlert';

interface LoginButtonProps {
  email: string;
  passwordInput: string;
}

const LoginButton: React.FC<LoginButtonProps> = ({ email, passwordInput }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [loginError, setLoginError] = useState(false);
  const [errorTitle, setErrorTitle] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const navigate = useNavigate();

  const handleLoginFormSubmit = async () => {
    setIsLoading(true);
    setLoginError(false);

    const credentials = {
      email,
      password: passwordInput,
    };

    try {
      const response = await loginUser(credentials);

      if (response) {
        navigate(`/dashboard`);
      }
    } catch (error: any) {
      console.error(error);
      setLoginError(true);
      setErrorTitle(`Error Saat Login`);
      setErrorMessage(` ${error.response.data.meta.message}`);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
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
          aria-label="submit login"
        >
          {isLoading ? '....' : 'Login'}
        </button>
      </div>
      {loginError && <ErrorAlert title={errorTitle} text={errorMessage} />}
    </>
  );
};

export default LoginButton;
