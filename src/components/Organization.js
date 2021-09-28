
// import { MdLocationOn } from "react-icons/md";
import { SubOrganization } from ".";
import { useState } from "react";
import civil  from '../img/civl.jpg'
import ceremony  from '../img/ceremony.jpg'
import party  from '../img/party.jpg'

const Organization = () => {

  const [organization] = useState([{
    position: 1,
    event: "CEREMONIA",
    picture: civil,
    message:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    position: 2,
    event: "FOTOS",
    picture: ceremony,
    message:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    position: 3,
    event: "FIESTA",
    picture:party,
    message:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    position: 4,
    event: "CORTAR PASTEL",
    picture:party,
    message:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  }])


  return (
    <div id="cuandoydonde" className="w-full order-5">
      <div className="text-center xl:text-left text-3xl mt-10 mb-2 lg:ml-48 font-alex-brush text-color-camel">Boda</div>
      <div className="text-center xl:text-left text-3xl lg:ml-48 mb-10 font-bold">ORGANIZACIÓN</div>
      
      <div className="w-full flex flex-col md:flex-row md:justify-center">

        {organization.map((v, k) => <SubOrganization key={k} model={v} />)}

      </div>
    </div>
  );
};
export default Organization;
