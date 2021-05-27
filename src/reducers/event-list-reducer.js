export default (state = {}, action) => {
  const { date, time, duration, routermodel, troubleshooting, id } = action;
  switch (action.type) {
    case 'ADD_EVENT':
      return Object.assign({}, state, {
        [id]: {
          date: date,
          time: time,
          duration: duration,
          routermodel: routermodel,
          troubleshooting: troubleshooting,
          id: id
        }
      });
    case 'DELETE_EVENT':
      let newState = { ...state };
      delete newState[id];
      return newState;
    default:
      return state;
  }
};