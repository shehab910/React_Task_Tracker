import {useState} from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'


const App = () => {
  const [showAddTask, setShowAddTask] = useState(false)
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

  //Add Task
  const addTask = (task) => {
    const id = Math.floor(Math.random() *10000+1)
     const newTask = {id, ...task}
     setTasks([...tasks, newTask])
  }

  //delete task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  //set reminder
  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => task.id === id ? {...task,reminder: !task.reminder} : task))
  }


  return (
    <div className="container">
      <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask}/>
      {showAddTask && <AddTask  onAdd={addTask}/>} {/* //* && is shorter way for (...) ? ... : (do nothing) */ }
      {
        tasks.length > 0 ?
        (<Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />)
        :
        ('No Tasks to show')
      }
    </div>
  );
}

export default App;
