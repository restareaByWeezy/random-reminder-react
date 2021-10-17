import react from 'react';
import styled from 'styled-components';
import Lists from './Lists';

const ReminderHeadBlock = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`
const Title = styled.div`
    width: 100%;
    text-align: center;
`



function ReminderHead() {
    function randomValueFromArray(array) {
        let random = Math.floor(Math.random() * array.length);
        return array[random];
      }
    
    let list = JSON.parse(localStorage.getItem('listArr'))
    if(list == null){
        const randomItem = ['리스트를 작성해주세요'];
    } else 
    {
        let randomItem = randomValueFromArray(list);
}


      return (
          <ReminderHeadBlock>
              <Title>
                  <h1>Random Reminder</h1>
              </Title>
              <br />
              <div>
                  <span className='phrase'>{randomItem}</span>
                  <button onClick={randomValueFromArray(list)}>shuffle</button>
              </div>
          </ReminderHeadBlock>
          
      )
}

export default ReminderHead;