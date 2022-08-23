import {
    signInWithGooglePopup,
    createUserDocumentFromAuth,
} from "../../util/firebase.utils";

const SignIn = () => {
    const logGoogleUser = async () => {
        // destructored off response
        const { user } = await signInWithGooglePopup();
        createUserDocumentFromAuth(user);
    };
    return (
        <div>
            <div>Sign In Page</div>
            <button onClick={logGoogleUser}>Sign in with google </button>
        </div>
    );
};

export default SignIn;
