import React, { useEffect, useState } from 'react';
import io from "socket.io-client";

import AddTasks from './components/AddTasks';
import MyTasks from './components/MyTasks';

import * as S from './styled';


const App = () : JSX.Element => {
  const [response, setResponse] = useState("");

  useEffect(() => {
    const socket = io('http://localhost:4001');
    socket.on("FromAPI", data => {
      console.log(socket.id);
      setResponse(data);
    });

    socket.on("connect", () => {
      const response = '123';
      socket.emit('FromAPI', response);
    });
  }, []);

  return (
    <S.AppWrapper className="App">
      <AddTasks />
      <MyTasks  />
      {response}
    </S.AppWrapper>
  );
};

export default App;
