
// import { MdLocationOn } from "react-icons/md";
import { SubOrganization } from ".";
import { useState } from "react";
import church from '../img/051-church.png'

import photo from '../img/051-photo-camera.png'
import cocktail from '../img/051-cocktail.png'
import restaunt from '../img/051-restaurant.png'
import cake from '../img/051-wedding-cake.png'
import music from '../img/051-romantic-music.png'

const Organization = () => {

  const [organization] = useState([{
    position: 1,
    event: "CEREMONIA",
    picture: church,
    message: "",
  },
  {
    position: 2,
    event: "CÓCTEL",
    picture: cocktail,

  },
  {
    position: 3,
    event: "FOTOS",
    picture: photo,

  },
  {
    position: 4,
    event: "BANQUETE",
    picture: restaunt,

  },
  {
    position: 5,
    event: "PASTEL",
    picture: cake,

  },
  {
    position: 6,
    event: "MUSICA",
    picture: music,

  },
  ])


  return (
    <div id="organizacion" className="w-full order-5">
      <div className="text-center xl:text-left text-3xl mt-10 mb-2 lg:ml-48 font-alex-brush text-color-camel">Boda</div>
      <div className="text-center xl:text-left text-3xl lg:ml-48 mb-10 font-bold">ORGANIZACIÓN</div>

      <div className="w-full flex flex-col md:flex-row md:justify-center">

        {organization.map((v, k) => <SubOrganization key={k} model={v} />)}

      </div>
    </div>
  );
};
export default Organization;
