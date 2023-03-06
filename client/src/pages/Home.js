import { useState, useEffect } from "react"
import { Link } from 'react-router-dom'
import axios from "axios"

const Home = () => {

  const [allCategories, setAllCategories] = useState([])

  const getAllCategories = async () => {
    try {
      let res = await axios.get(`/tasks/`)
      setAllCategories(res.data)
      // console.log(res.data)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    getAllCategories()
  }, [])

  return (
    <div>
      {allCategories.map((category) => (
          <Link to={`/${allCategories.allCategories}`} state={{task:category}}>
            <h2 className="homecategories">{category.category}</h2>
          </Link>
       
      ))}
    </div>
  )
}
export default Home