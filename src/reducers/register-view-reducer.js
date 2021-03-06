import constants from './../constants';
const { c } = constants;

export default (state = true, action) => {
  let newState;
  switch(action.type) {
  case c.CHANGE_VIEW:
    newState = !state;
    return newState;
  case c.SET_VIEW:
    return true;
  default:
    return state;
  }
};
