// Import Library & Package
import React, { useState } from 'react';
import ReactLoading from 'react-loading';
import { useNavigate } from 'react-router-dom';

// Import API
import { loginUser } from '../../api/AuthAPI';
interface LoginButtonProps {
  email: string;
  passwordInput: string;
  onLoginError: () => void;
}

const LoginButton: React.FC<LoginButtonProps> = ({
  email,
  passwordInput,
  onLoginError,
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

    const isLoginSuccessful = await loginUser(credentials);

    if (isLoginSuccessful) {
      setIsLoading(false);
      navigate(`/dashboard`);
    } else {
      setIsLoading(false);
      onLoginError();
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
