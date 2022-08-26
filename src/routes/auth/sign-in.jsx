import { useEffect } from "react";
import { getRedirectResult } from "firebase/auth";
import {
    auth,
    signInWithGooglePopup,
    creatUserDocumentFromAuth,
    signInWithGoogleRedirect,
} from "../../util/firebase.utils";
//! Empty array means: run the function once, when the component mounts
const SignIn = () => {
    useEffect(async () => {
        const response = await getRedirectResult(auth);
        if (response) {
            const userDocReference = await creatUserDocumentFromAuth(
                response.user
            );
        }
    }, []);

    const logGoogleUser = async () => {
        // destructored off response
        const { user } = await signInWithGooglePopup();
        creatUserDocumentFromAuth(user);
    };

    return (
        <div>
            <h1>Sign In Page</h1>
            <button onClick={logGoogleUser}>Sign in with google </button>
            <button onClick={signInWithGoogleRedirect}>
                Sign in with google{" "}
            </button>
        </div>
    );
};

export default SignIn;
