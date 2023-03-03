import './App.css';
import axios from 'axios'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Category from './pages/Category';
import Task from './pages/Task';
import Navbar from './components/Navbar'

function App() {
  return (
    <div>
      <Navbar />
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          {/* <Route path='/signin' element={} /> */}
          <Route path='/:category' element={<Category />} />
          <Route path='/:category/:task' element={<Task />} />
        </Routes>
        
      </main>
    </div>
  );
}

export default App;
