import image from '../../assets/ahead.jpeg'
const Ahead = () => {
    return(
        <>
           <div data-aos="fade-right" className=" mt-16 sm:mt-72 mb-40 sm:mb-72">
                <div className="text-center">
                 <img className="w-full mb-10 sm:mb-0 h-[450px] sm:h-80 sm:w-96 object-cover rounded-md float-right ml-5" src={image} alt="Looking Ahead" />
                    <h1 className=" text-[#004775] text-4xl font-semibold px-2 py-1 mb-3 uppercase">
                        looking ahead
                    </h1>
                    <h3 className="text-lg">
                    With a focus on continuous improvement and innovation, Aashirvad Electricals is committed to expanding its footprint in the electrical industry. Our goal is to offer more advanced, efficient, and sustainable solutions for 11KV and 33KV systems.
                    </h3>
                </div>
            </div>
        </>
    )
}

export default Ahead;