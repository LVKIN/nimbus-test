import React from 'react';
import AddTasks from './components/AddTasks';
import MyTasks from './components/MyTasks';

import * as S from './styled';

const App = () : JSX.Element => (
  <S.AppWrapper className="App">
    <AddTasks />
    <MyTasks />
  </S.AppWrapper>
);

export default App;
