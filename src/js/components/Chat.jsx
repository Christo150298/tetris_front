import React, { useEffect, useMemo }  from "react";
import "../styles/chat.css"
import useSocket from "../hooks/useSocket";
import useFormInputs from "../hooks/useFormInputs";
import useAppContext from "../store/context";


const Chat = ({ room, messages, sendMessage }) => {
  const { store, actions } = useAppContext();
  const { isUserLogged, userInfo } = store;

// useEffect(() => { 
//   console.log(messages)
// },[messages])

  const { userTextInputs, handleTextChangeInputs} = useFormInputs({
    message: "",});


  const handleKeyDown = (e) => {
    if (!isUserLogged) return
    if(e.key !== "Enter") return
    return handleSubmit()
 
  };

  const handleSubmit = () => {
    if (!userTextInputs.message) {
      return;
    }
    handleTextChangeInputs({target:{name:"message", value:""}})

    sendMessage({"room":room, "data": {
      username: userInfo.user_info.nickname,
      message: userTextInputs.message
  }});
  };

  


  return (

    <div className="container-chat nes-container is-dark">
      <div className="">

        <ul className="text-danger" id="chat-box">
          {messages.map((message, ind) => { 
            return <li key={ind}><strong className="text-primary">{message.username} :</strong> {message.message}</li>;
          })}
        </ul>

        <footer className="d-flex">
          <input disabled={!isUserLogged} className="input-chat-styles" type="text" name="message" value={isUserLogged ? userTextInputs.message : "Inicia sesion para chatear" } onChange={handleTextChangeInputs} onKeyDown={handleKeyDown} />
          <button disabled={!isUserLogged} className="bg-primary" type="button" onKeyDown={handleKeyDown} onClick={handleSubmit} >ENVIAR</button>
        </footer>

      </div>
    </div>
  );
}

export default Chat;