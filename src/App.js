import "./App.css";
import { MdLocationOn } from "react-icons/md";
import couple from "./img/couple.jpg";
import hands from "./img/hands.jpg";

import Menu from "./components/Menu";

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
            <a href="#" className="font-bold text-xl mb-6 text-center w-1/2">
              VER MAPA
            </a>
          </div>
        </div>
      </div>
      <div id="nosotros" className="w-full  order-4 ">
        <div className="text-center w-full pt-20 h-1/2 mb-20 grid grid-cols-2">
          <div>
            <h2 className="font-bold text-3xl  mb-4">Deymi</h2>
            <div className="mx-auto text-xl tracking-widest mb-1 text-justify w-3/4">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </div>
          </div>
          <div>
            <h2 className="font-bold text-3xl  mb-4">Jimmy</h2>
            <div className="mx-auto text-xl tracking-widest mb-1 text-justify w-3/4">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </div>
          </div>
        </div>
      </div>
      <div
        id="informacion"
        className="w-full h-screen order-5 py-20 bg-green-200"
      >
        <div className="text-center font-bold text-2xl">INFORMACIÓN</div>
        <div className="mt-12 text-xl text-justify mx-auto w-11/12">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look like readable English. Many desktop publishing packages and web
          page editors now use Lorem Ipsum as their default model text, and a
          search for 'lorem ipsum' will uncover many web sites still in their
          infancy. Various versions have evolved over the years, sometimes by
          accident, sometimes on purpose (injected humour and the like).
        </div>
      </div>
    </div>
  );
}

export default App;
