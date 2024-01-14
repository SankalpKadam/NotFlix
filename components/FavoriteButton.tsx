import React from 'react';
import AddIcon from '@mui/icons-material/Add';
interface FavoriteButtonProps{
    movieId:string
}
const FavoriteButton:React.FC<FavoriteButtonProps> = ({movieId}) => {
  return (
    <div className='cursor-pointer group/item w-6 h-6 lg:w-10 lg:h-10 border-white border-2 rounded-full flex justify-center items-center transition hover:border-neutral-300 text-white'>
      <AddIcon/>
    </div>
  )
}

export default FavoriteButton
