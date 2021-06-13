import React from "react";
import NewEventForm from "./NewEventForm";
import EventList from "./EventList";
import EventDetail from "./EventDetail";
import EditEventForm from "./EditEventForm";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import * as a from "../actions";
import { withFirestore, isLoaded } from "react-redux-firebase";

const ButtonStyle = {
  borderRadius: "15px",
  backgroundColor: "lightblue",
  width: "100px",
  height: "50px",
  marginTop: "10px"
}

class EventControl extends React.Component {

  constructor(props) {
    super(props);
    // console.log(props);
    this.state = {
      selectedEvent: null,
      editing: false
    };
  }

  componentDidMount() {
    this.waitTimeUpdateTimer = setInterval(() =>
      this.updateEventElapsedWaitTime(),
      1000
    );
  }

  componentDidUpdate() {
    // console.log("component updated!");
  }

  componentWillUnmount() {
    // console.log("component unmounted!");
    clearInterval(this.waitTimeUpdateTimer);
  }

  updateEventElapsedWaitTime = () => {
    // console.log("tick");
  }

  handleAddingNewEventToList = () => {
    const { dispatch } = this.props;
    const action = a.toggleForm();
    dispatch(action);
  }

  handleClick = () => {
    if (this.state.selectedEvent != null) {
      this.setState({
        selectedEvent: null,
        editing: false
      });
    } else {
      const { dispatch } = this.props;
      const action = a.toggleForm();
      dispatch(action);
    }
  }

  handleChangingSelectedEvent = (id) => {
    this.props.firestore.get({ collection: "events", doc: id }).then((event) => {
      const firestoreEvent = {
        date: event.get("date"),
        time: event.get("time"),
        duration: event.get("duration"),
        routermodel: event.get("routermodel"),
        troubleshooting: event.get("troubleshooting"),
        id: event.id
      }
      this.setState({ selectedEvent: firestoreEvent });
    });
  }

  handleEditClick = () => {
    // console.log("handleEditClick reached!");
    this.setState({ editing: true });
  }

  handleEditingEventInList = () => {
    this.setState({
      editing: false,
      selectedEvent: null
    });
  }

  handleDeletingEvent = (id) => {
    this.props.firestore.delete({ collection: "events", doc: id });
    this.setState({ selectedEvent: null });
  }

  render() {
    const auth = this.props.firebase.auth();
    if (!isLoaded(auth)) {
      return (
        <>
          <p>Loading...</p>
        </>
      )
    }
    // if ((isLoaded(auth)) && (auth.currentUser == null)) {
    //   return (
    //     <>
    //       <p>Please sign in to view events</p>
    //     </>
    //   )
    // }
    if ((isLoaded(auth)) && (auth.currentUser == null)) {
      let currentlyVisibleState = <EventList eventList={this.props.masterEventList} onEventSelection={this.handleChangingSelectedEvent} />;
      return (
        <>
          {currentlyVisibleState}
          {/* <button onClick={this.handleClick} style={ButtonStyle}>{buttonText}</button> */}
        </>
      );
    }
    if ((isLoaded(auth)) && (auth.currentUser != null)) {
      let currentlyVisibleState = null;
      let buttonText = null;

      if (this.state.editing) {
        currentlyVisibleState = <EditEventForm event={this.state.selectedEvent} onEditEvent={this.handleEditingEventInList} />
        buttonText = "Return to Event Log";
      } else if (this.state.selectedEvent != null) {
        currentlyVisibleState =
          <EventDetail
            event={this.state.selectedEvent}
            onClickingDelete={this.handleDeletingEvent}
            onClickingEdit={this.handleEditClick} />
        buttonText = "Return to Event Log";
      }
      else if (this.props.formVisibleOnPage) {
        currentlyVisibleState = <NewEventForm onNewEventCreation={this.handleAddingNewEventToList} />;
        buttonText = "Return to Event Log";
      } else {
        currentlyVisibleState = <EventList eventList={this.props.masterEventList} onEventSelection={this.handleChangingSelectedEvent} />;
        buttonText = "Add Event";
      }
      return (
        <>
          {currentlyVisibleState}
          <button onClick={this.handleClick} style={ButtonStyle}>{buttonText}</button>
        </>
      );
    }
  }
}

EventControl.propTypes = {
  masterEventList: PropTypes.object,
  formVisibleOnPage: PropTypes.bool
};

const mapStateToProps = state => {
  return {
    masterEventList: state.masterEventList,
    formVisibleOnPage: state.formVisibleOnPage
  }
}

EventControl = connect(mapStateToProps)(EventControl);

export default withFirestore(EventControl);