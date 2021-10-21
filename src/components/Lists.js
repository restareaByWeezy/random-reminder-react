import React, { useEffect } from 'react';
import styled from 'styled-components';

const ListWrapper = styled.div `
    display: flex;
    box-sizing: border-box;
    width: 300px;
    height: 50%;
    background-color: white;
    margin-top: 10px;
    border: solid 2px gray;
    border-radius: 15px;
    justify-content: center;
    position: relative;
    left: 20%;
`
//props로받아와서 리스트 랜더링

function Lists(props) {
    function listItem () {
        props.list.map((item, index) =>
    <li key={index}>{item}</li>
); 
    }
    
//     let listItem = props.list.map((item, index) =>
//     <li key={index}>{item}</li>
// ); 

    useEffect(()=>{console.log('123')},[props.list]
    )

    return (
        <ListWrapper>
            <ul style= {{listStyle: "none"}}>{listItem}</ul>
        </ListWrapper>

    )
}

export default Lists;
