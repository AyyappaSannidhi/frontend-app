import React, { useState } from 'react';
import LoginForm from '../components/LoginForm';
import RegisterForm from '../components/RegisterForm';
import GoogleLoginButton from '../components/GoogleLoginButton';

const LoginPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'login' | 'register' | 'mobile'>('login');
  const [loginType, setLoginType] = useState<'devotee' | 'member'>('devotee');
  const [otpSent, setOtpSent] = useState(false);
  const [mobileNumber, setMobileNumber] = useState('');
  const [otp, setOtp] = useState('');

  const handleTabChange = (tab: 'login' | 'register' | 'mobile') => {
    setActiveTab(tab);
  };

  const sendOtp = () => {
    setOtpSent(true);
  };

  const handleMobileLogin = () => {
    // Handle mobile login logic here
    console.log('Mobile number: ', mobileNumber);
    console.log('OTP: ', otp);
  };

  return (
    <div className="flex justify-center items-center h-auto bg-gray-100 px-4 py-8">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-4xl flex flex-col lg:flex-row">

        {/* Left Section: Google Login and OTP Form */}
        <div className="w-full lg:w-6/12 flex flex-col justify-between p-4 space-y-6">
          
          {/* Google Login Button */}
          <div className="w-full flex justify-center items-center h-[70%]">
            <GoogleLoginButton />
          </div>
          
          {/* OTP Login Form */}
          <div className="w-full">
            <h2 className="text-xl font-bold mb-4 text-center text-black">Login with Mobile Number</h2>
            {!otpSent ? (
              <>
                <label htmlFor="mobile" className="block mb-2">Mobile Number (India only)</label>
                
                {/* Mobile Number input with +91 prefix */}
                <div className="flex items-center border rounded-md w-full mb-4">
                  <span className="bg-gray-200 text-gray-600 px-4 py-2">+91</span>
                  <input
                    type="text"
                    id="mobile"
                    className="flex-1 p-2"
                    value={mobileNumber}
                    onChange={(e) => setMobileNumber(e.target.value)}
                    placeholder="Enter mobile number"
                  />
                </div>

                <button
                  onClick={sendOtp}
                  className="bg-orange-500 text-white rounded-md px-4 py-2 w-full"
                >
                  Send OTP
                </button>
              </>
            ) : (
              <div className="w-full p-4 border-2 border-blue-500 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold text-center mb-4">Enter OTP</h3>
                
                {/* Display the entered mobile number */}
                <div className="mb-4 text-center">
                  <span className="text-gray-600">Mobile Number: {mobileNumber}</span>
                </div>
                
                <label htmlFor="otp" className="block mb-2">OTP</label>
                <input
                  type="text"
                  id="otp"
                  className="border rounded-md w-full p-2 mb-4"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  placeholder="Enter OTP"
                />
                <button
                  onClick={handleMobileLogin}
                  className="bg-orange-500 text-white rounded-md px-4 py-2 w-full"
                >
                  Login
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Divider: Horizontal on mobile and vertical on larger screens */}
        <div className="block lg:hidden w-full h-px bg-gray-300 mb-4 mx-auto" /> {/* Horizontal for mobile */}
        <div className="lg:block hidden w-px bg-gray-300 mx-auto" /> {/* Vertical for large screens */}

        {/* Right Section: Login and Register Forms */}
        <div className="w-full lg:w-6/12 p-4">
          {activeTab === 'login' && (
            <LoginForm
              loginType={loginType}
              onTabChange={setLoginType}
              onRegisterClick={() => handleTabChange('register')}
            />
          )}
          {activeTab === 'register' && (
            <RegisterForm onLoginClick={() => handleTabChange('login')} />
          )}
        </div>

      </div>
    </div>
  );
};

export default LoginPage;