import React from 'react'
import Image from 'next/image'

function AboutComponent() {
  return (
    <div id="about" className="pb-24 pt-12">
        <div className="border-x-2 border-gray-600 w-fit px-4 mx-auto">
        <h4 className='font-bold titleName text-2xl text-center tracking-wider'>About Me 🙋‍♂️</h4>
        </div>
    
        <div className='flex w-10/12 p-6 rounded-2xl mt-6 mx-auto items-center'>
        <div className='hidden md:block flex-1 text-center'>
            <Image src="/assets/logo.png" alt="Logo" width={"230px"} height={"230px"} />
        </div>
        <div className='flex-1 rounded-2xl text-center bg-slate-700 text-gray-900 p-4'>
            <div className="bg-stone-100 p-4 rounded-xl oleofont">
            Nulla in velit a meus rhoncus tempus. Nulla congue nulla vel sem varius finibus. Sed ornare sit amet lorem sed viverra. In vel urna quis libero viverra facilisis ut ac est. Morbi commodo, eros in dignissim tempus, lacus odio rutrum augue, in semper sem magna quis tellus. Etiam enim erat, suscipit eu semper a, dictum sit amet elit. Nunc egestas nisi eget enim gravida facilisis. Pellentesque laoreet varius turpis vel pharetra. Ut ante justo, consequat vitae elementum tempor, accumsan nec eros. 
            </div>
        </div>
        </div>
    </div>
  )
}

export default AboutComponent