import React from 'react'
import { services } from '../utils/constants'
import {Slide, Fade} from 'react-awesome-reveal'
const Services = () => {
    return (
        <div data-aos="fade-left" className="relative mt-24 sm:mt-32">
            <div className="text-center">
                <span className=" text-[#004775] rounded-full h-6 text-4xl font-semibold px-2 py-1 uppercase">
                    our services
                </span>
                <div className="container mx-auto">
                

                    {/* cards section */}
                    <div className="mt-24 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 place-items-center gap-6">
                        {services.map(({ id, img, service }) => {
                            return (
                                <div
                                    key={id}
                                    className="text-white shadow-md rounded-lg overflow-hidden relative group h-[350px] sm:w-[300px] w-[400px] cursor-pointer mb-16"
                                >
                                    <img
                                        src={img}
                                        alt=""
                                        className="w-full max-w-[400px] h-full rounded-lg object-cover hover:scale-105 duration-300"
                                    />
                                    {/* overlay section */}
                                    <div className="absolute left-0 top-[-100%] opacity-0 group-hover:opacity-100 group-hover:top-[0] p-4 w-full h-full bg-black/60 group-hover:backdrop-blur-sm duration-700 cursor-pointer">
                                        <div className="space-y-4 ">
                                            <Slide cascade>
                                                <div className="text-2xl font-semibold mt-28"><h1>{service}</h1></div>


                                            </Slide>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services
