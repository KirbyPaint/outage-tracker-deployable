import React from "react";
import PropTypes from "prop-types";

function ReusableForm(props) {

  const ReusableFormStyle = {
    border: "2px solid black",
    borderRadius: "15px",
    backgroundColor: "aliceblue",
    boxShadow: "5px 10px #888888",
    margin: "10px",
    padding: "10px"
  }

  const TextStyle = {
    borderRadius: "15px",
    width: "95%",
    height: "30px",
    marginTop: "10px",
    padding: "15px"
  }

  const TextAreaStyle = {
    borderRadius: "15px",
    width: "95%",
    height: "100px",
    marginTop: "10px",
    padding: "15px"
  }

  const ButtonStyle = {
    borderRadius: "15px",
    backgroundColor: "lightblue",
    width: "100px",
    height: "50px",
    marginTop: "10px"
  }

  return (
    <>
      <div style={ReusableFormStyle}>
        <form onSubmit={props.formSubmissionHandler}>
          <p>Date of Outage<br />
            <input style={TextStyle}
              type="text"
              name="date"
              placeholder="YYYY-MM-DD"
            />
          </p>
          <p>Time of Outage<br />
            <input style={TextStyle}
              type="text"
              name="time"
              placeholder="HH:MM"
            />
          </p>
          <p>Duration of Outage (if known)<br />
            <input style={TextStyle}
              type="text"
              name="duration"
              placeholder="Human-readable time"
            />
          </p>
          <p>Modem or Router Model<br />
            <input style={TextStyle}
              type="text"
              name="routermodel"
              placeholder="Model Name"
            />
          </p>
          <p>Describe troubleshooting steps taken, optionally with time spent on fix<br />
            <textarea style={TextAreaStyle}
              name="troubleshooting"
              placeholder="Describe troubleshooting steps taken in detail."
            /><br />
            <button type="submit" style={ButtonStyle}>{props.buttonText}</button>
          </p>
        </form>
      </div>
    </>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default ReusableForm;