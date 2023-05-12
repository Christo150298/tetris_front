import { useState, useEffect } from 'react';
import io from 'socket.io-client';


const useSocket = (room) => {
  const [socket, setSocket] = useState(null);
  const [messages, setMessages] = useState([]);
  const [ remoteStages , setRemoteStages ] = useState({})

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

    const handleStage = (data) => {
      //console.log("stage recibido", data)
      setRemoteStages((prevStages) => {
        return { ...prevStages, [data.stage.username]: data.stage.stage}
      });
    }
 
    socket.on('data', handleMessage);
    socket.on('stage', handleStage)
    return () => {
      socket.off('data',  () => {
        socket.emit('leave', {room});
      });
    };
  }, [socket]);

  const sendStage = (message) => {
    if (!socket) return; 
    socket.emit('data', message);
  }

  const sendMessage = (message) => {
    if (!socket) return; 
    //console.log(message)
    socket.emit('data', message);
  };

  useEffect(()=> {
    console.log(remoteStages)
  }, [remoteStages])
  return { socket, messages, sendMessage,sendStage, remoteStages  };
};

export default useSocket;