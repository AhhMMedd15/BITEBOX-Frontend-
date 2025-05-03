import React from 'react'

const MainVideopage = () => {
    return (
        <>
            <div  className="mainVideoPAge relative w-full h-screen">
                <div className='w-full h-full'>
                    <video muted loop autoPlay className='w-full h-full object-cover' src="/biti.mp4"></video>
                </div>
                <div className='w-full h-full bg-black absolute top-0 opacity-30'>
                </div>
                <div className='absolute top-0 text-white'>
                    <h1>BiteBox</h1>
                </div>
            </div>
        </>
    )
}

export default MainVideopage