import { initializeApp } from 'firebase/app'
import {
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider
} from "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyB-_9f9xMPxjgP1MxgJN6em7h4O4h9qMwM",
    authDomain: "e-commerce-watches.firebaseapp.com",
    projectId: "e-commerce-watches",
    storageBucket: "e-commerce-watches.appspot.com",
    messagingSenderId: "110682019219",
    appId: "1:110682019219:web:ddfe53647d3294f76d0466"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt: "select_account"
})

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider)