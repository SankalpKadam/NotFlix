'use client'

import BillBoard from "@/components/BillBoard"
import MovieList from "@/components/MovieList"
import Navbar from "@/components/Navbar"

export default function Home() {
  return (
    <main className="">
      <Navbar/>
      <BillBoard/>
      <div className="pb-40">
        <MovieList title="Trending Now"/>
      </div>
    </main>
  )
}
