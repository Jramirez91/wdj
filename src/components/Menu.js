import React from "react";
import { Link } from "react-scroll";

const Menu = () => {
  const menu = [
    {
      href: "matrimonio",
      title: "MATRIMONIO",
    },
    {
      href: "nosotros",
      title: "NOSOTROS",
    },
    {
      href: "informacion",
      title: "INFORMACIÓN",
    },
    {
      href: "regalos",
      title: "REGALOS",
    },
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
    <nav
      className="sticky top-0 w-full bg-white shadow order-1 lg:order-2"
      role="navigation"
    >
      <div className="container mx-auto p-2 flex flex-wrap items-center md:flex-no-wrap">
        <div className="mr-4 md:mr-8">
          <Link to="home" spy={true} smooth={true} duration={500} rel="home">
            <svg
              className="w-10 h-10 text-purple-600"
              width="54"
              height="54"
              viewBox="0 0 54 54"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Inicio</title>
              <path
                fill="currentColor"
                d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z"
              ></path>
            </svg>
          </Link>
        </div>
        <div className="ml-auto md:hidden">
          <button
            className="flex items-center px-3 py-2 border rounded"
            type="button"
          >
            <svg
              className="h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <div className="w-full md:w-auto md:flex-grow md:flex md:items-center">
          <ul className="flex flex-col font-bold text-lg mt-4 -mx-4 pt-4 border-t md:flex-row md:items-center md:mx-0 md:mt-0 md:pt-0 md:mr-4 lg:mr-8 md:border-0">
            {menu.map((v, i) => (
              <li key={i}>
                <Link
                  spy={true}
                  smooth={true}
                  offset={-60}
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
  );
};
export default Menu;
