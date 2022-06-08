import { useState } from "react"

const CreateCharacter = () => {
    const [newCharacter, setNewCharacter] = useState({})
    const handleClassClick = () => {
        setNewCharacter({class: ""})
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
                        <button className="dd-list-item" onClick={handleClick}>Orc</button>
                        <button className="dd-list-item">Elf</button>
                        <button className="dd-list-item">Dwarf</button>
                        <button className="dd-list-item">Wizard</button>
                        <button className="dd-list-item">Pineapple</button>
                    </div>
                    <p>Choose your Allignment</p>
                    <div className="Allignment">
                        <button className="dd-list-item">Good</button>
                        <button className="dd-list-item">Neutral</button>
                        <button className="dd-list-item">Evil</button>
                        <button className="dd-list-item">Pineapple</button>
                    </div>
                    <p>Choose your Weapon</p>
                    <div className="Weapon">
                        <button className="dd-list-item">Mace</button>
                        <button className="dd-list-item">Longsword</button>
                        <button className="dd-list-item">Axe</button>
                        <button className="dd-list-item">Longbow</button>
                        <button className="dd-list-item">Pineapple</button>
                    </div>
                </div>
            </form>

        </div>
    )
}

export default CreateCharacter