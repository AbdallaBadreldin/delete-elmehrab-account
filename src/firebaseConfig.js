// firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase, ref, remove,onValue ,set  } from 'firebase/database';
import { getStorage, ref as storageRef, deleteObject } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyD9TsaBx7lRp9Tfmycx7UFP1s4x5L2P2d4",
  authDomain: "my-items-7cb3e.firebaseapp.com",
  databaseURL: "https://my-items-7cb3e-default-rtdb.firebaseio.com",
  projectId: "my-items-7cb3e",
  storageBucket: "my-items-7cb3e.appspot.com",
  messagingSenderId: "270447319098",
  appId: "1:270447319098:web:89de038eb13ee7a2073d03",
  measurementId: "G-YTFJ66NH61"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getDatabase(app);
const storage = getStorage(app);
export { auth , database, ref, remove,onValue, getStorage, storageRef, deleteObject ,storage,set};