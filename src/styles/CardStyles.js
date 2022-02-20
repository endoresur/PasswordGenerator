import styled from "styled-components";

const GlassCard = styled.div`
    height: 80%;
    width: 70%;

    background: rgba(255, 255, 255, 0.5);
    backdrop-filter: blur(10px) saturate(80%);
    border-radius: 15px;
`

const Header = styled.div`
    height: 10%;
    display: flex;
    align-items: center;  
    border-bottom: 1px solid rgba(255, 255, 255, 0.5);
`

const HeaderNav = styled.div`
    height: 100%;
    margin-right: 7%;
`

const Input = styled.input`
    height: ${props => props.height || '70px'};
    //height: 70px;
    width: ${props => props.width || '20%'};
    margin: ${props => props.m || ''};
    font-size: 3em;

    background: rgba(255, 255, 255, 0.4);
    backdrop-filter: blur(10px) saturate(80%);

    border-radius: 10px;
    border: none;
    shadow: none;

    transition: .3s;

    &:hover {
        background: rgba(255, 255, 255, 0.8);
    }
`


export {GlassCard, Header, HeaderNav, Input};