import {
  FETCH_MOVIES_REQUEST,
  FETCH_MOVIES_FAILURE,
  FETCH_MOVIES_RECEIVE,
  FETCH_CURRENT_MOVIE_RECEIVE,
  FETCH_SIMILAR_MOVIES_REQUEST,
  GET_SIMILAR_MOVIES,
  CHANGE_TYPE_OF_SEARCH,
  CHANGE_TYPE_OF_SORT,
} from '../constants';
import { apiKey } from '../../config';


export const moviesRequest = isMoviesRequest => (
  {
    type: FETCH_MOVIES_REQUEST,
    payload: isMoviesRequest,
  }
);

export const moviesReceive = data => (
  {
    type: FETCH_MOVIES_RECEIVE,
    payload: data,
  }
);

export const moviesFetchFailure = isMoviesFetchFailure => (
  {
    type: FETCH_MOVIES_FAILURE,
    payload: isMoviesFetchFailure,
  }
);

export const currentMovieReceive = data => (
  {
    type: FETCH_CURRENT_MOVIE_RECEIVE,
    payload: data,
  }
);

export const similarFilms = data => (
  {
    type: GET_SIMILAR_MOVIES,
    payload: data,
  }
);

export const similarMoviesRequest = isSimilarMoviesRequest => (
  {
    type: FETCH_SIMILAR_MOVIES_REQUEST,
    payload: isSimilarMoviesRequest,
  }
);

export const changeTypeOfSearch = buttonValue => (
  {
    type: CHANGE_TYPE_OF_SEARCH,
    payload: buttonValue,
  }
);

export const changeTypeOfSort = buttonValue => (
  {
    type: CHANGE_TYPE_OF_SORT,
    payload: buttonValue,
  }
);

export const getFilms = (searchValue, buttonValueForSearch) => (dispatch) => {
  dispatch(moviesRequest(true));
  fetch(`https://api.themoviedb.org/3/search/${buttonValueForSearch}?api_key=${apiKey}&query=${searchValue.replace(' ', '+')}`)
    .then((response) => {
      dispatch(moviesRequest(false));
      return response.json();
    })
    .then((data) => {
      dispatch(moviesReceive(data.results));
    });
};

export const getCurrentFilm = currentFilmId => (dispatch) => {
  dispatch(moviesRequest(true));
  fetch(`https://api.themoviedb.org/3/movie/${currentFilmId}?api_key=${apiKey}`)
    .then((response) => {
      dispatch(moviesRequest(false));
      return response.json();
    })
    .then((data) => {
      dispatch(currentMovieReceive(data));
    });
};

export const getSimilarFilms = currentFilmId => (dispatch) => {
  dispatch(similarMoviesRequest(true));
  fetch(`https://api.themoviedb.org/3/movie/${currentFilmId}/similar?api_key=${apiKey}`)
    .then(response =>
      response.json(),
    )
    .then((data) => {
      dispatch(similarFilms(data));
      dispatch(similarMoviesRequest(false));
    });
};
