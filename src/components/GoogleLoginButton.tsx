import { GoogleLogin } from "@react-oauth/google";
import { useDispatch } from "react-redux";
import { setUser } from "../store/slice/userSlice";
import { CredentialResponse } from "@react-oauth/google";
import { useEffect } from "react";
import { CustomGoogleLogin } from "../scripts/userRequests";
import { toast } from "react-toastify";
import routes from "../scripts/routes";
import { useNavigate } from 'react-router-dom';
import { Token } from "../Types/user";

const GoogleLoginButton = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      const user = JSON.parse(storedUser);
      dispatch(setUser(user));
    }
  }, [dispatch]);

  const handleSuccess = async (credentialResponse: CredentialResponse) => {
    if (credentialResponse.credential) {
      const token : Token = {
        token: credentialResponse.credential
      }
      const user_data = await CustomGoogleLogin(token);
      if (user_data.status === 202 && user_data.user) {
        dispatch(setUser(user_data.user));
        localStorage.setItem("user", JSON.stringify(user_data.user));
        toast.success(`Welcome ${user_data.user.user_name}`);
        navigate(routes.indexRoute);
      }else{
        toast.error(user_data.message);
      }
    } else {
      toast.error("Kindly check your google login");
    }
  };

  const handleError = () => {
    console.log("Login Failed");
  };

  return (
    <GoogleLogin
      onSuccess={handleSuccess}
      onError={handleError}
    />
  );
};

export default GoogleLoginButton;