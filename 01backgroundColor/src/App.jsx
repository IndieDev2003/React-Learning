import bgColor from './components/Button'
import './App.css'
import Navbar from "./components/Navbar"
function App() {

  console.log(bgColor)

  return (
    <div style={{backgroundColor:bgColor}}>
      <Navbar/>
    </div>
  )
}

export default App
