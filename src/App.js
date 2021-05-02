import {useState} from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'


function App() {
  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: 'aaaaaaaaaaaaaa',
        day: 'aaaaaaaaaaaaaaaaa',
        reminder: true,
    },
    {
       id: 2,
       text: 'bbbbbbbbbbbbbbbb',
       day: 'bbbbbbbbbbbbbbbbbb',
       reminder: true,
   },
   {
       id: 3,
       text: 'ccccccccccccccc',
       day: 'ccccccccccccccc',
       reminder: false,
   }
])
  return (
    <div className="container">
      <Header/>
      <Tasks tasks={tasks} />
    </div>
  );
}

export default App;
