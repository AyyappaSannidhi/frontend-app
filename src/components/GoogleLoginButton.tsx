import { GoogleLogin } from "@react-oauth/google";
import jwt_decode from "jwt-decode";
import { useDispatch } from "react-redux";
import { setUser } from "../store/slice/userSlice";
import { CredentialResponse } from "@react-oauth/google";
import { useEffect } from "react";

interface DecodedValues {
  id: string;
  name: string;
  email: string;
  picture: string;
}

const GoogleLoginButton = () => {
  const dispatch = useDispatch();

useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      const user = JSON.parse(storedUser);
      dispatch(setUser(user));
    }
  }, [dispatch]);

  const handleSuccess = (credentialResponse: CredentialResponse) => {
    if (credentialResponse.credential) {
      const decoded: DecodedValues = jwt_decode(credentialResponse.credential);
      dispatch(setUser(decoded));
      localStorage.setItem("user", JSON.stringify(decoded)); // Save user to localStorage
      console.log("User Info:", credentialResponse.credential);
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