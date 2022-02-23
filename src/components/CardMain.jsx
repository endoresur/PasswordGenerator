import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

import { Container } from "../styles/MainStyles";
import { actions } from "../data/options";
import { generatePassword } from "./generator/Generator";
import PasswordForm from "./control_elements/PasswordForm";
import PasswordCustomizer from "./control_elements/PasswordCustomizer";

const CardMain = () => {

    const dispatch = useDispatch();
    const state = useSelector(state => state);       

    useEffect(() => {
        let password = generatePassword(state.length);
        dispatch({ type: actions.setPassword, payload: password });

    }, [state.length]);

    console.log(state);

    return (
        <Container m='0' width='100%'>
            <PasswordForm/>
            <PasswordCustomizer/>    
        </Container>
    );
}

export default CardMain;