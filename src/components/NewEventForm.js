import React from "react";
// import { v4 } from 'uuid';
import PropTypes from "prop-types";
import ReusableForm from "./ReusableForm";
import { useFirestore } from 'react-redux-firebase'

function NewEventForm(props) {

  const NewEventStyle = {
    border: "2px solid black",
    borderRadius: "15px",
    backgroundColor: "aliceblue",
    boxShadow: "5px 10px #888888",
    margin: "10px",
    padding: "10px"
  }

  // We add the useFirestore() hook to make Firestore available to our component. (Make sure it lives *inside* the NewEventForm component.)
  const firestore = useFirestore();

  // Note that we updated the name of the function for adding a event to addEventToFirestore. This is a more accurate name for what the function will do now.
  function addEventToFirestore(event) {
    event.preventDefault();

    // We will still need our onNewEventCreation() method to toggle between components - but it will no longer take an argument because it no longer handles creating a event.
    props.onNewEventCreation();

    // Here's how we will actually add a event to Firestore.

    return firestore.collection('events').add(
      {
        date: event.target.date.value,
        time: event.target.time.value,
        duration: event.target.duration.value,
        routermodel: event.target.routermodel.value,
        troubleshooting: event.target.troubleshooting.value,
        timeOpen: firestore.FieldValue.serverTimestamp()
      }
    );
  }

  return (
    <>
      <div style={NewEventStyle}>
        <ReusableForm
          // Don't forget to change the name of the function here as well.
          formSubmissionHandler={addEventToFirestore}
          buttonText="Log This Event" />
      </div>
    </>
  );
}

NewEventForm.propTypes = {
  onNewEventCreation: PropTypes.func
};

export default NewEventForm;