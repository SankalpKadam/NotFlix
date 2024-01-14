'use client'

import BillBoard from "@/components/BillBoard"
import InfoModal from "@/components/InfoModal"
import MovieList from "@/components/MovieList"
import Navbar from "@/components/Navbar"
import useInfoModal from "@/hooks/useInfoModal"
import axios from "axios"
import { useEffect, useState } from "react"

export default function Home() {
  const {isOpen, closeModal} = useInfoModal();
  const [trendingMovieList, setMovieList] = useState([]);
    async function fetchTrending() {
      await axios.get(`https://api.themoviedb.org/3/trending/all/week?api_key=6b0f9afb1bfdfce0451a81d57eb564bc&language=en-US`).then((res)=>{
        setMovieList(
          res.data.results
        )
      })
      
      // return result;
    }
    useEffect(()=>{
        fetchTrending();
      },[])
      console.log(trendingMovieList);
  return (
    <main className="">
      <InfoModal visible={isOpen} onClose={closeModal}/>
      <Navbar/>
      <BillBoard/>
      <div className="pb-40">
        <MovieList title="Trending Now" data={trendingMovieList}/>
      </div>
    </main>
  )
}
