import React from 'react'
import { Route, Routes, Link, Navigate, useNavigate} from 'react-router-dom'
import { useState, useEffect } from 'react'
import Login from './Components/Login';
import Home from './Routes/Home';
import CreateCharacter from './Routes/CreateCharacter';
import './App.css';
import axios from 'axios';
import ShowCharacters from './Routes/ShowCharacters';

function App() {
  const [newUserInfo, setNewUserInfo] = useState('')
  const [userInfo, setUserInfo] = useState('')
  const [user, setUser] = useState()
  const navigate = useNavigate()


  const handleNewChange = (e) => {
    setNewUserInfo(e.target.value)
  }

  const handleChange = (e) => {
    setUserInfo(e.target.value)
  }

  const handleSubmitNew = (e) => {
    e.preventDefault()
    axios.post('http://localhost:8080/users',
      {
        userName: newUserInfo
      })
    .then(res => {
      setNewUserInfo("")
      setUser(res.data)
      console.log(res.data)
  }).then(() => navigate('/home/create'))
}

  const handleSubmitLogin = (e) => {
    e.preventDefault()
    axios.get(`http://localhost:8080/users/${userInfo}`).then(res => {
      setUser(res)
    }).then(() => navigate('/home'))
  }

  return (
    <div className="App">
      <Routes>
        <Route path='/'  element={<Login value={[newUserInfo, userInfo]} onClick={[handleSubmitNew, handleSubmitLogin]} onChange={[handleNewChange, handleChange]} />}/>
        <Route path='/home' element={<Home user={user} />} />
        <Route path='/home/create' element={<CreateCharacter user={user} />} />
        <Route path='/home/showcharacters' element={<ShowCharacters user={user} />} />
      </Routes>

      <footer id="footer">
        <img src="./assets/transparent-pineapple.png" alt="Pineapples Overlay" width="500" height="600"></img>
      </footer>

    </div>
  );
}

export default App;
