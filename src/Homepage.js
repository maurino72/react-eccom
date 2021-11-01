import React from "react";
import "./Homepage.scss";

const Homepage = () => {
  return (
    <div className="homapage">
      <div className="directory-menu">
        <div className="menu-item">
          <div className="content">
            <h1 className="title">HATS</h1>
            <div className="subtitle">SHOP NOW</div>
          </div>
        </div>

        <div className="menu-item">
          <div className="content">
            <h1 className="title">JACKETS</h1>
            <div className="subtitle">SHOP NOW</div>
          </div>
        </div>

        <div className="menu-item">
          <div className="content">
            <h1 className="title">JEANS</h1>
            <div className="subtitle">SHOP NOW</div>
          </div>
        </div>

        <div className="menu-item">
          <div className="content">
            <h1 className="title">WOMENS</h1>
            <div className="subtitle">SHOP NOW</div>
          </div>
        </div>

        <div className="menu-item">
          <div className="content">
            <h1 className="title">MENS</h1>
            <div className="subtitle">SHOP NOW</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
