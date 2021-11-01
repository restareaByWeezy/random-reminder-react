import React, { useState } from 'react';
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

const PhraseWrapper = styled.div`
display: flex;
justify-content: space-between;

`

const Phrase = {
    boxSizing: "border-box",
    width: "300px",
    height: "60px",
    margin: "7px",
    marginTop: "10px",
    border: "solid orange 5px",
    borderRadius: "10px",
    backgroundColor: "white",
    fontSize: "50PX"
}

const ButtonStyle= {
    height: "3rem",
    margin: "auto",
    padding: "0.1rem",
    borderRadius: "0.5rem",
    border: "solid 0.1rem",
    fontSize: "0.5rem",
}

function ReminderHead(props) {
    
    //useState
    const [randomItem, setRandomItem] = useState([]);

    // function

    function randomValueFromArray(array) {
        let random = Math.floor(Math.random() * array.length);
        if(array.length > 0) {
        return array[random]; }
      }

    const shuffleItem = () => {setRandomItem(randomValueFromArray(props.list))};

    return ( 
          <ReminderHeadBlock>
              <Title>
                  <h1>Random Reminder</h1>
              </Title>
              <br />
              <PhraseWrapper>
                  <div style={Phrase}>{shuffleItem}</div>
                  <button style={ButtonStyle} onClick={shuffleItem}>SHUFFLE</button>
              </PhraseWrapper>
          </ReminderHeadBlock>
          
      )
}

export default ReminderHead;