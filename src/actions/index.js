//TODO HECHO X MI
//TODO HECHO X MI
//TODO HECHO X MI

export const ADD_MOVIE_FAVORITE = "ADD_MOVIE_FAVORITE"
export const REMOVE_MOVIE_FAVORITE = "REMOVE_MOVIE_FAVORITE"
export const GET_MOVIES = "GET_MOVIES"
export const GET_MOVIES_DETAIL = "GET_MOVIES_DETAIL"




export function addMovieFavorite(payload) {
    return { type: ADD_MOVIE_FAVORITE, payload };
  }


  export function removeMovieFavorite(payload) {
    return { type: REMOVE_MOVIE_FAVORITE, payload };
  }


  
  export function getMovies(titulo) {
    return function(dispatch) {
      return fetch("http://www.omdbapi.com/?apikey=20dac387&s=" + titulo)
        .then(response => response.json())
        .then(json => {
          dispatch({ type: GET_MOVIES, payload: json });
        });
    };
  }

  export function getMoviesDetail(id) {
    return function(dispatch) {
      return fetch("http://www.omdbapi.com/?apikey=20dac387&i=" + id)
        .then(response => response.json())
        .then(json => {
          dispatch({ type: GET_MOVIES_DETAIL, payload: json });
        });
    };
  }