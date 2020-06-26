import React from "react"
import styled from "styled-components"
import theme from "../_theme"
import taxonomies from "../taxonomies.json"
import selectIcon from "./select-arrow.svg"
import searchIcon from "./search.svg"

const Form = styled.form`
    background: ${theme.white};
    border-radius: 15px;
    padding: 35px;
    box-shadow: 0px 5px 20px ${theme.tagBackground};
    margin-bottom: 35px;
    @media screen and (min-width: 700px){
        display: flex;
        align-items: flex-end;
        margin-bottom: 55px;
    }
`

const Field = styled.div`
    margin-bottom: 20px;
    width: 100%;
    @media screen and (min-width: 700px){
        margin-bottom: 0px;
        margin-right: 20px;
    }
`

const Label = styled.label`
    display: block;
    margin-bottom: 5px;
`

const Input = styled.input`
    background: ${theme.background};
    border: 1px solid ${theme.tagBackground};
    border-radius: 5px;
    font-size: 1.2rem;
    padding: 10px;
    width: 100%;
    max-width: 100%;
    &:focus{
        outline: none;
        box-shadow: 0px 0px 0px 3px ${theme.greenTagBackground};
    }
`

const Select = styled.select`
    appearance: none;
    background: ${theme.background};
    border: 1px solid ${theme.tagBackground};
    border-radius: 5px;
    font-size: 1.2rem;
    padding: 10px;
    width: 100%;
    max-width: 100%;
    padding-right: 60px;
    background-image: url(${selectIcon});
    background-position: center right;
    background-repeat: no-repeat;
    &:focus{
        outline: none;
        box-shadow: 0px 0px 0px 3px ${theme.greenTagBackground};
    }
`

const Button = styled.button`
    background: ${theme.text};
    background: linear-gradient(90deg, ${theme.button1}, ${theme.button2});
    font-weight: bold;
    color: ${theme.white};
    padding: 11px;
    width: 100%;
    border-radius: 10px;
    border: none;
    font-size: 1.2rem;
    cursor: pointer;
    transition: 0.2s ease-out;
    &:before{
        content: "";
        display: inline-block;
        width: 15px;
        height: 15px;
        margin-right: 15px;
        background-image: url(${searchIcon});
        background-size: contain;
        background-repeat: no-repeat;
        transform: translateY(2px)
    }
    &:hover{
        background: linear-gradient(90deg, ${theme.button1Hover}, ${theme.button2Hover});
    }
    &:focus{
        outline: none;
        box-shadow: 0px 0px 0px 3px ${theme.greenTagBackground};
    }
    @media screen and (min-width: 700px){
        max-width: 200px;
    }
`


const SearchBar = ({
    postcode,
    setPostcode,
    category,
    setCategory,
    onSubmit
}) =>
    <Form onSubmit={e => {
        e.preventDefault()
        onSubmit()
    }}>
        <Field>
            <Label htmlFor="category">I'm looking for...</Label>
            <Select name="category" id="category" value={category} onChange={e => setCategory(e.target.value)}>
                {taxonomies.filter(taxon => taxon.value === "categories")[0].children.filter(taxon => taxon.value === "childcare-and-early-years")[0].children.map(option =>
                    <option key={option.value} value={option.value}>{option.label}</option>    
                )}
            </Select>
        </Field>
        <Field>
            <Label htmlFor="postcode">Postcode</Label>
            <Input name="postcode" id="postcode" placeholder="eg. HP20 1UA" value={postcode} onChange={e => setPostcode(e.target.value)} required/>
        </Field>
        <Button>Search</Button>
    </Form>

export default SearchBar