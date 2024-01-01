import store from "../redux/store";
import {
  activeRoomsAction,
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

export const handleActiveRooms = (activeRooms) => {
  store.dispatch(activeRoomsAction(activeRooms));
};
