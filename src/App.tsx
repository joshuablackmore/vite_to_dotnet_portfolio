import './App.css'
import Home from '../pages/Home'
import MyMusic from '../pages/MyMusic'
import Engineering from '../pages/Engineering'
import Listening from '../pages/Listening'
import { Routes, Route } from 'react-router-dom'
import Nav from './components/Nav'

function App() {
  return (
    <div className="app-container">
      <header>
        <Nav />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/music/my" element={<MyMusic />} />
          <Route path="/music/listening" element={<Listening />} />
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
