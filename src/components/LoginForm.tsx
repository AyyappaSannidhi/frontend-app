import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

interface LoginFormProps {
  loginType: 'devotee' | 'member';
  onTabChange: (type: 'devotee' | 'member') => void;
  onRegisterClick: () => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ loginType, onTabChange, onRegisterClick }) => {
  const loginSchema = Yup.object().shape({
    username: Yup.string().required('Username is required'),
    password: Yup.string().required('Password is required'),
  });

  return (
    <>
      <h2 className="text-xl font-bold mb-4 text-center text-black">
        {loginType === 'devotee' ? 'Devotee Login' : 'Member Login'}
      </h2>
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
        initialValues={{ username: '', password: '' }}
        validationSchema={loginSchema}
        onSubmit={(values) => console.log(`Logging in as ${loginType}`, values)}
      >
        {({ isSubmitting }) => (
          <Form>
            <div className="mb-4">
              <label htmlFor="username" className="block mb-1">
                Username
              </label>
              <Field type="text" name="username" id="username" className="border rounded-md w-full p-2" />
              <ErrorMessage name="username" component="div" className="text-red-500 text-sm" />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block mb-1">
                Password
              </label>
              <Field type="password" name="password" id="password" className="border rounded-md w-full p-2" />
              <ErrorMessage name="password" component="div" className="text-red-500 text-sm" />
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