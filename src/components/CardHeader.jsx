import React from "react";
import { Header, HeaderNav } from "../styles/CardStyles";
import { Container, FlexContainer } from "../styles/MainStyles";

const CardHeader = () => {
    return(
        <Header>
            <FlexContainer>
                <HeaderNav>Generator</HeaderNav>
                <HeaderNav>Likes</HeaderNav>
            </FlexContainer>
        </Header>
    );    
}

export default CardHeader;