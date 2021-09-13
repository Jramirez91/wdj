import "./App.css";

import hands from "./img/hands.jpg";
import { MdLocationOn } from "react-icons/md";
import { Menu, Us, Information, Message, RSVP, Married } from "./components/";



function App() {



 



  return (

    <div className=" flex flex-wrap">

      <div className="w-full md:w-1/5 order-2 md:order-1 bg-snow">
        <Menu />
      </div>
      <div className="w-full md:w-4/5 order-1 md:order-2">
        <div
          id="home"
          className="w-full h-full md:h-screen bg-opacity-50 bg-center order-2  bg-pink-50"
          style={{
            backgroundImage: `url(${hands})`,
          }}
        >
          <div className="w-full h-screen  flex justify-center items-center bg-gray-900 bg-opacity-50">
            <div className="mx-4 text-center ">
              <h1 className="text-9xl mb-12 title ">Deymi & Jimmy</h1>

              <h2 className="text-5xl mb-12 text-gray-50 tracking-widest">
                - 28 Noviembre 2021 -
              </h2>
            </div>
          </div>
        </div>
       
        <Married />
        <Us />
        
        <Information />
        <Message />
        <RSVP />
        <div className=" leading-loose tracking-tight">
          <p className="font-bold my-4 md:my-12">About Me</p>

          <p className="mb-8">Arcu risus quis varius quam quisque id diam vel. Consectetur adipiscing elit ut aliquam purus sit amet. Nibh tortor id aliquet lectus proin nibh. </p>
        </div>
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
