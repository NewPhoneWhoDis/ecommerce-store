import { 
    signInWithGooglePopup,
    creatUserDocumentFromAuth
} from "../../util/firebase.utils";
import SignUpForm from "../../components/auth/sign-up-form/sign-up-form.component";

const SignIn = () => {
    const logGoogleUser = async () => {
        const { user } = await signInWithGooglePopup();
        const userDocRef = await creatUserDocumentFromAuth(user)
    }

    return (
        <div>
            <h1>Sign in page</h1>
            <button onClick={logGoogleUser}>
                Sign in with Google
            </button>
            <SignUpForm />
        </div>
    )
}

export default SignIn;
