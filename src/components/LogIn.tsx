import { useState, MouseEvent } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import GoogleLoginButton from './GoogleLoginButton';

interface LoginInProps {
  isOpen: boolean;
  onClose: () => void;
}

const LoginIn: React.FC<LoginInProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<'devotee' | 'member' | 'register'>('devotee'); // Track the main tab

  if (!isOpen) return null;

  const handleOverlayClick = (e: MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleTabChange = (tab: 'devotee' | 'member') => {
    setActiveTab(tab);
  };

  const handleRegisterClick = () => {
    setActiveTab('register');
  };

  const handleLoginClick = () => {
    setActiveTab('devotee'); // Default to devotee login tab
  };

  return (
    <div
      className="fixed z-40 inset-0 bg-black bg-opacity-50 flex justify-center items-center"
      onClick={handleOverlayClick}
    >
      <div className="bg-white rounded-md shadow-lg p-6 w-96 md:w-1/2 lg:w-1/3 relative">
        <button
          className="absolute top-4 right-4 text-gray-500 hover:text-black"
          onClick={onClose}
        >
          <FontAwesomeIcon icon={faTimes} size="2x" />
        </button>

        {/* Display the correct title based on the active tab */}
        <h2 className="text-xl font-bold mb-4 text-center text-black">
          {activeTab === 'register' ? 'Register' : `${activeTab.charAt(0).toUpperCase() + activeTab.slice(1)} Log In`}
        </h2>

        {/* Tab Navigation */}
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

        {/* Login Forms */}
        {activeTab === 'devotee' && (
          <div>
            <form>
              <div className="mb-4">
                <label htmlFor="devotee-username" className="block mb-1">
                  Username
                </label>
                <input
                  type="text"
                  id="devotee-username"
                  className="border rounded-md w-full p-2"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="devotee-password" className="block mb-1">
                  Password
                </label>
                <input
                  type="password"
                  id="devotee-password"
                  className="border rounded-md w-full p-2"
                  required
                />
              </div>
              <div className="mb-4">
                <button type="button" className="text-blue-500">
                  Forgot Password?
                </button>
              </div>
              <div className="flex justify-between mb-4">
                <button
                  type="submit"
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
              <div className="flex justify-center mb-4">
                <GoogleLoginButton />
              </div>
            </form>
          </div>
        )}

        {activeTab === 'member' && (
          <div>
            <form>
              <div className="mb-4">
                <label htmlFor="member-username" className="block mb-1">
                  Username
                </label>
                <input
                  type="text"
                  id="member-username"
                  className="border rounded-md w-full p-2"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="member-password" className="block mb-1">
                  Password
                </label>
                <input
                  type="password"
                  id="member-password"
                  className="border rounded-md w-full p-2"
                  required
                />
              </div>
              <div className="flex justify-between mb-4">
                <button
                  type="submit"
                  className="bg-blue-500 text-white rounded-md px-4 py-2"
                >
                  Log In
                </button>
              </div>
            </form>
          </div>
        )}

        {activeTab === 'register' && (
          <div>
            <form>
              <div className="mb-4">
                <label htmlFor="fullname" className="block mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  id="fullname"
                  className="border rounded-md w-full p-2"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="signup-username" className="block mb-1">
                  Username (Email)
                </label>
                <input
                  type="email"
                  id="signup-username"
                  className="border rounded-md w-full p-2"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="signup-password" className="block mb-1">
                  Password
                </label>
                <input
                  type="password"
                  id="signup-password"
                  className="border rounded-md w-full p-2"
                  required
                />
              </div>
              <div className="flex justify-between mb-4">
                <button
                  type="submit"
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
              <div className="flex justify-center mb-4">
                <GoogleLoginButton />
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default LoginIn;