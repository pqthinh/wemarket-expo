import {
  ADD_MOVIE,
  DELETE_MOVIE,
  DELETE_SUCCEEDED,
  FETCH_FAILED,
  FETCH_MOVIES,
  FETCH_SUCCEEDED,
  UPDATE_MOVIE,
  UPDATE_SUCCEEDED,
} from "./actionMovies";

export const fetchMoviesAction = (sort) => {
  return {
    type: FETCH_MOVIES,
    sort,
  };
};

export const addMovieAction = (newMovie) => {
  return {
    type: ADD_MOVIE,
    newMovie,
  };
};
export const fetchSuccessAction = (receivedMovies) => {
  return {
    type: FETCH_SUCCEEDED,
    receivedMovies,
  };
};

export const fetchFailedAction = (error) => {
  return {
    type: FETCH_FAILED,
    error,
  };
};

//Update existing movie
export const updateItemAction = (updatedMovie) => {
  return {
    type: UPDATE_MOVIE,
    updatedMovie,
  };
};
//Action sent by Redux-saga
export const updateItemSuccessAction = (updatedMovie) => {
  return {
    type: UPDATE_SUCCEEDED,
    updatedMovie,
  };
};
//Delete existing movie
export const deleteItemAction = (deletedMovieId) => {
  return {
    type: DELETE_MOVIE,
    deletedMovieId,
  };
};
//Action sent by Redux-saga
export const deleteItemSuccessAction = (deletedMovieId) => {
  return {
    type: DELETE_SUCCEEDED,
    deletedMovieId,
  };
};
