import React from 'react'
import { Route, Routes, Link, Navigate} from 'react-router-dom'
import { useState, useEffect } from 'react'

function Scenario(props) {

    let user = props.userInfo.data[0]
    

    let [choices, setChoices] = useState("Begin")
    let choice1 = "path1"
    let choice2 = "path2"
    let Scenario = ""

    if(choices === "Begin") {
        Scenario = "Hello " + user.characters[1].characterName + ", this is the beginning. there are 2 paths, What would you like to do?"
    } else if(choices === "path1") {
        Scenario = "You went down the path1"
        choice1 = "Next choice 1"
    } else if(choices === "path2") {
        Scenario = "You went down the path2"
        choice2 = "next choice 2"
    } 

    let option1 = (event) => {
        setChoices(choice1)
    }

    let option2 = (event) => {
        setChoices(choice2)
    }



    return (
        <div>
            <h1>{Scenario}</h1>
            <button onClick={option1}>{choice1}</button>
            <button onClick={option2}>{choice2}</button>
        </div>
    )
}

export default Scenario