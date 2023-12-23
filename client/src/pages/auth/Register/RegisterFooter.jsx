import { Tooltip } from "@mui/material";
import React from "react";
import PrimaryButton from "../../../shared/components/PrimaryButton";
import RedirectInput from "../../../shared/components/RedirectInput";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  closeAlertAction,
  openAlertAction,
} from "../../../redux/actions/alertActions";

const getFormNotValidMessage = () => {
  return "Enter username, email and password!";
};

const getFormValidMessage = () => {
  return "Press to register!";
};

const RegisterFooter = ({ handleRegister, isFormValid }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const pushToLoginPage = () => {
    navigate("/auth/login");
  };

  const { loading, error } = useSelector((state) => state.auth);

  if (error) {
    dispatch(openAlertAction(error));
    setTimeout(() => {
      dispatch(closeAlertAction());
    }, 3000);
  }

  return (
    <>
      <Tooltip
        title={!isFormValid ? getFormNotValidMessage() : getFormValidMessage()}
      >
        <div>
          <PrimaryButton
            label="Register"
            onClick={handleRegister}
            disabled={!isFormValid}
            loading={loading}
            auth={true}
          />
        </div>
      </Tooltip>
      <RedirectInput
        text="Already have an account?"
        redirectHandler={pushToLoginPage}
        redirectText="Log in to existing account."
        additionalStyles={{ marginTop: "5px" }}
      />
    </>
  );
};

export default RegisterFooter;
