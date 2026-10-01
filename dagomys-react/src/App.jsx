import {Routes, Route} from "react-router-dom"

import Header from "./components/Header"
import Profile from "./pages/Profile"
import Home from "./pages/Home"
import Settings from "./pages/Settings"
import './App.css'

function App() {
  return (
    <>
    <div className='app'>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </main>
    </div>
    </>
  )
}

export default App
