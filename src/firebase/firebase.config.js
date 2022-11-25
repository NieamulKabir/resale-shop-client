// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDYcm-zRV11HAwV2q8DyB-4DitE-pSo-e0",
  authDomain: "camera-resale-shop.firebaseapp.com",
  projectId: "camera-resale-shop",
  storageBucket: "camera-resale-shop.appspot.com",
  messagingSenderId: "426293186884",
  appId: "1:426293186884:web:2540cd0fc8f5f3470bc711"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;