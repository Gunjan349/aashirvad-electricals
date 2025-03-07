import { quickLinks, legalLinks } from '../utils/constants';
import logo from '../../assets/logo.jpeg';
import { MapPin, Phone, Mail } from 'lucide-react'
const Footer = () => {
    return (
        <footer data-aos="fade-down" className="mt-20 text-white bg-[#004775]">
        <div className='cursor-pointer py-6 text-center text-xl bg-[#046aaf] broder-b-2 border-gray-400' onClick={() => window.scrollTo({
            top: 0, behavior: "smooth"
        })}>
            Back To Top
        </div>
          <div className="sm:py-20 py-6">
          <div className="flex items-center flex-shrink-0 px-6 sm:px-20">
                <img className="h-16 w-16 rounded-md" src={logo} alt="Logo" />
                <span className="text-xl tracking-tight">Aashirvad Electricals</span>
            </div>
            <div className="grid grid-cols-1 mx-auto sm:grid-cols-3 gap-4 sm:px-32 py-4 px-16">
                <div>
                    <div>
                        <h2 className='flex items-start gap-2'><MapPin />Sec 69 IMT FARIDABAD PLOT NO. 519-P</h2>
                        <h2 className='my-4 flex items-center gap-2'><Phone size={20}/>9990706365</h2>
                        <div className='flex items-start gap-2'><Mail size={20}/><div>
                            <h2>aashirvadelectricals01gmail.com</h2>
                            <h2>info@aashirvaselectricals.com</h2>
                        </div></div>
                    </div>
                </div>
                <div>
                    <ul className="space-y-2">
                        {quickLinks.map((link, index) => (
                            <li key={index}>
                                <a
                                    href={link.href}
                                    className="text-neutral-300 hover:text-white"
                                >
                                    {link.text}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
                <div>
                    <ul className="space-y-2 mt-4 sm:mt-0">
                        {legalLinks.map((link, index) => (
                            <li key={index}>
                                <a
                                    href={link.href}
                                    className="text-neutral-300 hover:text-white"
                                >
                                    {link.text}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
           
          </div>
          <div className='text-center pb-5'>
                &copy; {new Date().getFullYear()}; Aashirvad Electricals. All Rights Reserved.
            </div>
        </footer>
    );
};

export default Footer;