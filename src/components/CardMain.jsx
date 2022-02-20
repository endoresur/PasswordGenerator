import React from "react";
import { Input } from "../styles/CardStyles";
import { Container, FlexContainer, GridContainer } from "../styles/MainStyles";

const choices = [
    { id: 1, item: 'Easy to say' },
    { id: 2, item: 'Easy to read' },
    { id: 3, item: 'All characters' }
];

const settings = [
    { id: 1, item: 'Uppercase' },
    { id: 2, item: 'Lowercase' },
    { id: 3, item: 'Numbers' },
    { id: 3, item: 'Symbols' }
];

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
                <GridContainer rows='1fr 1fr'>

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
                        <GridContainer m='0' width='100%' cols='1fr 1fr'>

                            <GridContainer dir='rows'>
                                {choices.map(function (choice) {
                                    return (
                                        <FlexContainer m='auto' width='100%'>
                                            <Input height='30px' width='30px' type="radio" id="contactChoice1"
                                                name="contact" value="email" />
                                            <label htmlFor="contactChoice1">{choice.item}</label>
                                        </FlexContainer>
                                    );
                                })}
                            </GridContainer>

                            <GridContainer dir='rows'>
                                {settings.map(function(setting) {
                                    return (
                                        <FlexContainer m='auto' width='100%'>
                                            <Input height='30px' width='30px' type="checkbox" id="contactChoice1"
                                                name="contact" value="email" />
                                            <label htmlFor="contactChoice1">{setting.item}</label>
                                        </FlexContainer>
                                    );
                                })}
                            </GridContainer>
                        </GridContainer>
                    </Container>

                </GridContainer>
            </form>
        </>
    );
}

export default CardMain;