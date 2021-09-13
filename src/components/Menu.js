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
      title: "NUESTRA HISTORIA",
    },
    {
      href: "informacion",
      title: "INFORMACIÓN",
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
    <nav
      className="w-full md:sticky md:top-0 "
      role="navigation"
    >
      <div className="pt-28 flex flex-col ">
        <div className="flex justify-center  pb-12">
          <Link to="home" spy={true} smooth={true} duration={500} rel="home">
            <svg
              className="w-10 h-10 text-purple-600 cursor-pointer"
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
        <h1 className="text-center text-4xl text-color-camel mb-12 font-alex-brush">Deymi & Jimmy</h1>
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
  );
};
export default Menu;
