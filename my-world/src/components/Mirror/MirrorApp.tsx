import React, { useRef, useEffect } from "react";
import Webcam from "react-webcam";
import { setWebcamRef } from "utils/WebcamUtils";

export const Mirror = () => {
  const webcamRef = useRef(null);

  useEffect(() => {
    setWebcamRef(webcamRef);
  }, []);

  const videoConstraints = {
    width: 2480,
    height: 1440,
    facingMode: "user",
  };
  return (
    <>
      <Webcam
        audio={false}
        ref={webcamRef}
        mirrored={true}
        screenshotFormat="image/jpeg"
        style={{
          position: "absolute",
          textAlign: "center",
          height: "100%",
          width: "100%",
          objectFit: "cover",
        }}
        videoConstraints={videoConstraints}
      ></Webcam>
    </>
  );
};
