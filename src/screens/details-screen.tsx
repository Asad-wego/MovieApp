import React, {useEffect} from 'react';
import {View, ScrollView, Image, StyleSheet} from 'react-native';
import axios, {CancelTokenSource} from 'axios';
import {useNavigation} from '@react-navigation/native';
import {useAppDispatch, useAppSelector} from '../redux/hooks';
import {getMovieDetails} from '../network/movie-api';
import {TextView} from '../components/atoms';
import {
  LoadingComponent,
  ErrorComponent,
  HeaderComponent,
} from '../components/molecules';
import R from '../styles';
import label from '../translations/en.json';

interface MovieDetailScreenProps {
  route: {
    params: {
      movieId: string;
    };
  };
}

const MovieDetailScreen: React.FC<MovieDetailScreenProps> = ({route}) => {
  const navigation = useNavigation();
  const dispatch = useAppDispatch();
  const cancelTokenSource: CancelTokenSource = axios.CancelToken.source();
  const {isLoading, selectedMovie, error}: MoviesState = useAppSelector(
    state => state.movies,
  );

  useEffect(() => {
    dispatch(getMovieDetails(cancelTokenSource.token, route.params.movieId));
  }, [dispatch, route.params.movieId]);

  const retryFetchData = () =>
    dispatch(getMovieDetails(cancelTokenSource.token, route.params.movieId));

  const renderContent = () => {
    if (isLoading) {
      return <LoadingComponent showBack={true} message={label.loading} />;
    } else if (error) {
      return (
        <ErrorComponent
          message={error}
          buttonText={label.try_again}
          onButtonPress={retryFetchData}
          showBack={true}
          onBackPress={() => navigation.goBack()}
        />
      );
    } else if (selectedMovie) {
      const {
        '#TITLE': title,
        '#YEAR': year,
        '#ACTORS': actors,
        '#IMG_POSTER': posterUrl,
        '#AKA': aka,
        description,
        keywords,
      } = selectedMovie;
      return (
        <View style={styles.container}>
          <HeaderComponent
            title={label.details_screen}
            onBackPress={() => navigation.goBack()}
          />
          <ScrollView contentContainerStyle={styles.scrollContainer}>
            <Image source={{uri: posterUrl}} style={styles.poster} />
            <View style={styles.detailsContainer}>
              <TextView style={styles.title}>{title}</TextView>
              <TextView style={styles.description}>{description}</TextView>
              <TextView style={styles.label}>{label.actors}</TextView>
              <TextView style={styles.actors}>{actors}</TextView>
              <TextView style={styles.label}>{label.keywords}</TextView>
              <TextView style={styles.keywords}>{keywords}</TextView>
            </View>
          </ScrollView>
        </View>
      );
    }
  };

  return <View style={{flex: 1}}>{renderContent()}</View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContainer: {
    flexGrow: 1,
    alignItems: 'center',
    paddingVertical: 20,
  },
  poster: {
    width: 200,
    height: 300,
    resizeMode: 'cover',
    marginBottom: 20,
  },
  detailsContainer: {
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: R.typography.FONT_WEIGHT_BOLD,
    marginBottom: 10,
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    marginBottom: 10,
    textAlign: 'left',
  },
  label: {
    fontSize: 18,
    fontWeight: R.typography.FONT_WEIGHT_BOLD,
    marginBottom: 5,
    textAlign: 'center',
  },
  actors: {
    fontSize: 16,
    textAlign: 'center',
  },
  keywords: {
    fontSize: 16,
    fontStyle: R.typography.FONT_STYLE_ITALIC,
    textAlign: 'center',
  },
});

export default MovieDetailScreen;
