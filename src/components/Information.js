const Information = () => {
  return (
    <div id="informacion" className="w-full order-5 py-20 ">
      <div className="text-center font-bold text-2xl">INFORMACIÓN</div>
      <div className="mt-12 text-xl text-justify mx-auto grid grid-cols-2 w-11/12">
        <div className="text-center">
          <strong>CIVIL</strong>
          <p className="mt-6">NOMBRE DEL LUGAR</p>
          <p className="mt-2 bg-gray-600 text-white w-1/2 mx-auto p-2 font-bold tracking-widest">13 Noviembre 2021 a las 12:00 PM</p>
          <p className="mt-2">DIRECCIÓN DEL LUGAR</p>
          <p className="mt-2">TEKAX, YUCATÁN</p>
        </div>
        <div className="text-center border-l">
          <strong >CEREMONIA</strong>
          <p className="mt-6">NOMBRE DE LA IGLECIA</p>
          <p className="mt-2 bg-gray-600 text-white w-1/2 mx-auto p-2 font-bold tracking-widest">28 Noviembre 2021 a las 12:00 PM</p>
          <p className="mt-2">DIRECCIÓN DEL LUGAR</p>
          <p className="mt-2">TIZIMIN, YUCATÁN</p>
        </div>
      </div>
    </div>
  );
};
export default Information;
