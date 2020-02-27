import React from 'react';
import Routing from './router';
import './App.css';
import store from './Redux/store'
import { Provider } from 'react-redux'

function App() {
  return (
    <Provider store={store}>
      <div>
        <Routing />
      </div>
    </Provider>
  );
}
export default App;
