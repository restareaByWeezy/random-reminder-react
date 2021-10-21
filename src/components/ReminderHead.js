import react, { useState, useEffect } from 'react';
import styled from 'styled-components';

const ReminderHeadBlock = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`
const Title = styled.div`
    width: 100%;
    text-align: center;
`

const PhraseStyle = {
    display: "inline-flex",
    justifyContent: "center",
    boxSizing: "border-box",
    width: "300px",
    margin: "7px",
    border: "solid orange 5px",
    borderRadius: "10px",
    backgroundColor: "white",
    fontSize: "50PX",
    
}


function ReminderHead() {
    // useState
    const [randomItem, setRandomItem] = useState([]);
    const [list, setList] = useState([]);

    // function
    function randomValueFromArray(array) {
        let random = Math.floor(Math.random() * array.length);
        if(array.length > 0) {
        return array[random]; }
      }
    
    useEffect (() => {}, [])
    
    // let list = JSON.parse(localStorage.getItem('listArr'));
    // let randomItem = randomValueFromArray(list);
    
    //useEffect

      return ( 
          <ReminderHeadBlock>
              <Title>
                  <h1>Random Reminder</h1>
              </Title>
              <br />
              <div>
                  <span style={PhraseStyle}>{randomItem}</span>
                  <button onClick= {() => {randomValueFromArray(list)}}>shuffle</button>
              </div>
          </ReminderHeadBlock>
          
      )
}

export default ReminderHead;