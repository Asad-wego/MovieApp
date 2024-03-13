import React from 'react';
import {StyleSheet, Text, TouchableOpacity, SafeAreaView} from 'react-native';
import routes from '../navigations/routes';

const HomeScreen: React.FC = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.navigate(routes.detailsScreen)}>
        <Text>details</Text>
      </TouchableOpacity>
      <Text>home</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});

export default HomeScreen;
