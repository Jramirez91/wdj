const SubOrganization = ({model}) =>{

    const {event,message,position,picture} = model

    return(
        <div className="w-full lg:w-80 bg-whites mb-5 border-yellow-600 border-opacity-10 border">
            <div className="xl:pt-10 text-lg xl:text-xl text-justify px-10">

                <h2 className="text-2xl xl:text-4xl font-bold text-color-camel">{position}</h2>
                
                <h2 className="text-2xl lx:text-3xl text-color-camel">{event}</h2>
                
                <p className="mb-4">{message}</p>
                
            </div>
        </div>
    )

};
export default SubOrganization;