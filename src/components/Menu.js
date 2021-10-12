import React from "react";
import { Link } from "react-scroll";
import logo from '../img/logo.png'
const Menu = ({ open, windowSize }) => {

  const menu = [
    {
      href: "home",
      title: "INICIO",
    },
    {
      href: "matrimonio",
      title: "MATRIMONIO",
    },
    {
      href: "nosotros",
      title: "NUESTRA HISTORIA",
    },
    {
      href: "organizacion",
      title: "ORGANIZACIÓN",
    },
    {
      href: "cuandoydonde",
      title: "CUÁNDO Y DONDE",
    },
    // {
    //   href: "regalos",
    //   title: "REGALOS",
    // },
    {
      href: "rsvp",
      title: "RSVP",
    },
  ];

  return (
    <div className={`navbar inset-y-0 flex-shrink-0  bg-snow md:w-1/5 border-r lg:static ${windowSize.width < 732 ? open ? 'fixed transform transition -translate-x-2' : ' fixed navbar-close' : 'navbar-open'}`}>:
      <nav
        className="w-full sticky top-0 "
        role="navigation"
      >
        <div className=" lg:pt-28 flex flex-col ">
          <div className="flex justify-center pb-4 lg:pb-12">
            <Link to="home" className="cursor-pointer" spy={true} smooth={true} duration={500} rel="home">
              <img src={logo} className="h-60 sm:h-36 lg:h-72" alt="logo" />
            </Link>
          </div>
          <Link to="home" className="cursor-pointer" spy={true} smooth={true} duration={500} rel="home">
            <h1 className="text-center text-2xl xl:text-4xl text-color-camel mb-12 font-alex-brush">Deymi & Jimmy</h1>
          </Link>
          <div className="w-full md:w-auto md:flex md:flex-col md:items-center">
            <ul className="">
              {menu.map((v, i) => (
                <li key={i}>
                  <Link
                    smooth={true}
                    duration={500}
                    to={v.href}
                    className="block px-8 py-1 md:p-2 lg:px-4 cursor-pointer text-sm sm:text-base font-bold"
                  >
                    {v.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>

    </div>
  );
};
export default Menu;
