import React, { useState, useRef } from 'react';
import styled from 'styled-components';


const ListCreateBlock = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 48px;
  padding-left: 32px;
  padding-right: 32px;
  padding-bottom: 24px;
  border-bottom: 1px solid #e9ecef;
`;

function ListCreate(props) {
    const [text, setText] = useState('');

    const onChange = (e) => {
        setText(e.target.value);
      };
    const handleClick = () => {
            let array = props.list;
            array.push(text)
            props.setList(array);
            localStorage.setItem('listArr', JSON.stringify(array))
    }
    return (
        <ListCreateBlock>
            <input onChange={onChange} value={text}  />
            <button onClick={handleClick}>ADD</button>
        </ListCreateBlock>
    )
}

export default ListCreate;
