import { Outlet, Link } from "react-router-dom";
import { Fragment, useContext } from "react";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { UserContext } from "../../contexts/user.context";
import { signOutUser } from "../../util/firebase.utils";
import "./navbar.styles.scss";

const Navbar = () => {
    const { currentUser } = useContext(UserContext)

    return (
        <Fragment>
            <div className="navigation">
                <Link className="logo-container" to="/">
                    <Logo className="logo" />
                </Link>
                <div className="nav-links-container">
                    <Link className="nav-link" to="/shop">
                        Shop 
                    </Link>
                    {
                        currentUser ? (<span className="nav-link" onClick={signOutUser}>Sign Out</span>) :  
                            (<Link className="nav-link" to="/auth"> Sign-in </Link>)
                    }
                </div>
            </div>
            <Outlet />
        </Fragment>
    );
};

export default Navbar;
