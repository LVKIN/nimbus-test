import React, { useState } from 'react';
import * as S from './styled';

const Card = (): JSX.Element => {
    const [isClosed, setIsClosed] = useState(false);

    return (
        <>
            {!isClosed && (
                <S.CardWrapper>
                    <S.CardTitle>Enviar teste técnico de agendamento para a Nimbus</S.CardTitle>
                    <S.CardClose onClick={() => setIsClosed(true)}/>

                    <S.CardSchedule>
                        <S.CardScheduleData>04/11/2021</S.CardScheduleData>
                        <S.CardScheduleData>09:00</S.CardScheduleData>
                    </S.CardSchedule>
                </S.CardWrapper>
            )}
        </>
    );
};

export default Card;