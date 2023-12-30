import store from "../redux/store";
import { openRoomAction } from "../redux/actions/roomActions";

export const createNewRoom = () => {
  store.dispatch(openRoomAction(true, true));
};
