import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
apiKey: "AIzaSyCmJGvJxBG8kcnV2vkF2TPXn-AR5QMO34g",
authDomain: "kazuki-store.firebaseapp.com",
projectId: "kazuki-store",
storageBucket: "kazuki-store.firebasestorage.app",
messagingSenderId: "135805600057",
appId: "1:135805600057:web:5c3b726ecd32f5abd2a8e8"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);