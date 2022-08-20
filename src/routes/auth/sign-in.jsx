import { signInWithGooglePopup } from "../../util/firebase.utils";

const SignIn = () => {
    const logGoogleUser = async () => {
        const response = await signInWithGooglePopup();
    };
    return (
        <div>
            <div>Sign In Page</div>
            <button onClick={logGoogleUser}>Sign in with google </button>
        </div>
    );
};

export default SignIn;
