import "./App.css";
import { MdLocationOn } from "react-icons/md";
import couple from "./img/couple.jpg";

function App() {
  return (
    <div className="flex flex-wrap">
      <div className="w-full h-full lg:h-screen/2  bg-center  order-2 lg:order-1 bg-pink-50">
        <div className="w-full h-screen bg-opacity-50 flex justify-center items-center">
          <div className="mx-4 text-center ">
            <h1 className="font-bold text-9xl mb-4 title text-purple-600">
              Deymi & Jimmy
            </h1>
            <h2 className="font-bold text-3xl mb-12 title text-purple-600">
              - 28 Noviembre 2021 -
            </h2>
          </div>
        </div>
      </div>
      <nav
        className="sticky top-0 w-full bg-white shadow order-1 lg:order-2"
        role="navigation"
      >
        <div className="container mx-auto p-2 flex flex-wrap items-center md:flex-no-wrap">
          <div className="mr-4 md:mr-8">
            <a href="#" rel="home">
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
            </a>
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
            <ul className="flex flex-col mt-4 -mx-4 pt-4 border-t md:flex-row md:items-center md:mx-0 md:mt-0 md:pt-0 md:mr-4 lg:mr-8 md:border-0">
              <li>
                <a
                  className="block px-4 py-1 md:p-2 lg:px-4"
                  href="#matrimonio"
                  title="MATRIMONIO"
                >
                  MATRIMONIO
                </a>
              </li>
              <li>
                <a
                  className="block px-4 py-1 md:p-2 lg:px-4"
                  href="#nosotros"
                  title=" NOSOTROS"
                >
                  NOSOTROS
                </a>
              </li>
              <li>
                <a
                  className="block px-4 py-1 md:p-2 lg:px-4"
                  href="#informacion"
                  title="INFORMACIÓN"
                >
                  INFORMACIÓN
                </a>
              </li>
              <li>
                <a
                  className="block px-4 py-1 md:p-2 lg:px-4"
                  href="#"
                  title="Link"
                >
                  REGALOS
                </a>
              </li>
              <li>
                <a
                  className="block px-4 py-1 md:p-2 lg:px-4"
                  href="#"
                  title="Link"
                >
                  MENSAJES
                </a>
              </li>
              <li>
                <a
                  className="block px-4 py-1 md:p-2 lg:px-4"
                  href="#"
                  title="Link"
                >
                  RSVP
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div
        id="matrimonio"
        className="w-full h-full bg-center  bg-fixed bg-no-repeat bg-cover order-3"
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
            <a href="" className="font-bold text-xl mb-6 text-center w-1/2">
              VER MAPA
            </a>
          </div>
        </div>
      </div>
      <div id="nosotros" className="w-full   order-4 ">
        <div className="text-center w-full pt-20 bg-white h-1/2 mb-20 grid grid-cols-2">
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
      <div id="informacion" className="w-full order-5 py-20 bg-green-200">
        <div className="text-center font-bold text-2xl">INFORMACIÓN</div>
        <div className="mt-12 text-xl text-justify mx-auto w-11/12">
        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
        </div>
      </div>
    </div>
  );
}

export default App;
