import React from "react";
import "./AuthenticationScreen.scss";
import Signin from "../../components/Authentication/SignIn/Signin";
import Signup from "../../components/Authentication/Signup/Signup";

const AuthenticationScreen = () => {
  return (
    <div className="authentication-screen">
      <Signin />
      <Signup />
    </div>
  );
};

export default AuthenticationScreen;
