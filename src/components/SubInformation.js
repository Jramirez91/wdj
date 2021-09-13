const SubInformation = ({model}) =>{

    const {event,location,position} = model

    return(
        <div className="w-80 h-96 bg-whites mx-2">
            <div className="pt-10 text-xl text-center">

                <h2 className=" text-4xl text-color-camel">{position}</h2>

                <h2 className=" text-3xl mb-10 text-color-camel">{event}</h2>
                <p className="text-2xl font-bold mb-4">{location.name}</p>
                
                <p className="">{location.address}</p>
                <p className="mb-6">{location.state}</p>

                <p className=" tracking-widest">{location.date}</p>
                <p className="">{location.time}</p>
            </div>
        </div>
    )

};
export default SubInformation;