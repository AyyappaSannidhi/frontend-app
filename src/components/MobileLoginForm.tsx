import React, { useState } from 'react';
import GoogleLoginButton from '../components/GoogleLoginButton';

interface MobileLoginFormProps {
  onLoginClick: () => void;
}

const MobileLoginForm: React.FC<MobileLoginFormProps> = ({ onLoginClick }) => {
  const [otpSent, setOtpSent] = useState(false);
  const [mobileNumber, setMobileNumber] = useState('');
  const [otp, setOtp] = useState('');

  const sendOtp = () => {
    // Simulate sending OTP
    setOtpSent(true);
  };

  const handleOtpChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    // Allow only numbers and limit to 4 characters
    if (/^\d{0,4}$/.test(value)) {
      setOtp(value);
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg flex flex-col justify-between h-full">
      <div className="flex flex-col flex-grow">
        <h2 className="text-2xl font-bold mb-6 text-center text-black">Login with Mobile Number</h2>

        {/* OTP Form */}
        {!otpSent ? (
          <>
            <div className="mb-4">
              <label htmlFor="mobile" className="block text-gray-600 mb-2">Mobile Number</label>
              <input
                type="text"
                id="mobile"
                className="border rounded-md w-full p-3 text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={mobileNumber}
                onChange={(e) => setMobileNumber(e.target.value)}
              />
            </div>
            <button
              onClick={sendOtp}
              className="bg-blue-500 text-white rounded-md px-6 py-3 w-full mt-4"
            >
              Send OTP
            </button>
          </>
        ) : (
          <>
            <div className="mb-4">
              <p className="text-gray-600">Mobile Number: <strong>{mobileNumber}</strong></p>
            </div>
            <div className="mb-4">
              <label htmlFor="otp" className="block text-gray-600 mb-2">Enter OTP (4 digits)</label>
              <input
                type="text"
                id="otp"
                value={otp}
                onChange={handleOtpChange}
                maxLength={4}
                className="border rounded-md w-full p-3 text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="____"
              />
            </div>
            <button
              className="bg-blue-500 text-white rounded-md px-6 py-3 w-full mt-4"
              disabled={otp.length !== 4}
            >
              Login
            </button>
          </>
        )}
      </div>

      {/* Google Login Button at the Bottom */}
      <div className="mt-6 w-full bg-blue-500 text-white py-2 px-4 rounded-md shadow-md hover:bg-blue-600">
        <GoogleLoginButton />
      </div>

      <div className="mt-6 text-center">
        <span className="text-gray-600">Already have an account? </span>
        <button type="button" className="text-blue-500" onClick={onLoginClick}>
          Login
        </button>
      </div>
    </div>
  );
};

export default MobileLoginForm;