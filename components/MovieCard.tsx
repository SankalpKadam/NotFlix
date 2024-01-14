import React from 'react'
import FavoriteButton from './FavoriteButton';
import { useRouter } from 'next/navigation';
import useInfoModal from '@/hooks/useInfoModal';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

interface MovieCardProps {
    data: Record<string, any>;
}
const MovieCard: React.FC<MovieCardProps> = ({ data }) => {
    const router = useRouter();
    const {openModal} = useInfoModal();
    return (
        <div className='
    group bg-zinc-900 w-1/4 relative h-[12vw] flex-shrink-0 ml-2
    '>
            <img src={`https://image.tmdb.org/t/p/original/${data.backdrop_path? data.backdrop_path: data.poster_path}`} alt="Thumbnail" className='cursor-pointer object-cover transition duration shadow-xl rounded-md group-hover:opacity-90 sm:group-hover:opacity-90 delay-300 w-full h-[12vw]' />
            <div className='opacity-0 absolute top-0 transition duration-200 invisible sm:visible z-10 delay-300 w-full scale-0 group-hover:scale-100
      group-hover:opacity-100'>
                {/* <img src={data.thumbnailUrl} alt="Thumbnail" className='cursor-pointer object-cover transition duration shadow-xl rounded-t-md w-full h-[12vw]' /> */}
                <div className='
        z-10 bg-black bg-opacity-40 p-2 lg:p-4 absolute w-full transition shadow-md rounded-b-md
        '>
                    <div className='flex flex-row items-center gap-3'>
                        <div className='cursor-pointer w-6 h-6 lg:w-10 lg:h-10 bg-white rounded-full flex justify-center items-center transition hover:bg-neutral-300' onClick={()=>{router.push(`/watch/${data.id}`)}}>
                            <PlayArrowIcon fontSize='small'/>
                        </div>
                        <FavoriteButton movieId={data.id}/>
                        <div className='cursor-pointer ml-auto group/item w-6 h-6 lg:w-10 lg:h-10 border-white border-2 rounded-full flex justify-center items-center transition hover:border-neutral-300' onClick={()=> openModal(data.id)}>
                            <ExpandMoreIcon className='text-white group-hover/item:text-neutral-300'/>{/*chevron down icon text-white group-hover/item:text-neutral-300 size30*/}
                        </div>
                    </div>
                    <p className='text-green-400 font-semibold mt-4'>Trending <span className='text-white '>{data.media_type?data.media_type:""}</span></p>
                    <div className='flex flex-row mt-4 gap-2 items-center'>
                        <p className='text-white text-[10px] lg:text-sm'>{data.name ? data.name : data.title}</p>
                    </div>
                    <div className='flex flex-row mt-4 gap-2 items-center'>
                        <p className='text-white text-[10px] lg:text-sm'>{data.genre}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MovieCard;
