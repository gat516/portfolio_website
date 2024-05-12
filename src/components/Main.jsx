import React from 'react'
import { TypeAnimation } from 'react-type-animation'
import { FaTwitter, FaInstagram, FaLinkedinIn, FaGithub } from 'react-icons/fa'

const Main = () => {
    return (
        <div id='main'>
            <img className='w-full h-screen object-cover object-left scale-x-[-1]' 
            src="https://images.unsplash.com/photo-1582738411706-bfc8e691d1c2?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8b2ZmJTIwd2hpdGUlMjBjb2xvdXJ8ZW58MHx8MHx8fDA%3D" 
            alt="/"
            />
            <div className='w-full h-screen absolute top-0 left-0 bg-white/40'>
            <div className='max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center'>
                <h1 className='sm:text-5xl text-4xl font-bold text-gray-800'>I'm Charles Gatchalian</h1>
                <h2 className='flex sm:text-3xl text-2xl pt-4text-gray-800'>
                    I'm into
                    <TypeAnimation
                        sequence={[
                            // Same substring at the start will only be typed out once, initially
                            'Cybersecurity',
                            1000, // wait 1s before replacing "Mice" with "Hamsters"
                            'Finance',
                            1000,
                        ]}
                        wrapper="span"
                        speed={50}
                        style={{ fontSize: '1em', paddingLeft: '5px'}}
                        repeat={Infinity}
                        />
                </h2>
                    <div className='flex justify-between pt-6 max-w-[200px] w-full'>
                        <a href="https://twitter.com/gatcharles05" target="_blank" rel="noopener noreferrer">
                            <FaTwitter className='cursor-pointer' size={20}/>
                        </a>
                        <a href="https://github.com/gat516/my-portfolio" target="_blank" rel="noopener noreferrer">
                            <FaGithub className='cursor-pointer' size={20}/>
                        </a>
                         {/*<a href="https://instagram.com/_cjjcj" target="_blank" rel="noopener noreferrer">
                            <FaInstagram className='cursor-pointer' size={20}/>
                        </a>*/}
                        <a href="https://www.linkedin.com/in/charles-gatchalian/" target="_blank" rel="noopener noreferrer">
                            <FaLinkedinIn className='cursor-pointer' size={20}/>
                        </a>
                    </div>
            </div>
            </div>
        </div>
    )
}

export default Main