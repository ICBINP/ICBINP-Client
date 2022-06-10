import React from 'react'
import { Route, Routes, Link, Navigate, useNavigate} from 'react-router-dom'
import { useState, useEffect } from 'react'
import Login from './Components/Login';
import Home from './Routes/Home';
import CreateCharacter from './Routes/CreateCharacter';
import Scenario from './Routes/Scenario';
import './App.css';
import axios from 'axios';
import ShowCharacters from './Routes/ShowCharacters';
import img from './assets/transparent-pineapple.png';

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
        <Route path='/home/scenario' element={<Scenario userInfo={userInfo} />} />
      </Routes>

      <div id="footerspacer"></div>
      <footer id="footer">
      </footer>

    </div>
  );
}

export default App;
