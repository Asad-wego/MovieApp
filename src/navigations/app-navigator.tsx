import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Routes from './routes';
import {DetailsScreen, HomeScreen} from '../screens';

const AppStack = createStackNavigator();

const AppNavigator = () => {
  return (
    <AppStack.Navigator>
      <AppStack.Screen
        name={Routes.homeScreen}
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <AppStack.Screen
        name={Routes.detailsScreen}
        component={DetailsScreen}
        options={{headerShown: false}}
      />
    </AppStack.Navigator>
  );
};

export default AppNavigator;
