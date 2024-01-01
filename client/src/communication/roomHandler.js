import store from "../redux/store";
import {
  activeRoomsAction,
  openRoomAction,
  roomDetailsAction,
} from "../redux/actions/roomActions";
import { createNewRoomInServer, leaveRoom } from "./socketServer";

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

export const leaveRoomHandler = () => {
  const { roomId } = store.getState().room.roomDetails;
  store.dispatch(openRoomAction(false, false));
  store.dispatch(roomDetailsAction(null));
  leaveRoom({ roomId });
};
