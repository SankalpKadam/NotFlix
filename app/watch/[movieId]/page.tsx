'use client'
import React from 'react';
import { useRouter } from 'next/navigation';
const watchMovie = ({ params }: { params: { movieId: string } })=>{
  const router = useRouter();
  const data = {
    "id":"1",
    "title": "Sintel",
    "description": "A lonely young woman, Sintel, helps and befriends a dragon, whom she calls Scales. But when he is kidnapped by an adult dragon, Sintel decides to embark on a dangerous quest to find her lost friend Scales.",
    "videoUrl": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",
    "thumbnailUrl": "http://uhdtv.io/wp-content/uploads/2020/10/Sintel-3.jpg",
    "genre": "Adventure",
    "duration": "15 minutes"
}
  return(
    <div className='h-screen w-screen bg-black'>
      <nav className='fixed w-full p-4 z-10 flex flex-row items-center gap-8 bg-black bg-opacity-70 text-white'>
        <div onClick={()=>router.push('/')} className='cursor-pointer'>
          {"<-"}
        </div>
      <p className='text-white text-1xl lg:text-3xl'><span className='font-light '>Watching : </span>{data?.title}</p>
      </nav>
      <video className='h-full w-full' autoPlay controls src={data?.videoUrl}></video>
    </div>
  )
}

export default watchMovie;
