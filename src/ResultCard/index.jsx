import React from "react"
import styled from "styled-components"
import theme from "../_theme"
import agesIcon from "./ages.svg"
import distanceIcon from "./distance.svg"

const Outer = styled.li`

    @keyframes fadeIn{
        from{
            opacity: 0;
            transform: translateY(5px)
        }
        to{
            opacity: 1;
            transform: translateY(0px)
        }
    }

    position: relative;
    background: ${theme.white};
    border-radius: 15px;
    padding: 30px;
    box-shadow: 0px 5px 20px ${theme.tagBackground};
    margin-bottom: 25px;
    cursor: pointer;
    transition: 0.2s ease-out;
    animation: fadeIn 0.1s ease-out;
    @media screen and (min-width: 700px){
        margin-bottom: 35px;
        padding: 35px;
        &:nth-of-type(odd):hover{
            transform: scale(1.03) rotate(-1deg);
        }
        &:nth-of-type(even):hover{
            transform: scale(1.03) rotate(1deg);
        }
    }

`
const Link = styled.a`
    text-decoration: none;
    &:after{
        content: "";
        display: block;    
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;

    }
    &:focus{
        outline: none;
        &:before{
            content: "";
            display: block;    
            position: absolute;
            top: 0;
            left: 0;
            width:          100%;
            height: 100%;
            border-radius: 15px;
            box-shadow: 0px 0px 0px 3px ${theme.greenTagBackground}
        }
    }
`

const Name = styled.h2`
    margin-bottom: 5px;
`

const Footer = styled.footer`
    margin: 10px 0px;
    display: flex;
    flex-direction: row;
    align-items: center;
    flex-wrap: wrap;
`

const Distance = styled.span`
    color: ${theme.paleText};
    display: inline-flex;
    flex-direction: row;
    justify-content: center;
    margin: 15px 0px;
    margin-right: 20px;
    &:before{
        content: "";
        display: inline-block;
        height: 25px;
        width: 20px;
        background-image: url(${distanceIcon});
        background-size: contain;
        background-position: center;
        background-repeat: no-repeat;
        margin-right: 10px;
    }
`

const Ages = styled(Distance)`
    &:before{
        background-image: url(${agesIcon});
    }
`

const Tag = styled.span`
    display: inline-block;
    background: ${theme.tagBackground};
    color: ${theme.paleText};
    padding: 4px 10px;
    border-radius: 7px;
`

const GreenTag = styled(Tag)`
    background: ${theme.greenTagBackground};
    color: ${theme.greenTagText};
`

const truncate = (str, noWords) => {
    if(str && (noWords > 1)){
        if(str.split(" ").length > noWords){
            return str.split(" ").splice(0,noWords).join(" ") + "..."
        } else {
            return str
        }
    }
}

export const prettyDistance = miles => {
    if(miles !== undefined){
        let roundMiles = Math.round(miles)
        if(roundMiles < 1 || roundMiles === 0) return "Less than a mile away"
        if(roundMiles === 1) return "About a mile away"
        return `About ${roundMiles} miles away`
    }
}

const ResultCard = ({
    name,
    description,
    url,
    distance_away,
    ages
}) =>
    <Outer>
        <Link href={url}>        
            <Name>{name}</Name>
        </Link>
        <p>{truncate(description, 30)}</p>
        <Footer>
            <Distance>{prettyDistance(distance_away)}</Distance>
            <Ages>0-7 years</Ages>
            <GreenTag>Spaces available</GreenTag>  
            {/* <Tag>No spaces right now</Tag>   */}
        </Footer>
    </Outer>

export default ResultCard