import { setErrorAlertOpen, setErrorAlertClose } from "../slices/errorAlertSlice";

export const openErrorAlertAction = (errorAlertContent) => (dispatch) => {
  dispatch(setErrorAlertOpen(errorAlertContent));
};

export const closeErrorAlertAction = () => (dispatch) => {
  dispatch(setErrorAlertClose());
};
