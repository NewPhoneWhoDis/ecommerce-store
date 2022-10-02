import { useState, useContext } from "react";
import { signInWithGooglePopup, creatUserDocumentFromAuth, signInAuthUser } from "../../../util/firebase.utils";
import { UserContext } from "../../../contexts/user.context";
import FormInput from "../../form-input/form-input.component";
import Button from "../../button/button.component";
import './sign-in-form.styles.scss';

const defaultFormField = {
    email: "",
    password: "",
}


const SignInForm = () => {
    const [formFields, setFormFields] = useState(defaultFormField);
    const { email, password } = formFields;

    const { setCurrentUser } = useContext(UserContext);
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormFields({ ...formFields, [name]: value });
    };

    const resetFormFields = (event) => {
      setFormFields(defaultFormField);
    };
    
    const handleSubmit = async (event) => {
        event.preventDefault();
        
        try {
          const {user} = await signInAuthUser(email, password);
          setCurrentUser(user);
          resetFormFields();
        } catch (error) {
          if (error.code === 'auth/wrong-password') {
            alert('Wrong credentials. Please try again!');
          } else {
            console.log('Wrong auth', error);
          }
        }
    }

    const signInWithGoogle = async () => {
      const { user } = await signInWithGooglePopup();
      await creatUserDocumentFromAuth(user)
    }
    
    
    return (
        <div className="sign-up-container">
            <h2>Already have an account?</h2>
            <span>Then sign in with your credentials</span>
            <form onSubmit={handleSubmit}>

                <FormInput label="Email" type="text" name="email"  
                value={email} required onChange={handleChange}/>

                <FormInput label="Password" type="password" minLength={8} name="password"  
                value={password} required onChange={handleChange}/>

                <div className="buttons-container">
                  <Button type="submit">Sign in</Button>
                  <Button type="button" buttonType='google' onClick={signInWithGoogle}>
                      Google Sign-In
                  </Button>
                </div>
            </form>
        </div>
    )
}

export default SignInForm;