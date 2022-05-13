import React from 'react'
import Image from 'next/image'
import VisibilitySensor from "react-visibility-sensor";
import { CircularProgressbarWithChildren } from "react-circular-progressbar";

import data from '../public/data.json';

function SkillsComponent() {

    const getRandomColor = () => {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
          color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
      }
    
    return (
        <div id="skills" className="pb-24 pt-12">
            <div className="border-x-2 border-gray-600 w-fit px-4 mx-auto">
            <h4 className='font-bold titleName text-2xl text-center tracking-wider'>Skills 🤹</h4>
            </div>
        
            <div className='flex w-10/12 p-1 mt-6 mx-auto'>
                <div className='grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 w-full xl:gap-x-6 gap-y-16'>
                {
                    data.skills.map((skill)=> {
                    return (
                        <div key={skill.id} className='justify-center w-9/12 md:w-10/12 xl:w-8/12 mx-auto'>
                            <VisibilitySensor partialVisibility={true}>
                            {({ isVisible }) => {
                                const percentage = isVisible ? skill.value : 0;
                                return (
                                <CircularProgressbarWithChildren
                                    value={percentage}
                                    styles={{
                                    path: {
                                        stroke: getRandomColor()
                                    }
                                    }}
                                >
                                    <Image src={skill.image} width={skill.width} height={skill.height} alt={skill.alt} />
                                </CircularProgressbarWithChildren>
                                );
                            }}
                            </VisibilitySensor>
                        </div>
                    )
                })
                }
                </div>
            </div>
        </div>
    )
}

export default SkillsComponent