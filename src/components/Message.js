import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import {ImSpinner2} from 'react-icons/im'
import { getInbox, setInbox } from "../redux/actions/inboxActions";



const Message = ({ inbox, loading, getInbox, setInbox }) => {
  useEffect(() => {
    getInbox();
  }, [getInbox]);

  const [model, setModel] = useState({
    name: '',
    email: '',
    message: ''
  });


  function formatDate(date) {
    var _date = new Date(date)
    return _date.toLocaleDateString('es', 'MX');
  }

  function handleSubmit(event) {

    setInbox(model);

    // getInbox();

    event.preventDefault();
  }
  function handleInput(event) {
    const target = event.target;

    setModel({
      ...model,
      [target.name]: target.value
    })

  }

  return (
    <div
      id="mensajes"
      className="w-full order-5 py-20 bg-whites flex flex-wrap "
    >
      <div className="pt-16 px-10 w-1/4">
        <form onSubmit={handleSubmit} >
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <input
                className="appearance-none block w-full font-bold placeholder-black  border border-gray-200 rounded py-3 px-4 mb-3  focus:outline-none focus:bg-white focus:border-gray-500 bold-plc"
                id="de"
                name="name"
                value={model.name}
                onChange={handleInput}
                autoComplete="off"
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
                name="email"
                onChange={handleInput}
                value={model.email}
                autoComplete="off"
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
                onChange={handleInput}
                value={model.message}
                name="message"
                placeholder="MENSAJE:"
              ></textarea>
            </div>
          </div>
          <div className="md:flex md:items-center">
            
              <button
                className={`w-full shadow bg-gray-50 bg-teal-400 hover:bg-gray-200 focus:shadow-outline focus:outline-none  font-bold py-2 px-4 rounded `}
                type="submit"
              >
                <ImSpinner2 class="animate-spin h-5 w-5" />
                Enviar
              </button>
            
            
          </div>
        </form>
      </div>
      <div className="w-3/4">
        <div className="text-3xl text-center">BUZÓN DE FELICITACIONES</div>
        {inbox.map((i) => (
          <div className="flex" key={i.id}>
            <div className="flex-1 flex-row border-l mx-20 px-4 py-2 sm:px-6 sm:py-4 sm:mb-8 leading-relaxed">
              <strong className="text-xl">{i.name === undefined || i.name === "" ? i.email : i.name}</strong> <span className="text-xs ">{formatDate(i.created_at)}</span>
              <p className="text-lg">
                {i.message}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {

  const { all, loading } = state.inbox;

  return { inbox: all, loading };
};
export default connect(mapStateToProps, { getInbox, setInbox })(Message);
