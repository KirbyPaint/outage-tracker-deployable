import React from "react";
import PropTypes from "prop-types";

function Event(props) {

  const EventStyle = {
    border: "2px solid black",
    borderRadius: "15px",
    backgroundColor: "aliceblue",
    boxShadow: "5px 10px #888888",
    margin: "10px",
    padding: "10px"
  }

  return (
    <>
      <div style={EventStyle} onClick={() => props.whenEventClicked(props.id)}>
        <p>{props.date} - {props.time}</p>
        <p><em>{props.troubleshooting}</em></p>
      </div>
    </>
  );
}

Event.propTypes = {
  date: PropTypes.string,
  time: PropTypes.string,
  duration: PropTypes.string,
  routermodel: PropTypes.string,
  troubleshooting: PropTypes.string,
  id: PropTypes.string,
  whenEventClicked: PropTypes.func
};

export default Event;