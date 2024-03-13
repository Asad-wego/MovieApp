import React from 'react';
import {StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {AppNavigator} from './navigations';
import {navigationRef} from './navigations/navigation-ref';

const App = () => {
  const routeNameRef = React.useRef<string | undefined>();
  const onReady = () => {
    routeNameRef.current = navigationRef.current.getCurrentRoute().name;
  };

  const onStateChange = async () => {
    const preRoute = routeNameRef.current;
    const curRoute = navigationRef.current.getCurrentRoute().name;
    // TODO: can use previous and current route
  };

  return (
    // TODO: will add redux in next ticket
    <NavigationContainer
      ref={navigationRef}
      onReady={onReady}
      onStateChange={onStateChange}>
      <AppNavigator />
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  gestureStyle: {
    flex: 1,
  },
});

export default App;
