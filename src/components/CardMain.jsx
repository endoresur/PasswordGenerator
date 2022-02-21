import React from "react";
import { Input } from "../styles/CardStyles";
import { Switch } from "../styles/SwitchStyle";
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
    { id: 4, item: 'Symbols' }
];

//    overflow-x: auto;

const CardMain = () => {

    return (
        <Container m='0' width='100%'>
            <Container>
                    <Input width={'100%'} type='text' defaultValue="ygnNHGh" />
            </Container>
            <Container>
                <h2>Customize your password</h2>
            </Container>

                <Container>
                    <Container width='100%' m={'0 0 -3% 0'}>Password length</Container>
                    <FlexContainer dir='colunms' m='0' width='100%'>
                        <Input type="text" width={'15%'} m={'0 3% 0 0'} defaultValue='15' />
                        <Input
                            type="range"
                            min="1"
                            max="30"
                            step="1"
                            defaultValue='15'
                            width={'100%'}
                            m={'3% 0 3% 0'}
                        />
                    </FlexContainer>
                </Container>

                <FlexContainer fs='1.2em'>
                    <GridContainer m='0' width='100%' cols='1fr 1fr'>

                        <GridContainer dir='rows'>
                            {choices.map(function (choice) {
                                return (
                                    <FlexContainer key={choice.id} m='10px 0 10px 0' width='100%'>
                                        <input type='radio' name='choice' checked/>
                                        <label>{choice.item}</label>
                                    </FlexContainer>
                                );
                            })}
                        </GridContainer>

                        <GridContainer dir='rows'>
                            {settings.map(function (setting) {
                                return (
                                    <FlexContainer key={setting.id} m='4px 0 4px 0' width='100%'>
                                        <Switch />
                                        <label>{setting.item}</label>
                                    </FlexContainer>
                                );
                            })}
                        </GridContainer>
                    </GridContainer>
                </FlexContainer>

        </Container>
    );
}

export default CardMain;