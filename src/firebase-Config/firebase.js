import { initializeApp } from "firebase/app";

const firebaseConfig = {
 apiKey: "AIzaSyB8mOKhlEANZmOWCs5dvWk8x75cxq348DU",
  authDomain: "gadget-shop-5ee67.firebaseapp.com",
  projectId: "gadget-shop-5ee67",
  storageBucket: "gadget-shop-5ee67.firebasestorage.app",
  messagingSenderId: "532836601788",
  appId: "1:532836601788:web:671a1c4a27f190493265b9"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);