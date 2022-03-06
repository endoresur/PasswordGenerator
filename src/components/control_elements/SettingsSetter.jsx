import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { FlexContainer, GridContainer } from "../../styles/MainStyles";
import { Switch } from "../../styles/SwitchStyle";

const SettingsSetter = () => {

    const dispatch = useDispatch();
    const state = useSelector(state => state.variation);

    const [settings, setSettings] = useState(state);
    
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