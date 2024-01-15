import axios from 'axios';
import React, { useCallback, useEffect, useState } from 'react'
import MovieList from './MovieList';
interface GetMovieListProps {
    type: string,
    title: string
}
const GetMovieList: React.FC<GetMovieListProps> = ({ type, title }) => {
    const [trendingMovieList, setMovieList] = useState([]);
    const fetchTrending = useCallback(async ()=>{
        await axios.get(`/api/movies/${type}`).then((res) => {
            console.log(type, res.data);

            setMovieList(
                res.data
            )
        })
    },[type])
    useEffect(() => {
        fetchTrending();
    }, [fetchTrending])
    return (
        <MovieList title={title} data={trendingMovieList} />
    )
}

export default GetMovieList;
