const SubOrganization = ({ model }) => {

    const { event,  position, picture } = model

    return (
        <div className="w-full lg:w-40  mb-5 ">
            <div className="xl:pt-10 text-lg xl:text-xl text-justify  ">

                {/* <h2 className="text-2xl xl:text-4xl font-bold text-color-camel">{position}</h2> */}
                
                
                <h2 className="text-2xl lx:text-3xl mb-4 pt-6 text-center text-color-camel mx-10 lg:mx-0  border-b-2 ">{event}</h2>
                <img className="h-16 mx-auto " src={picture} alt={position}></img>

            </div>
        </div>
    )

};
export default SubOrganization;