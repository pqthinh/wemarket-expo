import {
  ADD_MOVIE,
  FETCH_MOVIES,
  FETCH_SUCCEEDED,
  FETCH_FAILED,
  UPDATE_MOVIE,
  UPDATE_SUCCEEDED,
  DELETE_MOVIE,
  DELETE_SUCCEEDED,
} from "../actions/actionMovies";
const movieReducers = (movies = [], action) => {
  switch (action.type) {
    case FETCH_SUCCEEDED:
      return action.receivedMovies;
    case FETCH_FAILED:
      return [];
    case UPDATE_SUCCEEDED:
      return movies.map((eachMovie) =>
        eachMovie.id.toString() === action.updatedMovie.id
          ? {
              ...eachMovie,
              name: action.updatedMovie.name,
              releaseYear: action.updatedMovie.releaseYear,
            }
          : eachMovie
      );
    case DELETE_SUCCEEDED:
      const filteredMovies = movies.filter((eachMovie) => {
        return eachMovie.id.toString() !== action.deletedMovieId.toString();
      });
      return filteredMovies;
    default:
      return movies; //state does not change
  }
};

export default movieReducers;
