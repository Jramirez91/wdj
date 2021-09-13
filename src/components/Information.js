
import { MdLocationOn } from "react-icons/md";
import { SubInformation } from ".";
import { useState } from "react";

const Information = () => {

  const [organization, setorganization] = useState([{
    position:1,
    event:"CIVIL",
    location:{
      name:"LA HACIENDITA",
      date:"13  Noviembre  2021",
      time:"12:00 Hrs",
      address:"Calle 53 N° S/N entre 42 Y 40, Colonia Centro",
      state:"TEKAX, YUCATÁN",
      maps:"https://goo.gl/maps/M35j3MJBubvDcKxE9"
    }
  },
  {
    position:2,
    event:"CEREMONIA",
    location:{
      name:"TEMPLO BETANIA",
      date:"28 Noviembre 2021",
      time:"16:00 Hrs",
      address:"Calle 49 N° 307-A entre 40 Y 38, Colonia Centro",
      state:"TIZIMIN, YUCATÁN",
      maps:"https://goo.gl/maps/4zRPHVYWLf4t5CqE6"
    }
  },
  {
    position:3,
    event:"SALON FIESTAS",
    location:{
      name:"LOS PALMARES",
      date:"28 Noviembre 2021",
      time:"17:30 Hrs",
      address:"Calle 46 N° S/N entre 87 Y 98, Salida Valladolid",
      state:"TIZIMIN, YUCATÁN",
      maps:"https://goo.gl/maps/4zRPHVYWLf4t5CqE6"
    }
  }])


  return (
    <div id="informacion" className="w-full order-5 p-20 ">
      <div className="text-left text-3xl mb-10 ">ORGANIZACIÓN</div>


      <div className="flex ">
      <div className="w-full flex flex-row justify-center">
        
        {organization.map((v,k) => <SubInformation key={k} model={v} />)}
      
      </div>
      </div>


      
    </div>
  );
};
export default Information;
