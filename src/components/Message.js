const Message = () => {
  return (
    <div
      id="mensajes"
      className="w-full order-5 py-20 bg-green-200 flex flex-wrap mount-bg"
    >
      <div className="pt-16 px-10 w-1/4">
        <form>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <input
                className="appearance-none block w-full font-bold placeholder-black  border border-gray-200 rounded py-3 px-4 mb-3  focus:outline-none focus:bg-white focus:border-gray-500 bold-plc"
                id="de"
                placeholder="DE:"
                type="text"
              />
            
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
           
              <input
                className="appearance-none block w-full font-bold placeholder-black  border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 bold-plc"
                id="email"
                placeholder="E-MAIL"
                type="email"
              />
            
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
            
              <textarea
                className=" no-resize appearance-none block w-full font-bold placeholder-black  border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none bold-plc"
                id="message"
                placeholder="MENSAJE:"
              ></textarea>
            </div>
          </div>
          <div className="md:flex md:items-center">
            <div className="md:w-1/3">
              <button
                className="shadow bg-gray-50 bg-teal-400 hover:bg-teal-400 focus:shadow-outline focus:outline-none  font-bold py-2 px-4 rounded"
                type="button"
              >
                Enviar
              </button>
            </div>
            <div className="md:w-2/3"></div>
          </div>
        </form>
      </div>
      <div className="w-3/4">
        <div className="text-6xl text-center">BUZÓN DE FELICITACIONES</div>
      </div>
    </div>
  );
};
export default Message;
