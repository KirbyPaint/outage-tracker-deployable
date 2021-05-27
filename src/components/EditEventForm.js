import React from "react";
import ReusableForm from "./ReusableForm";
import PropTypes from "prop-types";
import { useFirestore } from 'react-redux-firebase';

function EditEventForm(props) {
  // Props are arguments passed into React components.
  // Props are also how you pass data from one component to another, as parameters.
  // Props can also be objects
  // React Props are read-only! You will get an error if you try to change their value.

  const EditEventStyle = {
    border: "2px solid black",
    borderRadius: "15px",
    backgroundColor: "aliceblue",
    boxShadow: "5px 10px #888888",
    margin: "10px",
    padding: "10px"
  }

  const { event } = props;
  const firestore = useFirestore();

  function handleEditEventFormSubmission(event) {
    event.preventDefault();
    props.onEditEvent();
    const propertiesToUpdate = {
      date: event.target.date.value,
      time: event.target.time.value,
      duration: event.target.duration.value,
      routermodel: event.target.routermodel.value,
      troubleshooting: event.target.troubleshooting.value
    }
    return firestore.update({ collection: 'events', doc: event.id }, propertiesToUpdate)
  }

  return (
    <>
      <div style={EditEventStyle}>
        <ReusableForm
          formSubmissionHandler={handleEditEventFormSubmission}
          buttonText="Update Event" />
      </div>
    </>
  );
}

EditEventForm.propTypes = {
  event: PropTypes.object,
  onEditEvent: PropTypes.func
};

export default EditEventForm;