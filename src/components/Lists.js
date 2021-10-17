import React from 'react';
import styled from 'styled-components';

function Lists() {
    let list= [''];
    if(JSON.parse(localStorage.getItem('listArr'))) {
        list = JSON.parse(localStorage.getItem('listArr'))
        }   
    let listItem = list.map((item) =>
    <li>{item}</li>
);
    return (
        <ul>{listItem}</ul>

    )
}

export default Lists;
