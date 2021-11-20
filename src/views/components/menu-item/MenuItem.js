import React from "react";
import "./MenuItem.scss";
import { Link } from "react-router-dom";

const MenuItem = ({ title, imageUrl, size, linkUrl }) => {
  return (
    <Link to={linkUrl} className={`${size} menu-item`}>
      <div
        style={{
          backgroundImage: `url(${imageUrl})`
        }}
        className="background-image"
      />
      <div className="content">
        <h1 className="title">{title}</h1>
        <div className="subtitle">SHOP NOW</div>
      </div>
    </Link>
  );
};

export default MenuItem;
