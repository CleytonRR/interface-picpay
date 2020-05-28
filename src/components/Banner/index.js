import React from 'react';

import { Container, Detail, Img, Title, Description } from "./styles";

import img13 from '../../images/13.png';

export default function Banner() {
    return (
        <Container>
            <Detail>
                <Title>Cobre um amigo</Title>

                <Description>
                    Mantenha suas parcerias em dia, use o PicPay para fazer suas cobranças.
                </Description>
            </Detail>
            <Img source={img13} />
        </Container>
    );
}