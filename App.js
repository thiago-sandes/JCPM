import React from 'react';
import {Provider} from 'react-redux';

// Redux store
import store from './src/redux/store';

// Containers
import Home from './src/containers/Home';

const App: () => React$Node = () => {
  return (
    <>
      <Provider store={store}>
        <Home />
      </Provider>
    </>
  );
};

export default App;
