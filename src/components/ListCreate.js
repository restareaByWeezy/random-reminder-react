import React, { useState } from 'react';
import { MdAddTask } from 'react-icons/md';
import styled from 'styled-components';


const ListCreateBlock = styled.div`
  display: flex;
  width: 300px;
  height: 2rem;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  padding-top: 1rem;
  padding-left: 1rem;
  padding-right: 1rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid #e9ecef;
`;

const ListCreateInputStyle = {
    flex: "1",
    borderRadius: "0.5rem"
}

const addButtonStyle = {
    background: "none",
    outline: "none",
    border: "none",
    borderRadius: "0.5rem",
    background: "#868e96",
    color: "white",
    marginLeft: "0.5rem",
    paddingLeft: "0.5rem",
    paddingRight: "0.5rem",
    fontSize: "1.5rem",
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
    transition: "0.1s background ease-in",
}

function ListCreate(props) {
    //useState
    const [text, setText] = useState('');

    //function
    const onChange = (e) => {
        setText(e.target.value);
      };
    const handleClick = () => {
        //-----------------state값을 건드려버려서오류났음
            let array = [...props.list];
        //------------------
            array.push(text);
            props.setList(array);
            props.setIsInitial(false);
    }


    return (
        <ListCreateBlock>
            <input style= {ListCreateInputStyle} onChange={onChange} value={text}  />
            <button style={addButtonStyle} onClick={handleClick} ><MdAddTask /></button>
        </ListCreateBlock>
    )
}

export default ListCreate;
