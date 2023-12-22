import React from "react";
import InputWithLabel from "../../shared/components/InputWithLabel";

const RegisterInputs = ({
  email,
  setEmail,
  username,
  setUsername,
  password,
  setPassword,
}) => {
  return (
    <>
      <InputWithLabel
        value={username}
        setValue={setUsername}
        label="Username"
        placeholder="Enter your username"
        type="text"
      />
      <InputWithLabel
        value={email}
        setValue={setEmail}
        label="Email"
        placeholder="Enter your email address"
        type="email"
      />
      <InputWithLabel
        value={password}
        setValue={setPassword}
        label="Password"
        placeholder="Enter your password"
        type="password"
      />
    </>
  );
};

export default RegisterInputs;
