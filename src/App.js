import "./App.css";
import { MdLocationOn } from "react-icons/md";
import couple from "./img/couple.jpg";
import hands from "./img/hands.jpg";

import { Menu, Us, Information, Message, RSVP } from "./components/";

function App() {
  return (
    <div className="flex flex-wrap">
      <div
        id="home"
        className="w-full h-full lg:h-screen/2  bg-opacity-50 bg-center order-2 lg:order-1 bg-pink-50"
        style={{
          backgroundImage: `url(${hands})`,
        }}
      >
        <div className="w-full h-screen  flex justify-center items-center bg-gray-900 bg-opacity-50">
          <div className="mx-4 text-center ">
            <h1 className="text-9xl mb-12 title text-white">Deymi & Jimmy</h1>
            <h2 className="text-5xl mb-12 subtitle text-white ">
              !Nos casamos!
            </h2>
            <h2 className="text-3xl mb-12 subtitle text-white  tracking-widest">
              - 28 Noviembre 2021 -
            </h2>
          </div>
        </div>
      </div>
      <Menu />

      <div
        id="matrimonio"
        className="w-full h-full bg-center bg-fixed bg-no-repeat bg-cover order-3"
        style={{
          backgroundImage: `url(${couple})`,
        }}
      >
        <div className="w-full h-screen  bg-opacity-50 bg-black ">
          <div className="text-center w-full pt-6 bg-white h-1/2 flex flex-col justify-center items-center">
            <h2 className="font-bold text-3xl mb-4">NUESTRO MATRIMONIO</h2>
            <h2 className="text-xl mb-1 text-center w-1/2">
              Nos vamos a casar el domingo 28 de nomviembre en la hacienda Santa
              María vía Arrayanes a las 12pm. Queremos compartir con ustedes el
              día más especial de nuestra vida.
            </h2>
            <h3 className="text-2xl mb-6 text-center w-1/2">!LOS ESPERAMOS!</h3>
            <div className=" flex justify-center items-center">
              <MdLocationOn className="w-20 h-20 text-red-500" />
            </div>
            <a
              href="#mapa"
              className="font-bold text-xl mb-6 text-center w-1/2"
            >
              VER MAPA
            </a>
          </div>
        </div>
      </div>
      <Us />
      <Information />
      <Message />
      <RSVP />
    </div>
  );
}

export default App;
