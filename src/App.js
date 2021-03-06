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
  let [currentCharacter, setCurrentCharacter] = useState({})
  const navigate = useNavigate()


  const handleNewChange = (e) => {
    console.log(newUserInfo)
    setNewUserInfo(e.target.value)
  }

  const handleChange = (e) => {
    setUserInfo(e.target.value)
  }

  const handleSubmitNew = (e) => {
    e.preventDefault()
    axios.post('https://desolate-citadel-75864.herokuapp.com/users',
      {
        userName: newUserInfo.toLowerCase()
      })
    .then(res => {
      setNewUserInfo("")
      setUser(res.data)
      console.log(res.data)
  }).then(() => navigate('/home/create'))
}

  const handleSubmitLogin = (e) => {
    e.preventDefault()
    axios.get(`https://desolate-citadel-75864.herokuapp.com/users/${userInfo}`).then(res => {
      setUser(res.data[0])
    }).then(() => {
      setUserInfo('')
      navigate('/home')})
  }

  return (
    <div className="App">
      <Routes>
        <Route path='/'  element={<Login value={[newUserInfo, userInfo]} onClick={[handleSubmitNew, handleSubmitLogin]} onChange={[handleNewChange, handleChange]} />}/>
        <Route path='/home' element={<Home user={user} />} />
        <Route path='/home/create' element={<CreateCharacter setUser={setUser} user={user} />} />
        <Route path='/home/showcharacters' element={<ShowCharacters user={user} currentCharacter={currentCharacter} setCurrentCharacter={setCurrentCharacter} />} />
        <Route path='/home/scenario' element={<Scenario userInfo={user} currentCharacter={currentCharacter} />} />
      </Routes>

      <img src={img} />

    </div>
  );
}

export default App;

/*<div id="footerspacer"></div>
<footer id="footer">
</footer>*/