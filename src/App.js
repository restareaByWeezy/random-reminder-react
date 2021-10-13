import react from 'react';
import ReminderTemplate from './components/ReminderTemplate';
import ReminderHead from './components/ReminderHead';
import ListCreate from './components/ListCreate';
import Lists from './components/Lists';

function App() {
  return (
      <ReminderTemplate>
        <ReminderHead></ReminderHead>
        <ListCreate></ListCreate>
        <Lists></Lists>
      </ReminderTemplate>
  )

}

export default App;
