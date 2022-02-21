import styled from "styled-components";

const AppContainer = styled.div`
    height: 100vh;
    width: 100%;

    display: flex;
    justify-content: center;
    align-items: center;
`

const Container = styled.div`
    position: relative;
    align-items: center;
    margin: ${props => props.m || '3% auto 3% auto'};
    width: ${props => props.width || '90%'};
    height: ${props => props.height || ''};
    font-size: ${props => props.fs || ''};
`

const FlexContainer = styled(Container)`
    display: flex;
    flex-direction: ${props => props.dir || ''};
`

const GridContainer = styled(Container)`
    display: grid;
    grid-template-columns: ${props => props.cols || ''};
    grid-template-rows: ${props => props.rows || ''}; 
`

export {AppContainer, Container, FlexContainer, GridContainer};