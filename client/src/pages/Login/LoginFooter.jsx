import React from "react";
import PrimaryButton from "../../shared/components/PrimaryButton";
import RedirectInput from "../../shared/components/RedirectInput";
import { useNavigate } from "react-router-dom";
import { Tooltip } from "@mui/material";

const getFormNotValidMessage = () => {
  return "Enter email and password!";
};

const getFormValidMessage = () => {
  return "Press to Log in!";
};

const LoginFooter = ({ handleLogin, isFormValid }) => {
  const navigate = useNavigate();

  const pushToRedirectPage = () => {
    navigate("/redirect");
  };

  return (
    <>
      <Tooltip
        title={!isFormValid ? getFormNotValidMessage() : getFormValidMessage()}
      >
        <div>
          <PrimaryButton
            disabled={!isFormValid}
            additionalStyles={{ marginTop: "30px" }}
            onClick={handleLogin}
            label="Log in"
          />
        </div>
      </Tooltip>
      <RedirectInput
        text="Don't have you an account?"
        redirectHandler={pushToRedirectPage}
        redirectText="Create an account"
        additionalStyles={{ marginTop: "5px" }}
      />
    </>
  );
};

export default LoginFooter;
