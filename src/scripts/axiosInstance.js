import axios from 'axios';
import { constants } from '../constants';

// Set up a custom Axios instance
const axiosInstance = axios.create({
  baseURL: `${constants.BACKEND_API_URL}`, // Set your base URL
  withCredentials: true, // Include credentials (cookies with HTTP-only token)
});

// Define the condition for including credentials
const shouldIncludeCredentials = true; // or any condition based on your logic

// Optional: Create an interceptor to modify headers or handle responses
axiosInstance.interceptors.request.use(
  (config) => {
    // Modify the withCredentials dynamically
    config.withCredentials = shouldIncludeCredentials;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    // Handle token expiration, logging out, or any other common error handling
    if (error.response && error.response.status === 401) {
      // Redirect to login or take action for unauthorized errors
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;