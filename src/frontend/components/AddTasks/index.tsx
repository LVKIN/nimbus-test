import React from 'react';
import * as S from './styled';

const AddTasks = (): JSX.Element => {
    return (
        <S.AddTasksWrapper>
            <S.AddTasksTitle>
                <S.AddTasksTitleContent>NOVA TAREFA</S.AddTasksTitleContent>
            </S.AddTasksTitle>

            <S.AddTasksForm>
                <S.AddTasksName>
                    <S.AddTasksLabel htmlFor='nameInput'>Tarefa</S.AddTasksLabel>
                    <S.AddTasksInput
                        type='text'
                        id='nameInput'
                        name='name'
                    />
                </S.AddTasksName>

                <S.AddTasksDate>
                    <S.AddTasksLabel htmlFor='dateInput'>Data</S.AddTasksLabel>
                    <S.AddTasksInput
                        type='date'
                        id='dateInput'
                        name='date'
                    />
                </S.AddTasksDate>

                <S.AddTasksHour>
                    <S.AddTasksLabel htmlFor='timeInput'>Hora</S.AddTasksLabel>
                    <S.AddTasksInput
                        type='time'
                        id='timeInput'
                        name='time'
                    />
                </S.AddTasksHour>

                <S.AddTasksSubmitButton>ADICIONAR</S.AddTasksSubmitButton>
            </S.AddTasksForm>
        </S.AddTasksWrapper>
    )
};

export default AddTasks;
