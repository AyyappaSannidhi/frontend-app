import React, { useState, useEffect } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Turnstile from 'react-turnstile';
import { sendOtp } from '../scripts/userRequests';
import Loader from './Loader';

const RequestOtpForm: React.FC<{ onOtpSent: (email: string) => void }> = ({ onOtpSent }) => {
  const [captchaToken, setCaptchaToken] = useState('');
  const [loading, setLoading] = useState(false);
  const [apiMsg, setApiMsg] = useState<string | null>(null);
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
    initialValues: { email: '' },
    validationSchema: Yup.object({
      email: Yup.string().email('Invalid email address').required('Email is required'),
    }),
    onSubmit: async (values) => {
      if (!captchaToken) {
        setApiMsg('Please wait till form is loaded');
        return;
      }
      setLoading(true);
      try {
        const response = await sendOtp(values.email, captchaToken);
        if (response.status === 201) {
          setApiMsg('OTP sent successfully.');
          onOtpSent(values.email);
        } else {
          setApiMsg(response.message);
        }
      } catch (error) {
        setApiMsg('Failed to send OTP.');
        console.error(error);
      } finally {
        setLoading(false);
      }
    },
  });

  return (
    <div>
      {apiMsg && <div className="mb-4 text-orange-500 text-center">{apiMsg}</div>}
      <form onSubmit={formik.handleSubmit} className="space-y-4">
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
          Email
          <button
            type="button"
            onClick={() => {
              formik.setFieldValue('email', ''); // Clear email field
              setApiMsg(null); // Clear API message
            }}
            className="ml-2 text-xs text-blue-500 hover:underline"
          >
            Clear
          </button>
        </label>
        <input
          id="email"
          type="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className="border rounded-md w-full p-2"
          placeholder="Enter your email"
          disabled={loading || !captchaToken}
        />
        {formik.touched.email && formik.errors.email && (
          <div className="text-red-500 text-sm">{formik.errors.email}</div>
        )}
          {/* Loading Spinner */}
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
          className="bg-blue-500 text-white rounded-md px-4 py-2 w-full"
          disabled={loading || !captchaToken}
        >
          Send OTP
        </button>
      </form>
      <div className="text-center mt-4">
        <button
          type="button"
          disabled={loading || !captchaToken}
          onClick={() => {
            formik.setTouched({ email: true });
            onOtpSent(formik.values.email);
          }}
          className="text-sm text-blue-500 hover:underline"
        >
          Already have an OTP?
        </button>
      </div>
    </div>
  );
};

export default RequestOtpForm;