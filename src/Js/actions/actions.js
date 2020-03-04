import {
  SEARCH_INPUT,
  RATING_SEARCH,
  DELETE_MOVIE
} from '../Constants/actions-types';

export const searchHandler = payload => ({
  type: SEARCH_INPUT,
  payload
});

export const ratingSearch = payload => ({
  type: RATING_SEARCH,
  payload
});

export const deleteMovie = payload => ({
  type: DELETE_MOVIE,
  payload
});
