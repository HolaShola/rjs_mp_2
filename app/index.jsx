import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from './components/App';
import configureStore from './store/configureStore';
import Immutable, { Iterable } from 'immutable';

const store = configureStore();
const mapObj = Immutable.Map(
  {
    first: "a",
    second: "b",
    third: {
      one: "oneValue",
      two: "twoValue",
    },
  }
)

console.log(mapObj);
// don't use inner keys (undefined)
console.log(mapObj.get("first"));

ReactDOM.render((
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
), document.getElementById('root'));
