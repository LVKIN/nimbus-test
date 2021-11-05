import React from 'react';
import Card from '../Card';

import * as S from './styled';

const MyTasks = (): JSX.Element => {
    return (
        <S.MyTasksWrapper>
            <S.MyTasksTitle>
                <S.MyTasksTitleContent>MINHAS TAREFAS</S.MyTasksTitleContent>
            </S.MyTasksTitle>

            <S.MyTasksContent>
                <Card />
            </S.MyTasksContent>
        </S.MyTasksWrapper>
    )
};

export default MyTasks;
