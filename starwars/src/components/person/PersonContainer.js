import React, { useState } from "react";
import styled from "styled-components";
import Person from "./Person";

const PersonContainer = (props) => {
    const [ people, setPeople ] = useState(props.data);
    console.log(people);

    return(
        <Root>
            { people.map((person) => {
                return (<Person data={ person } />);
            })}
        </Root>
    );
}

export default PersonContainer;

const Root = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
`;
