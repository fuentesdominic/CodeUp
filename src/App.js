import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { CheckSession } from "./services/Auth";
import Home from "./pages/Home";
import Category from "./pages/Category";
import Navbar from "./components/Navbar";
import SignIn from "./pages/SignIn";
import Register from "./pages/Register";
import Notes from "./components/Notes";
import About from "./components/About";
import Task from "./pages/Task";
import AddNote from './pages/AddNote'

function App() {
  const [authenticated, toggleAuthenticated] = useState(false);
  const [user, setUser] = useState(null);

  //LOGIN & SHOP SERVICES
  const handleLogOut = () => {
    setUser(null);
    toggleAuthenticated(false);
    localStorage.clear();
  };

  const checkToken = async () => {
    const user = await CheckSession();
    setUser(user);
    toggleAuthenticated(true);
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      checkToken();
    }
  }, []);

  return (
    <div>
      <Navbar
        authenticated={authenticated}
        user={user}
        handleLogOut={handleLogOut}
      />
      <main>
        <Routes>
          <Route
            path="/signin"
            element={
              <SignIn
                setUser={setUser}
                user={user}
                authenticated={authenticated}
                toggleAuthenticated={toggleAuthenticated}
              />
            }
          />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/tasks/:category" element={<Category />} />
          <Route path="/:category/:task/:notes" element={<Notes />} />
          <Route path="/task/:taskId/user/:userId/addnote" element={<AddNote />} />
          <Route path="/task/:taskId/user/:userId" element={<Task />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
