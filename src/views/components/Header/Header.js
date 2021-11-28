import React from "react";
import "./Header.scss";
import { ReactComponent as Logo } from "../../../assets/crown.svg";
import { Link } from "react-router-dom";
import { logOut } from "../../../config/firebase";

const Header = ({ currentUser }) => {
  return (
    <div className="header">
      <Link className="container-logo" to="/">
        <Logo className="logo" />
      </Link>

      <div className="nav-items">
        <Link to="/shop" className="nav-item">
          SHOP
        </Link>
        <Link to="/contact" className="nav-item">
          CONTACT
        </Link>

        {currentUser ? (
          <div className="nav-item" onClick={() => logOut()}>
            SIGN OUT
          </div>
        ) : (
          <Link to="/users/signin" className="nav-item">
            SIGN IN
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
