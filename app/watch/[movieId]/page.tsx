'use client'

import WatchMovie from "@/components/WatchMovie";

const watchMovie = ({ params }: { params: { movieId: string } })=>{
  return (
  <WatchMovie/>
  )
}

export default watchMovie;
