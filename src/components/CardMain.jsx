import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

import { Input } from "../styles/CardStyles";
import { Switch } from "../styles/SwitchStyle";
import { Container, FlexContainer, GridContainer } from "../styles/MainStyles";
import { actions, Choices, Variations } from "../data/options";
import { generatePassword } from "./generator/Generator";

const CardMain = () => {

    const dispatch = useDispatch();
    const state = useSelector(state => state);

    const [settings, setSettings] = useState(Variations);
    const [choices, setChoices] = useState(Choices);

    function handleChangeChecked(index) {
        let elements = settings;
        elements[index].checked = !elements[index].checked;
        setSettings(elements);
    }

    const handleChangeRange = (event) => {
        let value = event.target.value;
        if (value > 30) value = 30;
        dispatch({ type: actions.setLength, payload: value });
    }

    useEffect(() => {
        let password = generatePassword(state.length);
        dispatch({ type: actions.setPassword, payload: password });

    }, [state.length]);

    console.log(state);

    return (
        <Container m='0' width='100%'>
            <Container>

                <Input
                    width={'100%'}
                    type='text'
                    value={state.password}
                    onChange={(event) => {
                        dispatch({
                            type: actions.setPassword, payload: event.target.value
                        })
                    }}
                />
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
                        value={state.length}
                        onChange={handleChangeRange}
                    />
                    <Input
                        type="range"
                        min="1"
                        max="30"
                        step="1"
                        value={state.length}
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
                                    <Switch setting={setting} />
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