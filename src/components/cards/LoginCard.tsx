// Library & Package Import
import { SetStateAction, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import ReactLoading from 'react-loading';
import Cookies from 'js-cookie';

// APIs Import
import { loginUser } from '../../api/api';

//Components Import
import { ErrorAlert } from '../alerts/CustomAlert';

// Assets Import
import LoginImg from '../../assets/img/login-img.webp';
import { OpenEyeIcon, CloseEyeIcon } from '../../assets/icons/icon';

const LoginCard = () => {
  const [passwordInput, setPasswordInput] = useState('');
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const [loginError, setLoginError] = useState(false);

  const navigate = useNavigate();
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

  const handleLoginFormSubmit = async (event: any) => {
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
      setLoginError(true);
      setIsLoading(false);
    }
  };

  return (
    <>
      <section className="flex items-center justify-center min-h-screen bg-gray-50">
        {isLoading && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <ReactLoading type="spin" color="green" height={50} width={50} />
          </div>
        )}
        <div className="flex items-center max-w-4xl px-3 py-5 mb-10 bg-gray-100 shadow-lg md:px-5 md:pb-10 md:mb-10 rounded-2xl">
          <div className="px-3 md:px-8 md:w-1/2 ">
            <h2 className="text-2xl font-bold text-black">Login</h2>

            <form
              action=""
              onSubmit={handleLoginFormSubmit}
              className="flex flex-col gap-4"
            >
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
              <button
                type="submit"
                className={`py-2 text-white k duration-300 rounded-full ${
                  isLoading
                    ? 'bg-gray-400 cursor-not-allowed'
                    : 'bg-primary hover:bg-black'
                }`}
                disabled={isLoading}
              >
                {isLoading ? '...' : 'Login'}
              </button>
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
