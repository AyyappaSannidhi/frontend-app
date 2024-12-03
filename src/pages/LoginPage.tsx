import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import RequestOtpForm from '../components/RequestOtpForm';
import VerifyOtpForm from '../components/VerifyOtpForm';
import GoogleLoginButton from '../components/GoogleLoginButton';
import LoginForm from '../components/LoginForm';
import RegisterForm from '../components/RegisterForm';


const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);

  const [email, setEmail] = useState<string | null>(null);

  const form = searchParams.get('form') || 'login';
  const userType = searchParams.get('user_type') || 'devotee';

  const handleOtpSent = (email: string) => {
    setEmail(email);
  };

  return (
    <div className="flex justify-center items-center h-auto bg-gray-100 px-4 py-8">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-4xl flex flex-col lg:flex-row">
        {/* Left Section: Google Login and OTP Form */}
        <div className="w-full lg:w-6/12 flex flex-col justify-start space-y-6 p-4 h-[500px]">
          <div className="flex justify-center items-center">
            <GoogleLoginButton />
          </div>
          <div className="flex-grow flex flex-col items-center">
            <div className="w-full max-w-md">
              <h2 className="text-xl font-bold mb-4 text-center text-black">
                Login with Email
              </h2>
              <div className="w-full p-4 border-2 border-orange-500 rounded-lg shadow-md mt-12">
                {!email ? (
                  <RequestOtpForm onOtpSent={handleOtpSent} />
                ) : (
                  <VerifyOtpForm email={email} onBack={() => setEmail(null)}/>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="block lg:hidden w-full h-px bg-gray-300 mb-4 mx-auto" />
        <div className="lg:block hidden w-px bg-gray-300 mx-auto" />
        <div className="w-full lg:w-6/12 p-4">
          {form === 'login' && (
            <LoginForm
              loginType={userType as 'devotee' | 'member'}
              onTabChange={(type) => navigate(`/login?form=login&user_type=${type}`)}
              onRegisterClick={() => navigate('/login?form=register')}
            />
          )}
          {form === 'register' && <RegisterForm />}
        </div>
      </div>
    </div>
  );
};

export default LoginPage;