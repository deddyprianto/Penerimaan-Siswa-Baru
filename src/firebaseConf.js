import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAd4LB9tQ06S3CAngHTD5x-WOBYokh2a-4",
  authDomain: "projectyohanes-fad45.firebaseapp.com",
  projectId: "projectyohanes-fad45",
  storageBucket: "projectyohanes-fad45.appspot.com",
  messagingSenderId: "450114891459",
  appId: "1:450114891459:web:49459bdfa2bb85b00d7c76",
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export default db;
