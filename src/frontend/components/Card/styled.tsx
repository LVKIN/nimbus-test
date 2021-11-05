import styled from 'styled-components';
import { rem } from 'polished';

export const CardWrapper = styled.div`
  width: ${rem(350)};
  height: ${rem(150)};
  border-radius: ${rem(12)};
  border: 1px solid #e7e7e7;
  padding: ${rem(15)};
  box-shadow: 0px 3px 6px 0px rgba(0,0,0,0.3);
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between    ;
`;

export const CardClose = styled.button`
    width: ${rem(32)};
    height: ${rem(32)};
    background-color: #E14545;
    position: absolute;
    right: ${rem(15)};
    top: ${rem(15)};
    border-radius: ${rem(8)};
    cursor: pointer;

    &::before {
        content: '';
        background: url(/assets/close-icon.svg) no-repeat;
        width: ${rem(20)};
        height: ${rem(20)};
        background-position: center;
        display: block;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
`;

export const CardTitle = styled.h1`
    font-size: ${rem(20)};
    line-height: ${rem(24)};
    font-family: 'Roboto', sans-serif;
    font-weight: 700;
    max-width: ${rem(260)};
`;

export const CardSchedule = styled.div`
    display: flex;
    margin-top: auto;
    justify-content: space-between;
`;

export const CardScheduleData = styled.p`
    color: #000;
    font-size: ${rem(16)};
`;
