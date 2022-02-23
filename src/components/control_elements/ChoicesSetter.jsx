import React, { useState } from "react";

import { Choices } from "../../data/options";
import { FlexContainer, GridContainer } from "../../styles/MainStyles";

const ChoicesSetter = () => {

    const [choices, setChoices] = useState(Choices);

    return (
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
    );
}

export default ChoicesSetter;