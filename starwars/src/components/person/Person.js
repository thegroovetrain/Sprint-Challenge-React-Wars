import React, { useState, useEffect } from "react";
import styled from 'styled-components';

const Person = (props) => {
    const [ data, setData ] = useState(props.data);
    console.log(data);
    
    return(
        <Root>
            <H2>{ data.name }</H2>
            <P><Label>Height: </Label>{ data.height }</P>
            <P><Label>Mass: </Label>{ data.mass }</P>
            <P><Label>Hair Color: </Label>{ data.hair_color }</P>
            <P><Label>Skin Color: </Label>{ data.skin_color }</P>
            <P><Label>Eye Color: </Label>{ data.eye_color }</P>
            <P><Label>Birth Year: </Label>{ data.birth_year }</P>
            <P><Label>Gender: </Label>{ data.gender }</P>
        </Root>
    );
}

export default Person;

const Root = styled.div`
    width: 15rem;
    margin-bottom: 2rem;
    padding: 1rem;
    background-color: #8f8f8fAA;
    color: #f8f8f8;
    border-radius: 1em 0 1em 0;
    `;

const H2 = styled.h2`
    font-size: 1.2rem;
    `;

const P = styled.p`
    font-size:0.9rem;
    `;

const Label = styled.span`
    font-weight:bold;
    `;