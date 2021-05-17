import { connect } from 'react-redux';
import { getMoviesDetail, GET_MOVIES_DETAIL } from '../../actions/index';
import { useDispatch, useSelector } from 'react-redux'
import React, { Component, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import './Movie.css';




export default function Movie() {

    const dispatch = useDispatch()
    const movie = useSelector(state => state.movieDetail)
    const params = useParams(); // DEFINIMOS USEPARAMS() PARA TRAERNOS LOS PARAMETROS DE LA API
    
    useEffect(() => {
        const movieId = params.id;   // usamos params =====> useParams()
        console.log("entre antes del dispatch")
       dispatch(getMoviesDetail(movieId))
       console.log("entre despues del dispatch")
      },[])


            return(
                    <div className="movie-detail">
                    <h1> Detalle de la Pelicula <span className="span-title">{movie.Title}</span></h1> 

                    <div>
                    <figure>
                    <img className="poster"  src={ movie.Poster === "N/A" ?'https://thumbs.dreamstime.com/b/no-image-available-icon-flat-vector-no-image-available-icon-flat-vector-illustration-132482953.jpg':  movie.Poster }></img>
                    </figure> 
                    </div>

                    <h4>Año de lanzamieto: <span  className="span-info">{movie.Released === "N/A" ?  " No se pudo obtener esa informacion." : movie.Released}</span></h4> 
                    <h4>Duracion: <span className="span-info">{ movie.Runtime === "N/A" ?  " No se pudo obtener esa informacion." : movie.Runtime}</span></h4> 
                    <h4>Genero: <span className="span-info">{movie.Genre === "N/A" ?  " No se pudo obtener esa informacion." : movie.Genre}</span></h4> 
                    <h4>Premios: <span className="span-info">{movie.Awards === "N/A" ?  " No se pudo obtener esa informacion." : movie.Awards}</span></h4>
                    <h4>Producida por : <span className="span-info">{movie.Production === "N/A" ?  " No se pudo obtener esa informacion." : movie.Production}</span></h4> 
                    </div>
             );
}





//COMENTADO ESTA CON CLASES
//COMENTADO ESTA CON CLASES
//COMENTADO ESTA CON CLASES
//COMENTADO ESTA CON CLASES
//COMENTADO ESTA CON CLASES





// class Movie extends React.Component {


// componentDidMount(){
       
//     const movieId = this.props.match.params.id;
//     console.log("entre")
//     this.props.getMoviesDetail(movieId);
// }
//     render() {
//         return (
//             <div className="movie-detail">
                   
//                 <h2> Detalle de la Pelicula {this.props.movie.Title}</h2>  
//                 <h4>Año de lanzamieto:{this.props.movie.Released}</h4> 
//                 <h4>Duracion:{this.props.movie.Runtime}</h4> 
//                 <h4>Genero:{this.props.movie.Genre}</h4> 
//                 <h4>Premios:{this.props.movie.Awards}</h4>
//                 <h4>Producida por :{this.props.movie.Production}</h4> 
                


//             </div>
//         );
//     }
// }

// function mapStateToProps(state) {
//     return {
//       movie: state.movieDetail
//     };
//   }
  
//   function mapDispatchToProps(dispatch) {
//     return {
//         getMoviesDetail: id => dispatch(getMoviesDetail(id)),
//     };
//   }

// export default connect(mapStateToProps, mapDispatchToProps) (Movie);