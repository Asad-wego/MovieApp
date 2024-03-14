import {createSlice, PayloadAction} from '@reduxjs/toolkit';

const initialState: MoviesState = {
  isLoading: false,
  error: null,
  movies: [],
  selectedMovie: null,
};

const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    fetchMoviesStart(state) {
      state.isLoading = true;
      state.error = null;
    },
    fetchMoviesSuccess(state, action: PayloadAction<Movie[]>) {
      state.isLoading = false;
      state.movies = action.payload;
    },
    fetchMoviesFailure(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
    },
    fetchMovieDetailsStart(state) {
      state.isLoading = true;
      state.error = null;
    },
    fetchMovieDetailsSuccess(state, action: PayloadAction<Movie>) {
      state.isLoading = false;
      state.selectedMovie = action.payload;
    },
    fetchMovieDetailsFailure(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const {
  fetchMoviesStart,
  fetchMoviesSuccess,
  fetchMoviesFailure,
  fetchMovieDetailsStart,
  fetchMovieDetailsSuccess,
  fetchMovieDetailsFailure,
} = moviesSlice.actions;

export default moviesSlice.reducer;
