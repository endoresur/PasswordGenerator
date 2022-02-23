import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { actions } from "../../data/options";
import { Input } from "../../styles/CardStyles";
import { Container } from "../../styles/MainStyles";

const PasswordForm = () => {

    const dispatch = useDispatch();
    const password = useSelector(state => state.password);

    return (
        <Container>
            <Input
                width={'100%'}
                type='text'
                value={password}
                onChange={(event) => {
                    dispatch({
                        type: actions.setPassword, payload: event.target.value
                    })
                }}
            />
        </Container>
    );
}

export default PasswordForm;