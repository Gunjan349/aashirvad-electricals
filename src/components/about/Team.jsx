import image from "../../assets/team.jpeg"

const Team = () => {
    return (
        <>
            <div data-aos="fade-right" className=" mt-16 sm:mt-60">
                <div className="text-center">
                    <img className="w-full mb-10 sm:mb-0 h-[450px] sm:h-80 sm:w-96 object-cover rounded-md float-right ml-5" src={image} alt="Our Team" />
                    <h1 className=" text-[#004775] text-4xl font-semibold px-2 py-1 mb-3 uppercase">
                        our team
                    </h1>
                    <h3 className="text-lg">
                        Our team of certified electrical engineers, technicians, and support staff brings a wealth of experience to every project. Continuous training and development ensure that our team stays ahead with the latest advancements in the electrical industry.
                    </h3>
                </div>
            </div>
        </>
    )
}

export default Team;