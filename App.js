import React from 'react';
import {Provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';

// Redux store
import store from './src/redux/store';

// Navigation
import AppNavigation from './src/navigation/AppNavigation';

const App: () => React$Node = () => {
  return (
    <>
      <Provider store={store}>
        <NavigationContainer>
          <AppNavigation />
        </NavigationContainer>
      </Provider>
    </>
  );
};

export default App;
