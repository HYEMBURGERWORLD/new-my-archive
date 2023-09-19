import { combineReducers, createStore } from 'redux';
import plusReducer from './modules/plusReducer';

const reducer = combineReducers({
  plus: plusReducer,
});

const store = createStore(reducer);

export default store;
