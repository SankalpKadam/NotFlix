import useInfoModal from '@/hooks/useInfoModal';
import React, { useCallback, useEffect, useState } from 'react'
import PlayButton from './PlayButton';
import FavoriteButton from './FavoriteButton';
import CloseIcon from '@mui/icons-material/Close';
interface InfoModalProps {
    visible?: boolean;
    onClose?: any;
};

const InfoModal: React.FC<InfoModalProps> = ({ visible, onClose }) => {
    const data = {
        "id": "1",
        "title": "Sintel",
        "description": "A lonely young woman, Sintel, helps and befriends a dragon, whom she calls Scales. But when he is kidnapped by an adult dragon, Sintel decides to embark on a dangerous quest to find her lost friend Scales.",
        "videoUrl": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",
        "thumbnailUrl": "http://uhdtv.io/wp-content/uploads/2020/10/Sintel-3.jpg",
        "genre": "Adventure",
        "duration": "15 minutes"
    }
    const [isVisible, setIsVisible] = useState(!!visible);
    const { movieId } = useInfoModal();
    // const {data = ()} = 
    useEffect(() => {
        setIsVisible(!!visible);
    }, [visible])
    const handleClose = useCallback(() => {
        setIsVisible(false);
        setTimeout(() => {
            onClose();
        }, 300)
    }, [onClose])
    if (!visible) {
        return null;
    }
    return (
        <div className='z-50 transition duration-300 bg-black bg-opacity-80 flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0'>
            <div className='relative w-auto mx-auto max-w-3xl rounded-md overflow-hidden'>
                <div className={`${isVisible ? "scale-100" : "scale-0"} transform duration-300 relative flex-auto bg-zinc-900 drop-shadow-md`}>
                    <div className='relative h-96'>
                        <video className='w-full brigtness-[60%] object-cover h-full' autoPlay muted loop poster={data?.thumbnailUrl} src={data?.videoUrl}></video>
                        <div onClick={handleClose} className='cursor-pointer absolute top-3 right-4 h-10 w-10 rounded-full bg-black bg-opacity-70 flex items-center justify-center'>
                            <CloseIcon className='text-white' fontSize='large'/>
                        </div>
                        <div className='absolute bottom-[10%] left-10'>
                            <p className='text-white text-3xl md:text-4xl h-full lg:text-5xl font-bold mb-8'>
                                {data?.title}
                            </p>
                            <div className='flex flex-row items-center gap-4'>
                                <PlayButton movieId={data?.id} />
                                <FavoriteButton movieId={data?.id} />
                            </div>
                        </div>
                    </div>
                    <div className='px-12 py-8'>
                        <p className='text-green-400 font-semibold text-lg'>New</p>
                        <p className='text-white text-lg'>
                            {data?.duration}
                        </p>
                        <p className='text-white text-lg'>
                            {data?.genre}
                        </p>
                        <p className='text-white text-lg'>
                            {data?.description}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InfoModal;
