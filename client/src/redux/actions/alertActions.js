import { setAlertOpen, setAlertClose } from "../slices/alertSlice";

export const openAlertAction = (alertContent) => (dispatch) => {
  dispatch(setAlertOpen(alertContent));
};

export const closeAlertAction = () => (dispatch) => {
  dispatch(setAlertClose());
};
