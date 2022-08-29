import { useEffect } from "react";
import { getRedirectResult } from "firebase/auth";
import {
    auth,
    signInWithGooglePopup,
    creatUserDocumentFromAuth,
    signInWithGoogleRedirect,
} from "../../util/firebase.utils";
import { SignUpForm } from "../../components/sign-up/sign-up-form.component";
const SignIn = () => {
    useEffect(async () => {
        const response = await getRedirectResult(auth);
        if (response) {
            const userDocReference = await creatUserDocumentFromAuth(
                response.user
            );
        }

        return () => {
            console.log("This will be logged on unmount");
        };
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
            <SignUpForm />
        </div>
    );
};

export default SignIn;
