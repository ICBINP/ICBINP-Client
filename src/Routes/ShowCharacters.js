import React from 'react'
import { Route, Routes, Link, Navigate} from 'react-router-dom'
import { useState, useEffect } from 'react'

function ShowCharacters(props) {
    let user = props.user
    let currentCharacter = props.currentCharacter
    let setCurrentCharacter = props.setCurrentCharacter
    console.log(user)

    let Character = (index) => {
        setCurrentCharacter(user.characters[index])
        console.log(currentCharacter)
    }

    console.log(currentCharacter)

    let characters

    if (user.characters.length > 0) {
        characters = user.characters.map((value, index) => {

            return(
                <div key={index}>
                    <h1 className='character-display' >{value.characterName}</h1>
                    <h3 className='character-display'>{value.class}</h3>
                    <h3 className= 'character-display' >{value.weapon}</h3>
                    <h3 className='character-display' >{value.alignment}</h3>

                    <button onClick={()=> {Character(index)}}>Want {value.characterName}?</button>

                 </div>
                 )
        })
    } else {
        return (
            <Link to='/home/create'><button><h2>You don't have any characters yet Create some!</h2></button></Link>
        )
    }
    return(
        <div>
        {characters}
        <Link to='/home/scenario'><h2>Adventure!</h2></Link>
        <Link to='/home/create'><button><h4>Make Another Adventurer!</h4></button></Link>
        </div>
    )
}

export default ShowCharacters;