import './App.css'
import Home from '../pages/Home'
import MyMusic from '../pages/MyMusic'
import Engineering from '../pages/Engineering'
import { Routes, Route, Link } from 'react-router-dom'

function App() {
  return (
    <div className="app-container">
      <header>
        <Link to="/">Home</Link>
        <Link to="/mymusic">My Music</Link>
        <Link to="/engineering">Engineering</Link>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mymusic" element={<MyMusic />} />
          <Route path='/engineering' element={<Engineering />} />
        </Routes>
      </main>
      <footer>
        <p>&copy; {new Date().getFullYear()} Portfolio. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App
