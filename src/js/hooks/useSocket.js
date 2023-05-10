import { useState, useEffect } from 'react';
import io from 'socket.io-client';

const useSocket = (room) => {
  const [socket, setSocket] = useState(null);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    if (!room) return;

    const socketInfo = io(process.env.REACT_APP_BACKEND_URL);
    
    socketInfo.on("connect", () => {
      socketInfo.emit('join', room);
    });

    setSocket(socketInfo);
    return () => socketInfo.close();
  }, [room]);

  useEffect(() => {
    if (!socket) return;

    const handleMessage = (message) => {
      setMessages((prevMessages) => [...prevMessages, message.data]);
    };
 
    socket.on('data', handleMessage);

    return () => {
      socket.off('data', handleMessage);
    };
  }, [socket]);

  const sendMessage = (message) => {
    console.log("mensaje a enviar", message);
    console.log("Mensajes en el hook", messages);
    if (!socket) return; 
    socket.emit('data', message);
  };

  return { socket, messages, sendMessage };
};

export default useSocket;