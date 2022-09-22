import { useState } from "react";

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
    const handleChange = (e) =>     {
        const { name, value } = e.target;
        setFormFields({ ...formFields, [name]: value });
    };
    return (
        <div>
            <h1>Sign up with e-mail</h1>
            <form onSubmit={() => {}}>
                <label>Name</label>
                <input type="text" name="name" placeholder="Enter your name" 
                value={name} required onChange={handleChange}/>

                <label>Email</label>
                <input type="text" name="email" placeholder="Enter your e-mail address" 
                value={email} required onChange={handleChange}/>

                <label>Password</label>
                <input type="password" name="password" placeholder="Enter your password" 
                value={password} required onChange={handleChange}/>

                <label>Confirm Password</label>
                <input type="password" name="confirm_password" placeholder="Confirm your password" 
                value={confirm_password} required onChange={handleChange}/>

                <button type="submit">Sign up</button>
            </form>
        </div>
    )
}

export default SignUpForm;