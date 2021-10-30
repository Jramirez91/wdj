import { useEffect,  useState } from "react";
import couple from "../img/couple.webp";
import { Link } from "react-scroll";

const Married = () => {

    const [dates, setDates] = useState({});

    useEffect(() => {
        const DATE_TARGET = new Date('11/28/2021 04:01 PM');

        const MILLISECONDS_OF_A_SECOND = 1000;
        const MILLISECONDS_OF_A_MINUTE = MILLISECONDS_OF_A_SECOND * 60;
        const MILLISECONDS_OF_A_HOUR = MILLISECONDS_OF_A_MINUTE * 60;
        const MILLISECONDS_OF_A_DAY = MILLISECONDS_OF_A_HOUR * 24;

        function updateCountdown() {
            // Calcs
            const NOW = new Date()
            const DURATION = DATE_TARGET - NOW;
            const REMAINING_DAYS = Math.floor(DURATION / MILLISECONDS_OF_A_DAY);
            const REMAINING_HOURS = Math.floor((DURATION % MILLISECONDS_OF_A_DAY) / MILLISECONDS_OF_A_HOUR);
            const REMAINING_MINUTES = Math.floor((DURATION % MILLISECONDS_OF_A_HOUR) / MILLISECONDS_OF_A_MINUTE);
            const REMAINING_SECONDS = Math.floor((DURATION % MILLISECONDS_OF_A_MINUTE) / MILLISECONDS_OF_A_SECOND);
            // Thanks Pablo Monteserín (https://pablomonteserin.com/cuenta-regresiva/)

            // Render

            return {
                days: REMAINING_DAYS,
                hours: REMAINING_HOURS,
                minutes: REMAINING_MINUTES,
                seconds: REMAINING_SECONDS
            }

        }

        const interval = setInterval(() => {
            setDates(updateCountdown());

        }, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div
            id="matrimonio"
            className="w-full h-screen md:min-h-screen bg-fixed  bg-no-repeat  bg-cover order-3 "
            style={{
                backgroundImage: `url(${couple})`,
                backgroundPosition: "150px 0px"
            }}>
            <div className="w-full h-screen  bg-opacity-50 bg-black ">
                <div className="h-1/2 text-center w-full bg-white  flex flex-col justify-center items-center">
                    <h2 className="font-bold text-2xl sm:text-2xl xl:text-3xl mt-4  xl:mt-0 mb-4 tracking-widest">¡Llegó el día!</h2>
                    <h2 className="text-base xl:text-2xl mb-2 xl:mb-6 text-center lg:w-3/4">
                        ¡Nos casamos! y necesitamos invitados, con o sin experiencia, para
                        la celebración de nuestra boda. Deja todo lo que tengas que hacer
                        el domingo <strong>28 de Noviembre</strong> y únete a nosotros.
                    </h2>

                    <h3 className="text-xl xl:text-4xl text-center w-3/4 ">
                        !Te esperamos, no Faltes!
                    </h3>
                    <Link
                        smooth={true}
                        offset={-60}
                        duration={500}
                        to="cuandoydonde"
                        className="mt-1 lg:mt-6 text-lg xl:text-2xl cursor-pointer"
                    >
                        Más detalles...
                    </Link>

                </div>
                <div className="text-white h-1/2  w-full flex flex-col justify-center items-center" >
                    <h2 className="text-4xl md:text-6xl text-center  mb-8 font-alex-brush tracking-widest">
                        Futura familia en
                    </h2>
                    <h2 className=" text-center">
                        <div className="flex flex-col">
                            <div className="grid grid-cols-4 mb-4 text-4xl font-bold">
                                <div>{dates.days}</div>
                                <div>{dates.hours}</div>
                                <div>{dates.minutes}</div>
                                <div>{dates.seconds}</div>
                            </div>
                            <div className="grid grid-cols-4 text-xl md:text-4xl">
                                <div>Días</div>
                                <div>Horas</div>
                                <div>Minutos</div>
                                <div className="ml-2 md:ml-6">Segundos</div>
                            </div>
                        </div>
                    </h2>
                </div>
            </div>
        </div>
    )
}

export default Married;