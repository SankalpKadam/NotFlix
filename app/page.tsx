'use client'

import BillBoard from "@/components/BillBoard"
import InfoModal from "@/components/InfoModal"
import MovieList from "@/components/MovieList"
import Navbar from "@/components/Navbar"
import useInfoModal from "@/hooks/useInfoModal"

export default function Home() {
  const {isOpen, closeModal} = useInfoModal();
  return (
    <main className="">
      <InfoModal visible={isOpen} onClose={closeModal}/>
      <Navbar/>
      <BillBoard/>
      <div className="pb-40">
        <MovieList title="Trending Now"/>
      </div>
    </main>
  )
}
