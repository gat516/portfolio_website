import React from 'react'
import WorkItem from './WorkItem'

const data = [
    {
        year: '2022',
        title: 'Networking Course',
        duration: '1 year',
        details:
        'My interest in technology was first sparked after being advised to take a CCNA course that introduced me to the fundamentals of computer networking at the Miller Career & Technology Center.'
    },
    {
        year: 2023,
        title: 'Cybersecurity',
        duration: '1 year',
        details:
        'After expanding my fundamentals in networking, I decided to pursue the CompTIA Security+ by taking a cybersecurity course at the Miller Career & Technology Center.'
    },
    {
        year: 'Fall 2023',
        title: 'CougarCS - Information Security Branch Officer',
        duration: 'Present',
        details:
        'Upon becoming a student at the University of Houston in 2023, I joined the CougarCS - Information Security Branch to connect with others interested in cybersecurity and technology.'
    },
    {
        year: 'Spring 2024',
        title: 'Finance',
        duration: 'Present',
        details:
        'In 2024, at the encouragement of friends and mentors, I decided to double major in Finance to complement my technical skills with business acumen.'
    },
    {
        year: 'Current',
        title: 'Work',
        duration: 'Present',
        details:
        'Outside of school, I am also working on labs and projects to gain simulated but hands-on experience in cybersecurity while chasing after the CCNA. '
    }
]
const Work = () => {
    return (
        <div id='work' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
            <h1 className='text-4xl font-bold text-center text-[#001b5e]'>Timeline</h1>
            {data.map((item, idx) => (
                <WorkItem 
                key={idx}
                year={item.year}
                title={item.title} 
                duration={item.duration} 
                details={item.details} 
                />
            ))}
        </div>
    )
}

export default Work