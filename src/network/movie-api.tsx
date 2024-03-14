import {CancelToken} from 'axios';
import {AppDispatch} from '../redux/store';
import {process} from './network';
import {SBRequest} from '../types/Request';
import {RequestType} from '../types/RequestType';
import {
  fetchMoviesStart,
  fetchMoviesSuccess,
  fetchMoviesFailure,
  fetchMovieDetailsStart,
  fetchMovieDetailsSuccess,
  fetchMovieDetailsFailure,
} from '../redux/slices/movies';
import label from '../translations/en.json';

export const fetchMovies =
  (cancelToken: CancelToken, searchTerm: string) =>
  async (dispatch: AppDispatch) => {
    dispatch(fetchMoviesStart());
    try {
      const url = `?q=${searchTerm}`;
      const request: SBRequest = {type: RequestType.GET, urlString: url};
      const response = await process(request, cancelToken);

      if (response.status === 200) {
        dispatch(fetchMoviesSuccess(response.data.description));
      } else {
        dispatch(fetchMoviesFailure(label.error_fetching_data));
      }
    } catch (error) {
      dispatch(fetchMoviesFailure(label.error_fetching_data));
    }
  };

export const getMovieDetails =
  (cancelToken: CancelToken, movieId: string) =>
  async (dispatch: AppDispatch) => {
    dispatch(fetchMovieDetailsStart());
    try {
      const url = `?tt=${movieId}`;
      const request: SBRequest = {type: RequestType.GET, urlString: url};
      const response = await process(request, cancelToken);
      if (response.status === 200) {
        dispatch(
          fetchMovieDetailsSuccess({
            ...response.data.fake,
            description: response.data.short.description,
            keywords: response.data.short.keywords,
          }),
        );
      } else {
        dispatch(fetchMovieDetailsFailure(label.error_fetching_data));
      }
    } catch (error) {
      dispatch(fetchMovieDetailsFailure(label.error_fetching_data));
    }
  };
