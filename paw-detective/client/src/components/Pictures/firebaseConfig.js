import firebase from "firebase/app";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAmzPwYnk3aVam4yd-kL6C91UIy9qAvV2g",
  authDomain: "paw-detective-app.firebaseapp.com",
  projectId: "paw-detective-app",
  storageBucket: "paw-detective-app.appspot.com",
  messagingSenderId: "220066505263",
  appId: "1:220066505263:web:24f1d39ce016c096b25cda",
  measurementId: "G-7BJJTBB0XN",
};

firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();

export { storage };
