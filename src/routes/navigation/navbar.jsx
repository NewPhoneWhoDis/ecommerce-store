import { Outlet, Link } from "react-router-dom";
import { Fragment } from "react";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import "./navbar.styles.scss";
import { AppBar, Toolbar, Tabs, Tab, Typography } from "@mui/material";
import SignIn from "../auth/sign-in";

const Navbar = () => {
    return (
        <Fragment>
<<<<<<< HEAD
            <AppBar sx={{ background: "#000" }}>
                <Toolbar>
                    <Typography>
                        <Link className="logo-container" to="/">
                            <Logo className="logo" />
                        </Link>
                    </Typography>
                    <Tabs>
                        <Link
                            className="nav-links-container"
                            to="/sign-in"
                            element={<SignIn />}
                        >
                            <Tab
                                sx={{
                                    color: "white",
                                    justifyContent: "flex-end",
                                    alignItems: "center",
                                }}
                                label="Sign-in"
                            />
                        </Link>
                        <Link className="nav-links-container" to="/shop">
                            <Tab
                                sx={{
                                    color: "white",
                                    justifyContent: "flex-end",
                                    alignItems: "center",
                                }}
                                label="Shop"
                            />
                        </Link>
                        <Link className="nav-links-container" to="/faq">
                            <Tab
                                sx={{
                                    color: "white",
                                    justifyContent: "flex-end",
                                    alignItems: "center",
                                }}
                                label="FAQ"
                            />
                        </Link>
                        <Link className="nav-links-container" to="/contact">
                            <Tab
                                sx={{
                                    color: "white",
                                    justifyContent: "flex-end",
                                    alignItems: "center",
                                }}
                                label="Contact us"
                            />
                        </Link>
                    </Tabs>
                </Toolbar>
            </AppBar>
=======
            <div className="navigation">
                <Link className="logo-container" to="/">
                    <Logo className="logo" />
                </Link>
                <div className="nav-links-container">
                    <Link className="nav-link" to="/shop">
                        Shop 
                    </Link>
                    <Link className="nav-link" to="/sign-in">
                        Sign-in
                    </Link>
                </div>
            </div>
>>>>>>> revert-1-develop
            <Outlet />
        </Fragment>
    );
};

export default Navbar;
