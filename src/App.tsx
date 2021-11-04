import React from 'react';
import AddTasks from './components/AddTasks';

import * as S from './styled';

const App = () : JSX.Element => (
  <S.AppWrapper className="App">
    <AddTasks />
  </S.AppWrapper>
);

export default App;
