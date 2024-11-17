import { GoogleLogin } from "@react-oauth/google";
import jwt_decode from "jwt-decode";
import { useDispatch } from "react-redux";
import { setUser } from "../store/slice/userSlice";
import { CredentialResponse } from "@react-oauth/google";


interface decodedValues { 
  id: string
  name: string
  email: string
  picture: string 
}

const GoogleLoginButton = () => {
  const dispatch = useDispatch();

  const handleSuccess = (credentialResponse: CredentialResponse) => {
    if (credentialResponse.credential) {
      const decoded: decodedValues = jwt_decode(credentialResponse.credential);
      dispatch(setUser(decoded));
      console.log("User Info:", decoded);
    } else {
      console.log("No credential received");
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