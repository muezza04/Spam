import Movie from "../Movie/Movie";
import styles from "./Movies.module.css";
// import data movies
import { nanoid } from "nanoid";


function Movies(props) {
  //membuat variable state
  const {movies, setMovies, title} = props;

  function tambahFilm() {
    const movie = {
      id: nanoid(10),
      title: "Jigsaw Spiral", 
      year: 2021,
      type: "Movie",
      poster: "https://picsum.photos/300/400",
    };

  setMovies([...movies, movie]); 
  }
  
  return (
    <div className={styles.container}>
      <section className={styles.movies}>
        <h2 className={styles.movies__title}>{title}</h2>
        <div className={styles.movie__container}>
         {movies.map(function (movie) {
            return <Movie key={movie.id} movie={movie} />;
          } ) }
        </div>
        <button onClick={tambahFilm}>Add Movie</button>
      </section>
    </div>
  );
}


export default Movies;
