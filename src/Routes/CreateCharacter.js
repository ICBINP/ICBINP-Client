import { useState } from "react"

const CreateCharacter = (props) => {
    const [newCharacter, setNewCharacter] = useState({})
    const [newName, setNewName] = useState('')
    
    const handleNameChange = (e) => {
        let newCopy = {...newCharacter}
        console.log(newCopy)
        setNewName(e.target.value)
        newCopy.characterName = newName
        setNewCharacter(newCopy)
    }
    // console.log(newCharacter.characterName, newName)
    
    const handleClassClick = (e) => {
        let newCopy = {...newCharacter}
        newCopy.class = e.target.innerText
        setNewCharacter(newCopy)
        console.log(e)
    }
    
    const handleAlignmentClick = (e) => {
        let newCopy = {...newCharacter}
        newCopy.alignment = e.target.innerText
        setNewCharacter(newCopy)
    }
    
    const handleWeaponClick = (e) => {
        let newCopy = {...newCharacter}
        newCopy.weapon = e.target.innerText
        setNewCharacter(newCopy)
    }

    // console.log(props.user)
    console.log(newCharacter)


    return (
        <div>
            Create

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
                    <p>Choose your Weapon</p>
                    <div className="Weapon">
                        <button className="dd-list-item" onClick={handleWeaponClick}>Mace</button>
                        <button className="dd-list-item" onClick={handleWeaponClick}>Longsword</button>
                        <button className="dd-list-item" onClick={handleWeaponClick}>Axe</button>
                        <button className="dd-list-item" onClick={handleWeaponClick}>Longbow</button>
                        <button className="dd-list-item" onClick={handleWeaponClick}>Pineapple</button>
                    </div>
                    <button onClick={props.ok} >{}</button>
                </div>
            </form>

        </div>
    )
}

export default CreateCharacter