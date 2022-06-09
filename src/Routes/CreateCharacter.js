import { useState } from "react"

const CreateCharacter = () => {
    const [newCharacter, setNewCharacter] = useState({})

    const handleClassClick = (e) => {
        setNewCharacter({class: e.target.innerText})
        console.log(e)
    }

    const handleAlignmentClick = (e) => {
        setNewCharacter({alignment: e.target.innerText})
    }

    const handleWeaponClick = (e) => {
        setNewCharacter({weapon: e.target.innerText})
    }

    console.log(newCharacter)
    return (
        <div>
            Create

            <form className="characterdd">
                <input type='text' placeholder='Character Name' />
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
                </div>
            </form>

        </div>
    )
}

export default CreateCharacter