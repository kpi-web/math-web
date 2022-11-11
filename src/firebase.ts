// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyApq1jGXM9cpRQhIcyLu4AGyJWU5SwrYv0",
    authDomain: "math-web-a415c.firebaseapp.com",
    projectId: "math-web-a415c",
    storageBucket: "math-web-a415c.appspot.com",
    messagingSenderId: "245869612591",
    appId: "1:245869612591:web:332540bc756d3bcfff00da",
    measurementId: "G-RET53F5LTC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app
