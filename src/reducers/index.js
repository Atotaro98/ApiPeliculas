import  {ADD_MOVIE_FAVORITE, REMOVE_MOVIE_FAVORITE, GET_MOVIES_DETAIL, GET_MOVIES} from '../actions/index'

//TODO HECHO X MI
//TODO HECHO X MI
//TODO HECHO X MI
//TODO HECHO X MI

const initialState = {
    moviesFavourites: [],
    moviesLoaded: [],
    movieDetail: {}
  };


  function rootReducer(state = initialState, action) {
    if (action.type === ADD_MOVIE_FAVORITE) {
        return {
          ...state,
          moviesFavourites: state.moviesFavourites.concat(action.payload)
        }
    }

    if (action.type === REMOVE_MOVIE_FAVORITE) {
        return {
          ...state,
          moviesFavourites: state.moviesFavourites.filter(movie => movie !== action.payload)
        }
    }

    if (action.type === GET_MOVIES_DETAIL) {
        return {
          ...state,
         movieDetail: action.payload
        }
    }


    if (action.type === GET_MOVIES) {
        return {
          ...state,
          moviesLoaded: action.payload.Search
        };
    }
    return state;
  }
  
  export default rootReducer;