import React, { Component } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import './Favorites.css';
import { removeMovieFavorite} from '../../actions/index' //AGREGADO X MI



export default function ConnectedList() {

    const dispatch = useDispatch()
    const movieFavorita = useSelector(state => state.moviesFavourites)

  
  return(

    
            <div>
              <div className="centrado">
              <h2 className="favoritas-titulo">Tus Películas Favoritas</h2>
              </div>
              <ul>
                { movieFavorita && movieFavorita.map(movie =>(
              
                  <div  className="peli" key={movie.imdbID}>
                    <h1>{movie.Title}</h1>

                    <div className="imagen">
                      <figure>
                            <span className="año">{movie.Year}</span> 
                            <Link className="link" to={`/movie/${movie.imdbID}`}>  <img className="poster"  src={ movie.Poster === "N/A" ?'https://thumbs.dreamstime.com/b/no-image-available-icon-flat-vector-no-image-available-icon-flat-vector-illustration-132482953.jpg':  movie.Poster }></img> </Link> 
                          </figure> 
                         </div>
                      <button className="remove-favorite" onClick={() =>dispatch(removeMovieFavorite(movie)) }>Remover de Favoritas</button>
                      
                  </div>
      
                )) 
                }
              </ul>
            </div>
         
  );

}




//COMENTADO ESTA CON CLASES
//COMENTADO ESTA CON CLASES
//COMENTADO ESTA CON CLASES
//COMENTADO ESTA CON CLASES



// export class ConnectedList extends Component {

//   render() {
//       return (
//       <div>
//         <h2>Películas Favoritas</h2>
//         <ul>
//           { this.props.movies && this.props.movies.map(movie =>(
//              //AGREGADO X MI EL KEY PARA QUE TENGAN UN KEY UNICO X EL ID
//             <div  >
//                 <Link to={`/movie/${movie.id}`}> 
//                   {movie.Title}     
//                   </Link> 
//                 <button onClick={() => this.props.removeMovieFavorite(movie)}>X</button> {/*COPY PASTE DEL README*/}
//             </div>

//           )) 
//           }
//         </ul>
//       </div>
//     );
//   }
// }


// function mapStateToProps(state) {
//   return {
//     movies: state.moviesFavourites
//   };
// }

// function mapDispatchToProps(dispatch) {
//   return {
//     removeMovieFavorite: movie => dispatch(removeMovieFavorite(movie)),
//   };
// }

// export default connect(mapStateToProps, mapDispatchToProps)(ConnectedList);
