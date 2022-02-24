import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { actions } from "../../data/options";
import { Input } from "../../styles/CardStyles";
import { Container, FlexContainer, IconContainer } from "../../styles/MainStyles";
import RefreshIcon from "../icon_buttons/RefreshIcon";

const PasswordForm = () => {

    const dispatch = useDispatch();
    const state = useSelector(state => state);

    return (
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

            <IconContainer >
                <FlexContainer m='10px'>
                    <div
                        onClick={() => {
                            dispatch({
                                type: actions.updatePassword, payload: true
                            })
                        }} >
                        <RefreshIcon />
                    </div>
                </FlexContainer>
            </IconContainer>
        </Container>
    );
}

export default PasswordForm;