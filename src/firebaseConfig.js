// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBpj5p6tzIOBjA-hWQhpG15JBRtpGivVIA",
  authDomain: "linkdin-clone-cbee4.firebaseapp.com",
  projectId: "linkdin-clone-cbee4",
  storageBucket: "linkdin-clone-cbee4.appspot.com",
  messagingSenderId: "846918930002",
  appId: "1:846918930002:web:2e5ac9d99847f61a5a198b"
};

// Initialize Firebase
 const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export {auth,app}