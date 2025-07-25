import { Route, Routes } from 'react-router-dom'
import Login from './views/Login'
import Logout from './views/Logout'
import Profile from './views/Profile'

function App() {
//Si hare auth0 y todo la movida, me he decido en definitiva
  return (
    <>
      <Routes>
        <Route path='/login' element={<Login />}/>
        <Route path='/logout' element={<Logout />}/>
        <Route path='/profile' element={<Profile />}/>
      </Routes>
    </>
  )
}

export default App
