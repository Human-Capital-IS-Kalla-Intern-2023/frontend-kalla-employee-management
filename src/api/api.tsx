import axios from 'axios';

const API_BASE_URL = 'http://localhost:8000/api';

const loginUser = async (credentials: any) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/login`, credentials, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  } catch (error: any) {
    console.error('Error When Try Login', error);
    throw error;
  }
};

const logoutUser = async (token: string) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/logout`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });

    console.log(response.data);

    return response.data;
  } catch (error) {
    console.error('Error When Try Logout', error);
    throw error;
  }
};

export { loginUser, logoutUser };
