
import { Route, Routes } from 'react-router-dom'
import './App.css'
import SuperHeroDashboard from './assets/pages/SuperHeroDashboard'
import Login from './assets/pages/Login'



function App() {
 

  return (
    <>
    <Routes>
      <Route path='/' element={<Login/>}></Route>
      <Route path='/superherodash' element={<SuperHeroDashboard/>}></Route>
    </Routes>
    </>
  )
}

export default App
