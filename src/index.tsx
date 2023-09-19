import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// redux
import { Provider } from 'react-redux';
import { combineReducers, createStore } from 'redux';

const data = {
  hi: 100,
};

function plusReducer(state: any = data.hi, action: any) {
  if (action.type === '+') {
    state++;
    return state;
  }
  return state;
}

const reducer = combineReducers({
  plus: plusReducer,
});

let store = createStore(reducer);

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
