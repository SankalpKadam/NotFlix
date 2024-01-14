import React, { useCallback } from 'react'
import PlayButton from './PlayButton';
import useInfoModal from '@/hooks/useInfoModal';

const BillBoard = () => {
    const data = {
        "id":"1",
        "title": "Sintel",
        "description": "A lonely young woman, Sintel, helps and befriends a dragon, whom she calls Scales. But when he is kidnapped by an adult dragon, Sintel decides to embark on a dangerous quest to find her lost friend Scales.",
        "videoUrl": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",
        "thumbnailUrl": "http://uhdtv.io/wp-content/uploads/2020/10/Sintel-3.jpg",
        "genre": "Adventure",
        "duration": "15 minutes"
    }
const {openModal} = useInfoModal();
    const handleOpenModal = useCallback(()=>{
        openModal(data?.id);
    },[openModal, data?.id])
    return (
        <div className='relative h-[56.25vw]'>
            <video
                className='w-full h-[56.25vw] object-cover brightness-[60%]'
                autoPlay
                muted
                loop
                src={data?.videoUrl} poster={data?.thumbnailUrl}
            ></video>
            <div className='absolute top-[30%] md:top-[40%] ml-4 md:ml-16'>
                <p className='text-white text-1xl md:text-5xl h-full w-[50%] lg:text-6xl font-bold drop-shadow-xl'>{data?.title}</p>
                <p className='text-white text-[8px] md:text-lg mt-3
                md:mt-8 md:w-[80%] w-[90%] lg:w-[50%] drop-shadow-xl'>
                    {data?.description}
                </p>
                <div className='flex flex-row items-center mt-3 md:mt-4 gap-3'>
                    <PlayButton movieId={data?.id}/>
                    <button className='bg-white
                    text-white bg-opacity-30 rounded py-1 md:py-2 px-2 md:px-4 w-auto text-xs lg: text-lg font-semibold flex flex-row items-center hover:bg-opacity-20 transition' onClick={handleOpenModal}>{/*Add more info icon mr-1 */}More Info</button>
                </div>
            </div>
        </div>
    )
}

export default BillBoard;
