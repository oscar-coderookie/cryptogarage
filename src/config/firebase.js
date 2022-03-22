// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBAKjoNSexDaFuyIvAhOF3R503rO4tacU4",
  authDomain: "cryptogarage-chris-rosas.firebaseapp.com",
  projectId: "cryptogarage-chris-rosas",
  storageBucket: "cryptogarage-chris-rosas.appspot.com",
  messagingSenderId: "189521552898",
  appId: "1:189521552898:web:f2c4767bd4f7b465c0691b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export{ app };