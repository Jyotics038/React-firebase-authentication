import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyA17QT26eUO58wDtCzxX0WMo7ZVfhXyyOM",
    authDomain: "reactfirebaseauth-76813.firebaseapp.com",
    projectId: "reactfirebaseauth-76813",
    storageBucket: "reactfirebaseauth-76813.appspot.com",
    messagingSenderId: "274665920794",
    appId: "1:274665920794:web:6fca3a794572e1d3f3b4a3"
  };

  const app = initializeApp(firebaseConfig);

  export const auth=getAuth(app);