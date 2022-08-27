export const SignUpForm = () => {
    return (
        <div>
            <h1>Sign up with you email and password!</h1>
            <form>
                <label>Display Name</label>
                <input type="text" required />
                <label>Email</label>
                <input type="email" required />
                <label>Password</label>
                <input type="password" required />
                <label>Confirm Password</label>
                <input type="password" required />
            </form>
        </div>
    );
};
