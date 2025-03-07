import {ValuesList} from '../utils/constants';
import image from '../../assets/values.jpeg'

const Values = () => {
    return (
        <>
            <div data-aos="fade-right" className=" mt-16 sm:mt-72">
                <div className="">
                 <img className="w-full mb-10 sm:mb-0 h-[450px] sm:h-80 sm:w-96  object-cover rounded-md float-right ml-5" src={image} alt="Core Values" />
                    <h1 className="text-center text-[#004775] text-4xl font-semibold px-2 py-1 mb-3 uppercase">
                        core values
                    </h1>
                    <ul className='ml-10 sm:ml-3' style={{listStyleType : 'square'}}>
                        {ValuesList.map(value => (
                            <li className='text-lg'>{value.value}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Values;