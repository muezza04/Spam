import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DetailMovie from "../../components/DetailMovie/DetailMovie";
import Movies from "../../components/Movies/Movies";
import ENDPOINTS from "../../utisl/constants/endpoints";

function Detail() {
  const params = useParams();
  const [movies, setMovies] = useState([]);
  // const API_KEY = process.env.REACT_APP_API_KEY;

  useEffect(() => {
    getRecommendationMovies();
  }, [params]);

  async function getRecommendationMovies() {
    // const URL = `https://api.themoviedb.org/3/movie/${params.id}/recommendations?api_key=${API_KEY}`;
    const response = await axios(ENDPOINTS.RECOMMENDATION(params));
    setMovies(response.data.results);
  }

  console.log(movies);

  return (
    <div>
      <DetailMovie />
      <Movies movies={movies} />
    </div>
  );
}

export default Detail;
