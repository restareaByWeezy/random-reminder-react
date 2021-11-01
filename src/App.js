import react, { useState, useEffect } from 'react';
import ReminderTemplate from './components/ReminderTemplate';
import ReminderHead from './components/ReminderHead';
import ListCreate from './components/ListCreate';
import Lists from './components/Lists';

function App() {
  //useState
  const [list, setList] = useState([]);
  
  //useEffect
  useEffect (() => {
    if(JSON.parse(localStorage.getItem('listArr'))){
    setList(JSON.parse(localStorage.getItem('listArr')));
  } 
    else {
      setList([]);
  }
} 
, [])

  return (
      <ReminderTemplate>
        <ReminderHead list={list} setList={setList}></ReminderHead>
        <ListCreate list={list} setList={setList}></ListCreate>
        <Lists list={list} setList={setList}></Lists>
      </ReminderTemplate>
  )

}

export default App;

//app에서 setList만들어서 props로 넘기기