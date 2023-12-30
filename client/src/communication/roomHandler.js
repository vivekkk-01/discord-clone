import store from "../redux/store";
import {
  openRoomAction,
  roomDetailsAction,
} from "../redux/actions/roomActions";
import { createNewRoomInServer } from "./socketServer";

export const createNewRoom = () => {
  store.dispatch(openRoomAction(true, true));
  createNewRoomInServer();
};

export const createdNewRom = (roomDetails) => {
  store.dispatch(roomDetailsAction(roomDetails));
};
