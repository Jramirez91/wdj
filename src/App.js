import "./App.css";
import { Menu, Us, Information, Organization, RSVP, Married } from "./components/";
import { useEffect, useState } from "react";
import boda from './video/boda.mp4'


function App() {

  const [menu, setMenu] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 3000);
  }, [])

  function handleMenu() {
    setMenu(!menu);
  }

  return (

    <div className="flex flex-nowrap md:flex-wrap">

      <div className={`w-full h-full fixed ${loading ? 'block' : 'invisible fade-out'} top-0 left-0 bg-snow z-50`}>
        <span className="top-1/3 my-0 mx-auto  block relative w-48">
          <svg id="svJD" data-name="JD" className="fill-current text-color-camel" xmlns="http://www.w3.org/2000/svg" viewBox="-30 0 350 350"><path className="lt-d" d="M115.83 278.53c1.35-3.58 3.4-3.91 6.67-3 24.48 6.49 48.59 7.42 72-4.6 16.84-8.64 30.91-20.59 43.05-34.84 20.58-24.25 35.28-51.56 41.45-82.92 6-30 2.5-59-13.27-85.39-15.2-25.46-37.61-43-65.29-53.7-25.6-9.92-52-10.87-78.84-7.21-25.88 3.53-50.08 11.71-70.69 28.1C17.56 61.49 1.11 95.83 5.77 138.89c1.83 16.81 8.45 31.79 21.44 43.21 17.88 15.72 45.16 17.68 63.7 4.68 9.08-6.37 15-15.28 19.07-25.45 5.82-14.67 8-29.79 4.28-45.34-.81-3.33-3.05-6.29-4.41-9.52a14.41 14.41 0 0 1-.49-4c1.41.35 3.56.24 4.11 1.12 2.05 3.28 4.43 6.72 5.17 10.4 5.67 28.19-.17 53.49-21.38 73.64-15.45 14.68-41.66 16.55-61.83 5.78C16.1 183.07 5.92 166 2.04 145.23c-6.68-35.76 3.31-67.46 26.15-95.11 21.74-26.33 50.74-40.37 83.8-46.49 24.74-4.58 49.59-5.43 74.17.93 36.26 9.4 64.3 30.13 84.57 61.73 17.42 27.14 25.6 56.52 22.59 88.66-2.49 26.25-11.79 50.1-27.12 71.58-18.8 26.29-43.34 44.78-74.63 53.59-25.23 7.04-50.45 6.26-75.74-1.59Z" /><path className="lt-j" d="M164.31 85.64c0-7.65.16-14.17-.05-20.69a137.21 137.21 0 0 0-1.31-16.59c-2.06-13.08-8-18.37-21.15-19.47a9 9 0 0 1-2.62-.19 2.43 2.43 0 0 1-1.38-1.7c0-.57.84-1.37 1.47-1.61a7.91 7.91 0 0 1 2.63-.13h67.15c2.06 0 4.3-.28 3.38 3.29l-5.9.63c-9.61 1.09-15.16 5.77-17.82 15a9.2 9.2 0 0 0-.6 2.58c.14 7-3.75 12-7.93 16.93-2.84 3.38-5.36 7-7.94 10.62-2.48 3.43-4.86 6.93-7.93 11.33ZM186.65 83.25v7.55c0 47.18-.09 94.36.05 141.54 0 13.54-2.34 26.35-8.87 38.32-1.52 2.78-3.39 4.61-6.6 4.93-5.22.53-10.44 1.09-16.25 1.69a29.42 29.42 0 0 1 1-2.87c5.83-11.8 8.29-24.38 8.32-37.44.07-34.78 0-69.57.13-104.35a23.28 23.28 0 0 1 2.13-9.38c5.72-12.39 11.76-24.63 17.68-36.92.54-1.1 1.11-2.19 1.66-3.28ZM161.76 289.68c-5.54 2.51-10.91 5.58-16.68 7.4a64.92 64.92 0 0 1-39.93.13c-18.3-5.84-23-22.72-20.37-36.41 2.36-12.36 19.38-18.55 29.59-11.24 6 4.31 7.15 15.12 2.19 21.94-1.63 2.25-3.56 4.28-5.16 6.55-5.63 8-2 16.77 7.58 18.6a28.06 28.06 0 0 0 24.42-6.27 9.23 9.23 0 0 1 7.21-2.31c3.51.25 7.05.06 10.59.06.19.52.38 1.03.56 1.55Z" /><path className="lt-d" d="M74.58 256.89c2.4 2.49 8.46 1.62 5.78 7.88a47.64 47.64 0 0 1-6.34-2.54c-2.58-1.45-4.23-.72-6.26 1.17-6.78 6.35-14.27 11.7-23.14 14.83a33.58 33.58 0 0 1-17.92 1.56c-6.11-1.21-11-4.35-12.51-10.71s.77-11.74 5.85-15.79c7.9-6.29 17.14-6.61 26.38-4.87 6.91 1.29 13.65 3.64 20.36 5.84 2.19.72 3.59.55 4.85-1.27 7.7-11.09 16.41-21.63 22.88-33.39 14.31-26 27.39-52.69 41.16-79 15.4-29.4 32.54-57.73 54-83.19 6.05-7.2 13.35-13.36 20.34-19.71 1.76-1.6 4.47-2.3 6.87-3 .79-.23 2 .9 3 1.41-.47.93-.73 2.41-1.44 2.69-14.79 5.67-22.25 18.39-29 31.21-10.86 20.54-20.76 41.59-31.18 62.37-17.79 35.44-37.94 69.43-62.72 100.51-5.75 7.21-12 14-18.09 20.94-.97 1.05-1.9 2.02-2.87 3.06Zm-8.82 2c-10.15-3.94-19.91-7.23-30.56-6.44-5.5.4-10.39 2.18-14.09 6.43-4.59 5.28-3.25 12.29 3.16 15a21.44 21.44 0 0 0 8.84 1.51c13.21-.45 23-7.86 32.65-16.46Z" /><path className="lt-d" d="M65.76 258.93c-9.65 8.58-19.44 16-32.65 16.51a21.44 21.44 0 0 1-8.84-1.51c-6.41-2.72-7.75-9.73-3.16-15 3.7-4.25 8.59-6 14.09-6.43 10.63-.8 20.41 2.49 30.56 6.43Z" /></svg>
        </span>
      </div>

      <Menu open={menu} />

      <div className="w-full md:w-4/5 order-2 md:order-2">

        <div
          id="home"
          className="relative flex justify-center w-full h-screen md:min-h-screen  bg-center order-2  overflow-hidden"

        >

          <div className="fixed mt-8 z-50 -ml-72 md:hidden">
            <button
              className="flex items-center px-4 py-4 rounded-full bg-camel"
              type="button"
              onClick={handleMenu}
            >
              <svg
                className="h-4 w-4"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Menu</title>
                <path fill="white" d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
              </svg>
            </button>
          </div>
          
          <div className="relative z-30 w-full  md:min-h-screen flex justify-center items-center bg-gray-900 bg-opacity-60">

            <div className="mx-4 text-center ">
              <h1 className="text-5xl sm:text-6xl xl:text-9xl  mb-12 title ">Deymi & Jimmy</h1>

              <h2 className="text-2xl sm:text-3xl xl:text-5xl mb-12 text-gray-50 tracking-widest">
                - 28 Noviembre 2021 -
              </h2>
            </div>

          </div>
          <video className="absolute z-10 w-auto min-w-full min-h-full max-w-none" autoPlay muted loop id="myVideo">
            <source src={boda} type="video/mp4" />
          </video>

        </div>

        <Married />
        <Us />
        <Organization />
        <Information />
        {/* <Message /> */}
        <RSVP />

      </div>



    </div>



    // <div className="flex flex-wrap">
    //   <div
    //     id="home"
    //     className="w-full h-full lg:h-screen/2  bg-opacity-50 bg-center order-2 lg:order-1 bg-pink-50"
    //     style={{
    //       backgroundImage: `url(${hands})`,
    //     }}
    //   >
    //     <div className="w-full h-screen  flex justify-center items-center bg-gray-900 bg-opacity-50">
    //       <div className="mx-4 text-center ">
    //         <h1 className="text-9xl mb-12 title ">Deymi & Jimmy</h1>
    //         <h2 className="text-7xl mb-12 subtitle ">!Nos casamos!</h2>
    //         <h2 className="text-5xl mb-12 subtitle  tracking-widest">
    //           - 28 Noviembre 2021 -
    //         </h2>
    //       </div>
    //     </div>
    //   </div>
    //   <Menu />

    //   <div
    //     id="matrimonio"
    //     className="w-full h-full bg-center bg-fixed bg-no-repeat bg-cover order-3"
    //     style={{
    //       backgroundImage: `url(${couple})`,
    //     }}
    //   >
    //     <div className="w-full h-screen  bg-opacity-50 bg-black ">
    //       <div className="text-center w-full pt-6 bg-white h-1/2 flex flex-col justify-center items-center">
    //         <h2 className="font-bold text-3xl mb-4">¡Llegó el día!</h2>

    //         <h2 className="text-2xl mb-6 text-center w-1/2">
    //           ¡Nos casamos! Y necesitamos invitados, con o sin experiencia, para
    //           la celebración de nuestra boda. Deja todo lo que tengas que hacer
    //           el domingo 28 de Noviembre y únete a nosotros. Ven, te esperamos
    //           en el TEMPLO BETANIA.
    //         </h2>
    //         <h3 className="text-2xl mb-6 text-center w-1/2 tracking-widest">
    //           !No Faltes!
    //         </h3>
    //         <Link
    //           smooth={true}
    //           offset={-60}
    //           duration={500}
    //           to="informacion"
    //           className="mt-6 text-xl cursor-pointer"
    //         >
    //           Más detalles
    //         </Link>
    //         {/* <a
    //           href="https://goo.gl/maps/4zRPHVYWLf4t5CqE6"
    //           className="font-bold text-xl mb-6 text-center w-1/2"
    //         >
    //           <div className=" flex justify-center items-center">
    //             <MdLocationOn className="w-20 h-20 text-red-500" />
    //           </div>
    //           VER MAPA
    //         </a> */}
    //       </div>
    //       <div className="text-white h-1/2  w-full flex flex-col justify-center items-center" >
    //       <h2 className="text-5xl text-center title mb-4  subtitle">
    //         Nos convertiremos en familia en
    //       </h2>
    //       <h2 className="text-4xl text-center  ">
    //         Días: {dates.days} / Horas: {dates.hours} / Minutos: {dates.minutes} / Segundos: {dates.seconds}
    //       </h2>
    //       </div>
    //     </div>


    //   </div>
    //   <Us />
    //   <Information />
    //   <Message />
    //   <RSVP />
    // </div>
  );
}

export default App;
