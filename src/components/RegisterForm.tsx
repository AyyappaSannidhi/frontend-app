import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

interface RegisterFormProps {
  onLoginClick: () => void;
}

const RegisterForm: React.FC<RegisterFormProps> = ({ onLoginClick }) => {
  const registerSchema = Yup.object().shape({
    fullname: Yup.string().required('Full name is required'),
    username: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
  });

  return (
    <>
      <h2 className="text-xl font-bold mb-4 text-center text-black">Register</h2>
      <Formik
        initialValues={{ fullname: '', username: '', password: '' }}
        validationSchema={registerSchema}
        onSubmit={(values) => console.log('Registering user', values)}
      >
        {({ isSubmitting }) => (
          <Form>
            <div className="mb-4">
              <label htmlFor="fullname" className="block mb-1">
                Full Name
              </label>
              <Field type="text" name="fullname" id="fullname" className="border rounded-md w-full p-2" />
              <ErrorMessage name="fullname" component="div" className="text-red-500 text-sm" />
            </div>
            <div className="mb-4">
              <label htmlFor="username" className="block mb-1">
                Username (Email)
              </label>
              <Field type="email" name="username" id="username" className="border rounded-md w-full p-2" />
              <ErrorMessage name="username" component="div" className="text-red-500 text-sm" />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block mb-1">
                Password
              </label>
              <Field type="password" name="password" id="password" className="border rounded-md w-full p-2" />
              <ErrorMessage name="password" component="div" className="text-red-500 text-sm" />
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-blue-500 text-white rounded-md px-4 py-2"
            >
              Register
            </button>
            <div className="text-center mt-4">
              <span className="text-gray-600">Already have an account? </span>
              <button type="button" className="text-blue-500" onClick={onLoginClick}>
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