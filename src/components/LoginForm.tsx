import React, { useState, useEffect } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { CompleteUserLogin, UserLogin } from '../Types/user';
import { toast } from 'react-toastify';
import { useLocation, useNavigate } from "react-router-dom";
import routes from '../scripts/routes';
import Loader from './Loader';
import { LoginNormalUser } from '../scripts/userRequests';
import { setUser } from "../store/slice/userSlice";
import { useDispatch } from "react-redux";
import Turnstile from "react-turnstile";

interface LoginFormProps {
  loginType: 'devotee' | 'member';
  onTabChange: (type: 'devotee' | 'member') => void;
  onRegisterClick: () => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ loginType, onTabChange, onRegisterClick }) => {
  
  const [apiError, setApiError] = useState<string | null>(null); // State to store API error messages
  const [captchaToken, setCaptchaToken] = useState('');

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const userType = searchParams.get('user_type') || 'devotee';
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const turnstileSize = windowWidth < 768 ? 'compact' : 'normal';

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const loginUser = async (userCredentails: UserLogin, setSubmitting: (isSubmitting: boolean) => void) => {
    if (!captchaToken) {
      setApiError('Please wait till form is loaded');
      return;
    }
    const completeUserLogin: CompleteUserLogin = {
      ...userCredentails,
      user_type: userType || 'error',
      bot_token: captchaToken
    };
  

    try {
      const response = await LoginNormalUser(completeUserLogin);

      if (response.status === 202) {
        if (response.user !== undefined) {
          dispatch(setUser(response.user));
          localStorage.setItem("user", JSON.stringify(response.user));
          toast.success(`Welcome ${response.user.user_name}`);
          navigate(routes.indexRoute);
        }
      } else {
        setApiError(response.message);
      }
    } catch (error) {
      setApiError('An error occurred. Please try again.');
    }finally{
      setSubmitting(false);
      setCaptchaToken('');
    }
  };

  const loginSchema = Yup.object().shape({
    user_name: Yup.string().required('Username is required'),
    password: Yup.string().required('Password is required'),
  });

  return (
    <>
      <h2 className="text-xl font-bold mb-4 text-center text-black">
        {loginType === 'devotee' ? 'Devotee Login' : 'Member Login'}
      </h2>

      {/* Display API error if any */}
      {apiError && (
        <div className="mb-4 text-red-500 text-center">
          <p>{apiError}</p>
        </div>
      )}

      <div className="flex justify-around mb-4">
        <button
          onClick={() => onTabChange('devotee')}
          className={`flex-1 py-2 rounded-lg text-center border ${
            loginType === 'devotee'
              ? 'border-orange-500 bg-orange-500 text-white'
              : 'border-transparent text-orange-500'
          }`}
        >
          Devotee
        </button>
        <button
          onClick={() => onTabChange('member')}
          className={`flex-1 py-2 rounded-lg text-center border ${
            loginType === 'member'
              ? 'border-orange-500 bg-orange-500 text-white'
              : 'border-transparent text-orange-500'
          }`}
        >
          Member
        </button>
      </div>

      <Formik
        initialValues={{ user_name: '', password: '' }}
        validationSchema={loginSchema}
        onSubmit={(values, { setSubmitting }) => {
          loginUser(values, setSubmitting); // Pass the setSubmitting function
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <div className="mb-4">
              <label htmlFor="user_name" className="block mb-1">
                Username
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
            

            <div className="flex justify-between items-center mb-4">
              <button
                type="submit"
                disabled={!captchaToken || isSubmitting}
                className="bg-blue-500 text-white rounded-md px-4 py-2"
              >
                Log In
              </button>
            </div>

            <div className="text-center">
              <span className="text-gray-600">New to Ayyappa Sannidhi? </span>
              <button type="button" className="text-blue-500" onClick={onRegisterClick}>
                Register
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default LoginForm;