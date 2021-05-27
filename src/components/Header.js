import React from "react";
import { Link } from "react-router-dom";

function Header() {

  const HeaderStyle = {
    border: "2px solid black",
    borderRadius: "15px",
    backgroundColor: "aliceblue",
    boxShadow: "5px 10px #888888",
    margin: "10px",
    padding: "10px"
  }

  return (
    <>
      <div style={HeaderStyle}>
        <h1>XFINITY Outage Tracker</h1>
        <Link to="/">Home</Link> | <Link to="/signin">Sign In</Link>
      </div>
    </>
  );
}

export default Header;