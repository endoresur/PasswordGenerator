import React from "react";

import { Container } from "../../styles/MainStyles";
import LengthSetter from "./LengthSetter";
import OptionsSetter from "./OptionsSetter";

const PasswordCustomizer = () => {

    return (
        <Container m='0' width='100%'>
            <Container>
                <h2>Customize your password</h2>
            </Container>
            <LengthSetter />
            <OptionsSetter />
        </Container>
    );
}

export default PasswordCustomizer;