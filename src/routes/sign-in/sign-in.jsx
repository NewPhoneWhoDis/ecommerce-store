import { signInWithGooglePopup } from "../../util/firebase.utils";

const SignIn = () => {
    const logGoogleUser = async () => {
        const user = await signInWithGooglePopup();
    }
    return (
        <div>
            <h1>Sign in page</h1>
            <button onClick={logGoogleUser}>
                Sign in with Google
            </button>
        </div>
    )
}

export default SignIn;
