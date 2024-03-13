import React from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';

interface MovieDetailScreenProps {
  route: {
    params: {
      movieId: string;
    };
  };
}

const MovieDetailScreen: React.FC<MovieDetailScreenProps> = ({route}) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>details</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default MovieDetailScreen;
