import React, {useEffect} from 'react';
import {View, FlatList, StyleSheet} from 'react-native';
import axios, {CancelTokenSource} from 'axios';
import {RootState} from '../redux/store';
import {SearchInput} from '../components/atoms';
import {LoadingComponent, ErrorComponent} from '../components/molecules';
import {MovieItem} from '../components/molecules';
import {useAppDispatch, useAppSelector} from '../redux/hooks';
import {fetchMovies} from '../network/movie-api';
import Debouncer from '../utils/debouncer';
import Routes from '../navigations/routes';
import label from '../translations/en.json'; //TODO: will apply translation later

const HomeScreen: React.FC = ({navigation}) => {
  const dispatch = useAppDispatch();
  const {isLoading, movies, error} = useAppSelector(
    (state: RootState) => state.movies,
  );
  const debouncer = new Debouncer(300);
  const cancelTokenSource: CancelTokenSource = axios.CancelToken.source();

  const cleanUp = () => {
    // TODO: cancel ongoing requests
    cancelTokenSource.cancel();
    debouncer.cleanup;
  };

  useEffect(() => {
    dispatch(fetchMovies(cancelTokenSource.token, ''));
    return () => cleanUp();
  }, [dispatch]);

  const onTextChange = (text: string) =>
    debouncer.debounce(() =>
      dispatch(fetchMovies(cancelTokenSource.token, text)),
    );

  const retryFetchData = () =>
    dispatch(fetchMovies(cancelTokenSource.token, ''));

  const renderItem = ({item}: {item: Movie}) => (
    <MovieItem
      movie={item}
      onPress={() =>
        navigation.navigate(Routes.detailsScreen, {movieId: item['#IMDB_ID']})
      }
    />
  );

  return (
    <View style={styles.container}>
      <SearchInput
        placeholder={label.search_movies}
        onChangeText={(text: string) => onTextChange(text)}
      />
      {isLoading && <LoadingComponent />}
      {error ? (
        <ErrorComponent
          message={error}
          buttonText={label.try_again}
          onButtonPress={retryFetchData}
        />
      ) : (
        <FlatList
          data={movies}
          renderItem={renderItem}
          keyExtractor={item => item['#IMDB_ID']}
          contentContainerStyle={{flexGrow: 1}}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});

export default HomeScreen;
