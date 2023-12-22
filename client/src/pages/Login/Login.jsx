import React, { useEffect, useState } from "react";
import AuthBox from "../../shared/components/AuthBox";
import LoginHeader from "./LoginHeader";
import LoginInputs from "./LoginInputs";
import LoginFooter from "./LoginFooter";
import { validateLoginForm } from "../../shared/utils/validators";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    setIsFormValid(validateLoginForm(email, password));
  }, [email, password]);

  const handleLogin = () => {
    if (isFormValid) {
      console.log("Logged in...");
    }
  };

  return (
    <AuthBox>
      <LoginHeader />
      <LoginInputs
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
      />
      <LoginFooter handleLogin={handleLogin} isFormValid={isFormValid} />
    </AuthBox>
  );
};

export default Login;
