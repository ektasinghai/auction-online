import { combineReducers } from 'redux';
import currentItemReducer from './current-item-reducer';
import validKeyReducer from './valid-key-reducer';
import itemListReducer from './item-list-reducer';
import newItemReducer from './new-item-reducer';
import registerViewReducer from './register-view-reducer';
import joinViewReducer from './join-view-reducer';
import roomBuiltReducer from './room-built-reducer';

const rootReducer = combineReducers({
  currentItem: currentItemReducer,
  bidList: itemListReducer,
  validKey: validKeyReducer,
  newItem: newItemReducer,
  registerView: registerViewReducer,
  joinView: joinViewReducer,
  roomBuilt: roomBuiltReducer,
});

export default rootReducer;
