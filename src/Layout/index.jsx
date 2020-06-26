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
    max-width: 1200px;
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
    word-wrap: break-word;
    @media screen and (min-width: 700px){
        max-width: 66.67%;
        font-size: 4.5rem;
    }
`

const Footer = styled.footer`
    margin-top: 50px;
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
    a{
        &:hover{
            text-decoration: none;
        }
        &:focus{
            background: ${theme.greenTagBackground};
            box-shadow: 0px 0px 0px 3px ${theme.greenTagBackground};
        }
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
                    <a href="http://github.com/wearefuturegov/find-a-childminder">Product code</a> available under an MIT license. Data is available under an <a href="https://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/">Open Government license</a>.
                </FooterText>
            </Container>
        </Footer>
    </>

export default Layout

export const ResultsList = styled.ul`
    list-style: none;
    margin-top: 15px;
    @media screen and (min-width: 700px){
        display: grid;
        grid-template-columns: 1fr 1fr;
        column-gap: 35px;
    }
`

export const Welcome = styled.p`
    margin: 100px auto;
    padding: 0px 30px;
    text-align: center;
    font-size: 1.5rem;
    color: ${theme.paleText};
`