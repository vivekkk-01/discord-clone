import store from "../redux/store";
import {
  activeRoomsAction,
  openRoomAction,
  roomDetailsAction,
  setLocalStreamAction,
} from "../redux/actions/roomActions";
import { leaveRoom } from "./socketServer";
import { getLocalStreamPreview } from "./webRTCHandler";

export const createNewRoom = (audioOnly, successCallbackFunc) => {
  getLocalStreamPreview(audioOnly, successCallbackFunc);
};

export const createdNewRom = (roomDetails) => {
  store.dispatch(roomDetailsAction(roomDetails));
};

export const handleActiveRooms = (activeRooms) => {
  store.dispatch(activeRoomsAction(activeRooms));
};

export const leaveRoomHandler = () => {
  const { roomId } = store.getState().room.roomDetails;
  const { localStream } = store.getState().room;
  store.dispatch(openRoomAction(false, false));
  store.dispatch(roomDetailsAction(null));
  if (localStream) {
    localStream.getTracks().forEach((track) => track.stop());
    store.dispatch(setLocalStreamAction(null));
  }
  leaveRoom({ roomId });
};
