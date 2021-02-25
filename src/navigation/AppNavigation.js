import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

// Screens
import Home from '../containers/Home';
import Details from '../containers/Details';

const Stack = createStackNavigator();

const AppNavigation = (props) => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Details" component={Details} />
    </Stack.Navigator>
  );
};

export default AppNavigation;
