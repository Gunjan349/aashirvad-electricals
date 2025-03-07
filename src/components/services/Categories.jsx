import { serviceCategoies } from "../utils/constants";

const Categories = () => {

    return (
        <>
            <div data-aos="fade-right" className="relative mt-20 sm:mt-24">
                <div className='text-center'>
                    <h1 className="text-3xl mb-10 sm:mb-16 text-[#004775] font-semibold">Service Categories</h1>
                    {serviceCategoies.map(service => (

                        <div className="mb-16" data-aos='fade-right'>

                            <h2 className="text-2xl font-medium mb-5">{service.heading}</h2>
                            <div className="flex justify-center my-10">
                            <img className="w-full  h-[450px] sm:h-80 sm:w-96 object-cover rounded-md" src={service.image} alt={service.heading} />
                            </div>
                            <p data-aos='fade-left'>{service.description}</p>
                            <h3 className="text-xl mt-8 mb-5 font-medium">Key Features</h3>
                            {service.features.map(feature => <ul>
                                <li data-aos='fade-right'>{feature.feature}</li>
                            </ul>)}
                            <h3 className="text-xl mt-8 mb-5 font-medium">Sub-Services</h3>
                            {service.subServices.map(item =>
                                <ul>
                                    <li data-aos='fade-left'>{item.subService}</li>
                                </ul>
                            )}
                            <h3 className="text-xl mt-8 mb-5 font-medium">Benefits</h3>
                            {service.benefits.map(item =>
                                <ul>
                                    <li data-aos='fade-right'>{item.benefit}</li>
                                </ul>)}
                        </div>

                    ))}
                </div>
            </div>
        </>
    )
}

export default Categories
