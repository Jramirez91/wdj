import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import logo from '../img/logo.png'
const Menu = ({ open }) => {


  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    // Add event listener
    window.addEventListener("resize", handleResize);
    // Call handler right away so state gets updated with initial window size
    handleResize();
    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty array ensures that effect is only run on mount

  const menu = [
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
      href: "mensajes",
      title: "MENSAJES",
    },
    {
      href: "rsvp",
      title: "RSVP",
    },
  ];

  return (
    <div className={` navbar inset-y-0 flex-shrink-0  ${open ? 'w-64' : windowSize.width < 450 ? 'menu-c' : 'w-64'}  md:w-1/5 border-r lg:static  focus:outline-none bg-snow ${windowSize.width < 450 ? open ? 'navbar-open' : 'navbar-close' : 'navbar-open'}`}>:
      <nav
        className="w-full sticky top-0 "
        role="navigation"
      >
        <div className="pt-28 flex flex-col ">
          <div className="flex justify-center  pb-12">
            <Link to="home" spy={true} smooth={true} duration={500} rel="home">
              <img src={logo} className="h-72" alt="logo" />
            </Link>
          </div>
          <h1 className="text-center text-2xl xl:text-4xl text-color-camel mb-12 font-alex-brush">Deymi & Jimmy</h1>

          <div className="w-full md:w-auto md:flex md:flex-col md:items-center">
            <ul className="">
              {menu.map((v, i) => (
                <li key={i}>
                  <Link
                    smooth={true}
                    duration={500}
                    to={v.href}
                    className="block px-4 py-1 md:p-2 lg:px-4 cursor-pointer"
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
