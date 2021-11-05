import styled from 'styled-components';
import { rem } from 'polished';

export const AddTasksWrapper = styled.section`
    font-family: 'Roboto', sans-serif;
    height: ${rem(675)};
    width: ${rem(425)};
    background-color: #FEFEFE;
    border-radius: ${rem(20)};
    display: block;
    box-shadow: 0px 4px 10px 1px rgba(0,0,0,0.3);
`;

export const AddTasksTitle = styled.div`
    width: 100%;
    height: ${rem(64)};
    background-color: #E14545;
    border-radius: ${rem(20)} ${rem(20)} 0 0;
    align-items: center;
    text-align: center;
    margin-bottom: ${rem(70)};
`;

export const AddTasksTitleContent = styled.h1`
    font-size: ${rem(24)};
    line-height: ${rem(64)};
    font-weight: 600;
    color: #FFF;
`;

export const AddTasksForm = styled.form`
    display: block;
    padding: 0 ${rem(50)};
`;

export const AddTasksName = styled.div`
    display: block;
    width: 100%;
    margin-bottom: ${rem(25)};
`;

export const AddTasksDate = styled.div`
    display: block;
    width: 100%;
    margin-bottom: ${rem(25)};
`;

export const AddTasksHour = styled.div`
    display: block;
    width: 100%;
    margin-bottom: ${rem(50)};
`;

export const AddTasksLabel = styled.label`
    margin-bottom: ${rem(15)};
    display: block;
    font-size: ${rem(20)};
    font-family: 'Roboto', sans-serif;
    color: #000;
`;

export const AddTasksInput = styled.input`
    width: 100%;
    height: ${rem(42)};
    border-radius: ${rem(12)};
    border: 1px solid #BDBDBD;
    padding: ${rem(2)} ${rem(10)};
`;

export const AddTasksSubmitButton = styled.button`
    border-radius: ${rem(12)};
    text-align: center;
    align-items: center;
    height: ${rem(64)};
    display: block;
    margin-inline: auto;
    color: #FFF;
    font-weight: 600;
    font-size: ${rem(24)};
    font-family: 'Roboto', sans-serif;
    width: 100%;
    background-color: #3ECF26;
`;
