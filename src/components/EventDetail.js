import React from "react";
import PropTypes from "prop-types";

function EventDetail(props) {
  const { event } = props; //new code

  const EventDetailStyle = {
    border: "2px solid black",
    borderRadius: "15px",
    backgroundColor: "aliceblue",
    boxShadow: "5px 10px #888888",
    margin: "10px",
    padding: "10px"
  }

  const ButtonStyle = {
    borderRadius: "15px",
    backgroundColor: "lightblue",
    width: "150px",
    height: "50px",
    marginTop: "10px"
  }

  return (
    <>
      <div style={EventDetailStyle}>
        <h1>Event Detail</h1>
        <p>{event.date} - {event.time}</p>
        <p><em>{event.troubleshooting}</em></p>
        <button onClick={props.onClickingEdit} style={ButtonStyle}>Update Event's Details</button>
      </div>
    </>
  );
}

EventDetail.propTypes = {
  event: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func
};

export default EventDetail;