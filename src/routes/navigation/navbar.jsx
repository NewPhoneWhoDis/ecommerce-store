import { Outlet, Link } from "react-router-dom";
import { Fragment } from "react";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import "./navbar.styles.scss";

const Navbar = () => {
    return (
        <Fragment>
            <div className="navigation">
                <Link className="logo-container" to="/">
                    <Logo className="logo" />
                </Link>
                <div className="nav-links-container">
                    <Link className="nav-links" to="/shop">
                        Shop
                    </Link>
                    <span>|</span>
                    <Link className="nav-links" to="/sign-in">
                        Sign-in
                    </Link>
                </div>
            </div>
            <Outlet />
        </Fragment>
    );
};

export default Navbar;
