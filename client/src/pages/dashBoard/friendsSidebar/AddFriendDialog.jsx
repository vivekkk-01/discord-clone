import React, { useEffect, useState } from "react";
import { validateEmail } from "../../../shared/utils/validators";
import InputWithLabel from "../../../shared/components/InputWithLabel";
import {
  Dialog,
  DialogContent,
  DialogActions,
  DialogContentText,
  DialogTitle,
  Typography,
} from "@mui/material";
import PrimaryButton from "../../../shared/components/PrimaryButton";
import { sendFriendRequestAction } from "../../../redux/actions/friendsActions";
import { useDispatch } from "react-redux";

const AddFriendDialog = ({ isDialogOpen, closeDialogHandler }) => {
  const [email, setEmail] = useState("");
  const [isFormValid, setIsFormValid] = useState("");
  const dispatch = useDispatch();

  const handleSendInvitation = () => {
    dispatch(sendFriendRequestAction(email, closeDialogHandler));
    setEmail("");
  };

  const handleCloseDialog = () => {
    setEmail("");
    closeDialogHandler();
  };

  useEffect(() => {
    setIsFormValid(validateEmail(email));
  }, [email]);

  return (
    <div>
      <Dialog onClose={handleCloseDialog} open={isDialogOpen}>
        <DialogTitle>
          <Typography>Invite a Friend</Typography>
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            <Typography>Enter a E-mail to which you want to invite.</Typography>
            <InputWithLabel
              label="Email"
              type="email"
              value={email}
              setValue={setEmail}
              placeholder="Enter email address"
            />
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <PrimaryButton
            label="Send"
            onClick={handleSendInvitation}
            disabled={!isFormValid}
            additionalStyles={{
              marginLeft: "15px",
              marginRight: "15px",
              marginBottom: "10px",
            }}
          />
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default AddFriendDialog;
