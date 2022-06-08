import React from 'react'
import { Route, Routes, Link, Navigate} from 'react-router-dom'
import { useState, useEffect } from 'react'

function ShowCharacters(props) {
    let user = props.userInfo
    console.log(user.data[0].userName)

    const characters = user.data[0].characters.map((value, index) => {
        console.log(value.class)
        return(
             value.characterName,
              value.class
             )
    })

    console.log(characters[0])
    return(
        <div>
        {characters.map((item) => {
            <h1>{item}</h1>
        })}
        </div>
    )
}

export default ShowCharacters