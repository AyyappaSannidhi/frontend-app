import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import GoogleLoginButton from './GoogleLoginButton';
import { registerNewUser } from '../scripts/userRequests';

const LoginIn: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'devotee' | 'member' | 'register'>('devotee');

  const handleTabChange = (tab: 'devotee' | 'member') => {
    setActiveTab(tab);
  };

  const handleRegisterClick = () => {
    setActiveTab('register');
  };

  const handleLoginClick = () => {
    setActiveTab('devotee');
  };

  const registerUser = async (values: any) => {
    const userDetails = {
      full_name: values.fullname,
      user_name: values.username,
      password: values.password,
    };
    const result = await registerNewUser(userDetails);

    if (result.status === 201) {
      toast.success(`${values.username} is created. Kindly login.`);
    } else if (result.status === 400) {
      toast.error(result.message);
    } else {
      toast.error('An unexpected error occurred. Please try again.');
    }
  };

  const loginSchema = Yup.object().shape({
    username: Yup.string().required('Username is required'),
    password: Yup.string().required('Password is required'),
  });

  const registerSchema = Yup.object().shape({
    fullname: Yup.string().required('Full name is required'),
    username: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string()
      .min(6, 'Password must be at least 6 characters')
      .required('Password is required'),
  });

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white shadow-lg rounded-lg w-full max-w-3xl flex flex-col md:flex-row">
        {/* Google Login Section */}
        <div className="flex flex-col items-center justify-center w-full md:w-1/2 border-b md:border-b-0 md:border-r p-4 md:p-6">
          <GoogleLoginButton />
          <button
            className="mt-4 bg-orange-500 text-white py-2 px-4 rounded-md shadow-md hover:bg-orange-600 focus:outline-none focus:ring focus:ring-orange-300"
          >
            Login with Mobile Number
          </button>
        </div>

        {/* Login/Register Section */}
        <div className="w-full md:w-1/2 p-4 md:p-6">
          <h2 className="text-xl font-bold mb-4 text-center text-black">
            {activeTab === 'register' ? 'Register' : `${activeTab.charAt(0).toUpperCase() + activeTab.slice(1)} Log In`}
          </h2>

          {activeTab !== 'register' && (
            <div className="flex justify-around mb-4">
              <button
                onClick={() => handleTabChange('devotee')}
                className={`flex-1 py-2 rounded-lg text-center border ${
                  activeTab === 'devotee'
                    ? 'border-orange-500 bg-orange-500 text-white'
                    : 'border-transparent text-orange-500'
                }`}
              >
                Devotee
              </button>
              <button
                onClick={() => handleTabChange('member')}
                className={`flex-1 py-2 rounded-lg text-center border ${
                  activeTab === 'member'
                    ? 'border-orange-500 bg-orange-500 text-white'
                    : 'border-transparent text-orange-500'
                }`}
              >
                Member
              </button>
            </div>
          )}

          {['devotee', 'member'].includes(activeTab) && (
            <Formik
              initialValues={{ username: '', password: '' }}
              validationSchema={loginSchema}
              onSubmit={(values) => {
                console.log(`Logging in as ${activeTab}`, values);
              }}
            >
              {({ isSubmitting }) => (
                <Form>
                  <div className="mb-4">
                    <label htmlFor="username" className="block mb-1">
                      Username
                    </label>
                    <Field
                      type="text"
                      name="username"
                      id="username"
                      className="border rounded-md w-full p-2"
                    />
                    <ErrorMessage
                      name="username"
                      component="div"
                      className="text-red-500 text-sm"
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="password" className="block mb-1">
                      Password
                    </label>
                    <Field
                      type="password"
                      name="password"
                      id="password"
                      className="border rounded-md w-full p-2"
                    />
                    <ErrorMessage
                      name="password"
                      component="div"
                      className="text-red-500 text-sm"
                    />
                  </div>
                  <div className="flex justify-between items-center mb-4">
                    <button type="button" className="text-blue-500">
                      Forgot Password?
                    </button>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="bg-blue-500 text-white rounded-md px-4 py-2"
                    >
                      Log In
                    </button>
                  </div>
                  <div className="text-center mb-4">
                    <span className="text-gray-600">New to Ayyappa Sannidhi? </span>
                    <button
                      type="button"
                      className="text-blue-500"
                      onClick={handleRegisterClick}
                    >
                      Register
                    </button>
                  </div>
                </Form>
              )}
            </Formik>
          )}

          {activeTab === 'register' && (
            <Formik
              initialValues={{ fullname: '', username: '', password: '' }}
              validationSchema={registerSchema}
              onSubmit={(values, { setSubmitting }) => {
                setSubmitting(true);
                registerUser(values);
                setSubmitting(false);
              }}
            >
              {({ isSubmitting }) => (
                <Form>
                  <div className="mb-4">
                    <label htmlFor="fullname" className="block mb-1">
                      Full Name
                    </label>
                    <Field
                      type="text"
                      name="fullname"
                      id="fullname"
                      className="border rounded-md w-full p-2"
                    />
                    <ErrorMessage
                      name="fullname"
                      component="div"
                      className="text-red-500 text-sm"
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="username" className="block mb-1">
                      Username (Email)
                    </label>
                    <Field
                      type="email"
                      name="username"
                      id="username"
                      className="border rounded-md w-full p-2"
                    />
                    <ErrorMessage
                      name="username"
                      component="div"
                      className="text-red-500 text-sm"
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="password" className="block mb-1">
                      Password
                    </label>
                    <Field
                      type="password"
                      name="password"
                      id="password"
                      className="border rounded-md w-full p-2"
                    />
                    <ErrorMessage
                      name="password"
                      component="div"
                      className="text-red-500 text-sm"
                    />
                  </div>
                  <div className="flex justify-between mb-4">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="bg-blue-500 text-white rounded-md px-4 py-2"
                    >
                      Register
                    </button>
                  </div>
                  <div className="text-center mb-4">
                    <span className="text-gray-600">Already have an account? </span>
                    <button
                      type="button"
                      className="text-blue-500"
                      onClick={handleLoginClick}
                    >
                      Login
                    </button>
                  </div>
                </Form>
              )}
            </Formik>
          )}
        </div>
      </div>
    </div>
  );
};

export default LoginIn;