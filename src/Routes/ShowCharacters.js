import React from 'react'
import { Route, Routes, Link, Navigate} from 'react-router-dom'
import { useState, useEffect } from 'react'

function ShowCharacters(props) {
    let user = props.user
    console.log(user)

    const characters = user.data[0].characters.map((value, index) => {
        console.log(value.class)
        return(
            <div>
                <h1 className='character-display' >{value.characterName}</h1>
                <h2 className= 'character-display' >{value.class}</h2>
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

export default ShowCharacters;