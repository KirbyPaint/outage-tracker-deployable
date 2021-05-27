export const deleteEvent = id => ({
  type: 'DELETE_EVENT',
  id
});

export const toggleForm = () => ({
  type: 'TOGGLE_FORM'
});

export const addEvent = (event) => {
  const { date, time, duration, routermodel, troubleshooting, id } = event;
  return {
    type: 'ADD_EVENT',
    date: date,
    time: time,
    duration: duration,
    routermodel: routermodel,
    troubleshooting: troubleshooting,
    id: id
  }
}