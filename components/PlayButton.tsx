
import React from 'react';
import { useRouter } from 'next/navigation';
interface PlayButtonProps {
    movieId: string;
}
const PlayButton: React.FC<PlayButtonProps> = ({ movieId }) => {
    const router = useRouter();
    return (
        <div className='bg-white rounded-md py-1 md:py-2 px-2 md:px-4 w-auto text-xs lg:text-lg font-semibold flex flex-row items-center hover:bg-neutral-300 transition' onClick={() =>
            router.push(`/watch/${movieId}`)
        }>
            Play
            {/*inster play icon mr-1 */}
        </div>
    )
}

export default PlayButton;
