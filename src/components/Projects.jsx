import React from 'react';
import ProjectItem from './ProjectItem';
import Sample from '../assets/sample.png'

const Projects = () => {
    return (
        <div id='projects' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
            <h1 className='text-4xl font-bold text-center text-[#001b5e]'>Projects</h1>
            <p className='text-center py-8'>
                Check out my projects!
            </p>
            <div className='grid sm:grid-cols-2 gap-12' link='' >
                <ProjectItem img={Sample} title='COMING SOON!' link='https://www.google.com' />
                <ProjectItem img={Sample} title='COMING SOON!' link='https://www.google.com'  />
                <ProjectItem img={Sample} title='COMING SOON!' link='https://www.google.com' />
                <ProjectItem img={Sample} title='COMING SOON!' link='https://www.google.com' />
            </div>
        </div>
    )
}

export default Projects