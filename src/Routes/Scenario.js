import React from 'react'
import { Route, Routes, Link, Navigate} from 'react-router-dom'
import { useState, useEffect } from 'react'

function Scenario(props) {
    console.log(props)

    let user = props
    

    let [choices, setChoices] = useState("Begin")
    let choice1 = "Attack with " + user.currentCharacter.weapon
    let choice2 = "Hide"
    let Scenario = ""

    if(choices === "Begin") {
        Scenario = "Hello " + user.currentCharacter.characterName + ", you are a " + user.currentCharacter.class + " and your level is 1. As you are walking down a road that has a mysterious amount of pineapple growing from th ground... Suddenly, you see a massive 2 story tall pineapple. What do you do? "
    }


    else if(choices === "Attack with " + user.currentCharacter.weapon) {
        if(user.currentCharacter.weapon) {
        Scenario = "Before it can defend itself, you tear into the giant pineapples guts, wounding it gravely. Suddenly, it performs an unreal jump away from you. You can hear a distant CRASH in the woods"
        choice1 = "Next choice 1"
        } else {
            Scenario = "You run at it with your " + user.currentCharacter.weapon+ " like a maniac. Startled by this tiny mammals random courage, it performs a massive jump away from you. You rethink your life choices as you hear a massive CRASH in the distand woods."
        }
    }

    else if(choices === "Hide") {
        Scenario = "You hide behind the nearest bush. After a minute or two, you hear massive thumping come closer as the outlines of a massive pineapple appears over the push. What do you do?"
        choice1 = "Surprise attack it"
        choice2 = "let it pass"
    }

    else if(choices = "Surprise attack it") {
        if(user.currentCharacter.weapon && choices === "Surprise attack it") {
            Scenario = "Before it had anytime to realize, you were already tearing into it's body. After all the tasty pineapple bits fly out, after you are covered in pineapple juices like some savage beast, you realize that there is nothing but pineapple bits everywhere, enough to make pineapple smoothies for the rest of your life. You feel like a monster"
        } else {
            Scenario = "As you charge at it with your fist like a maniac, you quickly realize your mistake as your fist are now bloody with pineapple spikes. It doesn't even realize you hit it, and moves on"
        }
    }



    
    /*if(choices === "path2") {
        Scenario = "You went down the path2"
        choice2 = "next choice 2"
    }*/

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