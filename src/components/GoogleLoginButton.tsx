import { GoogleLogin } from "@react-oauth/google";
import jwt_decode from "jwt-decode";
import { useDispatch } from "react-redux";
import { setUser } from "../store/slice/userSlice";

interface CredentialResponse {
  credential: string;
}

interface decodedValues { 
  id: string
  name: string
  email: string
  picture: string 
}

const GoogleLoginButton = () => {
  const dispatch = useDispatch();

  const handleSuccess = (credentialResponse: CredentialResponse) => {
    const decoded : decodedValues = jwt_decode(credentialResponse.credential);
    dispatch(setUser(decoded));
    console.log("User Info:", decoded);
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