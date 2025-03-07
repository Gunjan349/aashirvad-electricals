import { IndustriesList } from "../utils/constants";
import image from '../../assets/industries.jpeg'

const Industries = () => {
    return (
        <>
            <div data-aos="fade-left" className=" mt-16 sm:mt-60">
                <div className="text-center">
                    <img className="w-full mb-10 sm:mb-0 h-[450px] sm:h-80 sm:w-96 object-cover rounded-md float-left mr-5" src={image} alt="Industries" />
                    <h1 className=" text-[#004775] text-4xl font-semibold px-2 py-1 mb-3 uppercase">
                        industries we serve
                    </h1>
                    <ul >
                        {IndustriesList.map(value => (
                            <li className='text-lg'>{value.industry}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Industries;