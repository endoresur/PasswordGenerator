import styled from "styled-components";

const AppContainer = styled.div`
    height: 100vh;
    width: 100%;

    display: flex;
    justify-content: center;
    align-items: center;
`

const Container = styled.div`
    padding-right: 5%;
    padding-left: 5%;    
`

const FlexContainer = styled(Container)`
    display: flex;
    flex-direction: row;
`

const GridContainer = styled(Container)`

`

export {AppContainer, Container, FlexContainer, GridContainer};