// Library & Package Import
import { SetStateAction, useState } from 'react';
import { Link } from 'react-router-dom';

//Components Import
import { ErrorAlert } from '../alerts/CustomAlert';
import LoginButton from '../buttons/LoginButton';

// Assets Import
import LoginImg from '../../assets/img/login-img.webp';
import { OpenEyeIcon, CloseEyeIcon } from '../../assets/icons/icon';

const LoginCard = () => {
  const [passwordInput, setPasswordInput] = useState('');
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [loginError, setLoginError] = useState(false);

  const handleEmailChange = (event: {
    target: { value: SetStateAction<string> };
  }) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event: {
    target: { value: SetStateAction<string> };
  }) => {
    setPasswordInput(event.target.value);
  };

  const togglePassword = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const handleLoginError = () => {
    setLoginError(true);

    setTimeout(() => {
      setLoginError(false);
    }, 1000);
  };

  return (
    <>
      <section className="flex items-center justify-center min-h-screen bg-gray-50">
        <div className="flex items-center max-w-4xl px-3 py-5 mb-10 bg-gray-100 shadow-lg md:px-5 md:pb-10 md:mb-10 rounded-2xl">
          <div className="px-3 md:px-8 md:w-1/2 ">
            <h2 className="text-2xl font-bold text-black">Login</h2>

            <form action="" className="flex flex-col gap-4">
              <input
                className="p-2 mt-8 text-sm border rounded-md"
                name="Username"
                placeholder="Username"
                autoComplete="Username"
                value={email}
                onChange={handleEmailChange}
                required
              />
              <div className="relative">
                <input
                  className="w-full p-2 text-sm border rounded-md"
                  type={isPasswordVisible ? 'text' : 'password'}
                  onChange={handlePasswordChange}
                  value={passwordInput}
                  name="password"
                  placeholder="Password"
                  autoComplete="current-password"
                  required
                />

                {isPasswordVisible ? (
                  <CloseEyeIcon
                    onClick={togglePassword}
                    className="absolute text-black -translate-y-1/2 cursor-pointer bi bi-eye top-1/2 right-3"
                  />
                ) : (
                  <OpenEyeIcon
                    onClick={togglePassword}
                    className="absolute text-black -translate-y-1/2 cursor-pointer bi bi-eye top-1/2 right-3"
                  />
                )}
              </div>
              <div className="text-xs text-link hover:text-black m text-start">
                <Link to="/forget-pass">Forgot your password?</Link>
              </div>
              <LoginButton
                email={email}
                passwordInput={passwordInput}
                onLoginError={handleLoginError}
              />
            </form>
          </div>

          <div className="hidden w-2/3 sm:block">
            <img
              className="w-full"
              src={LoginImg}
              width="500"
              height="300"
              alt="Login Image"
            />
          </div>
        </div>
      </section>
      {loginError && (
        <ErrorAlert
          title="Login Failed"
          text="Invalid Email or Password. Please check your Email and password."
        />
      )}
    </>
  );
};

export default LoginCard;
