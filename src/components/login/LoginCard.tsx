import LoginImg from '../../assets/img/login-img.webp';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { SetStateAction, useState } from 'react';
// import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import ReactLoading from 'react-loading';

export default function LoginCard() {
  const [passwordInput, setPasswordInput] = useState('');
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [identifier, setIdentifier] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();
  const handleIdentifierChange = (event: {
    target: { value: SetStateAction<string> };
  }) => {
    setIdentifier(event.target.value);
  };

  const handlePasswordChange = (event: {
    target: { value: SetStateAction<string> };
  }) => {
    setPasswordInput(event.target.value);
  };

  const togglePassword = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const loginUser = async () => {
    try {
      setIsLoading(true);

      await new Promise((resolve) => setTimeout(resolve, 2000));

      setIsLoading(false);

      // const response = await axios.post(
      //   'http://localhost:8080/login',
      //   credentials,
      //   {
      //     headers: {
      //       'Content-Type': 'application/json',
      //     },
      //   }
      // );

      const response = {
        data: 'Dummy Data',
      };

      return response.data;
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Login Failed',
        text: 'Invalid Username or Password. Please check your Username and password.',
      });
      console.error(error);
    }
  };

  const handleLoginFormSubmit = async (event: {
    preventDefault: () => void;
  }) => {
    event.preventDefault();

    // const credentials = {
    //   identifier,
    //   password: passwordInput,
    // };
    // // console.log(credentials);

    const responseData = await loginUser();
    console.log(responseData);
    // const Username = responseData.data.users.Username;
    // const token = responseData.data.token;
    // localStorage.setItem('access_token', token);

    navigate(`/dashboard/`);
    // setIsLoading(false);
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
                value={identifier}
                onChange={handleIdentifierChange}
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

                <FontAwesomeIcon
                  icon={isPasswordVisible ? faEyeSlash : faEye}
                  width="16"
                  height="16"
                  onClick={togglePassword}
                  className="absolute text-black -translate-y-1/2 cursor-pointer bi bi-eye top-1/2 right-3"
                />
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
    </>
  );
}
