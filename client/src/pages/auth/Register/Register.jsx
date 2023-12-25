import React, { useEffect, useState } from "react";
import AuthBox from "../../../shared/components/AuthBox";
import { Typography } from "@mui/material";
import RegisterInputs from "./RegisterInputs";
import RegisterFooter from "./RegisterFooter";
import { validateRegisterForm } from "../../../shared/utils/validators";
import { useDispatch, useSelector } from "react-redux";
import {
  registerAction,
  resetErrorAction,
} from "../../../redux/actions/authActions";
import { redirect, useNavigate } from "react-router-dom";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    setIsFormValid(validateRegisterForm(email, password, username));
  }, [username, email, password]);

  const handleRegister = () => {
    if (isFormValid) {
      dispatch(registerAction({ username, email, password }, navigate));
    }
  };

  useEffect(() => {
    dispatch(resetErrorAction());
  }, []);

  return (
    <AuthBox>
      <Typography variant="5" sx={{ color: "white" }}>
        Create an account
      </Typography>
      <RegisterInputs
        username={username}
        setUsername={setUsername}
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
      />
      <RegisterFooter
        handleRegister={handleRegister}
        isFormValid={isFormValid}
      />
    </AuthBox>
  );
};

export default Register;

export const loader = () => {
  const userDetails = JSON.parse(localStorage.getItem("discord-user"));
  if (userDetails) {
    return redirect("/");
  }
  return null;
};
