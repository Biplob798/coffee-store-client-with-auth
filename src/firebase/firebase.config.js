
import { getAuth } from "firebase/auth";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBInrDiQoDrw1v8bAddutctlguN4nuH-gY",
    authDomain: "coffee-store-8f6a2.firebaseapp.com",
    projectId: "coffee-store-8f6a2",
    storageBucket: "coffee-store-8f6a2.appspot.com",
    messagingSenderId: "193728627687",
    appId: "1:193728627687:web:65dbcf71854fc0125a3342"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth


