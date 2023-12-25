import React, { useEffect, useState } from "react";
import AuthBox from "../../../shared/components/AuthBox";
import LoginHeader from "./LoginHeader";
import LoginInputs from "./LoginInputs";
import LoginFooter from "./LoginFooter";
import { validateLoginForm } from "../../../shared/utils/validators";
import { useDispatch, useSelector } from "react-redux";
import { redirect, useNavigate } from "react-router-dom";
import {
  loginAction,
  resetErrorAction,
} from "../../../redux/actions/authActions";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { userDetails, loading, error } = useSelector((state) => state.auth);

  useEffect(() => {
    setIsFormValid(validateLoginForm(email, password));
  }, [email, password]);

  const handleLogin = () => {
    if (isFormValid) {
      dispatch(loginAction({ email, password }, navigate));
    }
  };

  useEffect(() => {
    dispatch(resetErrorAction());
  }, []);

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

export const loader = () => {
  const userDetails = JSON.parse(localStorage.getItem("discord-user"));
  if (userDetails) {
    return redirect("/");
  }
  return null;
};
