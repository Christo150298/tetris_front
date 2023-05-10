import React, { useMemo }  from "react";
import "../styles/chat.css"
import useSocket from "../hooks/useSocket";
import useFormInputs from "../hooks/useFormInputs";
import useAppContext from "../store/context";


const Chat = ({ room }) => {
  const { store, actions } = useAppContext();
  const { isUserLogged, userInfo } = store;

  const chat_room = useMemo(() => `chat_${room}`, [room]);

  const { userTextInputs, handleTextChangeInputs} = useFormInputs({
    message: "",});
  const { messages, sendMessage } = useSocket(chat_room); 

  const handleKeyDown = (e) => {
    if (isUserLogged) return
    if(e.key === "Enter") {
      return handleSubmit()
      };
  };

  const handleSubmit = () => {
    if (!userTextInputs.message) {
      return;
    }
    handleTextChangeInputs({target:{name:"message", value:""}})
    //socket.emit("data", userTextInputs.message);
    sendMessage({"room":chat_room, "data": `${userInfo.user_info.nickname} : ${userTextInputs.message}`});
  };


  return (

    <div className="container-chat nes-container is-dark ">
      <div className="input-button-styles">

        <ul className="text-danger" id="chat-box">
          {messages.map((message, ind) => {
            return <li key={ind}>{message}</li>;
          })}
        </ul>

        <footer>
          <input disabled={!isUserLogged} className="input-chat-styles" type="text" name="message" value={isUserLogged ? userTextInputs.message : "Inicia sesion para chatear" } onChange={handleTextChangeInputs} onKeyDown={handleKeyDown} />
          <button disabled={!isUserLogged} className="bg-primary" type="button" onClick={handleSubmit} >ENVIAR</button>
        </footer>

      </div>
    </div>
  );
}

export default Chat;