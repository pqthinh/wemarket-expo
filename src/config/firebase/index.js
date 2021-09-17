import {
  apiKey,
  authDomain,
  databaseURL,
  projectId,
  storageBucket,
  messagingSenderId,
  appId,
  measurementId,
} from "@env";

const firebaseConfig = {
  apiKey: apiKey || "AIzaSyCNXYTZYWysW6kCkgA3MMqbA2z6Z7-C0Bg",
  authDomain: authDomain || "easychat-22849.firebaseapp.com",
  databaseURL:
    databaseURL ||
    "https://easychat-22849-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: projectId || "easychat-22849",
  storageBucket: storageBucket || "easychat-22849.appspot.com",
  messagingSenderId: messagingSenderId || "213287869941",
  appId: appId || "1:213287869941:web:0053d39d90cfaaced0d4bc",
  measurementId: measurementId || "G-TQ679S1022",
};

export default firebaseConfig;
