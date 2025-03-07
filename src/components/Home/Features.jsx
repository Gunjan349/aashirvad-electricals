import React from 'react'
import { features } from '../utils/constants'
const Features = () => {
    return (
        <div data-aos="fade-right" className="relative mt-20 sm:mt-28">
            <div>
               <div className='text-center'>
               <span className=" text-[#004775] rounded-full h-6 text-4xl font-semibold px-2 py-1 uppercase">
                    why choose us?
                </span>
               </div>
                <div className='mt-16'>
                   {features.map(({id, icon, feature}) => {
                     return(
                        <div key={id} className='flex items-center justify-center mt-12 gap-4'>
                            <span className='text-[#004775]'>{icon}</span>
                            <h1 className="text-xl text-[#e9550b]">{feature}</h1>
                        </div>
                     )
                   })}
                </div>
            </div>
        </div>
    )
}

export default Features
