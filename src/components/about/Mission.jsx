import image from '../../assets/mission.jpeg'

const Mission = () => {
    return(
        <>
            <div data-aos="fade-right" className=" mt-16 sm:mt-60">
                <div className="text-center">
                <img className="w-full mb-10 sm:mb-0 h-[450px] sm:h-80 sm:w-96  object-cover rounded-md float-right ml-5" src={image} alt="Our Mission" />
                    <h1 className=" text-[#004775] text-4xl font-semibold px-2 py-1 mb-3 uppercase">
                        our mission
                    </h1>
                    <h3 className='text-lg'>
                    To provide high-quality electrical solutions that ensure safety, efficiency, and uninterrupted power supply for industrial, commercial, and utility applications. We aim to be a leading name in the electrical industry by combining advanced technology, skilled expertise, and exceptional customer service.
                    </h3>
                </div>
            </div>
        </>
    )
}

export default Mission;