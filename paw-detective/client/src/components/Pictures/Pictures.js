// import { render} from 'react-dom'
import { useState } from "react";
import { storage } from "./firebaseConfig";

console.log(storage);
const PicturesUpload = () => {
  const [image, setImage] = useState(null);
  const [url, setUrl] = useState("");
  const [progress, setProgress] = useState(0);

  const handleChange = (event) => {
    if (event.target.files[0]) {
      setImage(event.target.files[0]);
    }
  };

  const handleUpload = () => {
    const uploadTask = storage.ref(`images/${image.name}`).put(image);
    uploadTask.on(
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
          });
      }
    );
  };
  return (
    <div>
      <div>
        <progress value={progress} max="100" />
      </div>
      <input type="file" onChange={handleChange} />
      <button onClick={handleUpload}>Upload</button>

      <div>
        <img
          src={url || "http://via.placeholder.com/200x200"}
          alt="firebase-pic"
        />
      </div>
    </div>
  );
};

export default PicturesUpload;
