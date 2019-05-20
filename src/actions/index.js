import constants from './../constants';
const { c } = constants;
const { firebaseConfig } = constants;
// import v4 from 'uuid/v4';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

firebase.initializeApp(firebaseConfig);
const rooms = firebase.default.database().ref('rooms');
console.log(rooms);

export function addRoom(_items, _time, _min, _tpi) {
  return () => rooms.push({
    items: _items,
    time: _time,
    min: _min,
    tpi: _tpi
  });
}

export function addItems(roomKey, _items) {
  return () => rooms[roomKey].push({
    items: _items
  });
}

export function watchFirebaseRoomsRef() {
  return function(dispatch) {
    rooms.on('child_added', data => {
      const newRoom = Object.assign({}, data.val(), {
        id: data.getKey()
      });
      const room = firebase.database().ref().child('rooms')
      console.log(newRoom);
    });
  };
}

export const changeView = () => ({
  type: c.CHANGE_VIEW
});

export const changeJoinView = () => ({
  type: c.CHANGE_JOIN_VIEW
});

export function checkRoom(email) {

  const action = {type: c.CHECK_ROOM,
  email}
}

export const addItem = (item) => ({
  type: c.ADD_ITEM,
  item
});

export const registerRoom = (email) => ({
  type: c.REGISTER_ROOM,
  email
});

export function checkKey(key) {
  firebase.database().ref().child('rooms').forEach((room) => {
    if (room.id === key) {

    }
  });
};
