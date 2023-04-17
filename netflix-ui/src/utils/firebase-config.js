import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDPgr3b6GaUB1KmOZXeEn5PK6Qc16CmFcs",
  authDomain: "react-netflix-clone-4e807.firebaseapp.com",
  projectId: "react-netflix-clone-4e807",
  storageBucket: "react-netflix-clone-4e807.appspot.com",
  messagingSenderId: "751376549696",
  appId: "1:751376549696:web:cf5e9722767f5f8cfd9ca5",
  measurementId: "G-D4CWZMT1CF"
};

const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);