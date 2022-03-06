import React from "react";
import { useDispatch, useSelector } from "react-redux";

import styled from "styled-components";

const SwitchInputUI = styled.input.attrs({ type: "checkbox" })`
  opacity: 0;
`

const SwitchSliderUI = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(129,3,255, 0.2);
  transition: 0.2s;
  border-radius: 10px;

  &:before {
    content: "";
    position: absolute;
    width: 21px;
    height: 21px;
    left: 1px;
    bottom: 1px;
    background-color: #fff;
    transition: 0.4s;
    border-radius: 50%;
  }
`

const SwitchUI = styled.label`
  position: relative;
  display: inline-block;
  width: 35px;
  height: 22px;
  margin-bottom: 0;
  margin-right: 10px;
  vertical-align: middle;
  ${SwitchInputUI}:checked + ${SwitchSliderUI} {
    background-color: rgba(101,0,255, 0.7);
  }
  ${SwitchInputUI}:checked + ${SwitchSliderUI}:before {
    transform: translateX(13px);
  }
`

const Switch = (props) => {

  const state = useSelector(state => state.variation);

  function checkOfChecked(index) {
    if (state[index].checked) {
      return <SwitchInputUI defaultChecked />
    }
    return <SwitchInputUI />
  }

  return (
    <SwitchUI key={props.setting.checked}>
      {checkOfChecked(props.setting.id - 1)}
      <SwitchSliderUI />
    </SwitchUI>
  );
}

export { Switch };
