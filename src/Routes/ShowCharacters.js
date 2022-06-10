import React from 'react'
import { Route, Routes, Link, Navigate} from 'react-router-dom'
import { useState, useEffect } from 'react'

function ShowCharacters(props) {
    let user = props.user
    console.log(user)

    let characters
    if (user.characters.length > 0) {
        characters = user.characters.map((value, index) => {
            console.log(value.class)
            return(
                <div key={index}>
                    <h1 className='character-display' >{value.characterName}</h1>
                    <h2 className= 'character-display' >{value.class}</h2>
                    
                 </div>
                 )
        })
    } else {
        return (
            <Link to='/home/create'><button><h2>You don't have any characters yet Create some!</h2></button></Link>
        )
    }

    console.log(characters[0])
    return(
        <div>
        {characters}
        <Link to='/home/scenario'><h2>Adventure!</h2></Link>
        <Link to='/home/create'><button><h4>Make Another Adventurer!</h4></button></Link>
        </div>
    )
}

export default ShowCharacters;