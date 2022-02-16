import React from "react";
import { Input } from "../styles/CardStyles";
import { Container } from "../styles/MainStyles";

const CardMain = () => {
    return (
        <div>
            <Container>
                <div>
                    <Input />
                </div>
            </Container>
            <Container>
                <h2>Customize your password</h2>
            </Container>
        </div>
    );
}

export default CardMain;