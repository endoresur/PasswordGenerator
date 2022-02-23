import React, { useState } from "react";

import { Variations } from "../../data/options";
import { FlexContainer, GridContainer } from "../../styles/MainStyles";
import { Switch } from "../../styles/SwitchStyle";

const SettingsSetter = () => {

    const [settings, setSettings] = useState(Variations);

    function handleChangeChecked(index) {
        let elements = settings;
        elements[index].checked = !elements[index].checked;
        setSettings(elements);
    }

    return (
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
    );
}

export default SettingsSetter;