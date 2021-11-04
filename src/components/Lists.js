import React, { useState } from 'react';
import styled from 'styled-components';
import { BsTrash } from 'react-icons/bs';

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

    const removeItem = (index) => {
        props.list.filter(item => item.index !== index)
    }
    

    function listItem () {
        return props.list.map((item, index) =>
    <div>
        <li key={index}><button onClick={() =>removeItem({index})}><BsTrash /></button> {item} </li>
    </div>); 
    }
    
    


    return (
        <ListWrapper>
            <ul style= {{listStyle: "none"}}>{listItem()}</ul>
        </ListWrapper>

    )
}

export default Lists;


// const onRemove = useCallback(
//     (id) => {
//       setTodos(todos.filter((todo) => todo.id !== id));
//     },
//     [todos],
//   );
