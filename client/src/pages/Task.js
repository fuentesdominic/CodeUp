import Notes from '../components/Notes'
import { useLocation } from 'react-router-dom'

const Task = () => {
  // const { taskId } = useParams()
  const location = useLocation()
  const { lesson } = location.state
  // console.log(lesson)


  return (
    <div className='task'>
      <h1>{lesson.title}</h1>
      <p>{lesson.content}</p>
      <a href={lesson.videoLink}>Video Link</a>
      <p>Category: {lesson.category}</p>
      <p>Notes: <div>
        <Notes taskId={lesson.id} />
      </div>
      </p>
    </div >
  )
}
export default Task