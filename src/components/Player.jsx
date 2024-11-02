import { useState } from "react"

export default function Player ({name, symbol, isActive, onChangeName}) {

  const [ playerName, setPlayerName ] = useState(name);
  const [ isEditing, setIsEditing ] = useState(false);

  function handelPlayerName (event) {
    setPlayerName(event.target.value);
  }

  function handelEdit() {
    setIsEditing((isEditing) => !isEditing);// for best practice we use (isEditing) => !isEditing
    
    if (isEditing) {
      onChangeName(symbol, playerName);
    }
    
  }

  return (
    <li className={isActive ? 'active' : undefined}>
      <span className="player">

        {isEditing ? 
          <input type='text' required value={playerName} onChange={handelPlayerName}/> 
          : 
          <span className="player-name">{playerName}</span>
        } 
        <span className="player-symbol">{symbol}</span>
      </span>

      {isEditing ? 
        <button onClick={() => handelEdit()}>Save</button> 
        : 
        <button onClick={() => handelEdit()}>Edit</button>
      }
      
    </li>
  )
}