/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import Button from "../ui/button";
import styled from "styled-components";
import axios from "axios";
import ENDPOINTS from "../../utisl/constants/endpoints";

const StyledHero = styled.div`
  margin: 5rem auto;
  padding: 1rem;

  section {
    display: flex;
    flex-direction: column;
    text-align: center;
  }

  .hero__left {
    margin-bottom: 1rem;
  }

  h2 {
    color: #4361ee;
    margin-bottom: 1rem;
    font-size: 2.44rem;
  }

  h3 {
    color: #b5179e;
    margin-bottom: 1rem;
    font-size: 1.59rem;
  }

  p {
    color: #64748b;
    margin-bottom: 2rem;
  }

  button {
    padding: 0.8rem 2rem;
    border: none;
    border-radius: 10px;
    background-color: #4361ee;
    color: #fff;
  }

  img {
    max-width: 100%;
    height: auto;
    border-radius: 25px;
  }

  /* Medium Screen */
  @media (min-width: 768px) {
    /*
   * Nothing TODO Here.
   * We dont change style Hero. 
   */
  }

  /* Large Screen */
  @media (min-width: 992px) {
    max-width: 1200px;
    margin: 3rem auto;

    section {
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      text-align: left;
    }

    .hero__left {
      flex-basis: 40%;
    }

    flex-basis: 60%;
  }
`;

function Hero() {
  // membuat state movie
  const [movie, setMovie] = useState("");
  // const API_KEY = process.env.REACT_APP_API_KEY;
  const genres = movie && movie.genres.map((genre) => genre.name).join(", ");
  const trailer =
    movie && `https://www.youtube.com/watch?v=${movie.videos.results[0].key}`;

  // async function fetchMovie() {
  //   //melakukan side effect: fetch data movie (api);
  //   const response = await fetch(
  //     "https://www.omdbapi.com/?apikey=fcf50ae6&i=tt2975590"
  //   );

  //   const data = await response.json();
  //   // set movie dengan data movie hasil fetch
  //   setMovie(data);
  // }

  useEffect(() => {
    getDetailMovie();
  }, []);

  // mendapatkan 1 data dari trending movies
  async function getTrendingMovies() {
    // const URL = `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`;
    const response = await axios(ENDPOINTS.HERO);
    return response.data.results[0];
  }

  // membuat fungsi untuk mendapatkan detail movie
  async function getDetailMovie() {
    //ambil id dari trending movie
    const trendingMovie = await getTrendingMovies();
    const id = trendingMovie.id;

    // fetch detail movie by id
    // const URL = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&append_to_response=videos`;
    const response = await axios(ENDPOINTS.DETAIL(id));

    setMovie(response.data);
  }

  return (
    <StyledHero>
      <div>
        <section>
          <div className="hero__left">
            <h2>{movie.title}</h2>
            <h3>{genres}</h3>
            <p>{movie.overview}</p>
            <Button
              variant="primary"
              size="sm"
              as="a"
              href={trailer}
              target="_blank"
            >
              Watch
            </Button>
          </div>
          <div>
            <img
              src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
              alt={movie.title}
            />
          </div>
        </section>
      </div>
    </StyledHero>
  );
}

export default Hero;
