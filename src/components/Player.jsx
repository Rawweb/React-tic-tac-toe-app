/* eslint-disable react/prop-types */
import { useState } from "react";

export default function Player({ initialName, symbol }) {
    const [isEditing, setIsEditing] = useState(false);
    const [playerName, setPlayerName] = useState(initialName);

    function handleEditClick() {
        setIsEditing((isEditing) => !isEditing);
    }

    function handleChange(e) {
        setPlayerName(e.target.value);
    }

    function handleKeyDown(e) {
        if (e.key === "Enter") {
            // Toggle editing state when Enter key is pressed
            setIsEditing(!isEditing);
        }
    }

    function handleDeleteClick() {
        // Reset the input data to the initial name
        setPlayerName(initialName);
    }

    let editablePlayerName = <span className="player-name">{playerName}</span>;

    if (isEditing) {
        editablePlayerName = (
            <input
                type="text"
                required
                value={playerName}
                onChange={handleChange}
                onKeyDown={handleKeyDown}
            />
        );
    }

    return (
        <li>
            <span className="player">
                {editablePlayerName}
                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleEditClick}>
                {isEditing ? "Save" : "Edit"}
            </button>
            <button onClick={handleDeleteClick}>😂</button>
        </li>
    );
}
