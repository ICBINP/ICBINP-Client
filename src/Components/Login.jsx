import React from 'react'
import { Route, Routes, Link, Navigate} from 'react-router-dom'
import { useState, useEffect } from 'react'

const Login = (props) => {
    

    return (
        <section>
            <h1>Welcome to Pinepple Kingdom</h1>
                <input type='text' onChange={props.onChange[0]} placeholder='Enter New User Name' value={props.value[0]}/>
                <button type='submit' onClick={props.onClick[0]}>Create New User</button>
                <input type='text' onChange={props.onChange[1]} placeholder='User Name' value={props.value[1]}/>
                <button type='submit' onClick={props.onClick[1]}>Login</button>


        </section>
    )
}

export default Login