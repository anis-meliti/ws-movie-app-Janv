import {
  SEARCH_INPUT,
  RATING_SEARCH,
  DELETE_MOVIE
} from '../Constants/actions-types';

const initialState = {
  movieList: [
    {
      id: 1050,
      title: 'V for Vandetta',
      poster:
        'http://i.ebayimg.com/00/s/NTAwWDMzMw==/z/VIsAAOxyaTxTWIqs/$_3.JPG?set_id=2',
      rating: 5,
      trailer: 'https://www.youtube.com/embed/lSA7mAHolAw'
    },
    {
      id: 1205,
      title: 'The Detachement',
      poster:
        'https://www.joblo.com/assets/images/oldsite/posters/images/full/detachment-french-poster.jpg',
      rating: 4,
      trailer: 'https://www.youtube.com/embed/w7lBleOF9Pw'
    },
    {
      id: 20265,
      title: 'The experiment',
      poster:
        'https://images-na.ssl-images-amazon.com/images/I/51UFOnvEviL.jpg',
      rating: 5,
      trailer: 'https://www.youtube.com/embed/JlUkzfITiSs'
    },
    {
      id: 336598,
      title: 'Inception',
      poster:
        'https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SY1000_CR0,0,675,1000_AL_.jpg',
      rating: 4,
      trailer: 'https://www.youtube.com/embed/YoHD9XEInc0&t'
    }
  ],
  searchInput: '',
  ratingSearch: 0
};

const movieReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SEARCH_INPUT:
      return {
        ...state,
        searchInput: payload
      };
    case RATING_SEARCH:
      return {
        ...state,
        ratingSearch: payload
      };
    case DELETE_MOVIE:
      return {
        ...state,
        //eslint-disable-next-line
        movieList: state.movieList.filter(el => el.id != payload)
      };

    default:
      return state;
  }
};

export default movieReducer;
