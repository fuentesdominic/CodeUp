import './App.css';
import axios from 'axios'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Category from './pages/Category';
import Navbar from './components/Navbar'
import SignIn from './pages/SignIn';
import Register from './pages/Register';
import Notes from './components/Notes';
import About from './components/About'
import Task from './pages/Task'

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
          <Route path='/:category/:task/:notes' element={<Notes />} />
          <Route path='/task/:taskId' element={<Task />}/>
        </Routes>

      </main>
    </div>
  );
}

export default App;
