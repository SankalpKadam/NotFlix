import React, { useEffect, useRef, useState } from 'react';
import { isEmpty, over } from 'lodash';
import MovieCard from './MovieCard';
import axios from 'axios';
interface MovieListProps{
    data: Record<string,any>[];
    title: string;
}

const MovieList:React.FC<MovieListProps> = ({title,data})=> {
//   
const ref:any = useRef();
function scroll(ref:HTMLDivElement) {
  if (ref) {
    ref.scrollLeft += 20;
  }
}
     if (isEmpty(data)) {
         return null;
     }
  return (
    <div className='px-4 md:px-12 mt-4 space-y-8  overflow-x-scroll no-scrollbar'>
      <div>
        <p className='text-white text-md md:text-xl lg:text-2xl font-semibold'>
            {title}
        </p>
        <div className='flex flex-row flex-nowrap' id={title} ref={ref}>
            {
                data.map((movie)=>(
                    <MovieCard key={movie.id} data={movie}/>
                ))
            }
        </div>
        
      </div>
      {/* <button id="slideLeft" type="button"  onClick={()=>{
        console.log(ref,"ref");
        
        ref.current.scrollLeft -= 100;
      }}>Slide left</button>
    <button id="slideRight" type="button" onClick={()=>{
        ref.current.scrollLeft += 100;
        
      }}>Slide right</button> */}
    </div>
  )
}

export default MovieList;
