import './App.css';
import axios from 'axios'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Category from './pages/Category';
import Navbar from './components/Navbar'
import SignIn from './pages/SignIn';
import Register from './pages/Register';
import About from './components/About'
import Task from './pages/Task'
import AddNote from './pages/AddNote'

function App() {

  return (
    <div>
      <Navbar />
      <main>
        <Routes>
          <Route path='/signin' element={<SignIn />} />
          <Route path='/register' element={<Register />} />
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/:category' element={<Category />} />
          <Route path='/task/:taskId' element={<Task />} />
          <Route path='/task/:taskId/addnote' element={<AddNote />} />
        </Routes>

      </main>
    </div>
  );
}

export default App;
