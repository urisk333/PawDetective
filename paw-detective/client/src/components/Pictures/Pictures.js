import "./Pictures.css";
import { useState } from "react";
import { storage } from "./firebaseConfig";

const PicturesUpload = ({ setPicture }) => {
  const [image, setImage] = useState(null);
  const [url, setUrl] = useState("");
  const [progress, setProgress] = useState(0);

  const handleChange = (event) => {
    if (event.target.files[0]) {
      setImage(event.target.files[0]);
    }
  };

  const handleUpload = () => {
    if (image) {
      const uploadTask = storage.ref(`images/${image.name}`).put(image);
      uploadTask.on(
        "state_changed",
        //current progress of the file upload
        (snapshot) => {
          const progress = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );
          setProgress(progress);
        },
        (error) => {
          console.log(error);
        },
        () => {
          storage
            .ref("images")
            .child(image.name)
            .getDownloadURL()
            .then((url) => {
              setUrl(url);
              setPicture(url);
            });
        }
      );
    }
  };
  return (
    <div>
      <div>
        <progress value={progress} max="100" />
      </div>
      <input type="file" onChange={handleChange} />

      <div>
        <img
          className="pet-picture"
          src={url || "http://via.placeholder.com/200x200"}
          alt="firebase-pic"
        />
      </div>
      <div className="pictures-button" onClick={handleUpload}>
        Upload Picture
      </div>
    </div>
  );
};

export default PicturesUpload;
