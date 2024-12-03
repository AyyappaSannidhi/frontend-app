import React, { useState, useEffect } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Turnstile from 'react-turnstile';
import { verifyOtp } from '../scripts/userRequests';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { setUser } from '../store/slice/userSlice';
import { useNavigate } from 'react-router-dom';
import routes from '../scripts/routes';
import Loader from './Loader';

const VerifyOtpForm: React.FC<{ email: string; onBack: () => void }> = ({ email, onBack }) => {
  const [captchaToken, setCaptchaToken] = useState('');
  const [apiMsg, setApiMsg] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const turnstileSize = windowWidth < 768 ? 'compact' : 'normal';

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const formik = useFormik({
    initialValues: { otp: '' },
    validationSchema: Yup.object({
      otp: Yup.string().length(4, 'OTP must be 4 digits').required('OTP is required'),
    }),
    onSubmit: async (values) => {
      if (!captchaToken) {
        setApiMsg('Please wait till form is loaded');
        return;
      }
      setLoading(true);
      try {
        const response = await verifyOtp(email, values.otp, captchaToken);
        if (response.status === 202 && response.user) {
          dispatch(setUser(response.user));
          localStorage.setItem('user', JSON.stringify(response.user));
          toast.success(`Welcome ${response.user.user_name}`);
          navigate(routes.indexRoute);
        } else {
          setApiMsg(response.message);
        }
      } catch (error) {
        setApiMsg('Failed to verify OTP.');
      } finally {
        setLoading(false);
      }
    },
  });

  return (
    <div>
      {apiMsg && <div className="mb-4 text-orange-500 text-center">{apiMsg}</div>}
      <form onSubmit={formik.handleSubmit} className="space-y-4">
        <label htmlFor="otp" className="block text-sm font-medium text-gray-700">
          OTP
        </label>
        <input
          id="otp"
          type="text"
          maxLength={4}
          value={formik.values.otp}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className="border rounded-md w-full p-2 text-center"
          placeholder="Enter OTP"
          disabled={loading || !captchaToken}
        />
        {formik.touched.otp && formik.errors.otp && (
          <div className="text-red-500 text-sm">{formik.errors.otp}</div>
        )}
        {loading && ( <Loader dots={3} />)}
        {
          !loading && (
            <Turnstile
              sitekey={import.meta.env.VITE_CLOUD_FLARE_ID}
              size={turnstileSize}
              theme={"light"}
              onVerify={(token) => setCaptchaToken(token)}
              onError={() => setApiMsg('Bot verification failed')}
              onExpire={() => setApiMsg("Refresh page and try again")}
            />
          )
        }
        
        <button
          type="submit"
          className="bg-green-500 text-white rounded-md px-4 py-2 w-full"
          disabled={loading || !captchaToken}
        >
          Verify and Login
        </button>
      </form>
      <div className="mt-4 text-center">
        <button
          type="button"
          onClick={onBack}
          className="text-sm text-blue-500 hover:underline"
        >
          Not {email}?
        </button>
      </div>
    </div>
  );
};

export default VerifyOtpForm;