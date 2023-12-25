import React, { useEffect } from "react";
import PrimaryButton from "../../../shared/components/PrimaryButton";
import RedirectInput from "../../../shared/components/RedirectInput";
import { useNavigate } from "react-router-dom";
import { Tooltip } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import {
  closeErrorAlertAction,
  openErrorAlertAction,
} from "../../../redux/actions/errorAlertActions";

const getFormNotValidMessage = () => {
  return "Enter email and password!";
};

const getFormValidMessage = () => {
  return "Press to Log in!";
};

const LoginFooter = ({ handleLogin, isFormValid }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const pushToRedirectPage = () => {
    navigate("/auth/register");
  };

  const { loading, error } = useSelector((state) => state.auth);

  useEffect(() => {
    if (error) {
      dispatch(openErrorAlertAction(error));
      setTimeout(() => {
        dispatch(closeErrorAlertAction());
      }, 3000);
    }
  }, [error]);

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
            loading={loading}
            auth={true}
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
