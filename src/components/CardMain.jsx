import React, { useState } from "react";
import { Input } from "../styles/CardStyles";
import { Container, FlexContainer, GridContainer } from "../styles/MainStyles";


const CardMain = () => {

    return (
        <>
            <Container >
                <div>
                    <Input width={'100%'} type='text' defaultValue="ygnNHGh" />
                </div>
            </Container>

            <form>
                <Container>
                    <h2>Customize your password</h2>
                </Container>
                <GridContainer m='auto' rows='1fr 1fr'>

                    <Container m='0' width='100%'>
                        <Container m='0' width='100%' m={'0 0 -5% 0'}>Password length</Container>
                        <FlexContainer dir='colunms' m='0' width='100%'>
                            <Input type="text" width={'15%'} m={'0 3% 0 0'} defaultValue='15' />
                            <Input
                                type="range"
                                min="1"
                                max="30"
                                step="1"
                                defaultValue='15'
                                m={'0 3% 0 0'}
                                width={'100%'}
                                m={'5% 0 5% 0'}
                            />
                        </FlexContainer>
                    </Container>

                    <Container m='0' width='100%'>                        
                        
                    </Container>

                </GridContainer>
            </form>
        </>
    );
}

export default CardMain;