import { useState } from "react";

export default function Player({ initialName, symbol, isActive, changeName}) {
    const [currName, setPlayerName] = useState(initialName);
    const [isEditing, setIsEditing] = useState(false);

    function handleClickEdit() {
        setIsEditing(editingState => !editingState);

        if (isEditing) {
            changeName(symbol, currName);
        }
    }

    function handleChangeName(event) {
        setPlayerName(event.target.value);
    }

    let playerName = <span className="player-name">{currName}</span>;
    let buttonTitle = "Edit";

    if (isEditing) {
        playerName = <input type="text" required value={currName} onChange={handleChangeName} />;
        buttonTitle = "Save";
    }

    return (
        <li className={isActive ? 'active' : undefined}>
            <span className="player">{playerName}
                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={() => { handleClickEdit() }}>{buttonTitle}</button>
        </li>
    );


}