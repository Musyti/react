import Header from "./components/Header"
import ProfileCard from "./components/ProfileCard"
import './App.css'

function App() {
  return (
    <>
    <div className='app'>
      <Header />
      <main>
        <ProfileCard author="Вольтер Вейт" tag = "@grrrMondays"/>
      </main>
    </div>
    </>
  )
}

export default App
