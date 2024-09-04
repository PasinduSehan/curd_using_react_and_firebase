import { initializeApp } from "firebase/app";
import { getFirestore } from '@firebase/firestore'


const firebaseConfig = {
    apiKey: "AIzaSyBoW4X_l-mi8IcV6y8pnKCBJe_wVYwYgTE",
    authDomain: "fir-tutorial-753c0.firebaseapp.com",
    projectId: "fir-tutorial-753c0",
    storageBucket: "fir-tutorial-753c0.appspot.com",
    messagingSenderId: "841778650692",
    appId: "1:841778650692:web:54584f4c8f2cdcad572611",
    measurementId: "G-F1YLMW7VHD"
  };


  const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

