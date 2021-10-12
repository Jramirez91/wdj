import { MdLocationOn } from "react-icons/md";
const SubInformation = ({ model }) => {

    const { event, location, position, picture } = model

    return (
        <div className="w-full lg:w-80  bg-whites lg:mx-2 mb-5">
            <div className="xl:pt-10 text-lg xl:text-xl text-center">

                {/* <h2 className="text-2xl xl:text-4xl font-bold text-color-camel">{position}</h2> */}
                <img className="object-cover h-32 w-full mb-2" src={picture} lang={position} alt={position} />

                <h2 className="text-2xl lx:text-3xl text-color-camel">{event}</h2>
                <p className="text-xl xl:text-2xl font-bold mb-4">{location.name}</p>
                <p className="flex justify-start"><a href={location.maps} target="_blank" rel="noreferrer" className="cursor-pointer ml-2"><MdLocationOn  className="fill-current text-color-camel"/></a>{location.address} </p>
                <p className="mb-3">{location.state}</p>
                
                <p className="tracking-widest">{location.date}</p>
                <p className="mb-10">{location.time}</p>
            </div>
        </div>
    )

};
export default SubInformation;