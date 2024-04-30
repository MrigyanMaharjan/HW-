import React from 'react'
import { BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import Home from './pages/Home.jsx'
import Homepage from './pages/Homepage.jsx'
import Add from './pages/Add.jsx'
import Homeworks from './pages/Homeworks.jsx'

const App = () => {
  return (
   <div>
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/home' element={<Homepage/>}></Route>
        <Route path='/homework' element={<Homeworks/>}></Route>
        <Route path='/add' element={<Add/>}></Route>
      </Routes>
    </Router>
   </div>
  )
}

export default App