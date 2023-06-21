// import Navbar from "../../components/Navbar/Navbar";
// import Footer from "../../components/Footer/Footer";
import { useEffect, useState } from "react";
import axios from "axios";
import Movies from "../../components/Movies/Movies";
import Hero from "../../components/Hero/Hero";
import ENDPOINTS from "../../utisl/constants/endpoints";

function NowPlayingMovie() {
  //simpan API_KEY dan url ke variabel
  // const API_KEY = process.env.REACT_APP_API_KEY;
  // const URL = `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}`;

  // membuat state movies
  const [movies, setMovies] = useState([]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    getNowPlayingMovie();
    // fetch data dari axios
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function getNowPlayingMovie() {
    const response = await axios(ENDPOINTS.NOW_PLAYING);

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
      <Movies title="Now Playing Movie " movies={movies} />
    </>
  );
}

export default NowPlayingMovie;
