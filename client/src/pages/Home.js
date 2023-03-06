import '../App.css'
import { Link } from 'react-router-dom'
import axios from "axios"

const Home = () => {

  return (
    <div className='homepageicons'>
        <div>
        <h2 className='homepagetext'>HTML</h2>
          <Link to={''}>
            <img className="homepageicons" src="https://cdn-icons-png.flaticon.com/512/732/732212.png" alt=""></img>
          </Link>
        </div>
        <div>
          <h2 className='homepagetext'>Javascript</h2>
          <Link to={''}>
            <img className="homepageicons" src="https://logospng.org/download/javascript/logo-javascript-icon-1024.png" alt=""></img>
          </Link>
        </div>
        <div>
          <h2 className='homepagetext'>CSS</h2>
          <Link to={''}>
            <img className="homepageicons" src="https://cdn-icons-png.flaticon.com/512/732/732190.png" alt=""></img>
          </Link>
        </div>
        <div>
          <h2 className='homepagetext'>React</h2>
          <Link to={''}>
            <img className="homepageicons" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png" alt=""></img>
          </Link>
        </div>
    </div>
  )
}
export default Home