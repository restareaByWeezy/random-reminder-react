import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import {parse, stringify, toJSON, fromJSON} from 'flatted';

const ListCreateBlock = styled.div`
  
  padding-top: 48px;
  padding-left: 32px;
  padding-right: 32px;
  padding-bottom: 24px;
  border-bottom: 1px solid #e9ecef;
`;

localStorage.setItem('listArr', JSON.stringify([]));


function ListCreate() {

    const add_contents = useRef();



    const handleClick = () => {
        
        let listArr = [];
        if(JSON.parse(localStorage.getItem('listArr'))) {
 
        listArr = JSON.parse(localStorage.getItem('listArr'));
    
        }   listArr.push(add_contents);
            localStorage.setItem('listArr' , JSON.stringify(listArr));
    }
    
   
    return (
        <ListCreateBlock>
            <input type="text" ref={add_contents}/>
            <button onClick={handleClick}>ADD</button>
        </ListCreateBlock>
    )
}

export default ListCreate;
