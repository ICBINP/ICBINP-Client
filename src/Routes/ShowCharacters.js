import React from 'react'
import { Route, Routes, Link, Navigate} from 'react-router-dom'
import { useState, useEffect } from 'react'

function ShowCharacters(props) {
    let user = props.userInfo
    console.log(user.data[0].userName)

    const characters = user.data[0].characters.map((value, index) => {
        console.log(value.class)
        return(
            <div>
                <h1>{value.characterName}</h1>
                <h1>{value.class}</h1>
             </div>
             )
    })

    console.log(characters[0])
    return(
        <div>
        {characters}
        </div>
    )
}

export default ShowCharacters