

import { SubInformation } from ".";
import { useState } from "react";
import civil  from '../img/civl.jpg'
import ceremony  from '../img/ceremony.jpg'
import party  from '../img/party.jpg'

const Information = () => {

  const [organization, ] = useState([{
    position: 1,
    event: "CIVIL",
    picture: civil,
    location: {
      name: "LA HACIENDITA",
      date: "13  Noviembre  2021",
      time: "12:00 Hrs",
      address: "Calle 53 N° S/N entre 42 Y 40, Colonia Centro",
      state: "TEKAX, YUCATÁN",
      maps: "https://goo.gl/maps/keVsjAJn7kcXggR28"
    }
  },
  {
    position: 2,
    event: "CEREMONIA",
    picture: ceremony,
    location: {
      name: "TEMPLO BETANIA",
      date: "28 Noviembre 2021",
      time: "16:00 Hrs",
      address: "Calle 49 N° 307-A entre 40 Y 38, Colonia Centro",
      state: "TIZIMIN, YUCATÁN",
      maps: "https://goo.gl/maps/4zRPHVYWLf4t5CqE6"
    }
  },
  {
    position: 3,
    event: "RECEPCIÓN SOCIAL",
    picture:party,
    location: {
      name: "LOS PALMARES",
      date: "28 Noviembre 2021",
      time: "17:30 Hrs",
      address: "Calle 46A N° S/N entre 87 Y 89, Salida Valladolid",
      state: "TIZIMIN, YUCATÁN",
      maps: "https://goo.gl/maps/VaSAQipoWGks6rM8A"
    }
  }])


  return (
    <div id="cuandoydonde" className="w-full order-6 ">
      <div className="text-center xl:text-left text-3xl pt-8 mt-10 mb-2 lg:ml-48 font-alex-brush text-color-camel">Preguntas</div>
      <div className="text-center xl:text-left text-3xl lg:ml-48 mb-10 font-bold">CUÁNDO & DONDE</div>
      
      <div className="w-full flex flex-col md:flex-row md:justify-center">

        {organization.map((v, k) => <SubInformation key={k} model={v} />)}

      </div>
    </div>
  );
};
export default Information;
