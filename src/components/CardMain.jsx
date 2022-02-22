import React, { useEffect, useState } from "react";
import { Input } from "../styles/CardStyles";
import { Switch } from "../styles/SwitchStyle";
import { Container, FlexContainer, GridContainer } from "../styles/MainStyles";
import { Choices, Variation } from "../data/options";
import {uppercase, lowercase, numbers, symbols} from '../data/letters';

const CardMain = () => {

    const [settings, setSettings] = useState(Variation);
    const [choices, setChoices] = useState(Choices);
    const [length, setLength] = useState(10);
    const [password, setPassword] = useState('');

    useEffect(() => {
        generatePassword();
    }, [length, settings, choices]);

    const generatePassword = () => {
        let alfabet = uppercase.concat(lowercase);
        
        let result = '';
        for(let i = 0; i < length; i++) {
            let char = alfabet[Math.floor(Math.random() * (alfabet.length - 1))]
            result += char;
        }
        setPassword(result);
    }

    function handleChangeChecked(index) {
        let elements = settings;
        elements[index].checked = !elements[index].checked;
        setSettings(elements);
        console.log(settings[index]);
    }

    const handleChangeRange = (event) => {
        let value = event.target.value;
        setLength(value);
        console.log(length);
    }

    return (
        <Container m='0' width='100%'>
            <Container>
                <Input width={'100%'} type='text' defaultValue={password} />
            </Container>
            <Container>
                <h2>Customize your password</h2>
            </Container>

            <Container>
                <Container width='100%' m={'0 0 -3% 0'}>Password length</Container>
                <FlexContainer dir='colunms' m='0' width='100%'>
                    <Input
                        type="text"
                        width={'55px'}
                        m={'0 3% 0 0'}
                        value={length}
                        onChange={handleChangeRange}
                    />
                    <Input
                        type="range"
                        min="1"
                        max="30"
                        step="1"
                        value={length}
                        onChange={handleChangeRange}
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
                                    <input type='radio' name='choice' defaultChecked />
                                    <label>{choice.item}</label>
                                </FlexContainer>
                            );
                        })}
                    </GridContainer>

                    <GridContainer dir='rows'>
                        {settings.map(function (setting, index) {
                            return (
                                <FlexContainer
                                    key={setting.id}
                                    m='4px 0 4px 0'
                                    width='100%'
                                    onChange={() => handleChangeChecked(index)}
                                >
                                    <Switch setting={setting}/>
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