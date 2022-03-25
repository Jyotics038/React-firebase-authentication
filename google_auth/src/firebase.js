// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//by itself
import {getAuth,GoogleAuthProvider,signInWithPopup} from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA-6BuHEXnINkgOIfm8dfNciww3O7L2GYM",
  authDomain: "authentication-3ab1f.firebaseapp.com",
  projectId: "authentication-3ab1f",
  storageBucket: "authentication-3ab1f.appspot.com",
  messagingSenderId: "286929286974",
  appId: "1:286929286974:web:50863d3c3ef371d14c5e6f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app);

const provider=new GoogleAuthProvider();

export const signInWithGoogle=()=>{
    signInWithPopup(auth,provider)
    .then((result)=>{
        const name=result.user.displayName;
        const email=result.user.email;
        const profilePic=result.user.photoURL;

        localStorage.setItem("name",name);
        localStorage.setItem("email",email);
        localStorage.setItem("profilePic",profilePic);
    })
    .catch((error)=>{
        console.log(error);
    });
}