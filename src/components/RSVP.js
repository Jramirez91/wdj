import { SiFacebook, SiInstagram, SiMessenger, SiWhatsapp } from 'react-icons/si'
const RSVP = () => {
  return (
    <div id="rsvp" className="w-full order-5 py-20 bg-whites">
      <div className="text-center font-bold text-2xl">RSVP</div>

      <div className="flex flex-wrap justify-center">
        <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-8">
          <div className="px-6">
            <img alt="..." src="https://scontent.fmid2-1.fna.fbcdn.net/v/t1.6435-9/244466464_4752283278135462_8152033350550852581_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeGQtO-ihPsZ6TF3CV-q3wdhdUNhe-_NtGJ1Q2F77820YiOHbMUo2JBpGpkEW6gqfspx-xPVLx67nlFL_TCmKg6E&_nc_ohc=DkarflClytoAX_1262i&tn=26oo36NJie-eNn9h&_nc_ht=scontent.fmid2-1.fna&oh=dd470912d3bcdc92e1fa783d94d810a9&oe=61896FCE" className="shadow-lg rounded-full mx-auto w-52 " />
            <div className="pt-6 text-center">
              <h5 className="text-xl font-bold text-blueGray-700">Jimmy Ramirez</h5>
              <p className="mt-1 text-sm text-blueGray-400 uppercase font-semibold"> Fullstack Developer</p>
              <div className="mt-6">
                <a href="https://www.facebook.com/Negroo91" target="_blank" rel="noreferrer" className=" rounded-full outline-none focus:outline-none mr-1 mb-1" type="button">
                  <SiFacebook className="w-8 h-8" />
                </a>
                <a href="https://www.instagram.com/jimrams/" target="_blank" rel="noreferrer" className="  rounded-full outline-none focus:outline-none mr-1 mb-1" type="button">
                  <SiInstagram className="w-8 h-8" />
                </a>
                <a href="http://m.me/Negroo91" target="_blank" rel="noreferrer" className=" rounded-full outline-none focus:outline-none mr-1 mb-1" type="button">
                  <SiMessenger className="w-8 h-8" />
                </a>
                <a href="https://wa.me/529993684879?text=Hola" target="_blank" rel="noreferrer" className=" rounded-full outline-none focus:outline-none mr-1 mb-1" type="button">
                  <SiWhatsapp className="w-8 h-8 fill-current " />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className=" w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-8">
          <div className="px-6">
            <img alt="..." src="https://scontent.fmid2-1.fna.fbcdn.net/v/t1.6435-9/60449792_2187130661403191_2885094867489259520_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeH4_VL7WDgn7y4FMNVvul0RAhCFCcKh5zkCEIUJwqHnOX0H3qNO2J7hyMJmu7_GsmUn6SMBpnlvOwE9QFE4H0Qv&_nc_ohc=tr1c-MX17nsAX9p_yOQ&_nc_ht=scontent.fmid2-1.fna&oh=4439431c1e292d7af29855aedbba847e&oe=61899C31" className="shadow-lg rounded-full mx-auto w-52" />
            <div className="pt-6 text-center">
              <h5 className="text-xl font-bold text-blueGray-700">Deymi Oy</h5>
              <p className="mt-1 text-sm text-blueGray-400 uppercase font-semibold">
                Fullstack Developer
              </p>
              <div className="mt-6">
                <a href="https://www.facebook.com/deymi.oy" target="_blank" rel="noreferrer" className=" rounded-full outline-none focus:outline-none mr-1 mb-1" type="button">
                  <SiFacebook className="w-8 h-8" />
                </a>
                <a href="https://www.instagram.com/deymioy/" target="_blank" rel="noreferrer" className="  rounded-full outline-none focus:outline-none mr-1 mb-1" type="button">
                  <SiInstagram className="w-8 h-8" />
                </a>
                <a href="http://m.me/deymis.oy" target="_blank" rel="noreferrer" className="rounded-full outline-none focus:outline-none mr-1 mb-1" type="button">
                  <SiMessenger className="w-8 h-8" />
                </a>
                <a href="https://wa.me/529993777279?text=Hola" target="_blank" rel="noreferrer" className=" rounded-full outline-none focus:outline-none mr-1 mb-1" type="button">
                  <SiWhatsapp className="w-8 h-8 fill-current " />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" text-xl">
        <p className="text-center">No olvide confirmar su asistencia antes del 8 de noviembre por las redes sociales o a los teléfonos <a className="font-bold" href="tel:9993684879">(999)-368-4879</a> o <a className="font-bold" href="tel:9993777279">(999)-377-7279</a></p>
        <p className="font-bold text-center">¡Los esperamos!</p>
      </div>
    </div >
  );
};
export default RSVP;
