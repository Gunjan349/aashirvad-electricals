import image from '../../assets/commitment.jpeg'

const Commitment = () => {
    return(
        <>
             <div data-aos="fade-left" className=" mt-16 sm:mt-72">
                <div className="text-center">
                 <img className="w-full mb-10 sm:mb-0 h-[450px] sm:h-80 sm:w-96 object-cover rounded-md float-left mr-5" src={image} alt="Sustainability Commitment" />
                    <h1 className=" text-[#004775] text-4xl font-semibold px-2 py-1 mb-3 uppercase">
                       sustanability commitment
                    </h1>
                    <h3 className='text-lg'>
                    At Aashirvad Electricals, we believe in powering the future responsibly. Our solutions are designed to be energy-efficient and environmentally friendly, aligning with global sustainability goals. We prioritize reducing energy losses, optimizing power distribution, and promoting green energy solutions.
                    </h3>
                </div>
            </div>
        </>
    )
}

export default Commitment;