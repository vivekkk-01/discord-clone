import { setLocalStreamAction } from "../redux/actions/roomActions";
import store from "../redux/store";

const audioOnlyConstraints = {
  audio: true,
  video: false,
};

const defaultConstraints = {
  audio: true,
  video: true,
};

export const getLocalStreamPreview = (onlyAudio = false, callbackFunc) => {
  const constraints = onlyAudio ? audioOnlyConstraints : defaultConstraints;
  navigator.mediaDevices
    .getUserMedia(constraints)
    .then((stream) => {
      store.dispatch(setLocalStreamAction(stream));
      callbackFunc();
    })
    .catch((err) => {
      console.log("Error:", err);
    });
};
