import { Menu, X } from "lucide-react";
import { useState } from "react";
import logo from '../../assets/logo.jpeg';
import { navItems } from "../utils/constants";

const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

 
  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80 bg-[#004775] text-white">
      <div className="container px-4 mx-auto relative lg:text-sm">
        <div className="flex sm:justify-around justify-between items-center">
          <a data-aos="fade-left" className="flex items-center flex-shrink-0" href="/">
            <img className="h-16 w-16 rounded-md" src={logo} alt="Logo" />
            <span className="sm:text-2xl text-xl tracking-tight">Aashirvad Electricals</span>
          </a>
          <ul  className="hidden lg:flex ml-14 space-x-12">
            {navItems.map((item, index) => (
              <li data-aos="fade-right" key={index} className="hover:scale-90 duration-300">
                <a href={item.href} className="text-lg ">{item.label}</a>
              </li>
            ))}
          </ul>
          {/* <div className="hidden lg:flex justify-center space-x-12 items-center">
            <a href="#" className="py-2 px-3 border rounded-md">
              Sign In
            </a>
            <a
              href="#"
              className="bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-3 rounded-md"
            >
              Create an account
            </a>
          </div> */}
          <div className="lg:hidden md:flex flex-col justify-end">
            <button onClick={toggleNavbar}>
              {mobileDrawerOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        {mobileDrawerOpen && (
          <div className="fixed right-0 z-20 bg-[#004775] w-full p-12 flex flex-col justify-center items-center lg:hidden">
            <ul>
              {navItems.map((item, index) => (
                <li key={index} className="py-4">
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
           
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;