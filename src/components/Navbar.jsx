import { Link } from 'react-router-dom';


const Nav = ({ user, handleLogOut }) => {
  let userOptions;
  if (user) {
    userOptions = (
      <nav className="nav-links">
        <Link className="nav-link" to="/">
          Home
        </Link>
        <Link className="nav-link" to="/about">
          About
        </Link>
        <Link className="nav-link" onClick={handleLogOut} to="/signin">
          Sign Out
        </Link>
      </nav>
    );
  }

  const publicOptions = (
    <nav className="nav-links">
      <Link className="nav-link" to="/register">
        Register
      </Link>
      <Link className="nav-link" to="/signin">
        Sign In
      </Link>
      <Link className="nav-link" to="/about">
        About
      </Link>
    </nav>
  );

  return (
    <header>
      <Link to="/">
        <div className="logo-wrapper" alt="logo"></div>
      </Link>
      <div className="welcome-message-container">
        {user && <h3 className="welcome-message">Welcome {user.name}!</h3>}
      </div>
      <div className="nav-container">
        {user ? userOptions : publicOptions}
      </div>
    </header>
  );
};

export default Nav;
