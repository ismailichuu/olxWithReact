import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBOzczxqSxf0cTiCdi4T0o_jrntGUqylxw",
    authDomain: "olx-clone-bb8e7.firebaseapp.com",
    projectId: "olx-clone-bb8e7",
    storageBucket: "olx-clone-bb8e7.firebasestorage.app",
    messagingSenderId: "241521388009",
    appId: "1:241521388009:web:80b967e3fca86431f80378",
    measurementId: "G-1G2X6D8B2Q"
  };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export default db;