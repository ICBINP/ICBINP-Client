import React from 'react'
import { Route, Routes, Link, Navigate} from 'react-router-dom'
import { useState, useEffect } from 'react'

const Home = (props) => {

    console.log(props)

    return (
        <div>
            Home
            <Link to={'/home/showcharacters'}>To characters</Link>
        </div>
    )
}

export default Home