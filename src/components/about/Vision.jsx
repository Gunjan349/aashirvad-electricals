import image from '../../assets/vision.jpeg';

const Vision = () => {
    return(
        <>
            <div data-aos="fade-left" className=" mt-16 sm:mt-60">
                <div className="text-center">
                   <img className="w-full mb-10 sm:mb-0 h-[450px] sm:h-80 sm:w-96 object-cover rounded-md float-left mr-5" src={image} alt="Our Vision" />
                    <h1 className=" text-[#004775] text-4xl font-semibold px-2 py-1 mb-3 uppercase">
                        our vision
                    </h1>
                    <h3 className='text-lg'>
                    To become a global leader in 11KV and 33KV power systems, recognized for innovation, quality, and customer-centric solutions. We strive to contribute to sustainable energy solutions while setting benchmarks for reliability and excellence in the electrical industry.
                    </h3>
                </div>
            </div>
        </>
    )
}

export default Vision;