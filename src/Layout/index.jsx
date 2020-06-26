import React from "react"
import styled, { createGlobalStyle } from "styled-components"
import theme from "../_theme"

const GlobalStyle = createGlobalStyle`
    *{
        font-family: effra, sans-serif;
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        color: ${theme.text};
        line-height: 1.5;
    }

    body{
        background: ${theme.background};
    }
`

const Container = styled.div`
    max-width: 1000px;
    margin-left: auto;
    margin-right: auto;
    padding: 0px 25px;
`

const Header = styled.header`
    padding-top: 50px;
`

const Masthead = styled.h1`
    font-size: 3rem;
    line-height: 1.1;
    margin-bottom: 25px;
    @media screen and (min-width: 700px){
        max-width: 66.67%;
        font-size: 4.5rem;
    }
`

const Footer = styled.footer`
    padding: 50px 0px;
    background: ${theme.tagBackground};
`

const FooterText = styled.p`
    text-align: center;
    max-width: 500px;
    margin: 0 auto;
    color: ${theme.paleText};
    margin-bottom: 15px;
    &:last-of-type{
        margin-bottom: 0px;
    }
`

const Layout = ({
    children
}) =>
    <>
        <GlobalStyle/>
        <Container>
            <Header>
                <Masthead>Find a childminder in Buckinghamshire</Masthead>
            </Header>
            {children}
        </Container>
        <Footer>
            <Container>
            <FooterText>
                    Built in 2020 using open data from Buckinghamshire Council.
                </FooterText>
                <FooterText>
                    <a href="#">Product code</a> available under an MIT license. Data is available under an <a href="#">Open Government license</a>.
                </FooterText>
            </Container>
        </Footer>
    </>

export default Layout