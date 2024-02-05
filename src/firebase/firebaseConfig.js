
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
import {getAuth} from 'firebase/auth';


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
const fireDB = getFirestore(app);
const auth = getAuth(app);

export {fireDB,auth};