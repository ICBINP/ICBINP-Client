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
<<<<<<< HEAD
        <Route path='/home' element={<Home user={userInfo} />} />
        <Route path='/home/create' element={<CreateCharacter user={userInfo} />} />
        <Route path='/home/showcharacters' element={<ShowCharacters userInfo={userInfo} />} />
        <Route path='/home/scenario' element={<Scenario userInfo={userInfo} />} />
=======
        <Route path='/home' element={<Home user={user} />} />
        <Route path='/home/create' element={<CreateCharacter user={user} characters={setUser} />} />
        <Route path='/home/showcharacters' element={<ShowCharacters user={user} />} />
>>>>>>> 29a4339fbf33a6e7c251c063ed274e8cd81df1bf
      </Routes>

      <div id="footerspacer"></div>
      <footer id="footer">
      </footer>

    </div>
  );
}

export default App;
