import { useParams } from 'react-router-dom';
import DetailMovie from '../../components/DetailMovie/DetailMovie';
import {  useEffect, useState } from 'react';
import axios from 'axios';
import Movies from "../../components/Movies/Movies";
import ENDPOINTS from '../../components/utils/constants/endpoint';

function Detail(){

    const {id} = useParams();
    const [movies,setMovies] = useState([]);

    useEffect(() => {
        getRecommendationMovies();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id]);

    async function getRecommendationMovies(){
      const response = await axios(ENDPOINTS.RECOMMENDATION(id));
      // Set data movies ke state movies
      setMovies(response.data.results);
    }

    return(
        <>
            <DetailMovie/>
            <Movies movies={movies} />
        </>
    )
}

export default Detail;