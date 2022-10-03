import { useState, useContext } from "react";
import { createAuthUser, creatUserDocumentFromAuth } from "../../../util/firebase.utils";
import FormInput from "../../form-input/form-input.component";
import Button from "../../button/button.component";
import './sign-up-form.styles.scss';

const defaultFormField = {
    name: "",
    email: "",
    password: "",
    confirm_password: "",
}


const SignUpForm = () => {
    const [formFields, setFormFields] = useState(defaultFormField);
    const { name, email, password, confirm_password } = formFields;
    
    console.log(formFields);
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormFields({ ...formFields, [name]: value });
    };

    const resetFormFields = (event) => {
      setFormFields(defaultFormField);
    };
    
    const handleSubmit = async (event) => {
        event.preventDefault();
        if (password !== confirm_password) {
            alert("Passwords do not match");
            return;
        }
        
        try {
            const { user } = await createAuthUser(
              email,
              password
            );
      
            

            resetFormFields();
            await creatUserDocumentFromAuth(user, { displayName: name });
          } catch (error) {
            if (error.code === 'auth/email-already-in-use') {
              alert('Cannot create user, email already in use');
            } else {
              console.log('user creation encountered an error', error);
            }
          }
    }
    
    
    return (
        <div className="sign-up-container">
            <h2>Don't have an account?</h2>
            <span>Sign up with your e-mail now!</span>
            <form onSubmit={handleSubmit}>
                <FormInput label="Name" type="text" name="name"    
                value={name} required onChange={handleChange}/>

                <FormInput label="Email" type="text" name="email"  
                value={email} required onChange={handleChange}/>

                <FormInput label="Password" type="password" minLength={8} name="password"  
                value={password} required onChange={handleChange}/>

                <FormInput label="Confirm Password" type="password" minLength={8} name="confirm_password" 
                value={confirm_password} required onChange={handleChange}/>

                <Button type="submit">Sign up</Button>
            </form>
        </div>
    )
}

export default SignUpForm;