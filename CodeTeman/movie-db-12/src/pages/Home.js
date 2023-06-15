// Import Navbar, Hero, Movies, Footer Component
import Hero from "../components/Hero/Hero";
import Movies from "../components/Movies/Movies";
import Form from "../components/Form/Form";
import {useState} from'react';
import data from "../components/utils/constants/data";

/**
 * Membuat Component Main.
 * Menampung Hero dan Movies
 */
function Home() {
  const [movies, setMovies] = useState(data);
  return (
    <>
      <Hero />
      <Movies movies={movies} setMovies={setMovies} title="Latest Movies" />
      <Form movies={movies} setMovies={setMovies} />
    </>
  );
}

export default Home;
