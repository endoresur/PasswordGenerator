import React from "react";

import { FlexContainer, GridContainer } from "../../styles/MainStyles";
import ChoicesSetter from "./ChoicesSetter";
import SettingsSetter from "./SettingsSetter";

const OptionsSetter = () => {

    return (
        <FlexContainer fs='1.2em'>
            <GridContainer m='0' width='100%' cols='1fr 1fr'>
                <ChoicesSetter/>
                <SettingsSetter/>                
            </GridContainer>
        </FlexContainer>
    );
}

export default OptionsSetter;