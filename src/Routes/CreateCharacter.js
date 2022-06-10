import { useState } from "react"
import axios from "axios"
import { useNavigate } from 'react-router-dom'

const CreateCharacter = (props) => {
    const [newCharacter, setNewCharacter] = useState({})
    const [newName, setNewName] = useState('')
    const navigate = useNavigate()
    let userId

    console.log(props.user)

    if (props.user._id) 
    {userId = props.user._id
    console.log(userId)}
    


    const handleNameChange = (e) => {
        e.preventDefault()
        let newCopy = {...newCharacter}
        console.log(newCopy)
        setNewName(e.target.value)
        newCopy.characterName = newName
        setNewCharacter(newCopy)
    }
    // console.log(newCharacter.characterName, newName)
    
    const handleClassClick = (e) => {
        e.preventDefault()
        let newCopy = {...newCharacter}
        newCopy.class = e.target.innerText
        setNewCharacter(newCopy)
        console.log(e)
    }

    const handleAlignmentClick = (e) => {
        e.preventDefault()
        let newCopy = {...newCharacter}
        newCopy.alignment = e.target.innerText
        setNewCharacter(newCopy)
    }
    
    const handleWeaponClick = (e) => {
        e.preventDefault()
        let newCopy = {...newCharacter}
        newCopy.weapon = e.target.innerText
        setNewCharacter(newCopy)
    }

    const handleMakeCharacter = (e) => {
        e.preventDefault()
        axios.post(`http://localhost:8080/characters`, {
            newCharacter,
            id: userId
        }).then(res => {
            console.log(res)
            setNewCharacter({})
            navigate('/home')})
    }
    console.log(newCharacter)


    return (
        <div>
            <p>Create</p>

            <form className="characterdd">
                <input type='text' placeholder='Character Name' value={newName} onChange={handleNameChange}/>
                <div className="dd-wrapper">
                    <div className="dd-header">
                     <div className="dd-header-title"></div>
                    </div>
                    <p>Choose your Class</p>
                    <div className="Class">
                        <button className="dd-list-item" onClick={handleClassClick}>Orc</button>
                        <button className="dd-list-item" onClick={handleClassClick}>Elf</button>
                        <button className="dd-list-item" onClick={handleClassClick}>Fighter</button>
                        <button className="dd-list-item" onClick={handleClassClick}>Wizard</button>
                        <button className="dd-list-item" onClick={handleClassClick}>Pineapple</button>
                    </div>
                    <p>Choose your Alignment</p>
                    <div className="Allignment">
                        <button className="dd-list-item" onClick={handleAlignmentClick}>Good</button>
                        <button className="dd-list-item" onClick={handleAlignmentClick}>Neutral</button>
                        <button className="dd-list-item" onClick={handleAlignmentClick}>Evil</button>
                        <button className="dd-list-item" onClick={handleAlignmentClick}>Pineapple</button>
                    </div>
                    <p className='choose-weapon'>Choose your Weapon</p>
                    <div className="Weapon">
                        <button className="dd-list-item" onClick={handleWeaponClick}>Mace</button>
                        <button className="dd-list-item" onClick={handleWeaponClick}>Longsword</button>
                        <button className="dd-list-item" onClick={handleWeaponClick}>Axe</button>
                        <button className="dd-list-item" onClick={handleWeaponClick}>Longbow</button>
                        <button className="dd-list-item" onClick={handleWeaponClick}>Pineapple</button>
                    </div>
                    <button onClick={handleMakeCharacter} >Create Character!</button>
                </div>
            </form>

        </div>
    )
}

export default CreateCharacter