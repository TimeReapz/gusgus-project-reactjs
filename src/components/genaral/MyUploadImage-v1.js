import React from "react";
import { v4 as uuidv4 } from "uuid";
import { firebase } from "../../utils/firebase";

export default function MyUploadImage({
  thumbnail,
  setIsLoaded,
  onThumbnailChange,
}) {
  const handleChage = (e) => {
    const file = e.target.files[0];
    if (file !== undefined) {
      setIsLoaded(true);
      const storageRef = firebase.storage().ref(`images/`);
      const fileRef = storageRef.child(
        uuidv4() + "." + file.name.split(".").pop()
      );
      fileRef.put(file).then(() => {
        fileRef.getDownloadURL().then((url) => {
          onThumbnailChange(url);
          setIsLoaded(false);
        });
      });
    }
  };

  return (
    <>
      <div>sss</div>
      <div
        className="text-center position-relative"
        style={{
          width: "150px",
          height: "150px",
          border: "1px dashed rgb(182 186 189)",
          cursor: "pointer",
        }}
      >
        <input
          type="file"
          onChange={handleChage}
          className="custom-file-input h-100"
        />
        {thumbnail && (
          <button
            style={{
              position: "absolute",
              top: 0,
              right: 0,
              width: 20,
              border: 0,
              background: "transparent",
              zIndex: 3,
            }}
            onMouseDown={(e) => {
              onThumbnailChange("");
            }}
          >
            X
          </button>
        )}
        <img
          src={thumbnail}
          className="w-100 position-absolute"
          style={{
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
            height: "100%",
          }}
          alt=""
        />
        {!thumbnail && (
          <i
            className="fas fa-plus position-absolute"
            style={{
              left: "50%",
              top: "50%",
              transform: "translate(-50%, -50%)",
            }}
          ></i>
        )}
      </div>
    </>
  );
}
