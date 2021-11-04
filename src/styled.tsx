import styled from 'styled-components';
import { rem } from 'polished';

export const AppWrapper = styled.div`
    max-width: ${rem(1300)};
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;