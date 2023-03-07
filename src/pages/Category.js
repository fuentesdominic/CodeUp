import { useState, useEffect } from "react"
import { Link } from 'react-router-dom'
import axios from "axios"
import { useParams } from "react-router-dom"

const Task = () => {

  const { category } = useParams()
  const [allTasks, setAllTasks] = useState([])

  const getAllTasks = async () => {
    try {
      let res = await axios.get(`/tasks/html`)
      setAllTasks(res.data)
      console.log(res)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    getAllTasks()
  }, [])

  return (
    <div>
      {allTasks.map((task) => (
        <Link to={`/task/${task.id}`}>
          <h2>{task.title}</h2>
        </Link>

      ))}
    </div>
  )
}
export default Task