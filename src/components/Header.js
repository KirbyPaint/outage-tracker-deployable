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
        <p>Because there's no good reason that our internet should be this bad, yet here we are.</p>
        <p><a href="https://nationaleconomicseditorial.com/2017/11/27/americans-fiber-optic-internet/">Read</a>--
          <a href="https://bgr.com/general/comcast-twc-customer-satisfaction-survey-study-3536122/">About</a>--
          <a href="https://arstechnica.com/information-technology/2020/01/ajit-pai-promised-faster-broadband-expansion-comcast-cut-spending-instead/">Comcast </a>
          and <a href="https://www.highspeedinternet.com/">consider your options before buying</a></p>
        {/* <Link to="/">Home</Link> | <Link to="/signin">Sign In</Link> */}
      </div>
    </>
  );
}

export default Header;