import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import Lists from './Lists';

const ListCreateBlock = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 48px;
  padding-left: 32px;
  padding-right: 32px;
  padding-bottom: 24px;
  border-bottom: 1px solid #e9ecef;
`;

function ListCreate() {
    const [text, setText] = useState('');

    const onChange = (e) => {
        setText(e.target.value);
      };
    const handleClick = () => {
        let listArr= [];
        if(JSON.parse(localStorage.getItem('listArr'))) {
            listArr = JSON.parse(localStorage.getItem('listArr'))
        }   
            console.log(listArr);
            listArr.push(text);
            localStorage.setItem('listArr' , JSON.stringify(listArr));
    }
    return (
        <ListCreateBlock>
            <input onChange={onChange} value={text}  />
            <button onClick={handleClick}>ADD</button>
        </ListCreateBlock>
    )
}

export default ListCreate;
