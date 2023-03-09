import { useState } from 'react'
import { SignInUser } from '../services/Auth'
import { useNavigate } from 'react-router-dom'

const SignIn = (props) => {
  let navigate = useNavigate()

  const [formValues, setFormValues] = useState({ email: '', password: '' })

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const payload = await SignInUser(formValues)
    setFormValues({ email: '', password: ''})
    props.setUser(payload)
    props.toggleAuthenticated(true)
    navigate('/')
  }

  const videoUrl = "https://i.imgur.com/Jq3AemP.mp4";

  return (
    <div className="signin col">
      <video className="fullscreen-video" autoPlay loop muted>
        <source src={videoUrl} type="video/mp4" />
      </video>
      <div className="card-overlay centered">
        <form className="col" onSubmit={handleSubmit}>
          <h3> SIGN IN </h3>
          <div className="input-wrapper">
            <label htmlFor="email">Email</label>
            <input
              onChange={handleChange}
              name="email"
              type="email"
              placeholder="example@example.com"
              value={formValues.email}
              required
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input
              onChange={handleChange}
              type="password"
              name="password"
              value={formValues.password}
              required
            />
          </div>
          <button disabled={!formValues.email || !formValues.password}>
            Sign In
          </button>
        </form>
      </div>
    </div>
  )
}

export default SignIn

