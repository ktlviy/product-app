import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC_wwwFtmBfHQikMwnmeWN9kq0Tm5LMHt4",
  authDomain: "time-tracker-calendar-673f3.firebaseapp.com",
  projectId: "time-tracker-calendar-673f3",
  storageBucket: "time-tracker-calendar-673f3.firebasestorage.app",
  messagingSenderId: "660241049253",
  appId: "1:660241049253:web:8d5c6bf9b525c285174f4c",
  measurementId: "G-LG4EH2RQSX",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
