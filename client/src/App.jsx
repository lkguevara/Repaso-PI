import Home from './Pages/home/home'
import Create from './Pages/create/create'
import Detail from './Pages/detail/detail'
import Landing from './Pages/landing/landing'

// router dom
import {Route, Routes} from 'react-router-dom'
import Navbar from './Components/navbar/navbar'
function App() {

  return (
    <div className="App">
    
      <Routes>
        <Route path="/" element={<Landing />} />  
        <Route path="/home" element={<Home />} />
        <Route path="/create" element={<Create />} />
        <Route path="/:id" element={<Detail />} />
      </Routes>
    </div>
  )
}

export default App
