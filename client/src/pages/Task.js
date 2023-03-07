import Notes from '../components/Notes'
import { useParams, useLocation } from 'react-router-dom'

const Task = () => {
  const { taskId } = useParams()
  const location = useLocation()
  const { lesson } = location.state
  // console.log(lesson)


  return (
    <div className='task'>
      <h1>{lesson.title}</h1>
      <p>{lesson.content}</p>
      <a href={lesson.videoLink}></a>
      <p>Category: {lesson.category}</p>
      <p>Notes: <Notes taskId={lesson.id} /></p>
    </div>
  )
}
export default Task