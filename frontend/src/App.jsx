import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import SignUpPage from './pages/SignUpPage'
import { Routes, Route, Navigate } from 'react-router-dom'
import { Toaster} from 'react-hot-toast'
import axios from 'axios'

const api = axios.create ({
  baseURL: 'http://localhost:5173/'
})

const App = () => {
  return (
    <div>
      <Toaster/>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/signup" element={<SignUpPage/>}/>
      </Routes>
    </div>
  )
}

export default App