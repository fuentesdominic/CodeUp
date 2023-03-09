import Notes from '../components/Notes'
import { useLocation, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { GetTasks } from '../services/TaskServices'


const Task = () => {
  const { taskId } = useParams()
  const [task, setTask] = useState([])

  const getTask = async () => {
    try {
      const res = await GetTasks(taskId)
      setTask(res)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    getTask()
  }, [])

  return (
    <div className='task-container'>
      <h3 className='task-category'>Category: {task.category}</h3>
      <div className='task-header'>
        <h1 className='task-title'>{task.title}</h1>
        <a href={task.videoLink} className='task-video-link' target="_blank" rel="noopener noreferrer">Watch Video</a>
      </div>
      <div className='task-content'>
        <p className='task-description'>{task.content}</p>
        <div className='task-notes'>
          <Notes taskId={task.id} />
        </div>
      </div>

    </div>
  )
}

export default Task

