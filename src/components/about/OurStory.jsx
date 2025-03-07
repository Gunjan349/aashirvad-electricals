import image from '../../assets/story.jpeg';

const OurStory = () => {
    return (
        <>
            <div data-aos="fade-right" className=" mt-20 sm:mt-40">
                <div className="text-center">
                    
                    <div>
                    <img className="w-full mb-10 sm:mb-0 h-[450px] sm:h-80 sm:w-96 object-cover rounded-md float-left mr-5" src={image} alt="Our Story" />
                    <h1 className=" text-[#004775] text-4xl font-semibold px-2 py-1 mb-6 uppercase">
                        our story
                    </h1>
                    <h3 className='text-lg '>
                    Founded with a vision to power the future, Aashirvad Electricals has emerged as a trusted name in the electrical industry. With years of experience, we specialize in delivering reliable and efficient solutions for 11KV and 33KV electrical systems. Our journey is driven by a commitment to quality, safety, and customer satisfaction, ensuring that our clients receive only the best in power distribution, transmission, and substation equipment.
                    </h3>
                    </div>
                </div>
            </div>
        </>
    )
}

export default OurStory;