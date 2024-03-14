import React from 'react';
import {View, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {TextView} from '../atoms';
import R from '../../styles';

interface MovieItemProps {
  movie: Movie;
  onPress: () => void;
}

const MovieItem: React.FC<MovieItemProps> = ({movie, onPress}) => {
  const {
    '#TITLE': title,
    '#YEAR': year,
    '#ACTORS': actors,
    '#IMG_POSTER': posterUrl,
    '#AKA': aka,
  } = movie;

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image source={{uri: posterUrl}} style={styles.poster} />
      <View style={styles.detailsContainer}>
        <TextView style={styles.title}>{title}</TextView>
        <TextView>{`Year: ${year}`}</TextView>
        <TextView>{`Actors: ${actors}`}</TextView>
        {aka && <TextView>{`AKA: ${aka}`}</TextView>}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: R.colors.primary,
  },
  poster: {
    width: 100,
    height: 150,
    marginRight: 10,
  },
  detailsContainer: {
    flex: 1,
  },
  title: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
});

export default MovieItem;
