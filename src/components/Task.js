import {FaTimes} from 'react-icons/fa'

const Task = ({task}) => {
    return (
        <div className='task' style={{cursor: 'default'}}>
            <h3>
                {task.text} <FaTimes style={
                {color: 'red', cursor: 'pointer'}} />
            </h3>
            <p>{task.daynpm }</p>
        </div>
    )
}

export default Task
