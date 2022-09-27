import { initializeApp } from 'firebase/app'
import {
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider,
    createUserWithEmailAndPassword
} from "firebase/auth"
import {
    getFirestore,
    doc,
    getDoc,
    setDoc
} from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyB-_9f9xMPxjgP1MxgJN6em7h4O4h9qMwM",
    authDomain: "e-commerce-watches.firebaseapp.com",
    projectId: "e-commerce-watches",
    storageBucket: "e-commerce-watches.appspot.com",
    messagingSenderId: "110682019219",
    appId: "1:110682019219:web:ddfe53647d3294f76d0466"
};

const firebaseApp = initializeApp(firebaseConfig);
const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
    prompt: "select_account"
});

export const auth = getAuth();
export const db = getFirestore();

export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider);

export const creatUserDocumentFromAuth = async (userAuth, additionalInformation = {}) => {
    if(!userAuth) return;
    
    const userDocumentReference = doc(db, 'users', userAuth.uid);

    //Snapshot = data/specific kind of object
    const userSnapshot = await getDoc(userDocumentReference)

    if (!userSnapshot.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(userDocumentReference, { displayName, email, createdAt, additionalInformation })
        } catch (error) {
            console.log('error has occured while creating the user', error.message);
        }
    }
    return userDocumentReference;
}

export const createAuthUser = async (email, password) => {
     if(!email || !password) return;

     return await createUserWithEmailAndPassword(auth, email, password);
} 