interface MoviesState {
  isLoading: boolean;
  error: string | null;
  movies: Movie[];
  selectedMovie: Movie | null;
}
