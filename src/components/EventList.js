import React from "react";
import PropTypes from 'prop-types'
import Event from "../components/Event"
// We need to import hooks functionality from both react-redux and react-redux-firebase.
import { useSelector } from 'react-redux'
import { useFirestoreConnect, isLoaded, isEmpty } from 'react-redux-firebase'


function EventList(props) {

  const EventListStyle = {
    border: "2px solid black",
    borderRadius: "15px",
    backgroundColor: "aliceblue",
    boxShadow: "5px 10px #888888",
    margin: "10px",
    padding: "10px"
  }

  // The useFirestoreConnect() hook comes from react-redux-firebase.
  useFirestoreConnect([
    { collection: 'events' }
  ]);

  // The useSelector() hook comes from react-redux.
  const events = useSelector(state => state.firestore.ordered.events);

  // react-redux-firebase also offers a useful isLoaded() function.
  if (isLoaded(events)) {
    return (
      <>
        <div style={EventListStyle}>
          {events.map((event) => {
            return <Event
              whenEventClicked={props.onEventSelection}
              date={event.date}
              time={event.time}
              duration={event.duration}
              routermodel={event.routermodel}
              troubleshooting={event.troubleshooting}
              formattedWaitTime={event.formattedWaitTime}
              id={event.id}
              key={event.id} />
          })}
        </div>
      </>
    );
  }
  else {
    return (
      <>
        <h3>Loading...</h3>
      </>
    )
  }
}

EventList.propTypes = {
  onEventSelection: PropTypes.func
};

export default EventList;