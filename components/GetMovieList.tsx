import axios from 'axios';
import React, { useEffect, useState } from 'react'
import MovieList from './MovieList';
interface GetMovieListProps {
    type: string,
    title: string
}
const GetMovieList: React.FC<GetMovieListProps> = ({ type, title }) => {
    const [trendingMovieList, setMovieList] = useState([]);
    async function fetchTrending() {
        await axios.get(`/api/movies/${type}`).then((res) => {
            console.log(type, res.data);

            setMovieList(
                res.data
            )
        })
    }
    useEffect(() => {
        fetchTrending();
    }, [])
    return (
        <MovieList title={title} data={trendingMovieList} />
    )
}

export default GetMovieList;
