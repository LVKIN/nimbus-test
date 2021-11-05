import styled from 'styled-components';
import { rem } from 'polished';

export const MyTasksWrapper = styled.section`
    width: ${rem(760)};
    font-family: 'Roboto', sans-serif;
    box-shadow: 0px 4px 10px 1px rgba(0,0,0,0.3);
    background-color: #FEFEFE;
    max-height: ${rem(675)};
    display: block;
    overflow: hidden;
    border-radius: ${rem(20)};
`;

export const MyTasksTitle = styled.div`
    width: 100%;
    height: ${rem(64)};
    background-color: #E14545;
    border-radius: ${rem(20)} ${rem(20)} 0 0;
    align-items: center;
    text-align: center;
`;

export const MyTasksTitleContent = styled.h1`
    font-size: ${rem(24)};
    line-height: ${rem(64)};
    font-weight: 600;
    color: #FFF;
`;

export const MyTasksContent = styled.div`
    padding: ${rem(22)};
    padding-bottom: ${rem(64)};
    overflow-y: auto;
    overflow-x: clip;
    display: grid;
    max-height: inherit;
    grid-template-columns: 1fr 1fr;
    gap: ${rem(22)} ${rem(14)};
`;

export const MyTasksInput = styled.input`
`;

export const MyTasksSubmitButton = styled.button`
`;
