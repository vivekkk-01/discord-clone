import store from "../redux/store";
import {
  activeRoomsAction,
  openRoomAction,
  roomDetailsAction,
} from "../redux/actions/roomActions";
import { createNewRoomInServer, leaveRoom } from "./socketServer";
import { getLocalStreamPreview } from "./webRTCHandler";

export const createNewRoom = () => {
  const successCallbackFunc = () => {
    store.dispatch(openRoomAction(true, true));
    createNewRoomInServer();
  };
  getLocalStreamPreview(false, successCallbackFunc);
};

export const createdNewRom = (roomDetails) => {
  store.dispatch(roomDetailsAction(roomDetails));
};

export const handleActiveRooms = (activeRooms) => {
  console.log("Active rooms:-", activeRooms);
  store.dispatch(activeRoomsAction(activeRooms));
};

export const leaveRoomHandler = () => {
  const { roomId } = store.getState().room.roomDetails;
  store.dispatch(openRoomAction(false, false));
  store.dispatch(roomDetailsAction(null));
  leaveRoom({ roomId });
};
