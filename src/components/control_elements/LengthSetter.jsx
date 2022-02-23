import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { actions } from "../../data/options";
import { Input } from "../../styles/CardStyles";
import { Container, FlexContainer } from "../../styles/MainStyles";

const LengthSetter = () => {

    const dispatch = useDispatch();
    const length = useSelector(state => state.length);

    const handleChangeRange = (event) => {        
        dispatch({ type: actions.setLength, payload: event.target.value });
    }

    return (
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
    );
}

export default LengthSetter;