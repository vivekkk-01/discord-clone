import React from "react";
import InputWithLabel from "../../../shared/components/InputWithLabel";

const LoginInputs = ({ email, setEmail, password, setPassword }) => {
  return (
    <>
      <InputWithLabel
        value={email}
        setValue={setEmail}
        placeholder="Enter your email address"
        type="email"
        label="E-mail"
      />
      <InputWithLabel
        value={password}
        setValue={setPassword}
        placeholder="Enter your password"
        type="password"
        label="Password"
      />
    </>
  );
};

export default LoginInputs;
