import React, { Component, useState, useEffect } from "react";
import { connect } from "react-redux";
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import './Buscador.css';
import { addMovieFavorite, getMovies} from '../../actions/index' //AGREGADO X MI


 export default function Buscador () {
    const [title, setTitle] = useState('')



    const dispatch = useDispatch()
    const movieName = useSelector(state => state.moviesLoaded)



   function handleChange (e){
     setTitle(e.target.value)
    }

  
    function handleSubmit (e) {
        e.preventDefault();
        dispatch(getMovies(title))
       }

       
   

    return (
            <div className="formulario">
              
              <form className="form-container" onSubmit={(e) => handleSubmit(e)}>
                <div>
                  <label className="label" htmlFor="title">Película: </label>
                  <input
                    type="text"
                    id="title"
                    autoComplete="off"
                    value={title}
                    onChange={(e) => handleChange(e)}
                  />
                  <button className="buscar" type="submit">BUSCAR</button>
                </div>
                
              </form>
              <section className="contenedor"> 
               {  
                movieName && movieName.map(movie =>(
                
                  <div className="peli" key={movie.imdbID}>
                      
                       
                       <h1>{movie.Title}</h1>   
                        
                        <div className="imagen">
                          
                          <figure>
                            <span className="año">{movie.Year}</span> 
                            <Link className="link" to={`/movie/${movie.imdbID}`}>  <img className="poster"  src={ movie.Poster === "N/A" ?'https://thumbs.dreamstime.com/b/no-image-available-icon-flat-vector-no-image-available-icon-flat-vector-illustration-132482953.jpg':  movie.Poster }></img> </Link> 
                          </figure>
                       </div>
                        <button className="favorita" onClick={ () => dispatch(addMovieFavorite({Title: movie.Title, id: movie.imdbID, Poster:movie.Poster, Year: movie.Year, }))}>Añadir a Favorita</button>
                  </div>
                    
                 ))
               } 
              </section>
            </div>
          );

} ;

//COMENTADO ESTA CON CLASES
//COMENTADO ESTA CON CLASES
//COMENTADO ESTA CON CLASES
//COMENTADO ESTA CON CLASES
//COMENTADO ESTA CON CLASES


// export class Buscador extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       title: ""
//     };
//   }
//   handleChange(event) {
//     this.setState({ title: event.target.value });
//   }
//   handleSubmit(event) {
//     event.preventDefault();
//     this.props.getMovies(this.state.title) //AGREGADO X MI
//   }

//   render() {
//     const { title } = this.state;
//     return (
//       <div>
//         <h2>Buscador</h2>
//         <form className="form-container" onSubmit={(e) => this.handleSubmit(e)}>
//           <div>
//             <label className="label" htmlFor="title">Película: </label>
//             <input
//               type="text"
//               id="title"
//               autoComplete="off"
//               value={title}
//               onChange={(e) => this.handleChange(e)}
//             />
//           </div>
//           <button type="submit">BUSCAR</button>
//         </form>
//         <ul> 
//          {  //AGREGADO X MI
//             //AGREGADO X MI
//             //el primer this.props.movies verifica si hay movies en el input para no romper todo
//            this.props.movies && this.props.movies.map(movie =>(
//              //AGREGADO X MI EL KEY PARA QUE TENGAN UN KEY UNICO X EL ID
//             <div key={movie.imdbID}>
//                 <Link to={`/movie/${movie.imdbID}`}> 
//                   {movie.Title}     
//                   </Link> 
//                 <button onClick={() => this.props.addMovieFavorite({Title: movie.Title, id: movie.imdbID})}>Fav</button> {/*COPY PASTE DEL README*/}
//             </div>
//               //AGREGADO X MI
//               //AGREGADO X MI
//            ))
//          } 
//         </ul>
//       </div>
//     );
//   } 
// }
 

//COPY PASTE DEL README
//COPY PASTE DEL README
//COPY PASTE DEL README
// function mapStateToProps(state) {
//   return {
//     movies: state.moviesLoaded
//   };
// }

// function mapDispatchToProps(dispatch) {
//   return {
//     addMovieFavorite: movie => dispatch(addMovieFavorite(movie)),
//     getMovies: title => dispatch(getMovies(title))
//   };
// }

// export default connect(mapStateToProps,mapDispatchToProps)(Buscador);
//COPY PASTE DEL README
//COPY PASTE DEL README
//COPY PASTE DEL README



