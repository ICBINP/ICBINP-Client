import React from 'react'
import { Route, Routes, Link, Navigate, useNavigate} from 'react-router-dom'
import { useState, useEffect } from 'react'
import Login from './Components/Login';
import Home from './Routes/Home';
import ShowCharacters from './Routes/ShowCharacters';
import CreateCharacter from './Routes/CreateCharacter';
import './App.css';
import axios from 'axios';

function App() {
  const [newUserInfo, setNewUserInfo] = useState("")
  const [userInfo, setUserInfo] = useState("")
  const navigate = useNavigate()

  const handleNewChange = (e) => {
    setNewUserInfo(e.target.value)
    console.log(newUserInfo)
  }

  const handleChange = (e) => {
    console.log("hello")
    console.log(userInfo)
    setUserInfo(e.target.value)
  }

  const handleSubmitNew = (e) => {
    e.preventDefault()
    axios.post('http://localhost:8080/users',
      {
        newUserInfo
      })
      .then(res => {
        console.log(res)
      })
    .then(res => {
      setNewUserInfo('')
      setUserInfo(res)
  }).then(() => navigate('/home/create'))
}

  const handleSubmitLogin = (e) => {
    e.preventDefault()
    axios.get(`http://localhost:8080/users/${userInfo}`).then(res => {
      setUserInfo(res)
    }).then(() => navigate('/home'))
  }

  return (
    <div className="App">
      <Routes>
        <Route path='/'  element={<Login value={[newUserInfo, userInfo]} onClick={[handleSubmitNew, handleSubmitLogin]} onChange={[handleNewChange, handleChange]} />}/>
        <Route path='/home' element={<Home user={userInfo} />} />
        <Route path='/home/create' element={<CreateCharacter user={userInfo} />} />
        <Route path='/home/showcharacters' element={<ShowCharacters userInfo={userInfo} />} />
        
      </Routes>

    </div>
  );
}

export default App;
