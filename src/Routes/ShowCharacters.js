import React from 'react'
import { Route, Routes, Link, Navigate} from 'react-router-dom'
import { useState, useEffect } from 'react'

function ShowCharacters(props) {
    let user = props.user
    console.log(user)

    let characters
    if (user.data[0].characters.length > 0) {
        characters = user.data[0].characters.map((value, index) => {
            console.log(value.class)
            return(
                <div>
                    <h1 className='character-display' >{value.characterName}</h1>
                    <h2 className= 'character-display' >{value.class}</h2>
                 </div>
                 )
        })
    } else {
        return (
            <h2>You don't have any characters yet Create some and let's go!</h2>
        )
    }

    console.log(characters[0])
    return(
        <div>
        {characters}
        </div>
    )
}

export default ShowCharacters;