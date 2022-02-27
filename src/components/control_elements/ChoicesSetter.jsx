import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

import { actions, Choices } from "../../data/options";
import { FlexContainer, GridContainer } from "../../styles/MainStyles";

const ChoicesSetter = () => {

    const [choices, setChoices] = useState(Choices);
    const dispatch = useDispatch();
    const state = useSelector(state => state.choice);

    function handleChange(choice) {
        let arr = choices.map((elem) => {
            elem.checked = false;
            return elem;
        });
        arr[choice.id - 1].checked = true;
        setChoices(arr);
        dispatch({type: actions.setChoice, payload: arr[choice.id - 1]});
    }

    const showInputs = (flag) => {
        if (flag) {
            return(
                <input type='radio' name='choice' defaultChecked readOnly />
            );
        }
        return(<input type='radio' name='choice' readOnly />);
    }

    return (
        <GridContainer dir='rows'>
            {choices.map(function (choice) {
                return (
                    <FlexContainer key={choice.id}
                        m='10px 0 10px 0'
                        width='100%'
                        onClick={() => {
                            handleChange(choice);
                        }}
                    >
                        {showInputs(choice.checked)}
                        <label>{choice.item}</label>
                    </FlexContainer>
                );
            })}
        </GridContainer>
    );
}

export default ChoicesSetter;