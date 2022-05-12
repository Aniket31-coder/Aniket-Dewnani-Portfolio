import React from 'react'
import data from '../public/data.json'

function ExperienceComponent() {
    return (
        <div id="experience" className="pb-24 pt-12">
            <div className="border-x-2 border-gray-600 w-fit px-4 mx-auto">
            <h4 className='font-bold titleName text-2xl text-center tracking-wider'>Experience</h4>
            </div>
        
            {
                data.experience.map((exp) => {
                    return (
                        <div key={exp.id} className='w-10/12 md:w-9/12 lg:w-6/12 mx-auto'>
                            <h3 className='font-bold titleName text-xl text-gray-800 mt-12 mb-2'>{exp.company}</h3>
                            <p className="text-gray-600 text-lg italic mb-3">{exp.title}<span className='px-2'>&bull;</span> <span className="newfont text-lg">{exp.date}</span></p>
                            <p className='text-gray-500'>{exp.desc}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default ExperienceComponent