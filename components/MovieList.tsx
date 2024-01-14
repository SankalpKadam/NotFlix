import React, { useEffect, useState } from 'react';
import { isEmpty, over } from 'lodash';
import MovieCard from './MovieCard';
import axios from 'axios';
interface MovieListProps{
    data: Record<string,any>[];
    title: string;
}
const MovieList:React.FC<MovieListProps> = ({title,data})=> {
//     
    
      
     if (isEmpty(data)) {
         return null;
     }
  return (
    <div className='px-4 md:px-12 mt-4 space-y-8'>
      <div>
        <p className='text-white text-md md:text-xl lg:text-2xl font-semibold'>
            {title}
        </p>
        <div className='flex flex-row flex-nowrap overflow-x-auto no-scrollbar'>
            {
                data.map((movie)=>(
                    <MovieCard key={movie.id} data={movie}/>
                ))
            }
        </div>
        
      </div>
    </div>
  )
}

export default MovieList;
