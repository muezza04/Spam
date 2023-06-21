import Movie from "../Movie/Movie";
import styles from "./Movies.module.css";
import { nanoid } from "nanoid";
import { useSelector } from "react-redux";

function Movies(props) {
  const { title } = props;
  //membuat variabel movies
  // const { movies, setMovies } = props;

  const movies = useSelector((state) => state.movies.movies);

  //fungsi tambah film akan jalan ketika tombol di klik
  // function handleClick() {
  //   const newFilm = {
  //     id: nanoid(),
  //     title: "jigsaw",
  //     year: "2023",
  //     type: "movie",
  //     poster: "https://picsum.photos/300/400",
  //   };

  //   setMovies([...movies, newFilm]);
  // }
  return (
    <div className={styles.container}>
      <section className={styles.movies}>
        <h2 className={styles.movies__title}>{props.title}</h2>
        <div className={styles.movie__container}>
          {/**
           * Loopin data movies:map.
           * Render Component Movie
           * Kirim props movie
           */}

          {movies.map(function (movie) {
            return <Movie key={movie.id} movie={movie} />;
          })}

          {/* <button onClick={handleClick}>Add Movie</button> */}
        </div>
      </section>
    </div>
  );
}

export default Movies;
