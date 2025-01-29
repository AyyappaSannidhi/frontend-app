import React, { useState, useEffect } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { registerNewUser } from '../scripts/userRequests';
import { toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";
import routes from '../scripts/routes';
import Loader from './Loader';
import Turnstile from "react-turnstile";

const RegisterForm = () => {
  const [apiError, setApiError] = useState(null);
  const navigate = useNavigate();
  const [captchaToken, setCaptchaToken] = useState('');
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const turnstileSize = windowWidth < 768 ? 'compact' : 'normal';

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const registerUser = async (userDetails) => {
    if (!captchaToken) {
      setApiError('Please wait till form is loaded');
      return;
    }
    const completeUserDetails = {
      ...userDetails,
      user_type: 'devotee',
      account_type: 'internal',
      bot_token : captchaToken
    };

    try {
      const response = await registerNewUser(completeUserDetails);

      if (response.status === 201) {
        toast.success(`${userDetails.user_name} is created. Kindly login.`);
        navigate(`${routes.logInRoute}?form=login&user_type=devotee`);  // Navigate to login page
      } else {
        setApiError(response.message); // Set the error message to display above the username
      }
    } catch (error) {
      setApiError('An error occurred. Please try again.'); // General error message if request fails
    }finally{
      setCaptchaToken('');
    }
  };

  const registerSchema = Yup.object().shape({
    user_name: Yup.string().min(5, 'User Name must be at least 5 characters').required('User Name is required'),
    password: Yup.string().min(6, 'Password must be at least 6 characters with at least one special character').required('Password is required'),
    full_name: Yup.string().required('Full Name is required'),
    email: Yup.string().email('Invalid email').optional(),
    phone_number: Yup.string().optional().matches(/^\d{10}$/, 'Phone number should be 10 digits'),
  });

  return (
    <>
      <h2 className="text-xl font-bold mb-4 text-center text-black">Register</h2>

      {/* Display API error if any */}
      {apiError && (
        <div className="mb-4 text-red-500 text-center">
          <p>{apiError}</p>
        </div>
      )}

      <Formik
        initialValues={{ full_name: '', user_name: '', password: '', phone_number: '', email: '' }}
        validationSchema={registerSchema}
        onSubmit={(values) => registerUser(values)}
      >
        {({ isSubmitting }) => (
          <Form>
            <div className="mb-4">
              <label htmlFor="user_name" className="block mb-1">
                User Name
              </label>
              <Field type="text" name="user_name" id="user_name" className="border rounded-md w-full p-2" disabled={isSubmitting || !captchaToken}/>
              <ErrorMessage name="user_name" component="div" className="text-red-500 text-sm" />
            </div>

            <div className="mb-4">
              <label htmlFor="password" className="block mb-1">
                Password
              </label>
              <Field type="password" name="password" id="password" className="border rounded-md w-full p-2" disabled={isSubmitting || !captchaToken}/>
              <ErrorMessage name="password" component="div" className="text-red-500 text-sm" />
            </div>

            <div className="mb-4">
              <label htmlFor="full_name" className="block mb-1">
                Full Name
              </label>
              <Field type="text" name="full_name" id="full_name" className="border rounded-md w-full p-2" />
              <ErrorMessage name="full_name" component="div" className="text-red-500 text-sm" />
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="block mb-1">
                Email
              </label>
              <Field type="text" name="email" id="email" className="border rounded-md w-full p-2" />
              <ErrorMessage name="email" component="div" className="text-red-500 text-sm" />
            </div>

            <div className="mb-4">
              <label htmlFor="phone_number" className="block mb-1">
                Phone Number
              </label>
              <Field type="text" name="phone_number" id="phone_number" className="border rounded-md w-full p-2" />
              <ErrorMessage name="phone_number" component="div" className="text-red-500 text-sm" />
            </div>

            {/* Loading Spinner */}
            {isSubmitting && (
              <Loader dots={3} />
            )}

            {!isSubmitting && (
              <Turnstile
              sitekey={import.meta.env.VITE_CLOUD_FLARE_ID}
              size={turnstileSize}
              theme={"light"}
              onVerify={(token) => setCaptchaToken(token)}
              onError={() => console.error("Verification failed.")}
              onExpire={() => console.log("Token expired. Please verify again.")}
            />
            )}
            <button
              type="submit"
              disabled={!captchaToken || isSubmitting}
              className="bg-blue-500 text-white rounded-md px-4 py-2"
            >
              Register
            </button>
            
            <div className="text-center mt-4">
              <span className="text-gray-600">Already have an account? </span>
              <button 
                type="button" 
                className="text-blue-500" 
                onClick={() => navigate(`${routes.logInRoute}?form=login&user_type=devotee`)}
              >
                Login
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default RegisterForm;