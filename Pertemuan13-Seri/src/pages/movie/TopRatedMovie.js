// import Navbar from "../../components/Navbar/Navbar";
// import Footer from "../../components/Footer/Footer";
import { useEffect, useState } from "react";
import axios from "axios";
import Movies from "../../components/Movies/Movies";
import Hero from "../../components/Hero/Hero";
import ENDPOINTS from "../../utisl/constants/endpoints";

function TopRatedMovie() {
  //simpan API_KEY dan url ke variabel
  // const API_KEY = process.env.REACT_APP_API_KEY;
  // const URL = `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}`;

  // membuat state movies
  const [movies, setMovies] = useState([]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    getTopRatedMovie();
    // fetch data dari axios
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function getTopRatedMovie() {
    const response = await axios(ENDPOINTS.TOP_RATED);

    // eslint-disable-next-line react-hooks/exhaustive-deps

    // simpan data ke state movie
    setMovies(response.data.results);
  }

  console.log(movies);
  return (
    <>
      {/* <Navbar />
      <Footer /> */}
      <Hero />
      <Movies title="Top Rated Movie " movies={movies} />
    </>
  );
}

export default TopRatedMovie;
