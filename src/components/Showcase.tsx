import Image from 'next/image'
import React from 'react'

const Showcase = () => {
  return (
    <>
    <div className='relative py-5 grid grid-cols-1 md:grid-cols-2 items-center'>
        {/* <span className='absolute left-12 px-1 py-6 bg-taupe text-caribbean rounded-full font-bold'>Developer</span> */}
        <div className='px-12'>
            <Image src="/assets/mwffq.jpg" width={500} height={400} alt='mwffq'/>
        </div>
        <div className='mt-8'>
        <h1 className='text-2xl font-bold'>This is Me</h1>
        <div>
            <div className='text-4xl font-medium'>A Software Developer</div>
            <p className='text-white/60'>A professional software developer experienced in building high-quality applications (web and mobile apps) which are in-line with the client&apos;s requirements and budget💸💸. </p>
        </div>
        </div>
    </div>
    <div className='mb-4 grid grid-cols-1 md:grid-cols-2 justify-between border-b border-taupe/30 py-16'>
        <div className='relative flex items-center justify-center'>
            <div className='my-3'>
            <h1 className='text-7xl text-caribbean font-bold'> 3+</h1>
            <p className='text-2xl text-gray-200'>Years of Experience</p>
            </div>
            <h2 className='text-7xl text-taupe/30 absolute transform rotate-12 top-1 left-3'>EXpeRieNce</h2>
        </div>
        <div className='text-center md:text-start'>
            <h1 className='text-base font-medium'>/ PROBLEM SOLVER</h1>
            <p className='text-3xl font-medium text-white'>I enjoy solving problems with clean scalable solutions. I am constantly learning to stay updated on the latest developments</p>
        </div>
    </div>
    </>
  )
}

export default Showcase