'use client'

import BillBoard from "@/components/BillBoard"
import GetMovieList from "@/components/GetMovieList"
import InfoModal from "@/components/InfoModal"
import Navbar from "@/components/Navbar"
import useInfoModal from "@/hooks/useInfoModal"

import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import { useEffect } from "react"


export default function Home() {
  const {isOpen, closeModal} = useInfoModal();
  const router = useRouter();
  const {data: session} = useSession();
  useEffect(()=>{
    
    if(!session){
      router.push('/auth');
    }
    
  },[])

  return (
    <main className="">
      <InfoModal visible={isOpen} onClose={closeModal}/>
      <Navbar/>
      <BillBoard/>
      
      <div className="pb-40">
        <GetMovieList title="Netflix Originals" type="getOriginals"/>
        <GetMovieList title="Trending Now" type="getTrending"/>
        <GetMovieList title="Action Movies" type="getAction"/>
        <GetMovieList title="Comedy Movies" type="getComedy"/>
        <GetMovieList title="Top Rated" type="getTopRated"/>
        <GetMovieList title="Romance Movies" type="getRomance"/>
        <GetMovieList title="Horror Movies" type="getHorror"/>
        <GetMovieList title="Documentaries" type="getDocumentaries"/>
        
      </div>
    </main>
  )
}
