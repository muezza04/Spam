// import Navbar from "../../components/Navbar/Navbar";
// import Footer from "../../components/Footer/Footer";
import { useEffect, useState } from "react";
import axios from "axios";
import Movies from "../../components/Movies/Movies";
import Hero from "../../components/Hero/Hero";
import ENDPOINTS from "../../utisl/constants/endpoints";

function PopularMovie() {
  //simpan API_KEY dan url ke variabel

  // membuat state movies
  const [movies, setMovies] = useState([]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    getPopularMovies();
    // fetch data dari axios
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function getPopularMovies() {
    const response = await axios(ENDPOINTS.POPULAR);

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
      <Movies title="Popular Movie " movies={movies} />
    </>
  );
}

export default PopularMovie;
