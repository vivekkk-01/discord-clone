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

export const createdNewRoom = (roomDetails) => {
  store.dispatch(roomDetailsAction(roomDetails));
};

export const handleActiveRooms = (activeRooms) => {
  store.dispatch(activeRoomsAction(activeRooms));
};

export const leaveRoomHandler = () => {
  const { roomId } = store.getState().room.roomDetails;
  leaveRoom({ roomId });
  const { localStream } = store.getState().room;
  if (localStream) {
    localStream.getTracks().forEach((track) => track.stop());
    store.dispatch(setLocalStreamAction(null));
  }
  store.dispatch(roomDetailsAction(null));
  store.dispatch(openRoomAction(false, false));
};
