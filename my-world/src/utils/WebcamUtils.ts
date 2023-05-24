import Webcam from "react-webcam";

type WebcamRefType = React.MutableRefObject<Webcam | null>;

let webcamRef: WebcamRefType = { current: null };

export const setWebcamRef = (ref: WebcamRefType) => {
  webcamRef = ref;
};

export const stopWebCam = () => {
  if (webcamRef?.current?.video) {
    const stream = webcamRef.current.video.srcObject as MediaStream;
    const tracks = stream.getTracks();
    tracks.forEach((track) => track.stop());

    webcamRef.current.video.srcObject = null;
  }
};
