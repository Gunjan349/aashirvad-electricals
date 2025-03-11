import React from 'react'
import { Phone, Mail } from 'lucide-react'
import { Helmet } from 'react-helmet'
const Contact = () => {
    return (
        <>
            <Helmet>
                <title>Contact Us - Aashirvad Electricals</title>
                <meta name="description" content="Get in touch with Aashirvad Electricals for inquiries about our products and services. Call us or fill out the contact form." />
                    <meta name="keywords" content="contact Aashirvad Electricals, electrical products inquiry, customer support" />
                        <meta property="og:title" content="Contact Us - Aashirvad Electricals" />
                            <meta property="og:description" content="Reach out to us for any questions or support regarding our products and services." />
                                <meta property="og:type" content="website" />
                                    <meta property="og:url" content="https://www.aashirvadelectricals.com/contact" />
                                    </Helmet>
                                    <div data-aos="fade-right" className="relative mt-16 sm:mt-24">
                                        <div className="text-center">
                                            <h1 className="text-3xl mb-5 text-[#004775] font-semibold">Get in Touch</h1>
                                            <div className="w-full h-96 rounded-md overflow-hidden shadow-lg my-10">
                                                <iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d3512.0177435785286!2d77.3506999248899!3d28.328064725832423!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1ssector%2069%20IMT%20faridabad%20plot%20number%20519-P!5e0!3m2!1sen!2sin!4v1741434283319!5m2!1sen!2sin" className='w-full h-[500px]' allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

                                            </div>
                                            <p className="text-2xl mt-24 text-[#004775]">We'd love to hear from you. Reach out to us through the following options:</p>

                                            <div className=' mt-16'>
                                                <div className="flex items-center mb-5 text-xl text-[#004775] hover:text-blue-500 hover:scale-105 duration-300 transition gap-2 justify-center">
                                                    <Mail />
                                                    <a href="mailto:aashirvadelectricals01@gmail.com" className="">aashirvadelectricals01@gmail.com</a>
                                                </div>
                                                <div className="flex items-center mb-5 text-xl text-[#004775] hover:text-blue-500 hover:scale-105 duration-300 transition gap-2 justify-center">
                                                    <Mail />
                                                    <a href="mailto:info@aashirvadelectricals.com" className="">info@aashirvadelectricals.com</a>
                                                </div>

                                                <div className="flex items-center mb-5 text-lg text-[#004775] hover:scale-105 duration-300  hover:text-blue-500 transition gap-2 justify-center">
                                                    <Phone />
                                                    <a href="tel:+91 9990706365" className="">(+91) 9990706365</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </>
                                )
}

                                export default Contact
