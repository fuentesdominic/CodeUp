import { Link } from 'react-router-dom'

const Nav = ({ authenticated, user, handleLogOut }) => {
  let authenticatedOptions
  if (user) {
    authenticatedOptions = (
      <nav className='nav-bar'>
        <div className='nav-links-container'>
          <Link to="/">
            <div className="nav-logo-wrapper" alt="logo">
              <div className='nav-logo'>
                <img className='nav-logo-icon' src='https://i.imgur.com/wgKkB0A.png' alt='logo'/>  
              </div>
            </div>
          </Link>
          <Link to="/user_profile">User</Link>
          <Link to="/quest_log">Quests</Link>
          <Link to="/journal">Journal</Link>
          <Link to="/achievements">Milestones</Link>
          <Link to="/shop">Shop</Link>
          <Link to="/leaderboard">Leaderboard</Link>
        </div>
        <div className='player-info-container'>
          <h3>hello, {user.username}
            <img className='tiny-logo-icon' src='https://i.imgur.com/SOJ050x.png' alt='logo'/>
          </h3>
          <Link onClick={handleLogOut} to="/">Sign Out</Link>
        </div>
      </nav>
    )
  }

  const publicOptions = (
    <nav className='nav-bar'>
      <div className='nav-links-container'>
        <Link to="/">Home</Link>
        <Link to="/register">Register</Link>
        <Link to="/signin">Sign In</Link>
      </div>
    </nav>
  )


  return (
    <header>
      {authenticated && user ? authenticatedOptions : publicOptions}
    </header>
  )
}

export default Nav