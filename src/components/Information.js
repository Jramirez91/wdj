import { MdLocationOn } from "react-icons/md";

const Information = () => {
  return (
    <div id="informacion" className="w-full order-5 py-20 timber-bg">
      <div className="text-center font-bold text-3xl">INFORMACIÓN</div>
      <div className="my-12 text-xl text-justify mx-auto grid grid-cols-2 w-11/12">
        <div className="text-center">
          <strong>CIVIL</strong>
          <p className="mt-6">LA HACIENDITA</p>
          <p className="mt-2 wine-bg text-white w-1/2 mx-auto p-2 font-bold tracking-widest">
            13 Noviembre 2021 a las 12:00 PM
          </p>
          <p className="mt-2">CALLE 53 N° S/N ENTRE 42 Y 40, COLONIA CENTRO</p>
          <p className="mt-2">TEKAX, YUCATÁN</p>

          <a
            href="https://goo.gl/maps/M35j3MJBubvDcKxE9"
            className="font-bold text-xl mb-6 text-center w-1/2"
          >
            <div className=" flex justify-center items-center">
              <MdLocationOn className="w-20 h-20 text-red-500" />
            </div>
            VER MAPA
          </a>
        </div>
        <div className="text-center border-l">
          <strong>CEREMONIA</strong>
          <p className="mt-6">TEMPLO BETANIA</p>
          <p className="mt-2 wine-bg text-white w-1/2 mx-auto p-2 font-bold tracking-widest">
            28 Noviembre 2021 a las 16:00
          </p>
          <p className="mt-2">
            CALLE 49 N° 307-A ENTRE 40 Y 38, COLONIA CENTRO
          </p>
          <p className="mt-2 mb-6">
            TIZIMIN, YUCATÁN{" "}
            <a
              href="https://goo.gl/maps/4zRPHVYWLf4t5CqE6"
              className="font-bold text-xl mb-6 text-center w-1/2"
            >
              <div className=" flex justify-center items-center">
                <MdLocationOn className="w-8 h-8 text-red-500" />
              </div>
            </a>
          </p>
          <strong>SALON FIESTAS</strong>
          <p className="mt-6">LOS PALMARES</p>
          <p className="mt-2 wine-bg text-white w-1/2 mx-auto p-2 font-bold tracking-widest">
            28 Noviembre 2021 a las 16:00 PM
          </p>
          <p className="mt-2">
            CALLE 49 N° 307-A ENTRE 40 Y 38, COLONIA CENTRO
          </p>
          <p className="mt-2">TIZIMIN, YUCATÁN</p>

          <a
            href="https://goo.gl/maps/4zRPHVYWLf4t5CqE6"
            className="font-bold text-xl mb-6 text-center w-1/2"
          >
            <div className=" flex justify-center items-center">
              <MdLocationOn className="w-20 h-20 text-red-500" />
            </div>
            VER MAPA
          </a>
        </div>
      </div>
    </div>
  );
};
export default Information;
