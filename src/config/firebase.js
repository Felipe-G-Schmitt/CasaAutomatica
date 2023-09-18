// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage, ref, uploadBytes } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB-aTPdhq0rOL_vWFDnYqZxlomDHixb_jw",
  authDomain: "casautomatica-154db.firebaseapp.com",
  projectId: "casautomatica-154db",
  storageBucket: "casautomatica-154db.appspot.com",
  messagingSenderId: "346875769711",
  appId: "1:346875769711:web:63b19de0ae2d6d4d122e9a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export { app, auth, uploadToFirebase };