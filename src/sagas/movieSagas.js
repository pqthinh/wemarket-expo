//Saga effects
import { put, takeLatest } from "redux-saga/effects";
import {
  ADD_MOVIE,
  DELETE_MOVIE,
  DELETE_SUCCEEDED,
  FETCH_FAILED,
  FETCH_MOVIES,
  FETCH_SUCCEEDED,
  UPDATE_MOVIE,
  UPDATE_SUCCEEDED,
} from "../actions/actionTypes";
import { Api } from "../requests/index";

function* fetchMovies() {
  try {
    const receivedMovies = yield Api.getMoviesFromApi();
    yield put({ type: FETCH_SUCCEEDED, receivedMovies: receivedMovies });
  } catch (error) {
    yield put({ type: FETCH_FAILED, error });
  }
}
export function* watchFetchMovies() {
  yield takeLatest(FETCH_MOVIES, fetchMovies);
}
//Add new movie
function* addNewMovie(action) {
  try {
    const result = yield Api.insertNewMovieFromApi(action.newMovie);
    if (result === true) {
      yield put({ type: FETCH_MOVIES, sort: "desc" });
    }
  } catch (error) {
    //do nothing
  }
}
export function* watchAddNewMovie() {
  yield takeLatest(ADD_MOVIE, addNewMovie);
}

function* updateMovie(action) {
  try {
    const result = yield Api.updateMovieFromApi(action.updatedMovie);
    if (result === true) {
      yield put({ type: UPDATE_SUCCEEDED, updatedMovie: action.updatedMovie });
    }
  } catch (error) {}
}
export function* watchUpdateMovie() {
  yield takeLatest(UPDATE_MOVIE, updateMovie);
}

//Delete a movie
function* deleteMovie(action) {
  try {
    const result = yield Api.deleteMovieFromApi(action.deletedMovieId);
    if (result === true) {
      yield put({
        type: DELETE_SUCCEEDED,
        deletedMovieId: action.deletedMovieId,
      });
    }
  } catch (error) {
    //do nothing
  }
}
export function* watchDeleteMovie() {
  yield takeLatest(DELETE_MOVIE, deleteMovie);
}
